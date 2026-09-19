import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  MessageSquare, 
  Mail, 
  Phone, 
  ChevronRight, 
  Star, 
  Users, 
  Heart,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { PEMBINA_PROFILES, PANGKALAN_INFO } from '../data/mockData';
import { PembinaProfile } from '../types';

export const TrainersProfile: React.FC = () => {
  const [selectedGudepFilter, setSelectedGudepFilter] = useState<'Semua' | '01.043' | '01.044' | 'Mabigus'>('Semua');

  const filteredProfiles = PEMBINA_PROFILES.filter((p) => {
    if (selectedGudepFilter === '01.043') return p.gudep.includes('01.043');
    if (selectedGudepFilter === '01.044') return p.gudep.includes('01.044');
    if (selectedGudepFilter === 'Mabigus') return p.gudep.includes('Mabigus');
    return true;
  });

  const dewanPenggalang = [
    { position: 'Pratama Putra (Ketua Pasukan Pa)', name: 'Raka Aditya Pratama (Kelas 8B)', regu: 'Pinru Rajawali' },
    { position: 'Pratama Putri (Ketua Pasukan Pi)', name: 'Salma Aulia Ramadhani (Kelas 8A)', regu: 'Pinru Melati' },
    { position: 'Kerani Pasukan (Sekretaris)', name: 'Ilham Syahputra (Kelas 8D)', regu: 'Regu Elang' },
    { position: 'Juru Uang Pasukan (Bendahara)', name: 'Anindya Khairunnisa (Kelas 8C)', regu: 'Regu Mawar' },
  ];

  return (
    <section id="pembina-section" className="py-12 bg-stone-100/60">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-200 text-amber-900 mb-2.5">
            <Award className="w-3.5 h-3.5 text-amber-800" />
            <span>Pendidik & Pelatih Kepramukaan Tersertifikasi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight font-heading">
            Profil Pembina & Dewan Penggalang
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
            Mengenal lebih dekat para Pembina Mahir Tingkat Lanjutan (KML) dan Dasar (KMD) Gudep 01.043 - 01.044 SMP PGRI 6 Bogor yang membimbing adik-adik dengan penuh keteladanan dan kasih sayang.
          </p>
        </div>

        {/* Filter Tab */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-stone-200 rounded-xl">
            {(['Semua', '01.043', '01.044', 'Mabigus'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedGudepFilter(filter)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedGudepFilter === filter
                    ? 'bg-amber-800 text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {filter === 'Semua' ? 'Semua Pembina' : filter === '01.043' ? 'Gudep 01.043 (Putra)' : filter === '01.044' ? 'Gudep 01.044 (Putri)' : 'Mabigus'}
              </button>
            ))}
          </div>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredProfiles.map((pembina) => (
            <div
              key={pembina.id}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pb-5 border-b border-stone-100">
                  <div className="relative flex-shrink-0">
                    <img
                      src={pembina.imageUrl}
                      alt={pembina.name}
                      referrerPolicy="no-referrer"
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-amber-600 shadow-md"
                    />
                    <div className="absolute -bottom-2 -right-1 bg-amber-800 text-amber-200 p-1 rounded-full shadow-xs">
                      <span className="text-xs">⚜</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 inline-block">
                      {pembina.gudep}
                    </span>
                    <h3 className="text-lg font-bold text-stone-900 leading-tight">
                      {pembina.name}
                    </h3>
                    <p className="text-xs font-semibold text-amber-800">
                      {pembina.role}
                    </p>
                    <p className="text-[11px] text-stone-500">
                      NTA Pramuka: <span className="font-mono font-semibold text-stone-700">{pembina.nta}</span>
                    </p>
                  </div>
                </div>

                {/* Qualification badge */}
                <div className="mt-4 p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-950 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-800 flex-shrink-0" />
                  <span className="font-semibold">{pembina.qualification}</span>
                </div>

                {/* Bio */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-3">
                  {pembina.bio}
                </p>

                {/* Key Achievements */}
                <div className="mt-4 space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
                    Penghargaan & Pengabdian:
                  </span>
                  {pembina.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-stone-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fast Consultation Actions */}
              <div className="mt-6 pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs text-stone-500 font-medium">
                  Pengalaman: <strong>{pembina.experienceYears} Tahun</strong>
                </span>

                <a
                  href={pembina.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs hover:shadow transition-all cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Konsultasi WhatsApp</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Struktur Dewan Penggalang */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100">
            <div className="w-10 h-10 rounded-xl bg-amber-800 text-white flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                Struktur Dewan Penggalang Inti (Adik-Adik Pemimpin Pasukan)
              </h3>
              <p className="text-xs text-stone-500">
                Masa Bakti 2026/2027 • Pasukan Penggalang Putra & Putri SMP PGRI 6 Bogor
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dewanPenggalang.map((dp, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60 space-y-1">
                <span className="text-[10px] uppercase font-bold text-amber-900 tracking-wider block">
                  {dp.position}
                </span>
                <h4 className="text-sm font-bold text-stone-900">
                  {dp.name}
                </h4>
                <p className="text-xs text-stone-600">
                  {dp.regu}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
