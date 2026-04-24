import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaGithub, FaLinkedin, FaEnvelope, FaInstagram,
  FaFacebook, FaWhatsapp, FaBuilding, FaMapMarkerAlt, FaPhone
} from 'react-icons/fa';
import { contact } from '../assets/assets.js';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    Email: FaEnvelope,
    LinkedIn: FaLinkedin,
    GitHub: FaGithub,
    Instagram: FaInstagram,
    Facebook: FaFacebook,
    WhatsApp: FaWhatsapp,
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 py-16 border-t border-slate-200 dark:border-blue-900/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Identité Groupe - Colonne Large */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-3 mb-6 group">
              <div className="p-2.5 bg-blue-700 rounded-xl shadow-lg shadow-blue-700/20 group-hover:scale-110 transition-transform">
                <FaBuilding className="text-white text-xl" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white leading-none">
                  CORDIALIS
                </span>
                <span className="text-[10px] font-black tracking-[0.3em] text-blue-700 dark:text-blue-500 uppercase mt-1">
                  Groups sarl
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm text-slate-500 dark:text-slate-400">
              Expertise multiservices en RD Congo. Nous cultivons vos 
              <span className="text-blue-700 dark:text-blue-500 font-semibold"> racines numériques </span> 
              pour bâtir une identité forte et pérenne.
            </p>
          </div>

          {/* Navigation Rapide */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-slate-900 dark:text-white font-bold uppercase tracking-widest text-xs mb-6 border-b-2 border-blue-700 pb-1">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/" className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">Accueil Officiel</Link></li>
              <li><Link to="/about" className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">Notre Groupe</Link></li>
              <li><Link to="/services" className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">Expertises</Link></li>
              <li><Link to="/contact" className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">Nous Contacter</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col items-center lg:items-end">
            <h4 className="text-slate-900 dark:text-white font-bold uppercase tracking-widest text-xs mb-6 border-b-2 border-blue-700 pb-1">
              Liaisons
            </h4>
            <div className="flex flex-wrap justify-center lg:justify-end gap-3 mb-6">
              {contact.map((item) => {
                const Icon = socialIcons[item.label];
                if (!Icon) return null;
                return (
                  <a
                    key={item.label}
                    href={item.label === 'Email' ? `mailto:${item.link}` : item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-500 dark:text-slate-400 hover:text-white hover:bg-blue-700 dark:hover:bg-blue-700 hover:border-blue-700 transition-all duration-300 shadow-sm"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest space-y-1 text-center lg:text-right">
              <p className="flex items-center justify-center lg:justify-end gap-2">
                <FaPhone className="text-blue-700" /> +243 811 349 537
              </p>
              <p className="flex items-center justify-center lg:justify-end gap-2">
                <FaMapMarkerAlt className="text-blue-700" /> Kinshasa, Kasa-Vubu (HQ)
              </p>
            </div>
          </div>
        </div>

       {/* Barre de conformité - Bottom */}
<div className="pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-widest font-black uppercase">
  
  {/* Section Logo + Copyright */}
  <div className="flex flex-col md:flex-row items-center gap-4">
    {/* Logo CORDIALIS intégré */}
    <div 
      className="flex items-center cursor-pointer group"
      onClick={() => navigate('/')}
    >
      <div className="relative h-12 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105 flex items-center">
        <img 
          src="/logo_paysage.png" 
          alt="CORDIALIS GROUPS sarl" 
          className="h-full w-auto object-contain py-1" 
        />
      </div>
    </div>

    <p className="text-slate-400 dark:text-slate-600 text-center md:text-left">
      © {currentYear} <span className="text-blue-700">CORDIALIS GROUPS sarl. RCCM: CD/KNG/RCCM/25-B-00764.</span> — Excellence & Intégrité
    </p>
  </div>

  {/* Status & Links */}
  <div className="flex gap-6 text-slate-400 dark:text-slate-600">
    <span className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
      Systèmes Opérationnels
    </span>
    <span className="hover:text-blue-700 cursor-pointer transition-colors">Mentions Légales</span>
  </div>
</div>
</div>
    </footer>
  );
}
