import React from 'react';

const UseCaseExample = () => {
  return (
    <section className="py-24 px-6 bg-neutral-light">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1686061593213-98dad7c599b9" 
              alt="Dashboard Interface" 
              className="w-full h-auto rounded-sm shadow-lg border border-neutral-medium"
            />
          </div>
          <div className="order-1 lg:order-2 border-l-4 border-navy pl-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
              HubSpot Check-in Tool
            </h2>
            <div className="space-y-6 text-lg text-neutral-dark leading-relaxed">
              <p>
                Built with HubSpot Private API for real-time attendee lookup, controlled edits, and fast check-in workflows. Deployable in client environment with no dependency on Forge after launch.
              </p>
              <div className="bg-white p-6 rounded-sm border border-neutral-medium mt-6">
                <h4 className="font-bold text-navy mb-2 uppercase text-sm tracking-wider">Technical Details & Outcomes</h4>
                <ul className="space-y-2 text-base">
                  <li className="flex items-start">
                    <span className="text-navy mr-2 font-bold">•</span>
                    <span>Real-time synchronization with CRM</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2 font-bold">•</span>
                    <span>Role-based access control for field staff</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2 font-bold">•</span>
                    <span>Zero ongoing licensing fees</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseExample;