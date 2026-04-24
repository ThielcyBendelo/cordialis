import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaBuilding, FaCheckCircle, FaGlobe, FaTree, FaLayerGroup, 
  FaPalette, FaFont, FaShapes, FaCheckDouble 
} from 'react-icons/fa';
import useParallax from '../hooks/useParallax';
import useIntersectionObserver from '../hooks/useIntersectionObserver';


export default function Hero() {
  const scrollY = useParallax();
  const [elementRef] = useIntersectionObserver();
  const navigate = useNavigate();

  const backgrounds = ['/background7.png', '/background8.png', '/background9.jpeg'];
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [backgrounds.length]);

  // Données pour les 6 sections de charte graphique
  const identitySections = [
    {
      title: "UN ARBRE POUR EMBLÈME",
      subtitle: "INTRODUCTION",
      icon: <FaTree />,
      content: "Cette charte graphique constitue le socle de l'identité visuelle de CORDIALIS GROUPS sarl. Elle définit l'ensemble des règles et usages relatifs à nos éléments graphiques pour garantir une communication claire, cohérente et professionnelle sur tous nos supports. ",
      content2: "Le symbole central de notre logo, l'arbre, a été choisi pour incarner la philosophie de notre entreprise. Il représente la croissance, la stabilité, l'ancrage dans nos valeurs, mais aussi l'ouverture à l'innovation et l'adapbilité dans un environnement en constante évolution. Comme un arbre, notre entreprise s'appuie sur des racines solides pour s'élever durablement vers l'avenir.",
      color: "text-emerald-500",
      bg: "bg-white dark:bg-slate-950"
    },
    {
      title: "LE TRONC DE NOTRE IDENTITÉ VISUELLE",
      subtitle: "LE LOGO",
      icon: <FaLayerGroup />,
      content: "Le logo CORDIALIS GROUPS sarl met en scène un arbre stylisé, représentant :",
      content2: "- Nos fondations solides (les racines) : valeurs, savoir-faire, culture d'entreprise.",
      content3: "- Notre développement (le tronc) : force, résilience, croissance maitrisée.",
      content4: "- Notre capacité d'innovation et de rayonnement (les branches et le feuillage).",
      color: "text-blue-700",
      bg: "bg-slate-50 dark:bg-slate-900"
    },
    {
      title: "PALETTE DE COULEURS",
      subtitle: "NOS TEINTES IDENTITAIRES",
      icon: <FaPalette />,
      content: "Notre charte repose sur une séléction de bleus principaux qui traduisent l'essence de notre identité :",
      content2:"stabilité, vision et sérénité.",
      color: "text-blue-600",
      bg: "bg-white dark:bg-slate-950",
      isPalette: true
    },
    {
      title: "TYPOGRAPHIE",
      subtitle: "LES LANGAGES STRUCTURE DE NOTRE ENTREPRISE",
      icon: <FaFont />,
      content: "Usage de polices Sans-Serif modernes (Inter/Public Sans). Elles reflètent notre approche directe, transparente et technologique.",
      color: "text-slate-700",
      bg: "bg-slate-50 dark:bg-slate-900"
    },
    {
      title: "UNIVERS GRAPHIQUE",
      subtitle: "NOTRE IMAGE DE MARQUE",
      icon: <FaShapes />,
      content: "Style visuel",
      content2: "- Epuré, authentique, inspiré de la nature",
      content3: "Iconographie",
      content4: "- Icones claires et cohérentes, idéalement en lien avec l'environnement, l'innovation, l'humain",
      content5: "Photographies",
      content6: "- Lumière naturelle, mise en scène réalistes",
      content7: "- Valoriser les personnes, les lieux et les gestes en phase avec nos valeurs",
      color: "text-blue-500",
      bg: "bg-white dark:bg-slate-950"
    },
    {
      title: "RÈGLES D'USAGES",
      subtitle: "CONFORMITÉ",
      icon: <FaCheckDouble />,
      content: "Respect des zones d'exclusion et interdiction de déformer le logo pour garantir l'impact de CORDIALIS GROUPS partout.",
      color: "text-blue-800",
      bg: "bg-slate-900 text-white"
    }
  ];

  return (
    <div className="w-full">
      {/* --- SECTION HERO --- */}
      <section ref={elementRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
        
        {/* Background avec Overlay de grain (Texture) */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://vercel.app')]"></div>

        <div
          className="absolute inset-0 z-0 transition-all duration-1000"
          style={{
            backgroundImage: `url(${backgrounds[bgIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.25) saturate(1.2)',
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />
     
        <div 
  initial={{ opacity: 0, y: 20 }} 
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  style={{ opacity: 1, display: 'block' }} // Sécurité CSS
  className="max-w-6xl mx-auto text-center px-4"
>

  {/* Badge supérieur affiné */}
  <div className="flex justify-center mb-8">
    <div className="px-5 py-1.5 bg-blue-500/10 backdrop-blur-md border border-blue-500/20 rounded-full text-blue-400 text-xs font-black uppercase tracking-[0.3em]">
      Votre partenaire intégré
    </div>
  </div>

  {/* Titre avec typographie plus dynamique */}
  <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.95]">
    Concrétisons vos projets avec une <br className="hidden md:block" />
    <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-blue-600 to-indigo-500"> 
      vision globale.
    </span>
  </h1>

  {/* Paragraphe avec meilleur contraste et largeur limitée */}
  <div className="max-w-3xl mx-auto mb-12">
    <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
      <span className="text-blue-400 font-semibold italic">"</span>
      Cordialis Groups intervient à l'intersection de la finance, de l'industrie et de l'immobilier pour transformer la complexité en opportunités.
      <span className="text-blue-400 font-semibold italic">"</span>
    </p>
  </div>

  {/* Boutons avec effets de survol plus doux */}
  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
    <button 
      onClick={() => navigate('/services')} 
      className="group relative w-72 py-4 bg-blue-600 text-white font-bold rounded-full overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95"
    >
      <span className="relative z-10">DÉCOUVRIR NOS EXPERTISES</span>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
    
    <button 
      onClick={() => navigate('/contact')} 
      className="w-72 py-4 border border-white/20 hover:border-white/40 text-white font-bold rounded-full backdrop-blur-sm transition-all hover:bg-white/5 active:scale-95"
    >
      NOUS CONTACTER
    </button>
  </div>
</div>

     

        {/* Indicateur de Scroll Animé */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-[10px] text-white font-bold uppercase tracking-widest">Explorer</span>
          <div className="w-1 h-12 bg-gradient-to-b from-blue-600 to-transparent rounded-full" />
        </motion.div>
      </section>


      {/* --- LES 6 SECTIONS DE CHARTE --- */}
      
        {identitySections.map((section, idx) => (
  <section key={idx} className={`py-24 px-6 ${section.bg} transition-colors duration-500`}>
    <div className={`max-w-6xl mx-auto flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16`}>
      
      {/* Visualisation Icone */}
      <motion.div 
        initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative group flex-shrink-0"
      >
        <div className={`absolute -inset-4 rounded-[2.5rem] opacity-20 group-hover:opacity-40 transition duration-500 blur-xl ${section.color.replace('text', 'bg')}`}></div>
        <div className={`relative text-7xl p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl ${section.color}`}>
          {section.icon}
        </div>
      </motion.div>
      
      {/* Contenu Texte */}
      <div className="flex-1 text-center md:text-left">
        <h4 className="text-blue-700 dark:text-blue-500 font-black tracking-[0.3em] text-xs mb-3 uppercase">
          {section.subtitle}
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white leading-tight uppercase">
          {section.title}
        </h2>
        
        {/* Affichage intelligent des paragraphes */}
        <div className="space-y-4 mb-10">
          {[section.content, section.content2, section.content3, section.content4, section.content5, section.content6, section.content7].map((text, pIdx) => (
            text && (
              <p key={pIdx} className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                {text}
              </p>
            )
          ))}
        </div>

        {/* Cas particulier Palette */}
        {section.isPalette && (
          <div className="flex gap-4 mb-10 justify-center md:justify-start">
            <div className="group flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#0f172a] border-4 border-white shadow-lg mb-2" />
              <span className="text-[10px] font-bold text-slate-400">Nuit</span>
            </div>
            <div className="group flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#1d4ed8] border-4 border-white shadow-lg mb-2" />
              <span className="text-[10px] font-bold text-slate-400">Royal</span>
            </div>
            <div className="group flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#94a3b8] border-4 border-white shadow-lg mb-2" />
              <span className="text-[10px] font-bold text-slate-400">Gris</span>
            </div>
          </div>
        )}

        {/* Bouton En Savoir Plus */}
        <button 
          onClick={() => navigate(`/services/${section.id || idx}`)}
          className="group flex items-center gap-3 px-8 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-700/20 active:scale-95 mx-auto md:mx-0"
        >
          EN SAVOIR PLUS
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
             <span className="text-xs">→</span>
          </div>
        </button>
      </div>

      {/* Numéro de section en arrière-plan */}
      <div className="absolute right-10 bottom-0 text-9xl font-black opacity-5 select-none pointer-events-none hidden lg:block dark:text-white">
        0{idx + 1}
      </div>
    </div>
  </section>
))}
      </div>
  );
}
