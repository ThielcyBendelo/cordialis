import { experiences } from '../assets/assets.js';
import {
  FaBriefcase, FaBuilding, FaCalendarAlt, FaHome,
  FaHandshake, FaGraduationCap, FaShieldAlt, FaServer
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const roleIcon = (type) => {
  switch ((type || '').toLowerCase()) {
    case 'internship':
    case 'stage': return FaGraduationCap;
    case 'contract':
    case 'freelance': return FaHandshake;
    case 'remote': return FaHome;
    case 'security': return FaShieldAlt;
    case 'maintenance': return FaServer;
    default: return FaBriefcase;
  }
};

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-slate-950 py-24 px-4 min-h-screen">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Parcours <span className="text-red-600">Opérationnel</span>
          </h2>
          <div className="h-1 w-20 bg-red-600 mx-auto mt-4 mb-6"></div>
          <p className="text-slate-400">Historique des missions de maintenance et déploiements cyber.</p>
        </div>

        {/* Timeline Container */}
        <motion.div 
          className="relative border-l-2 border-slate-800 ml-4 md:ml-12 space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, idx) => {
            const Icon = roleIcon(exp.type);
            return (
              <motion.div key={idx} className="relative pl-8 md:pl-12" variants={itemVariants}>
                
                {/* Dot on Timeline */}
                <div className="absolute -left-[11px] top-0 w-5 h-5 bg-slate-950 border-2 border-red-600 rounded-full z-10 shadow-[0_0_10px_rgba(220,38,38,0.5)]" />

                {/* Content Card */}
                <div className="group bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-red-500/50 transition-all shadow-xl">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                    
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-slate-800 rounded-lg text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-slate-400 text-sm mt-1">
                          <FaBuilding size={12} />
                          <span className="text-red-400 font-semibold uppercase tracking-wider">{exp.company}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-950 px-4 py-2 rounded-full border border-slate-800 text-slate-300 text-sm font-mono">
                      <FaCalendarAlt className="text-red-600" />
                      {exp.year}
                    </div>
                  </div>

                  <p className="text-slate-400 leading-relaxed border-t border-slate-800 pt-4 mt-4">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
