import React from 'react';
import { Helmet } from 'react-helmet';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What does Forge by Sandbox build?',
    answer:
      'Forge builds production-ready operational software for growth teams across six disciplines: AI and competitive intelligence systems, event intelligence and data unification, event GTM and campaign operations, AI proposal and document automation, CRM extensions and workflow automation, and rapid deployment infrastructure. Every system is delivered with full client ownership of the code, data, and infrastructure.',
  },
  {
    question: 'What platforms does Sandbox Group own?',
    answer:
      'Sandbox Group LLC owns four public platforms — Forge Intelligence (forgeintelligence.ai) for competitive intelligence, SYSOI (sysoi.ai) for B2B event intelligence, Sandbox-GTM (sandbox-gtm.com) for event go-to-market operations, and Pitch Box for AI-powered RFP responses — plus ForgeOS, a proprietary internal web app deployment OS. Forge by Sandbox is the product engine behind all of them.',
  },
  {
    question: 'What is ForgeOS?',
    answer:
      "ForgeOS is Sandbox's proprietary web app deployment operating system. It is an internal platform, not a public product — the infrastructure layer that lets Forge take applications from architecture to production in days. Every platform in the Sandbox portfolio ships on it.",
  },
  {
    question: 'Who owns the software after delivery?',
    answer:
      'The client does — completely. At handoff, Forge delivers full source code, comprehensive documentation, and the deployment environment. You own the application, the data, and the infrastructure, with optional ongoing support agreements available.',
  },
  {
    question: 'How fast can Forge launch a website?',
    answer:
      'Forge Rapid Launch delivers a single-page brand site — domain, hosting, and mobile-optimized design included — in 3 to 4 days for $2,500. Forge Launchpad delivers a 3-to-5-page professional brand site in 7 days for $4,500. Both ship production-ready with performance optimization and full ownership.',
  },
  {
    question: 'How does a Forge engagement work?',
    answer:
      'Engagements run in four phases: Discovery (technical scoping, architecture planning, and success criteria), Build (focused product engineering with staging access and regular check-ins), Deploy (implementation into your infrastructure with security and performance standards), and Handoff (full source code, documentation, and optional support).',
  },
];

const faqJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
});

const Faq = () => {
  return (
    <section id="faq" className="py-24 px-6 bg-[#050814] relative overflow-hidden">
      <Helmet>
        <script type="application/ld+json">{faqJsonLd}</script>
      </Helmet>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[15%] w-[35%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-white/20 open:border-blue-500/30"
            >
              <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <h3 className="font-heading text-lg font-bold text-white">
                  {faq.question}
                </h3>
                <ChevronDown className="w-5 h-5 text-blue-400 shrink-0 transition-transform duration-300 group-open:rotate-180" strokeWidth={2} />
              </summary>
              <p className="px-6 pb-6 text-blue-100/80 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
