import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import emailService from '../services/emailService';
import { 
  FaUser, FaEnvelope, FaPhone, FaBuilding, 
  FaTools, FaClock, FaPaperPlane, FaTimes, FaShieldAlt, FaLink
} from 'react-icons/fa';

const SERVICES = [
  { value: 'MCO & Surveillance Système', label: 'Maintien en Condition Opérationnelle (MCO)' },
  { value: 'Cyber-Défense & Continuité', label: 'Cyber-Défense & Continuité (PRA)' },
  { value: 'Interface Technique & Agile', label: 'Interface Client-Technique' },
  { value: 'E-Réputation & Gestion de Crise', label: 'E-Réputation & Gestion de Crise' },
];

const TIMELINES = [
  { value: 'urgent', label: "IMMÉDIAT (Alerte Sécurité)" },
  { value: '1-2-semaines', label: '1-2 semaines (Audit)' },
  { value: '1-2-mois', label: '1-2 mois (Projet)' },
  { value: 'flexible', label: 'Planification Flexible' },
];

const initialState = {
  name: '', email: '', phone: '', company: '',
  website: '', projectType: '', timeline: '', message: '',
};

const QuoteModal = ({ isOpen, onClose, defaultService }) => {
  const [formData, setFormData] = useState({ ...initialState, projectType: defaultService || '' });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) setFormData({ ...initialState, projectType: defaultService || '' });
  }, [isOpen, defaultService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Identité requise';
    if (!formData.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) newErrors.email = 'Email non conforme';
    if (!formData.projectType) newErrors.projectType = 'Sélectionnez un protocole';
    if (!formData.timeline) newErrors.timeline = 'Échéance requise';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    
    setLoading(true);
    try {
      const res = await emailService.sendQuoteRequest(formData);
      setResult(res);
      if (res.success) setTimeout(onClose, 2000);
    } catch {
      setResult({ success: false, message: "Échec de la transmission sécurisée." });
    }
    setLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl w-full max-w-xl relative overflow-hidden"
            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
          >
            {/* Header avec indicateur de sécurité */}
            <div className="bg-red-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <FaShieldAlt className="animate-pulse" />
                <span className="text-xs font-black uppercase tracking-widest">Demande d'Intervention Sécurisée</span>
              </div>
              <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
                <FaTimes size={20} />
              </button>
            </div>

            <div className="p-8 max-h-[80vh] overflow-y-auto">
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Identité */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-black text-red-500 uppercase ml-1">Nom / Identifiant</label>
                    <div className="relative mt-1">
                      <FaUser className="absolute left-3 top-3 text-slate-500" />
                      <input name="name" type="text" required value={formData.name} onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-white focus:border-red-600 transition-all outline-none"
                        placeholder="Agent/Client Name" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-red-500 uppercase ml-1">Email Canal Sécurisé</label>
                    <div className="relative mt-1">
                      <FaEnvelope className="absolute left-3 top-3 text-slate-500" />
                      <input name="email" type="email" required value={formData.email} onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-white focus:border-red-600 transition-all outline-none"
                        placeholder="contact@agency.com" />
                    </div>
                  </div>
                </div>

                {/* Société & Site */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <FaBuilding className="absolute left-3 top-3 text-slate-500" />
                    <input name="company" placeholder="Société / Agence" value={formData.company} onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-white outline-none" />
                  </div>
                  <div className="relative">
                    <FaLink className="absolute left-3 top-3 text-slate-500" />
                    <input name="website" placeholder="URL Site Web (si existant)" value={formData.website} onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-white outline-none" />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="text-[10px] font-black text-red-500 uppercase ml-1">Protocole d'intervention souhaité</label>
                  <div className="relative mt-1">
                    <FaTools className="absolute left-3 top-3 text-slate-500" />
                    <select name="projectType" value={formData.projectType} onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-white appearance-none focus:border-red-600 outline-none">
                      <option value="">Sélectionner un service...</option>
                      {SERVICES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                    </select>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label className="text-[10px] font-black text-red-500 uppercase ml-1">Échéance de déploiement</label>
                  <div className="relative mt-1">
                    <FaClock className="absolute left-3 top-3 text-slate-500" />
                    <select name="timeline" value={formData.timeline} onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-white appearance-none focus:border-red-600 outline-none">
                      <option value="">Niveau d'urgence...</option>
                      {TIMELINES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <textarea name="message" rows="3" placeholder="Détails techniques du projet ou incidents constatés..." value={formData.message} onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-white focus:border-red-600 transition-all outline-none resize-none" />

                {/* Status Message */}
                {result && (
                  <div className={`p-3 rounded-xl text-center text-sm font-bold ${result.success ? 'bg-green-900/20 text-green-500' : 'bg-red-900/20 text-red-500'}`}>
                    {result.message}
                  </div>
                )}

                {/* Submit */}
                <button type="submit" disabled={loading}
                  className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-3 disabled:opacity-50">
                  {loading ? "Chiffrement en cours..." : <><FaPaperPlane /> Envoyer la demande</>}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
