import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Hero from '@/components/Hero.jsx';
import Capabilities from '@/components/Capabilities.jsx';
import HowForgeWorks from '@/components/HowForgeWorks.jsx';
import SystemsInPractice from '@/components/SystemsInPractice.jsx';
import EngagementModel from '@/components/EngagementModel.jsx';
import Footer from '@/components/Footer.jsx';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Forge - Bespoke Operational Software for Growth Teams</title>
        <meta 
          name="description" 
          content="Forge is a product engineering arm building custom operational software, CRM-integrated applications, and internal infrastructure for growth teams." 
        />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Capabilities />
        <HowForgeWorks />
        <SystemsInPractice />
        <EngagementModel />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;