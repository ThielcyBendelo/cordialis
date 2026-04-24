import React from "react";
import { FaChevronDown, FaInfoCircle } from "react-icons/fa";

const faqs = [
  {
    question: "Quels sont les domaines d'intervention de CORDIALIS GROUPS ?",
    answer: "Nous sommes un groupe multiservices spécialisé dans l'ingénierie informatique, la maintenance système, l'audit de sécurité et l'accompagnement stratégique des entreprises en RDC.",
  },
  {
    question: "Comment garantissez-vous la qualité de vos services ?",
    answer: "Chaque projet est piloté selon les normes internationales (PMP/ISO). Nous intégrons des audits de contrôle à chaque étape pour assurer une fiabilité totale et une pérennité des solutions livrées.",
  },
  {
    question: "Proposez-vous des contrats de maintenance annuelle ?",
    answer: "Oui, nous proposons des packs de maintenance proactive (MCO) incluant le support technique 24/7, la sécurisation des infrastructures et la mise à jour continue de vos systèmes informatiques.",
  },
  {
    question: "Comment initier une collaboration avec votre groupe ?",
    answer: "Il suffit de nous contacter via la section dédiée. Nous organisons une première séance de consultation gratuite pour évaluer vos besoins et vous proposer une architecture de solution sur mesure.",
  },
];

function FAQSection() {
  return (
    <section className="py-24 px-4 bg-white dark:bg-slate-950 transition-colors duration-300" id="faq">
      <div className="max-w-4xl mx-auto">
        
        {/* En-tête de section style Institutionnel */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
            Questions <span className="text-blue-700">Fréquentes</span>
          </h2>
          <div className="h-1.5 w-20 bg-blue-700 mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">
            Tout ce qu'il faut savoir sur l'accompagnement CORDIALIS GROUPS sarl.
          </p>
        </div>

        {/* Liste des FAQ */}
        <div className="space-y-5">
          {faqs.map((faq, idx) => (
            <details 
              key={idx} 
              className="group border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30 rounded-2xl overflow-hidden transition-all duration-300 open:shadow-lg open:shadow-blue-900/5 open:bg-white dark:open:bg-slate-900"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <div className="flex items-center gap-4">
                  <FaInfoCircle className="text-blue-700 text-xl group-open:text-blue-500 transition-colors" />
                  <span className="font-bold text-slate-800 dark:text-slate-200 text-lg group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                    {faq.question}
                  </span>
                </div>
                <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/20 group-open:rotate-180 transition-transform duration-300">
                   <FaChevronDown className="text-blue-700 text-sm" />
                </div>
              </summary>
              
              <div className="px-6 pb-6 ml-10">
                <div className="h-[1px] bg-slate-100 dark:bg-slate-800 mb-4 w-full"></div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg italic border-l-4 border-blue-700/20 pl-4">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* Note de bas de page */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm">
            Vous avez une question spécifique ? 
            <button 
              onClick={() => window.location.href = '#contact'} 
              className="ml-2 text-blue-700 font-bold hover:underline"
            >
              Contactez notre équipe conseil
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
