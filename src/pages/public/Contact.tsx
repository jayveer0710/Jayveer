import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;