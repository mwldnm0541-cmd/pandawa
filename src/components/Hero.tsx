import React, { useState } from 'react';
import { 
  Compass, 
  Calendar, 
  UserPlus, 
  Award, 
  ShieldCheck, 
  Flame, 
  ArrowRight, 
  ChevronRight, 
  BookOpen, 
  CheckCircle,
  Users,
  Trophy,
  MapPin,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { PANGKALAN_INFO, INITIAL_ANNOUNCEMENTS } from '../data/mockData';

interface HeroProps {
  onNavigate: (tab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [showDarmaModal, setShowDarmaModal] = useState(false);
  const latestAnnouncement = INITIAL_ANNOUNCEMENTS[0];

  return (
    <div className="relative bg-gradient-to-b from-stone-900 via-amber-950/40 to-stone-900 text-stone-100 overflow-hidden border-b border-amber-800/30">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Live Broadcast Ticker */}
      {latestAnnouncement && (
        <div className="bg-amber-950/90 border-b border-amber-700/50 py-2 px-4">
          <div className="container mx-auto flex items-center justify-between text-xs sm:text-sm gap-2">
            <div className="flex items-center gap-2 overflow-hidden">
              <span className="flex h-2.5 w-2.5 relative flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
              </span>
              <span className="bg-amber-800 text-amber-100 text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase flex-shrink-0">
                Warta Terkini
              </span>
              <p className="truncate text-amber-200/90 font-medium">
                {latestAnnouncement.title}
              </p>
            </div>
            <button
              onClick={() => onNavigate('pengumuman')}
              className="text-amber-400 hover:text-amber-300 text-xs font-semibold underline flex items-center gap-1 flex-shrink-0 cursor-pointer"
            >
              Baca Lengkap <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Main Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 pt-10 pb-14 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Gerakan Pramuka Gugus Depan 01.043 - 01.044</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-stone-800/90 text-stone-300 border border-stone-700">
                <MapPin className="w-3 h-3 text-amber-400" />
                <span>SMP PGRI 6 Kota Bogor</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight font-heading">
                Membentuk Generasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">Tangguh, Mandiri</span> & Berakhlak Mulia
              </h1>
              <p className="text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed">
                Selamat datang di portal resmi Pasukan Penggalang Putra (Gudep 01.043) dan Putri (Gudep 01.044) Pangkalan SMP PGRI 6 Kota Bogor. Wadah pembinaan karakter, ketangkasan rimba, kepemimpinan, dan persaudaraan sejati.
              </p>
            </div>

            {/* Slogan Motto Ribbon */}
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-900/60 to-stone-900 border-l-4 border-amber-500 text-stone-200">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-amber-400">
                    Motto Gerakan Pramuka
                  </p>
                  <p className="text-sm font-semibold italic text-white">
                    "{PANGKALAN_INFO.motto}"
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('pendaftaran')}
                id="hero-btn-pendaftaran"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-sm shadow-xl shadow-amber-900/40 hover:shadow-amber-900/60 transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <UserPlus className="w-4 h-4" />
                <span>Pendaftaran Anggota Baru (PPDB)</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={() => onNavigate('jadwal')}
                id="hero-btn-jadwal"
                className="px-5 py-3 rounded-xl bg-stone-800/90 hover:bg-stone-700 text-amber-200 hover:text-white font-semibold text-sm border border-stone-700 hover:border-amber-500/50 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Jadwal Latihan & Google Calendar</span>
              </button>

              <button
                onClick={() => setShowDarmaModal(true)}
                id="hero-btn-darma"
                className="px-4 py-3 rounded-xl bg-transparent hover:bg-stone-800/50 text-stone-300 hover:text-white font-medium text-sm transition-all flex items-center gap-1.5 cursor-pointer underline underline-offset-4"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Tri Satya & Dasa Darma</span>
              </button>
            </div>
          </div>

          {/* Right Hero Card / Quick Feature Grid */}
          <div className="lg:col-span-5">
            <div className="bg-stone-900/90 border border-amber-700/40 rounded-2xl p-5 shadow-2xl backdrop-blur-sm space-y-4">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center text-white font-bold text-sm">
                    ⚜
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Informasi Cepat Pangkalan</h3>
                    <p className="text-[11px] text-stone-400">Gudep 01.043 (Pa) & 01.044 (Pi)</p>
                  </div>
                </div>
                <span className="bg-emerald-500/20 text-emerald-300 text-[11px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Aktif Semester Ganjil
                </span>
              </div>

              {/* Stat Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-stone-800/70 border border-stone-700/60 rounded-xl p-3 text-center">
                  <p className="text-2xl font-black text-amber-400 font-heading">
                    {PANGKALAN_INFO.stats.totalAnggota}+
                  </p>
                  <p className="text-xs text-stone-300 font-medium mt-0.5">
                    Anggota Penggalang Aktif
                  </p>
                </div>
                <div className="bg-stone-800/70 border border-stone-700/60 rounded-xl p-3 text-center">
                  <p className="text-2xl font-black text-amber-400 font-heading">
                    {PANGKALAN_INFO.stats.pembinaBersertifikat}
                  </p>
                  <p className="text-xs text-stone-300 font-medium mt-0.5">
                    Pembina KML & KMD
                  </p>
                </div>
                <div className="bg-stone-800/70 border border-stone-700/60 rounded-xl p-3 text-center">
                  <p className="text-2xl font-black text-amber-400 font-heading">
                    {PANGKALAN_INFO.stats.prestasiJuara}
                  </p>
                  <p className="text-xs text-stone-300 font-medium mt-0.5">
                    Trophy & Prestasi Lomba
                  </p>
                </div>
                <div className="bg-stone-800/70 border border-stone-700/60 rounded-xl p-3 text-center">
                  <p className="text-2xl font-black text-amber-400 font-heading">
                    {PANGKALAN_INFO.stats.reguAktif}
                  </p>
                  <p className="text-xs text-stone-300 font-medium mt-0.5">
                    Regu Putra & Putri
                  </p>
                </div>
              </div>

              {/* Quick Navigation Cards */}
              <div className="space-y-2 pt-1">
                <div 
                  onClick={() => onNavigate('tugas')}
                  className="p-3 bg-stone-800/60 hover:bg-stone-800 border border-stone-700/60 rounded-xl flex items-center justify-between cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-900/60 text-amber-400 group-hover:bg-amber-700 group-hover:text-white transition-colors">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                        Pengiriman Tugas SKU & Sandi
                      </h4>
                      <p className="text-[11px] text-stone-400">
                        Upload video simpul, peta pita, & buku saku
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                </div>

                <div 
                  onClick={() => onNavigate('nilai')}
                  className="p-3 bg-stone-800/60 hover:bg-stone-800 border border-stone-700/60 rounded-xl flex items-center justify-between cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-900/60 text-emerald-400 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                        Cek Nilai & Status SKU Siswa
                      </h4>
                      <p className="text-[11px] text-stone-400">
                        Akses nilai tugas Ramu, Rakit, dan Terap
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                </div>

                <div 
                  onClick={() => onNavigate('lokasi-kontak')}
                  className="p-3 bg-stone-800/60 hover:bg-stone-800 border border-stone-700/60 rounded-xl flex items-center justify-between cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-900/60 text-blue-400 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors">
                        Peta Lokasi Pangkalan & Konsultasi Ortu
                      </h4>
                      <p className="text-[11px] text-stone-400">
                        Ciwaringin, Bogor Tengah & WhatsApp Pembina
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Tri Satya & Dasa Darma Modal Popup */}
      {showDarmaModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-stone-900 border border-amber-700/60 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 text-stone-100 shadow-2xl relative">
            <button
              onClick={() => setShowDarmaModal(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-white bg-stone-800 p-2 rounded-lg"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 pb-4 border-b border-stone-800">
              <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-white text-xl">
                ⚜
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-heading">
                  Kode Kehormatan Pramuka Penggalang
                </h3>
                <p className="text-xs text-amber-300">
                  Gudep 01.043 - 01.044 SMP PGRI 6 Kota Bogor
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-6">
              {/* Tri Satya */}
              <div className="bg-stone-800/80 rounded-xl p-4 border border-stone-700">
                <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                  Tri Satya (Janji Pramuka Penggalang)
                </h4>
                <p className="text-xs text-stone-300 italic mb-3">
                  Demi kehormatanku aku berjanji akan bersungguh-sungguh:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-stone-200 leading-relaxed pl-1">
                  {PANGKALAN_INFO.triSatya.map((item, idx) => (
                    <li key={idx} className="pl-1">
                      {item}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Dasa Darma */}
              <div className="bg-stone-800/80 rounded-xl p-4 border border-stone-700">
                <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2 mb-2">
                  <Flame className="w-4 h-4 text-amber-400" />
                  Dasa Darma (Ketentuan Moral Pramuka)
                </h4>
                <p className="text-xs text-stone-300 mb-3 italic">
                  Pramuka itu:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-stone-200 leading-relaxed pl-1">
                  {PANGKALAN_INFO.dasaDarma.map((darma, idx) => (
                    <li key={idx} className="pl-1">
                      <span className="font-semibold text-amber-200">{darma}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800 text-center">
              <button
                onClick={() => setShowDarmaModal(false)}
                className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm cursor-pointer"
              >
                Tutup Panduan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
