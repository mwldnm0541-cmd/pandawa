import React, { useState } from 'react';
import { 
  Bell, 
  Menu, 
  X, 
  Compass, 
  Calendar, 
  FileText, 
  UserPlus, 
  Image as ImageIcon, 
  Award, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  AlertTriangle, 
  Info,
  Radio
} from 'lucide-react';
import { LiveNotification } from '../types';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  notifications: LiveNotification[];
  markNotificationAsRead: (id: string) => void;
  clearAllNotifications: () => void;
  onTriggerSimulatedBroadcast: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  notifications,
  markNotificationAsRead,
  clearAllNotifications,
  onTriggerSimulatedBroadcast
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNotificationPanel, setShowNotificationPanel] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const navLinks = [
    { id: 'beranda', label: 'Beranda', icon: Compass },
    { id: 'kegiatan', label: 'Kegiatan', icon: Calendar },
    { id: 'pengumuman', label: 'Pengumuman', icon: Info },
    { id: 'jadwal', label: 'Jadwal & Kalender', icon: Calendar },
    { id: 'galeri', label: 'Galeri Foto', icon: ImageIcon },
    { id: 'pendaftaran', label: 'Daftar Anggota', icon: UserPlus, highlight: true },
    { id: 'tugas', label: 'Tugas & SKU', icon: FileText },
    { id: 'nilai', label: 'Nilai Tugas', icon: Award },
    { id: 'pembina', label: 'Profil Pembina', icon: Award },
    { id: 'lokasi-kontak', label: 'Lokasi & Kontak', icon: MapPin },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-stone-900 text-stone-100 shadow-lg border-b border-amber-800/40 backdrop-blur-md">
      {/* Top Banner Ribbon */}
      <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-stone-900 px-4 py-1.5 text-xs text-amber-100/90 font-medium flex justify-between items-center border-b border-amber-700/30">
        <div className="container mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-amber-600/90 text-white tracking-wide shadow-sm">
              GUDEP 01.043 - 01.044
            </span>
            <span className="hidden sm:inline text-amber-200/90">
              Pangkalan SMP PGRI 6 Kota Bogor • Kwartir Cabang Kota Bogor
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onTriggerSimulatedBroadcast}
              className="inline-flex items-center gap-1 text-[11px] bg-amber-700/60 hover:bg-amber-600 text-amber-100 px-2.5 py-0.5 rounded-full transition-colors font-medium border border-amber-500/40 cursor-pointer"
              title="Coba simulasi pengumuman kilat real-time"
            >
              <Radio className="w-3 h-3 text-red-400 animate-pulse" />
              <span>Simulasi Notifikasi Siaga</span>
            </button>
            <span className="text-[11px] text-amber-300 font-semibold tracking-wider hidden md:inline">
              "Satyaku Kudarmakan, Darmaku Kubaktikan"
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-18">
          
          {/* Brand Logo & Gudep Title */}
          <div 
            onClick={() => handleNavClick('beranda')}
            className="flex items-center gap-3 cursor-pointer group select-none"
            id="nav-logo"
          >
            {/* Scout Emblem Badge */}
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-700 via-amber-800 to-amber-950 flex items-center justify-center p-2 shadow-md border border-amber-500/40 group-hover:border-amber-400 transition-all">
              <div className="text-center font-black leading-none text-amber-300 flex flex-col items-center">
                <span className="text-sm tracking-tighter">⚜</span>
                <span className="text-[9px] text-amber-100 font-extrabold uppercase">PGRI 6</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white font-heading">
                  PRAMUKA SMP PGRI 6
                </span>
                <span className="bg-amber-500/20 text-amber-300 text-[10px] font-bold px-1.5 py-0.5 rounded border border-amber-500/30">
                  BOGOR
                </span>
              </div>
              <p className="text-[11px] text-amber-200/80 font-medium">
                Gugus Depan 01.043 - 01.044
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-item-${item.id}`}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                    item.highlight 
                      ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-md font-bold ring-1 ring-amber-400/40' 
                      : isActive
                        ? 'bg-amber-800/80 text-amber-200 shadow-inner border border-amber-600/40 font-bold'
                        : 'text-stone-300 hover:text-white hover:bg-stone-800/80'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${item.highlight ? 'text-white' : isActive ? 'text-amber-400' : 'text-stone-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons (Notifications & Mobile Menu) */}
          <div className="flex items-center gap-2">
            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setShowNotificationPanel(!showNotificationPanel)}
                id="btn-notification-bell"
                className="relative p-2.5 rounded-lg text-stone-300 hover:text-white hover:bg-stone-800 focus:outline-none transition-colors cursor-pointer border border-stone-700/60"
                aria-label="Pusat Notifikasi"
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600 text-white text-[10px] font-bold items-center justify-center">
                      {unreadCount}
                    </span>
                  </span>
                )}
              </button>

              {/* Notification Popover Dropdown */}
              {showNotificationPanel && (
                <div 
                  id="notification-dropdown-panel"
                  className="absolute right-0 mt-3 w-80 sm:w-96 bg-stone-900 border border-stone-700 rounded-xl shadow-2xl z-50 overflow-hidden text-stone-200 animate-in fade-in zoom-in-95 duration-150"
                >
                  <div className="p-3 bg-stone-800 border-b border-stone-700 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bell className="w-4 h-4 text-amber-400" />
                      <h4 className="font-bold text-sm text-white">Notifikasi Terkini</h4>
                      {unreadCount > 0 && (
                        <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                          {unreadCount} baru
                        </span>
                      )}
                    </div>
                    {unreadCount > 0 && (
                      <button
                        onClick={clearAllNotifications}
                        className="text-xs text-amber-400 hover:text-amber-300 underline font-medium cursor-pointer"
                      >
                        Tandai semua dibaca
                      </button>
                    )}
                  </div>

                  <div className="max-h-80 overflow-y-auto divide-y divide-stone-800">
                    {notifications.length === 0 ? (
                      <div className="p-6 text-center text-stone-400 text-xs">
                        Belum ada notifikasi baru.
                      </div>
                    ) : (
                      notifications.map((notif) => (
                        <div
                          key={notif.id}
                          onClick={() => {
                            markNotificationAsRead(notif.id);
                            if (notif.linkTab) {
                              handleNavClick(notif.linkTab);
                              setShowNotificationPanel(false);
                            }
                          }}
                          className={`p-3 transition-colors cursor-pointer hover:bg-stone-800 flex items-start gap-3 ${
                            !notif.read ? 'bg-amber-950/30' : ''
                          }`}
                        >
                          <div className="mt-0.5">
                            {notif.type === 'urgent' && (
                              <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
                            )}
                            {notif.type === 'success' && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            )}
                            {notif.type === 'info' && (
                              <Info className="w-4 h-4 text-blue-400 flex-shrink-0" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className={`text-xs font-semibold truncate ${!notif.read ? 'text-amber-300' : 'text-stone-300'}`}>
                                {notif.title}
                              </p>
                              <span className="text-[10px] text-stone-500 ml-2 whitespace-nowrap">
                                {notif.timestamp}
                              </span>
                            </div>
                            <p className="text-xs text-stone-400 line-clamp-2 mt-0.5">
                              {notif.message}
                            </p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  <div className="p-2.5 bg-stone-950/80 border-t border-stone-800 text-center">
                    <button
                      onClick={() => {
                        setShowNotificationPanel(false);
                        handleNavClick('pengumuman');
                      }}
                      className="text-xs text-amber-400 hover:text-amber-300 font-semibold cursor-pointer"
                    >
                      Buka Papan Pengumuman Lengkap →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="btn-mobile-menu-toggle"
              className="xl:hidden p-2.5 rounded-lg text-stone-300 hover:text-white hover:bg-stone-800 focus:outline-none transition-colors cursor-pointer border border-stone-700/60"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-drawer-menu"
          className="xl:hidden bg-stone-900 border-b border-stone-800 px-4 py-3 space-y-1 shadow-2xl animate-in slide-in-from-top-2 duration-150"
        >
          <div className="grid grid-cols-2 gap-1.5 pb-2 border-b border-stone-800">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`p-2.5 rounded-lg text-xs font-semibold flex items-center gap-2 cursor-pointer ${
                    item.highlight
                      ? 'bg-amber-600 text-white font-bold col-span-2 justify-center shadow-md'
                      : isActive
                        ? 'bg-amber-800 text-amber-200 font-bold border border-amber-600/40'
                        : 'text-stone-300 hover:bg-stone-800'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${item.highlight ? 'text-white' : isActive ? 'text-amber-400' : 'text-stone-400'}`} />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-stone-400 px-1">
            <span>Kontak Pangkalan:</span>
            <a 
              href="https://wa.me/6281234567890" 
              target="_blank" 
              rel="noreferrer" 
              className="text-emerald-400 font-semibold hover:underline flex items-center gap-1"
            >
              <Phone className="w-3 h-3" /> WhatsApp Pembina
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
