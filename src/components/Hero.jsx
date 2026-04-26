import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaArrowRight, 
  FaHandshake, 
  FaChartLine, 
  FaIndustry, 
  FaTree, 
  FaBuilding, 
  FaLayerGroup, 
  FaPalette, 
  FaFont, 
  FaShapes, 
  FaGlobe, 
  FaShieldAlt, 
  FaLightbulb, 
  FaCheckDouble, // <--- Celle qui manquait
  FaCheck
} from 'react-icons/fa';




import useParallax from '../hooks/useParallax';
import useIntersectionObserver from '../hooks/useIntersectionObserver';


export default function Hero() {
  const scrollY = useParallax();
  const [elementRef] = useIntersectionObserver();
  const navigate = useNavigate();

  const backgrounds = ['/background7.png', '/background8.png', '/background9.png'];
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
      isPalette: true,
       palette: [
    { name: "Bleu Minuit", hex: "#191970", desc: "Stabilité" },
    { name: "Bleu Céleste", hex: "#2491cc", desc: "Vision" },
    { name: "Bleu Maya", hex: "#73c2fb", desc: "Sérénité" }
  ]
    },
    {
      title: "TYPOGRAPHIE",
      subtitle: "LES LANGAGES STRUCTURE DE NOTRE ENTREPRISE",
      icon: <FaFont />,
      content: "TYPOGRAPHIE PRINCIPALE & TYPOGRAPHIE SECONDAIRE ",
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
      subtitle: "Préserver la cohérence de NOTRE IDENTITE",
      icon: <FaCheckDouble />,
      content: "Respect des zones d'exclusion et interdiction de déformer le logo pour garantir l'impact de CORDIALIS GROUPS partout.",
      color: "text-blue-800",
      bg: "bg-slate-900 text-white"
    }
  ];

