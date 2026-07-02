import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Hero from '@/components/Hero.jsx';
import Capabilities from '@/components/Capabilities.jsx';
import HowForgeWorks from '@/components/HowForgeWorks.jsx';
import SystemsInPractice from '@/components/SystemsInPractice.jsx';
import SandboxIP from '@/components/SandboxIP.jsx';
import EngagementModel from '@/components/EngagementModel.jsx';
import Footer from '@/components/Footer.jsx';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Forge by Sandbox — Bespoke Operational Software for Growth Teams</title>
        <meta
          name="description"
          content="Forge builds production-ready custom software for growth teams: AI intelligence platforms, event GTM systems, proposal automation, and CRM extensions. The product engine behind Forge Intelligence, SYSOI, Sandbox-GTM, and Pitch Box. You own the code, data, and infrastructure."
        />
        <link rel="canonical" href="https://forge-bysandbox.tech/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forge-bysandbox.tech/" />
        <meta property="og:title" content="Forge by Sandbox — Bespoke Operational Software for Growth Teams" />
        <meta property="og:description" content="Production-ready intelligence platforms, event GTM systems, and workflow automation — the disciplines behind the Sandbox platform portfolio. Delivered with full ownership." />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Forge by Sandbox — Bespoke Operational Software for Growth Teams" />
        <meta name="twitter:description" content="Production-ready intelligence platforms, event GTM systems, and workflow automation — the disciplines behind the Sandbox platform portfolio. Delivered with full ownership." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Capabilities />
        <HowForgeWorks />
        <SystemsInPractice />
        <SandboxIP />
        <EngagementModel />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
