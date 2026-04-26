import React from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronDown, FaRegLightbulb } from "react-icons/fa";

const faqs = [
  {
    question: "Quelle est la valeur ajoutée de Cordialis Groups ?",
    answer: "Nous transformons la complexité des marchés en opportunités concrètes en opérant à la convergence de la finance, de l'industrie et de l'immobilier. Notre approche intégrée permet d'optimiser les synergies entre ces piliers pour sécuriser vos investissements.",
  },
  {
    question: "Comment accompagnez-vous les projets industriels ?",
    answer: "Notre expertise industrielle couvre l'optimisation opérationnelle et le financement structuré. Nous aidons les entreprises à moderniser leur outil de production tout en intégrant des solutions de gestion financière avancées.",
  },
  {
    question: "Quel rôle joue l'immobilier dans votre stratégie ?",
    answer: "L'immobilier est pour nous un actif stratégique de diversification. Nous intervenons sur le montage financier de projets d'envergure, l'acquisition d'actifs tertiaires et la gestion de parcs immobiliers à haute valeur ajoutée.",
  },
  {
    question: "Comment gérez-vous la complexité des marchés en RDC ?",
    answer: "Grâce à une analyse rigoureuse des risques et une connaissance profonde du tissu local. Nous appliquons des standards internationaux de gouvernance pour garantir la transparence et la réussite des transactions transfrontalières.",
  },
];


function FAQSection() {
  const navigate = useNavigate();
  return (
    <section className="py-24 px-4 bg-[#f8fafc] dark:bg-slate-950 transition-colors duration-300" id="faq">
      <div className="max-w-4xl mx-auto">
        
        {/* En-tête de section Premium */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Expertise & Vision</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-2">
            Questions <span className="text-[#73c2fb]">Stratégiques</span>
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mt-6"></div>
        </div>

        {/* Liste des FAQ */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details 
              key={idx} 
              className="group border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#73c2fb] open:ring-1 open:ring-[#73c2fb]"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/30">
                    <FaRegLightbulb className="text-[#73c2fb] text-sm" />
                  </div>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 text-lg">
                    {faq.question}
                  </span>
                </div>
                <FaChevronDown className="text-slate-400 group-open:rotate-180 transition-transform duration-300" />
              </summary>
              
              <div className="px-6 pb-6 ml-12">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base border-l-2 border-slate-100 dark:border-slate-800 pl-6">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* Call to Action contextuel */}
        <div className="mt-12 p-8 rounded-2xl bg-slate-900 dark:bg-blue-900/10 text-center">
          <p className="text-slate-300 mb-4">
            Besoin d'une analyse spécifique pour votre secteur d'activité ?
          </p>
          <button 
  onClick={() => navigate('/contact')} 
  className="text-white bg-[#73c2fb] hover:bg-blue-400 px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105"
>
  Consulter un expert Cordialis
</button>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
