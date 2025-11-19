
import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 md:px-8 lg:px-16">
        <Hero />
        <Projects />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
