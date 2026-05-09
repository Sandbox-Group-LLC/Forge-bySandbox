import React from 'react';

const capabilities = [
  {
    title: 'INFRASTRUCTURE & INTEGRATION',
    description: 'Custom middleware and API integrations that connect disparate systems, ensuring reliable data flow across your operational stack.',
  },
  {
    title: 'INTERNAL TOOLING',
    description: 'Purpose-built interfaces for your team to manage complex workflows without exposing underlying databases or full CRM access.',
  },
  {
    title: 'AUTOMATION ENGINES',
    description: 'Robust background processors that handle high-volume, repetitive tasks with error handling and logging built-in.',
  },
  {
    title: 'DATA SYNCHRONIZATION',
    description: 'Real-time or batch processing systems that keep your systems of record perfectly aligned across platforms.',
  },
];

const WhatWeBuild = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-6">
            Product Engineering Focus
          </h2>
          <p className="text-lg text-neutral-dark leading-relaxed">
            FORGE operates as a specialized product engineering arm. We focus on infrastructure, outcomes, and internal tooling. You own the application, the data, and the deployment environment.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-neutral-light p-8 rounded-sm border border-neutral-medium"
            >
              <h3 className="font-heading text-lg font-bold text-navy mb-3 tracking-wide">
                {capability.title}
              </h3>
              <p className="text-neutral-dark leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;