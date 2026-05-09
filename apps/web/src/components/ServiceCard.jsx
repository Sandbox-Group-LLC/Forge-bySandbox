import React from 'react';
import { Check, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const ServiceCard = ({ title, subtitle, price, delivery, includes, upgrades, onCtaClick }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-8 flex flex-col h-full border border-gray-100">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-navy mb-2">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </div>
      
      <div className="mb-6 pb-6 border-b border-gray-100">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-4xl font-extrabold text-navy">{price}</span>
        </div>
        <div className="inline-block bg-navy/10 text-navy px-3 py-1 rounded-full text-sm font-semibold">
          Delivery: {delivery}
        </div>
      </div>

      <div className="flex-grow space-y-6 mb-8">
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
          <ul className="space-y-3">
            {includes.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-600">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {upgrades && upgrades.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Optional Upgrades:</h4>
            <ul className="space-y-3">
              {upgrades.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-500">
                  <Plus className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Button 
        onClick={onCtaClick}
        className="w-full bg-navy hover:bg-navy/90 text-white font-semibold py-6 text-lg mt-auto rounded-lg"
      >
        Get Started
      </Button>
    </div>
  );
};

export default ServiceCard;