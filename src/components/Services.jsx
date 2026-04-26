import React from "react";
import { 
  FaHandshake, 
  FaIndustry, 
  FaCity, 
  FaCheck, 
  FaBuilding, 
  FaEnvelope 
} from "react-icons/fa";

const services = [
  {
    title: "Opérations Commerciales & Financières",
    icon: <FaHandshake />,
    description: "Nous structurons vos flux financiers et commerciaux pour maximiser votre rentabilité et sécuriser vos échanges.",
    template: "Stratégie, optimisation et croissance.",
    benefits: ["Optimisation fiscale", "Ingénierie financière", "Sécurisation des flux"],
    tag: "Finance"
  },
  {
    title: "Expertise Industrielle",
    icon: <FaIndustry />,
    description: "Des solutions techniques de pointe pour concrétiser vos ambitions de production et moderniser vos infrastructures.",
    template: "Innovation, logistique et développement opérationnel.",
    benefits: ["Audit technique", "Logistique intégrée", "Modernisation"],
    tag: "Industrie"
  },
  {
    title: "Gestion Mobilière & Immobilière",
    icon: <FaCity />,
    description: "Nous gérons et optimisons vos biens mobiliers et immobiliers pour en assurer la pérennité et la valorisation.",
    template: "Patrimoine, investissement et valorisation d'actifs.",
    benefits: ["Gestion d'actifs", "Conseil en investissement", "Maintenance"],
    tag: "Patrimoine"
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
             <FaBuilding className="text-[#73c2fb] text-3xl opacity-50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2 uppercase tracking-tight">
            Nos Pôles d'<span className="text-[#73c2fb]">Expertise</span>
          </h2>
          <div className="h-1.5 w-16 bg-blue-700 mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
            Nous croyons que les grands projets nécessitent une vision interconnectée. Nous opérons à la croisée des chemins pour votre réussite.
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-4xl text-[#73c2fb] dark:text-blue-500 bg-blue-50 dark:bg-blue-950/30 p-4 rounded-2xl group-hover:scale-105 transition-transform">
                  {service.icon}
                </div>
                <span className="text-[10px] font-bold bg-[#73c2fb] dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-4 py-1.5 rounded-full uppercase tracking-widest">
                  {service.tag}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                {service.title}
              </h3>

              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Bloc Engagement */}
              <div className="bg-slate-50 dark:bg-slate-950 p-5 rounded-2xl mb-6 border-l-4 border-blue-700">
                <span className="text-[10px] text-[#73c2fb] font-bold uppercase mb-1 block tracking-wider">Engagement Qualité</span>
                <p className="text-xs text-slate-600 dark:text-slate-400 italic leading-relaxed">{service.template}</p>
              </div>

              {/* Liste des bénéfices */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {service.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                    <FaCheck className="text-blue-600 shrink-0" /> {b}
                  </div>
                ))}
              </div>

              {/* Bouton de contact unique */}
              <div className="mt-auto">
                <a
                  href={`mailto:cordialisgroups@gmail.com : ${service.title}`}
                  className="flex items-center justify-center gap-3 w-full py-4 bg-[#73c2fb] hover:bg-blue-800 text-white font-bold rounded-xl shadow-lg shadow-blue-900/20 transition-all active:scale-95"
                >
                  <FaEnvelope />
                  <span>NOUS CONTACTER</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
