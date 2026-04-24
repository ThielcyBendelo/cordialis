import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaBuilding, FaRoute } from "react-icons/fa";

function GoogleMapsSection() {
  return (
    <section className="py-24 px-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-500" id="localisation">
      <div className="max-w-5xl mx-auto">
        
        {/* Header de section Institutionnel */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-blue-600/10 rounded-2xl">
              <FaBuilding className="text-blue-700 text-3xl" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
            Ancrage <span className="text-blue-700">Géographique</span>
          </h2>
          <div className="h-1.5 w-16 bg-blue-700 mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-slate-500 dark:text-slate-400 font-medium italic">
            "Des racines locales pour un rayonnement international."
          </p>
        </div>

        {/* Conteneur Carte et Infos */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Carte Google Maps (Style Épuré) */}
            <div className="lg:col-span-7 h-[400px] relative">
              <iframe
                title="Google Maps localisation"
                src="https://www.google.com/maps?q=Avenue+Kimwenza+A%2FA25,+Kinshasa,+DR+Congo&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.2) contrast(1.1)" }} 
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Infos de contact style Corporate */}
            <div className="lg:col-span-5 p-10 flex flex-col justify-center bg-white dark:bg-slate-900">
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                    <FaMapMarkerAlt className="text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-blue-700 dark:text-blue-500 uppercase tracking-[0.2em] mb-1">Siège Social</h4>
                    <p className="text-slate-700 dark:text-slate-200 text-sm font-bold leading-relaxed">
                      Avenue Dibaya, 61B,<br />
                      Commune de Kasa-Vubu, Kinshasa, RDC
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                    <FaPhoneAlt className="text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-blue-700 dark:text-blue-500 uppercase tracking-[0.2em] mb-1">Secrétariat</h4>
                    <p className="text-slate-700 dark:text-slate-200 text-sm font-bold">+243 811 349 537</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                    <FaEnvelope className="text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-blue-700 dark:text-blue-500 uppercase tracking-[0.2em] mb-1">Correspondance</h4>
                    <p className="text-slate-700 dark:text-slate-200 text-sm font-bold break-all">cordialisgroups@gmail.com</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => window.open('https://www.google.com/maps?q=Avenue+Kimwenza+A%2FA25,+Kinshasa,+DR+Congo', '_blank')}
                className="mt-10 w-full py-4 bg-blue-700 hover:bg-blue-800 text-white text-xs font-black uppercase tracking-widest rounded-2xl transition-all shadow-xl shadow-blue-700/20 flex items-center justify-center gap-3 active:scale-95"
              >
                <FaRoute /> Lancer l'itinéraire
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-slate-400 text-[10px] mt-10 font-bold uppercase tracking-widest">
          © {new Date().getFullYear()} CORDIALIS GROUPS sarl — Excellence & Intégrité
        </p>
      </div>
    </section>
  );
}

export default GoogleMapsSection;
