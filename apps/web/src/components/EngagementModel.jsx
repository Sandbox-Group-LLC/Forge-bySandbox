import React from 'react';
import { Search, Code2, Rocket, Key } from 'lucide-react';

const phases = [
  {
    title: 'Discovery',
    description: 'Technical scoping, architecture planning, and defining exact deliverables and success criteria.',
    icon: Search
  },
  {
    title: 'Build',
    description: 'Rapid, focused product engineering with regular progress check-ins and staging environment access.',
    icon: Code2
  },
  {
    title: 'Deploy',
    description: 'Implementation into your infrastructure, ensuring security, compliance, and performance standards.',
    icon: Rocket
  },
  {
    title: 'Handoff',
    description: 'Delivery of full source code, comprehensive documentation, and optional ongoing support agreements.',
    icon: Key
  }
];

const EngagementModel = () => {
  return (
    <section id="engagement" className="py-24 px-6 bg-gradient-to-b from-[#0a1128] to-[#050814] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[30%] left-[20%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[50%] rounded-full bg-indigo-500/10 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Engagement Flow
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop (lg) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 -translate-y-1/2 z-0"></div>

          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <div key={index} className="relative z-10">
                <div className="group bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-900/40 hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-blue-500/20 transition-colors duration-300 shadow-inner relative z-10">
                    <Icon className="w-8 h-8 text-blue-400 drop-shadow-lg group-hover:text-blue-300 transition-colors duration-300" strokeWidth={2} />
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300 relative z-10">
                    {phase.title}
                  </h3>
                  
                  <p className="text-sm text-blue-100/80 leading-relaxed flex-grow relative z-10">
                    {phase.description}
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

export default EngagementModel;