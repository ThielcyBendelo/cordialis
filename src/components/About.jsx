import { about, profile1Image as profileImg } from '../assets/assets.js';
import { motion } from 'framer-motion';
import { 
  FaGlobe, 
  FaUserTie, 
  FaHandshake, 
  FaMapMarkerAlt, 
  FaBuilding, 
  FaUsers, 
  FaChartLine,
  FaFileDownload 
} from 'react-icons/fa';


import LazyImage from './LazyImage';
import GoogleMapsSection from './GoogleMapsSection';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Mise à jour pour CORDIALIS GROUPS sarl
 const details = [
  { 
    icon: <FaGlobe className="text-blue-500" />, 
    title: "Vision 360°", 
    text: "Une compréhension complète de la chaîne de valeur de votre projet." 
  },
  { 
    icon: <FaUserTie className="text-blue-500" />, 
    title: "Un Interlocuteur Unique", 
    text: "Simplifiez votre gestion grâce à notre coordination multidisciplinaire." 
  },
  { 
    icon: <FaHandshake className="text-blue-500" />, 
    title: "Éthique & Professionnalisme", 
    text: "Un engagement inconditionnel envers l'intégrité et la transparence." 
  },
];
 

  return (
    <div className="bg-slate-50 dark:bg-slate-950 pt-24 min-h-screen transition-colors duration-300">
      <motion.section
        className="max-w-6xl mx-auto px-6 pb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Colonne Gauche : Direction & Identité */}
          <motion.div className="lg:col-span-4 flex flex-col items-center" variants={itemVariants}>
            <div className="relative group">
              {/* Aura de couleur bleue pour Cordialis */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-900 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <LazyImage
                src={profileImg}
                alt="Directeur CORDIALIS"
                className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-white dark:border-slate-900 shadow-2xl"
              />
              <div className="absolute bottom-6 right-6 bg-blue-700 p-4 rounded-full border-4 border-white dark:border-slate-950 text-white shadow-2xl">
                <FaBuilding size={24} />
              </div>
            </div>
            
            <div className="mt-8 text-center bg-white dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 w-full shadow-lg backdrop-blur-md">
              <h3 className="text-slate-900 dark:text-white font-bold text-2xl mb-1 tracking-tight uppercase">Charte & graphique</h3>
              <p className="text-blue-700 font-bold text-xs uppercase tracking-[0.2em]">CORDIALIS GROUPS sarl</p>
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-2 text-slate-500 text-sm">
                <FaMapMarkerAlt className="text-blue-700" /> Kinshasa, RDC
              </div>
              
              <button className="mt-6 flex items-center justify-center gap-2 w-full py-4 bg-slate-900 dark:bg-blue-800 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-md">
                <FaFileDownload /> BROCHURE CORPORATE
              </button>
            </div>
          </motion.div>

          {/* Colonne Droite : Vision du Groupe */}
          <div className="lg:col-span-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-none">
                Racines Fortes, <br />
                <span className="text-blue-700">L'adaptabilité au service de l'Excellence</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10 text-justify">
                {about || "CORDIALIS GROUPS sarl est un consortium multiservices dédié au développement stratégique en République Démocratique du Congo. Nous combinons expertise locale et standards globaux pour offrir des solutions innovantes dans l'administration des systèmes et l'ingénierie d'affaires."}
              </p>
            </motion.div>

            {/* Grid des Pôles d'Expertise */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {details.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-blue-600/50 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="text-blue-700 text-3xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-2 tracking-tight">{item.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Quote / Vision */}
            <motion.div 
              variants={itemVariants}
              className="mt-12 p-8 bg-blue-50 dark:bg-slate-900 border-l-4 border-blue-700 rounded-r-3xl"
            >
              <h5 className="text-blue-700 font-bold uppercase text-xs mb-2 tracking-widest italic">Notre philosophie</h5>
              <p className="text-slate-800 dark:text-slate-200 text-xl font-medium italic">
                Comme un arbre...
              </p>
              <p className="text-slate-800 dark:text-slate-200 text-xl font-medium italic">
                "Notre entreprise s'appuie sur des racines solides pour s'élever durablement vers l'avenir. Nous transformons la complexité en opportunités, et les défis en réalisations tangibles."
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      <div className="border-t border-slate-200 dark:border-slate-900">
        <GoogleMapsSection />
      </div>
    </div>
  );
}