return (
  <div className="w-full">
    {/* --- SECTION HERO --- */}
    <section ref={elementRef} className="py-24 px-6 pt-32 relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* Background & Textures */}
      <div className="absolute inset-0 z-0">
        {/* Overlay de grain (Texture) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[url('https://vercel.app')]"></div>

        {/* Image avec Parallaxe */}
        <div
          className="absolute inset-0 transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${backgrounds[bgIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.25) saturate(1.1)',
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        />
        {/* Vignettage radial pour focus central */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)]" />
      </div>
   
      {/* Contenu Hero Animé */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-6xl mx-auto text-center px-6"
      >

  {/* Badge : Texte plus foncé en mode clair */}
  <div className="flex justify-center mb-10">
  <div className="px-5 py-2 bg-white/10 dark:bg-[#73c2fb]/5 backdrop-blur-xl border border-[#73c2fb]/40 dark:border-[#73c2fb]/20 rounded-full flex items-center gap-3 shadow-[0_0_15px_rgba(115,194,251,0.2)]">
    {/* Point d'animation en Bleu Maya */}
    <span className="w-1.5 h-1.5 bg-[#73c2fb] rounded-full animate-pulse shadow-[0_0_8px_#73c2fb]"></span>
    
    {/* Texte en Blanc (Mode Clair) et Bleu Maya (Mode Sombre) */}
    <span className="text-white dark:text-[#73c2fb] text-[10px] font-black uppercase tracking-[0.4em]">
      Votre partenaire intégré
    </span>
  </div>
</div>


  <h1 className="text-5xl md:text-7xl lg:text-[90px] font-black text-[#73c2fb] dark:text-white mb-8 tracking-tighter leading-[0.9] drop-shadow-2xl">
  Concrétisons vos projets <br className="hidden lg:block" /> avec une 
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#73c2fb] to-white"> 
    {" "}vision globale.
  </span>
</h1>



 {/* Paragraphe : Corps en Bleu Maya et Accents en Blanc */}
<div className="max-w-3xl mx-auto mb-14 relative px-4">
 <p className="text-lg md:text-2xl text-[#73c2fb] font-semibold leading-relaxed drop-shadow-md text-center">
  {/* Guillemets en blanc forcé */}
  <span className="!text-white font-serif italic text-5xl mr-2">“</span>
  
  Cordialis Groups intervient à l'intersection de la 
  <span className="!text-lime-400 font-serif italic tracking-wide"> finance</span>, 
  de l' <span className="!text-lime-400 font-serif italic tracking-wide">industrie</span> et de l'
  <span className="!text-lime-400 font-serif italic tracking-wide"> immobilier </span> 
  pour transformer la complexité en opportunités.
  
  <span className="!text-white font-serif italic text-5xl ml-2">”</span>
</p>



</div>




        {/* Boutons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
  {/* Bouton Principal - Fond Bleu Maya et Texte Blanc */}
  <button 
    onClick={() => navigate('/services')} 
    className="group relative w-72 py-5 !bg-[#73c2fb] !text-white font-black rounded-2xl overflow-hidden transition-all hover:shadow-[0_20px_40px_rgba(115,194,251,0.4)] active:scale-95 border-none"
  >
    <span className="relative z-10 tracking-[0.2em] text-xs">DÉCOUVRIR NOS EXPERTISES</span>
    {/* Overlay de survol en Vert Citron */}
    <div className="absolute inset-0 !bg-lime-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    {/* Texte qui devient noir au survol du vert pour la lisibilité */}
    <span className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 !text-slate-900 tracking-[0.2em] text-xs transition-opacity duration-300">
      DÉCOUVRIR NOS EXPERTISES
    </span>
  </button>
  
  {/* Bouton Secondaire - Bordure Maya et Texte Vert Citron */}
  <button 
    onClick={() => navigate('/contact')} 
    className="w-72 py-5 border-2 !border-[#73c2fb] !text-lime-400 font-black rounded-2xl backdrop-blur-md transition-all hover:!bg-[#73c2fb] hover:!text-white active:scale-95 tracking-[0.2em] text-xs bg-transparent"
  >
    NOUS CONTACTER
  </button>
</div>

      </motion.div>

      {/* Indicateur de Scroll */}
      <motion.div 
        animate={{ y: [0, 12, 0] }} 
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 opacity-40"
      >
        <span className="text-[9px] text-white font-black uppercase tracking-[0.5em]">Explorer</span>
        <div className="w-[1px] h-14 bg-gradient-to-b from-blue-500 to-transparent" />
      </motion.div>
    </section>

    {/* --- SECTIONS D'IDENTITÉ --- */}
    {identitySections.map((section, idx) => (
      <section key={idx} className={`relative py-32 px-6 ${section.bg} overflow-hidden`}>
        <div className={`max-w-6xl mx-auto flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-20`}>
          
          {/* Visualisation Icône */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group flex-shrink-0"
          >
            <div className={`absolute -inset-6 rounded-[3rem] opacity-20 group-hover:opacity-40 transition duration-700 blur-2xl ${section.color.replace('text', 'bg')}`}></div>
            <div className={`relative text-7xl p-12 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl transition-transform duration-500 group-hover:-rotate-6 ${section.color}`}>
              {section.icon}
            </div>
          </motion.div>
          
          {/* Contenu Texte */}
          <div className="flex-1 text-center md:text-left z-10">
            <h4 className="text-blue-600 dark:text-blue-500 font-black tracking-[0.4em] text-[10px] mb-4 uppercase">
              {section.subtitle}
            </h4>
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 dark:text-white leading-tight uppercase tracking-tighter">
              {section.title}
            </h2>
            
            <div className="space-y-6 mb-12">
              {[section.content, section.content2, section.content3, section.content4, section.content5].map((text, pIdx) => (
                text && <p key={pIdx} className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-light">{text}</p>
              ))}
            </div>

            {/* Bloc à insérer juste après la description dans la boucle map */}
{section.isPalette && (
  <div className="flex flex-wrap gap-6 mb-10 justify-center md:justify-start">
    {[
      { name: "Bleu Minuit", hex: "#191970" },
      { name: "Bleu Céleste", hex: "#2491cc" },
      { name: "Bleu Maya", hex: "#73c2fb" }
    ].map((color, cIdx) => (
      <div key={cIdx} className="flex flex-col items-center gap-2">
        <div 
          className="w-14 h-14 rounded-2xl border-4 border-white dark:border-slate-800 shadow-lg"
          style={{ backgroundColor: color.hex }}
        />
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-black text-slate-900 dark:text-white uppercase">
            {color.name}
          </span>
          <span className="text-[9px] text-blue-600 font-bold tracking-tighter">
            {color.hex}
          </span>
        </div>
      </div>
    ))}
  </div>
)}


            {/* Bouton d'action */}
            <button 
              onClick={() => navigate('/about')}
              className="group relative flex items-center gap-4 px-10 py-5 bg-vert hover:bg-blue-600 text-white font-black rounded-2xl transition-all duration-300 shadow-xl active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
              <span className="relative tracking-widest text-[10px]">EN SAVOIR PLUS</span>
              <div className="relative w-8 h-8 bg-white/10 rounded-xl flex items-center justify-center transition-all group-hover:bg-white/20 group-hover:rotate-[-45deg]">
                 <FaArrowRight className="text-xs" />
              </div>
            </button>
          </div>

          {/* Numéro de section géant */}
          <div className="absolute -right-4 -bottom-10 text-[18rem] font-black opacity-[0.03] dark:opacity-[0.05] select-none pointer-events-none hidden lg:block dark:text-white">
            {idx + 1}
          </div>
        </div>
      </section>
    ))}
  </div>
);
}
