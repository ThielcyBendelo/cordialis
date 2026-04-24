import React from 'react';
import { projets } from '../assets/assets.js';
import { FaBuilding, FaExternalLinkAlt, FaFolderOpen, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ProjetSimple() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Institutionnel */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block p-2 px-6 bg-blue-600/10 border border-blue-600/20 rounded-full mb-4"
          >
            <span className="text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.2em]">
              Portfolio Corporate // Réalisations
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight">
            Nos Projets <span className="text-blue-700 text-shadow-sm">Structurants</span>
          </h2>
          <div className="h-1.5 w-20 bg-blue-700 mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Découvrez comment CORDIALIS GROUPS déploie son expertise pour bâtir des solutions durables et performantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projets.map((projet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden hover:border-blue-600/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500"
            >
              {/* Image avec Overlay Institutionnel */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={projet.image}
                  alt={projet.titre}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
                
                {/* Badge de Statut */}
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-blue-700 text-white text-[10px] font-bold uppercase rounded-lg shadow-lg">
                  <FaCheckCircle size={10} /> Livraison Certifiée
                </div>
              </div>

              {/* Détails du Projet */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3 text-blue-600 dark:text-blue-500">
                  <FaFolderOpen size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Pôle {projet.categorie || "Ingénierie"}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-700 transition-colors tracking-tight">
                  {projet.titre}
                </h3>
                
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3">
                  {projet.description}
                </p>

                {/* Tags de Compétences */}
                {projet.technologies && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {projet.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold rounded-full border border-transparent group-hover:border-blue-700/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                  {projet.lienDemo && (
                    <a
                      href={projet.lienDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold rounded-xl shadow-md transition-all active:scale-95"
                    >
                      CONSULTER LE CAS <FaExternalLinkAlt size={10} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer de section style Groupe */}
        <div className="mt-20 flex justify-center">
          <div className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-slate-500 dark:text-slate-400 text-xs font-bold shadow-sm">
            <FaBuilding className="text-blue-700" />
            <span className="opacity-60">CORDIALIS GROUPS sarl — {projets.length} Projets d'Excellence Répertoriés</span>
          </div>
        </div>
      </div>
    </section>
  );
}
