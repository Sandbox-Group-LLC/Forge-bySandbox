import React, { useState, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import LeadFormModal from '@/components/LeadFormModal.jsx';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = useCallback((sectionId) => {
    setIsMobileMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.pathname, navigate]);

  const handleOpenLeadModal = useCallback(() => {
    setIsLeadModalOpen(true);
    setIsMobileMenuOpen(false);
  }, []);

  const handleCloseLeadModal = useCallback(() => {
    setIsLeadModalOpen(false);
  }, []);

  const navLinks = [
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'sandbox-ip', label: 'Sandbox IP' },
    { id: 'engagement', label: 'Engagement Model' },
  ];

  return (
    <>
      <header className="bg-navy text-white sticky top-0 z-50 shadow-sm">
        <div className="py-4 px-6 max-w-7xl mx-auto flex items-center justify-between relative z-10 bg-navy">
          <Link to="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
            <img
              src="/assets/forge-logo.webp"
              alt="FORGE by Sandbox logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/services" 
              className="text-sm font-medium hover:text-neutral-light transition-colors"
            >
              Services
            </Link>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium hover:text-neutral-light transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button 
              onClick={handleOpenLeadModal}
              className="bg-white text-navy hover:bg-neutral-light font-semibold"
            >
              Talk to Forge
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-white hover:text-neutral-light transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden overflow-hidden bg-navy border-t border-white/10 absolute w-full left-0 top-full shadow-lg">
            <nav className="flex flex-col px-6 py-4 space-y-4">
              <Link 
                to="/services" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left text-base font-medium py-2 border-b border-white/5 hover:text-neutral-light transition-colors"
              >
                Services
              </Link>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-base font-medium py-2 border-b border-white/5 last:border-none hover:text-neutral-light transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button 
                onClick={handleOpenLeadModal}
                className="bg-white text-navy hover:bg-neutral-light font-semibold w-full mt-4"
              >
                Talk to Forge
              </Button>
            </nav>
          </div>
        )}
      </header>

      <LeadFormModal isOpen={isLeadModalOpen} onClose={handleCloseLeadModal} />
    </>
  );
};

export default Header;