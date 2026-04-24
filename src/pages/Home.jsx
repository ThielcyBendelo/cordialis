import React from 'react';
import NavbarSecured from '../components/NavbarSecured';
import Hero from '../components/Hero';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

// Importez ExpertiseSection si vous l'utilisez, sinon commentez la ligne 13
// import ExpertiseSection from '../components/ExpertiseSection';

export default function Home() {
  return (
    <>
      <NavbarSecured />
      <main>
        <Hero />
        {/* <ExpertiseSection /> */}
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
