import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import LeadFormModal from '@/components/LeadFormModal.jsx';

const ServicesPage = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const handleOpenLeadModal = useCallback(() => {
    setIsLeadModalOpen(true);
  }, []);

  const handleCloseLeadModal = useCallback(() => {
    setIsLeadModalOpen(false);
  }, []);

  const services = [
    {
      title: "Forge Launchpad",
      subtitle: "Professional brand website. Domain to launch in days.",
      price: "$4,500",
      delivery: "7 days",
      includes: [
        "Domain registration",
        "Hosting setup",
        "Custom brand site (3–5 pages)",
        "Mobile-optimized design",
        "Performance optimization",
        "Launch and deployment"
      ],
      upgrades: [
        "Additional pages",
        "Copywriting support",
        "Analytics + CRM integrations",
        "Ongoing hosting & maintenance"
      ]
    },
    {
      title: "Forge Rapid Launch",
      subtitle: "Single-page brand site. Domain to launch in days.",
      price: "$2,500",
      delivery: "3-4 days",
      includes: [
        "Domain registration",
        "Hosting setup",
        "Custom brand site (1-2 pages)",
        "Mobile-optimized design",
        "Performance optimization",
        "Launch and deployment"
      ],
      upgrades: [
        "Additional pages",
        "Copywriting support",
        "Analytics + CRM integrations",
        "Ongoing hosting & maintenance"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Forge by Sandbox</title>
        <meta 
          name="description" 
          content="Professional web solutions for your brand. Explore our Forge Launchpad and Rapid Launch service packages." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative h-screen min-h-[600px] flex items-center justify-center w-full">
            <img 
              src="https://images.unsplash.com/photo-1524221629551-6dd14def5ffd"
              alt="Professional workspace"
              className="absolute inset-0 w-full h-full object-cover z-0"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-black/60 z-0"></div>
            
            <div className="relative z-10 w-full max-w-5xl mx-auto text-center px-4 sm:px-6">
              <h1 className="font-heading text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white tracking-tight">
                Brand websites. Built and launched fast.
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-medium leading-relaxed">
                Domain, hosting, and a production-ready site — deployed in days, not months.
              </p>
            </div>
          </section>

          {/* Services Grid Section */}
          <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Launch Packages</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Two ways to get your brand online. Same clean infrastructure. Different scope.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  title={service.title}
                  subtitle={service.subtitle}
                  price={service.price}
                  delivery={service.delivery}
                  includes={service.includes}
                  upgrades={service.upgrades}
                  onCtaClick={handleOpenLeadModal}
                />
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <LeadFormModal isOpen={isLeadModalOpen} onClose={handleCloseLeadModal} />
    </>
  );
};

export default ServicesPage;