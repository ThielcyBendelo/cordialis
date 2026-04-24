import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignInAlt, FaSignOutAlt, FaTachometerAlt, FaHome, FaUser, FaCode, FaBriefcase, FaTools, FaBars, FaTimes, FaMoon, FaSun, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import authService from '../services/authService';
import audioService from '../services/audioService';
import analyticsService from '../services/analyticsService';
import notificationService from '../services/notificationService';

export default function NavbarSecured() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(audioService.isEnabled());
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    authService.initialize().then(() => {
      setIsAuthenticated(authService.isLoggedIn());
      setCurrentUser(authService.getCurrentUser());
    });
    const interval = setInterval(() => {
      setIsAuthenticated(authService.isLoggedIn());
      setCurrentUser(authService.getCurrentUser());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    audioService.playClick();
  };

  const navItems = [
    { href: '/', label: 'Accueil', icon: <FaHome /> },
    { href: '/about', label: 'À propos', icon: <FaUser /> },
    { href: '/services', label: 'Services', icon: <FaTools /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-blue-900/10 bg-white/90 dark:bg-slate-950/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
         {/* Logo CORDIALIS */}
<div 
  className="flex items-center cursor-pointer group"
  onClick={() => navigate('/')}
>
  {/* Augmentation de h-14 à h-20 (80px) et md:h-16 à md:h-24 (96px) */}
  <div className="relative h-20 md:h-40 w-auto transition-transform duration-300 group-hover:scale-105 flex items-center">
    <img 
      src="/logo_paysage.png" 
      alt="CORDIALIS GROUPS sarl" 
      className="h-full w-auto object-contain py-1" 
    />
  </div>
</div>



         {/* Navigation Desktop */}
<div className="hidden md:flex items-center gap-1">
  {navItems.map((item) => (
    <button
      key={item.href}
      onClick={() => navigate(item.href)}
      className="flex items-center gap-2 px-4 py-2 rounded-md text-slate-600 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all font-medium text-sm"
    >
      <span className="text-lg opacity-70">{item.icon}</span>
      <span>{item.label}</span>
    </button>
  ))}
</div>

          {/* Actions & Profil */}
          <div className="flex items-center gap-3">
            <button onClick={toggleTheme} className="text-slate-500 hover:text-blue-600 p-2">
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>

            {/* {isAuthenticated ? (
              <div className="flex items-center gap-3 pl-3 border-l border-slate-200 dark:border-slate-800">
                <div className="hidden sm:block text-right">
                  <p className="text-xs font-bold dark:text-white">{currentUser?.name || 'Utilisateur'}</p>
                  <p className="text-[10px] text-blue-500">Connecté</p>
                </div>
                <button 
                  onClick={() => authService.logout().then(() => navigate('/'))}
                  className="bg-slate-100 dark:bg-slate-800 p-2 rounded-full text-slate-600 hover:bg-red-50 hover:text-red-600 transition-all"
                >
                  <FaSignOutAlt />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => navigate('/login')}
                className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-full text-sm font-bold shadow-md transition-transform active:scale-95"
              >
                Connexion
              </button>
            )} */}
            
            {/* Mobile Toggle */}
            <button className="md:hidden text-2xl text-blue-900 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 p-4 space-y-2">
          {navItems.map((item) => (
            <button key={item.href} onClick={() => {navigate(item.href); setIsOpen(false)}} className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 text-slate-700 dark:text-slate-300">
              {item.icon} {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
