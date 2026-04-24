import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { logoImages } from '../assets/assets.js';

export default function ProfessionalSplashScreen({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const loadingSteps = useMemo(() => [
    { label: 'Initialisation...', duration: 800 },
    { label: 'Chargement des ressources...', duration: 1000 },
    { label: "Configuration de l'interface...", duration: 600 },
    { label: 'Optimisation...', duration: 700 },
    { label: 'Prêt dans un instant...', duration: 500 },
  ], []);

  useEffect(() => {
    if (currentStep < loadingSteps.length) {
      const step = loadingSteps[currentStep];
      const timer = setTimeout(() => setCurrentStep(prev => prev + 1), step.duration);
      
      const interval = setInterval(() => {
        setProgress(prev => {
          const target = ((currentStep + 1) / loadingSteps.length) * 100;
          return prev < target ? prev + 1 : prev;
        });
      }, step.duration / (100 / loadingSteps.length));

      return () => { clearTimeout(timer); clearInterval(interval); };
    } else {
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => onComplete && onComplete(), 800);
      }, 500);
    }
  }, [currentStep, loadingSteps, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#09090b] overflow-hidden"
        >
          {/* Fond Dynamique : Particules & Grille */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-500 rounded-full"
                initial={{ opacity: 0.2, y: Math.random() * 100 + "%" }}
                animate={{ y: [null, "-100%"], opacity: [0, 0.5, 0] }}
                transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, ease: "linear" }}
                style={{ left: `${Math.random() * 100}%` }}
              />
            ))}
          </div>

          {/* Contenu Central */}
          <div className="relative z-10 w-full max-w-md px-8 flex flex-col items-center">
            
            {/* Logo : Sorti du background pour être net */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <img 
                src={logoImages} 
                alt="Logo" 
                className="h-20 w-auto object-contain brightness-110 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              />
            </motion.div>

            {/* Barre de Progression & Labels */}
            <div className="w-full">
              <div className="flex justify-between items-end mb-3">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-blue-400 text-xs font-bold uppercase tracking-widest"
                  >
                    {loadingSteps[currentStep]?.label || "Finalisation"}
                  </motion.span>
                </AnimatePresence>
                <span className="text-slate-500 text-xs font-mono">{Math.round(progress)}%</span>
              </div>

              {/* Barre de chargement stylisée */}
              <div className="h-[4px] w-full bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-500 shadow-[0_0_15px_rgba(37,99,235,0.6)]"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.5 }}
                />
              </div>
            </div>

            {/* Sous-titre discret */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              className="mt-8 text-[10px] text-white uppercase tracking-[0.4em]"
            >
              Cordialis Groups
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
