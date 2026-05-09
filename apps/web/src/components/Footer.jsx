import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <img 
              src="https://horizons-cdn.hostinger.com/9346395c-bf88-4008-af33-0f49bacfaaac/3f1a74ca5dee9f2f92c948c95e8a2b3c.png" 
              alt="FORGE logo" 
              className="h-10 w-auto object-contain"
            />
          </div>
          <div className="text-center w-full md:w-auto">
            <p className="text-sm text-neutral-light mb-2">Get in touch</p>
            <a href="mailto:admin@makemysandbox.com" className="text-base font-medium hover:text-neutral-light transition-colors">
              admin@makemysandbox.com
            </a>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8">
          <p className="text-sm text-neutral-light text-center">
            © 2026 Forge by Sandbox (part of Sandbox Group LLC). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
