import React from 'react';
import { 
  Compass, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  ShieldCheck, 
  Heart,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { PANGKALAN_INFO } from '../data/mockData';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-amber-900/60 pt-14 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-stone-800">
          
          {/* Col 1: Identity & Scout Motto */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-700 to-amber-950 flex items-center justify-center p-2 shadow-md border border-amber-500/40 text-amber-300 text-2xl font-bold">
                ⚜
              </div>
              <div>
                <h3 className="font-extrabold text-white text-base font-heading">
                  GERAKAN PRAMUKA
                </h3>
                <p className="text-xs text-amber-400 font-semibold">
                  SMP PGRI 6 KOTA BOGOR
                </p>
                <p className="text-[11px] text-stone-400">
                  Gudep 01.043 (Pa) & 01.044 (Pi)
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              Mendidik generasi muda Indonesia yang berkarakter Pancasila, berkepribadian tangguh, berjiwa penolong sesama hidup, cinta alam, serta siap membangun masyarakat.
            </p>

            <div className="p-3 rounded-xl bg-stone-900 border-l-4 border-amber-500 text-xs">
              <span className="text-[10px] uppercase font-bold text-amber-400 block tracking-wider">
                Motto Pangkalan:
              </span>
              <span className="italic text-stone-200">
                "{PANGKALAN_INFO.motto}"
              </span>
            </div>
          </div>

          {/* Col 2: Fast Menu Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-stone-800 pb-2">
              Menu Utama
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('beranda')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-stone-600" /> Beranda Pangkalan
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('kegiatan')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-stone-600" /> Agenda & Persami
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pengumuman')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-stone-600" /> Warta Pengumuman
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('jadwal')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-stone-600" /> Jadwal Google Calendar
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('galeri')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-stone-600" /> Galeri Foto Kegiatan
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Scout Portal Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-stone-800 pb-2">
              Layanan Anggota & Ortu
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('pendaftaran')}
                  className="hover:text-amber-400 font-semibold text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500" /> Pendaftaran Anggota Baru (PPDB)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tugas')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-stone-600" /> Pengumpulan Tugas SKU & Sandi
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('nilai')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-stone-600" /> Cek Hasil & Nilai Tugas Siswa
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pembina')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-stone-600" /> Profil Pembina & Kualifikasi KML
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('lokasi-kontak')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-stone-600" /> Lokasi Sekolah & Konsultasi Ortu
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Base Camp */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-stone-800 pb-2">
              Sekretariat Pangkalan
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>{PANGKALAN_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>WhatsApp: +62 813-1234-5678</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>pramuka.smppgri6bogor@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Latihan: Sabtu, 08.00 - 11.30 WIB</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
          <p>
            © {new Date().getFullYear()} Gerakan Pramuka SMP PGRI 6 Bogor • Gugus Depan 01.043 - 01.044. Hak cipta dilindungi undang-undang.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-amber-400 font-semibold">Ikhlas Bakti Bina Bangsa, Berbudi Bawa Laksana</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
