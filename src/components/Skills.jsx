import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaShieldAlt, 
  FaTerminal, 
  FaNetworkWired, 
  FaServer, 
  FaLock, 
  FaUserShield, // Remplaçant pour FaSearchShield
  FaMicrochip, 
  FaTools 
} from 'react-icons/fa';


const skillCategories = [
  {
    title: "Cybersécurité & Défense",
    icon: <FaShieldAlt className="text-red-600" />,
    skills: [
      { name: "Pentesting (OWASP)", level: 85 },
      { name: "Cryptographie", level: 75 },
      { name: "Analyse de Malwares", level: 70 },
      { name: "Gestion des Incidents", level: 90 }
    ]
  },
  {
    title: "Maintenance & Systèmes",
    icon: <FaServer className="text-blue-500" />,
    skills: [
      { name: "Administration Linux/Windows", level: 95 },
      { name: "Virtualisation (Docker/VMware)", level: 80 },
      { name: "Sauvegarde & Recovery", level: 90 },
      { name: "Optimisation Hardware", level: 85 }
    ]
  },
  {
    title: "Réseaux & Protocoles",
    icon: <FaNetworkWired className="text-orange-500" />,
    skills: [
      { name: "Architecture Réseau Secure", level: 85 },
      { name: "Firewall & VPN Config", level: 90 },
      { name: "Monitoring (Zabbix/Nagios)", level: 80 },
      { name: "Protocoles TCP/IP", level: 95 }
    ]
  },
  {
    title: "Outils de Développement",
    icon: <FaTerminal className="text-green-500" />,
    skills: [
      { name: "Bash / Python Scripting", level: 75 },
      { name: "Vite / React (Front-end)", level: 80 },
      { name: "Git / DevSecOps", level: 70 },
      { name: "SQL & Sécurité BD", level: 85 }
    ]
  }
];

export default function Skills() {
  return (
    <section className="bg-slate-950 min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header de la page */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter"
          >
            Arsenal <span className="text-red-600">Technique</span>
          </motion.h2>
          <div className="h-1 w-24 bg-red-600 mx-auto mt-4 mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Matrice de compétences spécialisées en protection des données, administration système critique et développement sécurisé.
          </p>
        </div>

        {/* Grille de Compétences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-red-500/30 transition-all"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-slate-800 rounded-lg text-2xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-300 font-mono">{skill.name}</span>
                      <span className="text-red-500 font-bold">{skill.level}%</span>
                    </div>
                    {/* Barre de progression style "Scan" */}
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-red-600 to-orange-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Bonus: Stack Sécurisé */}
        <div className="mt-20 p-8 bg-red-950/10 border border-red-900/20 rounded-3xl text-center">
          <h4 className="text-red-500 font-bold uppercase mb-6 flex items-center justify-center gap-2">
            <FaLock /> Environnement de travail sécurisé
          </h4>
          <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
             {/* Ajoute ici des logos d'outils comme Kali, Linux, Wireshark, etc. */}
             <span className="text-slate-300 font-bold">KALI LINUX</span>
             <span className="text-slate-300 font-bold">WIRESHARK</span>
             <span className="text-slate-300 font-bold">BURP SUITE</span>
             <span className="text-slate-300 font-bold">METASPLOIT</span>
             <span className="text-slate-300 font-bold">NMAP</span>
          </div>
        </div>

      </div>
    </section>
  );
}
