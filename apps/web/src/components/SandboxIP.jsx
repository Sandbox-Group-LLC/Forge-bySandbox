import React from 'react';
import { ArrowUpRight, Lock } from 'lucide-react';

const platforms = [
  {
    name: 'Forge Intelligence',
    url: 'https://forgeintelligence.ai',
    domain: 'forgeintelligence.ai',
    logo: '/logos/forge-intelligence.svg',
    tagline: 'Brand intelligence that compounds.',
    description:
      'A competitive intelligence layer for mid-market B2B — mapping market gaps and undefended positions, then converting insight into content automatically.',
  },
  {
    name: 'SYSOI',
    url: 'https://sysoi.ai',
    domain: 'sysoi.ai',
    logo: '/logos/sysoi.svg',
    tagline: 'The system of intelligence for B2B events.',
    description:
      'A vendor-neutral intelligence layer that unifies attendee data across platforms, resolves identities, and turns engagement into auditable, sales-ready insight.',
  },
  {
    name: 'Sandbox-GTM',
    url: 'https://sandbox-gtm.com',
    domain: 'sandbox-gtm.com',
    logo: '/logos/sandbox-gtm.svg',
    logoPadding: true,
    tagline: 'The event GTM platform.',
    description:
      'End-to-end event go-to-market — events, attendees, speakers, sessions, and marketing campaigns managed with comprehensive analytics and automation.',
  },
  {
    name: 'Pitch Box',
    url: 'https://pitchbox-landing.forge-os.ai',
    domain: 'pitchbox-landing.forge-os.ai',
    logo: '/logos/pitch-box.svg',
    tagline: 'Win the pitch before you write it.',
    description:
      'An AI-powered RFP response system for agencies — parsing RFPs in seconds and drafting evidence-based answers sourced from your own knowledge base.',
  },
];

const SandboxIP = () => {
  return (
    <section id="sandbox-ip" className="py-24 px-6 bg-[#0a1128] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-[35%] h-[40%] rounded-full bg-indigo-600/10 blur-[120px]"></div>
        <div className="absolute bottom-[15%] right-[5%] w-[40%] h-[35%] rounded-full bg-blue-500/10 blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Sandbox IP
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-blue-100/90 leading-relaxed">
            Forge is the product engine behind Sandbox Group's own platforms. The same disciplines
            we sell are the ones we run in production, every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-900/40 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-white shadow-lg border border-white/10 flex items-center justify-center shrink-0">
                  <img
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    className={`w-full h-full object-contain ${platform.logoPadding ? 'p-2' : ''}`}
                    loading="lazy"
                  />
                </div>
                <ArrowUpRight className="w-6 h-6 text-blue-400/60 group-hover:text-blue-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" strokeWidth={2} />
              </div>

              <h3 className="font-heading text-2xl font-bold text-white mb-1 group-hover:text-blue-200 transition-colors duration-300">
                {platform.name}
              </h3>
              <p className="text-sm text-blue-300/80 font-medium mb-4">{platform.tagline}</p>

              <p className="text-blue-100/80 leading-relaxed flex-grow mb-6">
                {platform.description}
              </p>

              <span className="text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors duration-300 mt-auto">
                {platform.domain} →
              </span>
            </a>
          ))}
        </div>

        {/* ForgeOS — internal platform, intentionally unlinked */}
        <div className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg border border-white/10 flex items-center justify-center shrink-0">
            <img src="/logos/forge-os.svg" alt="ForgeOS logo" className="w-full h-full object-contain" loading="lazy" />
          </div>
          <div className="flex-grow">
            <div className="flex items-center gap-3 mb-1 flex-wrap">
              <h3 className="font-heading text-2xl font-bold text-white">ForgeOS</h3>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wide">
                <Lock className="w-3 h-3" strokeWidth={2.5} />
                Internal Platform
              </span>
            </div>
            <p className="text-sm text-blue-300/80 font-medium mb-3">The deployment engine behind every Forge build.</p>
            <p className="text-blue-100/80 leading-relaxed">
              Sandbox's proprietary web app deployment OS — the infrastructure layer that lets Forge
              take applications from architecture to production in days. Every platform above runs on it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SandboxIP;
