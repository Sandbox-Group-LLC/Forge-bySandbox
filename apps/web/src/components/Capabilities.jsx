import React from 'react';
import { Plug, LayoutDashboard, Zap, CheckCircle } from 'lucide-react';

const capabilities = [
  {
    title: 'CRM Extensions & Integrations',
    description: 'Tools that connect, enrich, and automate CRM operations.',
    success: 'Your CRM becomes the operational hub it was meant to be.',
    icon: Plug,
  },
  {
    title: 'Operational Dashboards & Internal Apps',
    description: 'Real-time UI for business operations — owner-controlled and maintainable.',
    success: 'Teams see what matters, make decisions faster.',
    icon: LayoutDashboard,
  },
  {
    title: 'Workflow Automation Engines',
    description: 'Systems that eliminate manual work and sync across platforms.',
    success: 'Repetitive work disappears. Your team focuses on strategy.',
    icon: Zap,
  },
  {
    title: 'Event & Check-In Systems',
    description: 'Lightweight operational tooling that scales with live experiences.',
    success: 'Seamless operations at scale, no friction.',
    icon: CheckCircle,
  },
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-16 px-6 bg-navy relative overflow-hidden">
      {/* Subtle background glow to match the deep navy professional aesthetic */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-indigo-600/10 blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Forge Capabilities
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur border border-white/20 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-900/30 hover:scale-105 transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-lg bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-blue-400 drop-shadow-lg group-hover:text-blue-300 transition-colors duration-300" strokeWidth={2} />
                </div>
                
                <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
                  {capability.title}
                </h3>
                
                <p className="text-blue-100/80 leading-relaxed mb-6 flex-grow">
                  {capability.description}
                </p>
                
                <div className="pt-4 border-t border-white/10 mt-auto">
                  <p className="text-sm text-white/70 italic">
                    "{capability.success}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;