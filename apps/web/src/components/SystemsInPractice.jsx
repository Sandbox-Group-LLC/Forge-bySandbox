import React from 'react';
import { Zap, Calendar, GitBranch } from 'lucide-react';

const systems = [
  {
    title: 'Intelligence Platforms in Production',
    description: 'Forge Intelligence and SYSOI run live intelligence workloads — competitive landscape mapping, identity resolution, and engagement scoring — for real B2B teams.',
    icon: Zap,
  },
  {
    title: 'Event GTM at Scale',
    description: 'Sandbox-GTM manages events, attendees, speakers, sessions, and marketing campaigns end to end, backed by check-in systems built for real-time performance in live environments.',
    icon: Calendar,
  },
  {
    title: 'AI Workflow Automation',
    description: 'Pitch Box turns weeks of RFP response work into evidence-based drafts in minutes — the same automation discipline Forge applies to client marketing and sales systems.',
    icon: GitBranch,
  },
];

const SystemsInPractice = () => {
  return (
    <section id="systems-in-practice" className="py-20 px-6 bg-[#0a1128] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[30%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[40%] h-[30%] rounded-full bg-indigo-500/10 blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Systems in Practice
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-blue-100/90 leading-relaxed mb-4">
            Forge doesn't just build for clients — it builds and operates the Sandbox platform portfolio. Every discipline we offer is proven in production first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {systems.map((system, index) => {
            const Icon = system.icon;
            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-900/40 hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-blue-500/20 transition-colors duration-300 shadow-inner">
                  <Icon className="w-8 h-8 text-blue-400 drop-shadow-lg group-hover:text-blue-300 transition-colors duration-300" strokeWidth={2} />
                </div>
                
                <h3 className="font-heading text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">
                  {system.title}
                </h3>
                
                <p className="text-blue-100/80 leading-relaxed flex-grow">
                  {system.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-blue-500/30">
            <div className="px-8 py-4 rounded-full bg-[#0a1128]/80 backdrop-blur-sm">
              <p className="text-blue-100/90 font-medium">
                Every system is built with production durability and client ownership in mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemsInPractice;