import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button.jsx';
import LeadFormModal from '@/components/LeadFormModal.jsx';

const Hero = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const scrollToCapabilities = useCallback(() => {
    const element = document.getElementById('capabilities');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleOpenLeadModal = useCallback(() => {
    setIsLeadModalOpen(true);
  }, []);

  const handleCloseLeadModal = useCallback(() => {
    setIsLeadModalOpen(false);
  }, []);

  return (
    <>
      <section id="home" className="relative bg-navy text-white py-20 md:py-32 px-4 sm:px-6 min-h-[60vh] md:min-h-[80vh] flex items-center w-full">
        {/* Optimized image rendering using img tag with object-fit instead of background-image */}
        <img 
          src="https://images.unsplash.com/photo-1673528076919-a69be48560c6"
          alt="Bespoke operational software for growth teams"
          className="absolute inset-0 w-full h-full object-cover z-0 will-change-transform"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-navy/80 z-0"></div>
        
        <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-white">
            Bespoke operational software for growth teams.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-light mb-10 md:mb-12 max-w-3xl mx-auto font-medium leading-relaxed px-2 sm:px-0">
            Forge builds production-ready intelligence platforms, GTM systems, and workflow automation — the same disciplines behind Sandbox's own product portfolio, delivered with clarity and ownership.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 sm:px-0">
            <Button
              onClick={handleOpenLeadModal}
              size="lg"
              className="w-full sm:w-auto bg-white text-navy hover:bg-neutral-light font-semibold text-lg px-8 py-6 rounded-sm"
            >
              Start a Conversation
            </Button>
            <button
              onClick={scrollToCapabilities}
              className="w-full sm:w-auto text-white border-2 border-white hover:bg-white hover:text-navy transition-colors font-semibold text-lg px-8 py-3 rounded-sm"
            >
              View Capabilities
            </button>
          </div>
        </div>
      </section>

      <LeadFormModal isOpen={isLeadModalOpen} onClose={handleCloseLeadModal} />
    </>
  );
};

export default Hero;