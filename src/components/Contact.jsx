import { useState, useEffect } from 'react';
import { init, send } from '@emailjs/browser';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaWhatsapp, FaBuilding, FaPaperPlane, FaUserTie } from 'react-icons/fa';
import { contact } from '../assets/assets.js';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import notificationService from '../services/notificationService';
import analyticsService from '../services/analyticsService';
import messagingService from '../dashboard/services/messagingService';

const contactIcons = {
  Email: FaEnvelope, LinkedIn: FaLinkedin, GitHub: FaGithub,
  Instagram: FaInstagram, Facebook: FaFacebook, WhatsApp: FaWhatsapp,
};

export default function Contact() {
  const [elementRef, isVisible] = useIntersectionObserver();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) init(EMAILJS_PUBLIC_KEY);
  }, [EMAILJS_PUBLIC_KEY]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Transmission...' });
    analyticsService.trackEvent('contact_form_submit', { category: 'contact' });
    const loadingToast = notificationService.loading('Envoi de votre demande au siège...');

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      window.location.href = `mailto:ingebalouiscar@://gmail.com CORDIALIS - ${formData.name}&body=${formData.message}`;
      notificationService.dismiss(loadingToast);
      notificationService.success('Ouverture de votre messagerie...');
      return;
    }

    try {
      const templateParams = { from_name: formData.name, to_reply: formData.email, message: formData.message, to_email: 'ingebalouiscar@gmail.com' };
      await send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
      await messagingService.addMessage({ ...formData, source: 'web_contact', timestamp: new Date().toISOString() });

      notificationService.dismiss(loadingToast);
      notificationService.formSuccess('Votre demande a été transmise avec succès !');
      setStatus({ type: 'success', message: 'Envoyé.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      notificationService.dismiss(loadingToast);
      notificationService.error('Échec de l\'envoi.');
      setStatus({ type: 'error', message: 'Erreur.' });
    }
  };

  return (
    <section ref={elementRef} className="py-24 px-6 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-500">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        {/* Header Institutionnel */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4 text-blue-700">
            <FaBuilding size={35} className="opacity-80" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Contactez le <span className="text-blue-700 text-shadow-sm">Groupe</span>
          </h2>
          <div className="h-1.5 w-16 bg-blue-700 mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Étude de projet, partenariat stratégique ou demande de cotation.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Formulaire Professionnel */}
          <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-700"></div>
            
            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest ml-1">Votre Identité</label>
                <input name="name" type="text" required value={formData.name} onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-5 py-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-700/20 outline-none transition-all"
                  placeholder="Nom ou Raison Sociale" />
              </div>

              <div>
                <label className="text-[10px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest ml-1">Adresse de Correspondance</label>
                <input name="email" type="email" required value={formData.email} onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-5 py-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-700/20 outline-none transition-all"
                  placeholder="cordialisgroups@gmail.com" />
              </div>

              <div>
                <label className="text-[10px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest ml-1">Objet de la demande</label>
                <textarea name="message" required rows="5" value={formData.message} onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-5 py-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-700/20 outline-none transition-all resize-none"
                  placeholder="Détaillez votre projet ou vos besoins..." />
              </div>

              <button type="submit" className="w-full py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl shadow-lg shadow-blue-700/20 flex items-center justify-center gap-3 transition-all hover:-translate-y-1 active:scale-95">
                <FaPaperPlane className="text-sm" /> 
                {status.type === 'loading' ? 'Traitement en cours...' : 'Envoyer la demande'}
              </button>
            </div>
          </form>

          {/* Social & Réseaux Professionnels */}
          <div className="space-y-8">
            <div className="p-8 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[2rem] shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <FaUserTie className="text-blue-700" /> Liaisons Directes
              </h3>
              <div className="grid grid-cols-3 gap-5">
                {contact.map((item) => {
                  const Icon = contactIcons[item.label];
                  if (!Icon) return null;
                  return (
                    <a key={item.label} href={item.link} target="_blank" rel="noopener noreferrer"
                      className="flex flex-col items-center gap-3 p-5 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl hover:border-blue-700 hover:shadow-md transition-all text-slate-400 group">
                      <Icon size={22} className="group-hover:text-blue-700 group-hover:scale-110 transition-all duration-300" />
                      <span className="text-[9px] font-black uppercase tracking-tighter text-slate-500">{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="p-8 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20 rounded-[2rem]">
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed text-center italic">
                "Notre équipe s'engage à traiter votre demande sous 24 à 48 heures ouvrables. CORDIALIS GROUPS sarl garantit la confidentialité totale de vos échanges."
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
