import React from 'react';
import { Target, Wrench, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Target,
    title: 'Define the Outcome',
    description: 'We align on the operational problem and the measurable result the system must deliver.',
  },
  {
    number: '02',
    icon: Wrench,
    title: 'Architect & Build',
    description: 'Forge designs and develops a production-ready application tied to that outcome.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Deploy & Transfer',
    description: 'The system is deployed into your environment. You own the application, the data, and the infrastructure.',
  },
];

const HowForgeWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-gradient-to-b from-navy to-[#0a1128] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px]"></div>
        <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-900/20 blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            How Forge Works
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-8 lg:p-10 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-2 transition-all duration-300 ease-out z-10 flex flex-col h-full"
              >
                <div className="absolute -top-6 -left-6 text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-300 pointer-events-none">
                  {step.number}
                </div>
                
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                
                <h3 className="font-heading text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-lg text-blue-100/80 leading-relaxed flex-grow">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <p className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/5 border border-white/10 text-blue-200 text-sm font-medium backdrop-blur-sm shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 mr-3 animate-pulse"></span>
            Post-launch support available.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowForgeWorks;