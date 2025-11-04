import React, { useEffect, useState } from 'react';

interface Props {
  src: string; // lottie json url
  duration?: number; // visible duration in ms
  onClose?: () => void;
  visible: boolean;
}

const LottiePopup: React.FC<Props> = ({ src, duration = 5000, onClose, visible }) => {
  const [show, setShow] = useState(visible);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    let hideTimer: number | undefined;
    let fadeTimer: number | undefined;

    if (visible) {
      setShow(true);
      setIsFading(false);

      // After `duration`, start fading out
      fadeTimer = window.setTimeout(() => {
        setIsFading(true);
      }, duration);

      // Actually close shortly after fade starts (give 300ms for fade)
      hideTimer = window.setTimeout(() => {
        setShow(false);
        if (onClose) onClose();
      }, duration + 300);
    } else {
      // if parent toggles visible off, hide immediately with fade
      setIsFading(true);
      window.setTimeout(() => setShow(false), 300);
    }

    return () => {
      if (hideTimer) clearTimeout(hideTimer);
      if (fadeTimer) clearTimeout(fadeTimer);
    };
  }, [visible, duration, onClose]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}
      style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
      aria-hidden={!visible}
    >
      <div className="max-w-md w-full p-6">
        <div className="bg-transparent rounded-lg flex flex-col items-center justify-center">
          {/* lottie-player web component (loaded via index.html).
              Use React.createElement so TypeScript doesn't require a JSX IntrinsicElements declaration. */}
          {React.createElement('lottie-player', {
            src,
            background: 'transparent',
            speed: '1',
            style: { width: '320px', height: '320px' },
            autoplay: true
          })}

          <div className="mt-4 text-center text-white">
            <h3 className="text-xl font-semibold">Message Sent</h3>
            <p className="text-sm opacity-90 mt-2">Thanks for reaching out — we'll get back to you soon.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LottiePopup;
