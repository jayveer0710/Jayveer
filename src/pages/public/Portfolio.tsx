import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Projects from '../../components/Projects';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;