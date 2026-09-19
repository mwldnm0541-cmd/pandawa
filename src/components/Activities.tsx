import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Shirt, 
  Backpack, 
  CheckCircle2, 
  ChevronRight, 
  X, 
  AlertCircle,
  Sparkles,
  Filter
} from 'lucide-react';
import { INITIAL_ACTIVITIES } from '../data/mockData';
import { ActivityItem } from '../types';

export const Activities: React.FC = () => {
  const [activities, setActivities] = useState<ActivityItem[]>(INITIAL_ACTIVITIES);
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Perkemahan', 'Latihan Rutin', 'Perlombaan', 'Bakti Sosial'];

  const filteredActivities = activities.filter((act) => {
    if (filterCategory === 'Semua') return true;
    return act.category === filterCategory;
  });

  return (
    <section id="kegiatan-section" className="py-12 bg-stone-100/60">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-stone-200 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-200 text-amber-900 mb-2">
              <Calendar className="w-3.5 h-3.5 text-amber-800" />
              <span>Agenda & Warta Kegiatan Kepramukaan</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight font-heading">
              Informasi Kegiatan Pramuka
            </h2>
            <p className="text-stone-600 text-sm mt-1 max-w-2xl">
              Jadwal agenda perkemahan akbar, lomba tingkat kwartir, penjelajahan alam, dan bakti sosial masyarakat Pangkalan SMP PGRI 6 Bogor.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-amber-800 text-white shadow-sm'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Big Event Banner (if any) */}
        {filteredActivities.find(a => a.featured) && (
          <div className="mb-10">
            {(() => {
              const feat = filteredActivities.find(a => a.featured)!;
              return (
                <div 
                  onClick={() => setSelectedActivity(feat)}
                  className="group relative rounded-3xl overflow-hidden shadow-xl border-2 border-amber-500/40 bg-stone-900 text-white cursor-pointer transition-all hover:border-amber-400"
                >
                  <div className="absolute inset-0">
                    <img
                      src={feat.imageUrl}
                      alt={feat.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-transparent" />
                  </div>

                  <div className="relative p-6 sm:p-10 z-10 space-y-4 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                        Kegiatan Utama Terdekat
                      </span>
                      <span className="bg-stone-800/80 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-stone-700">
                        {feat.category}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight font-heading group-hover:text-amber-300 transition-colors">
                      {feat.title}
                    </h3>

                    <p className="text-stone-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {feat.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-stone-300 pt-2">
                      <span className="flex items-center gap-1.5 font-semibold text-amber-300">
                        <Calendar className="w-4 h-4 text-amber-400" /> {feat.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-amber-400" /> {feat.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-amber-400" /> {feat.location}
                      </span>
                    </div>

                    <div className="pt-2">
                      <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-400 group-hover:underline">
                        Lihat Petunjuk Teknis & Perlengkapan Wajib <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((act) => (
            <div
              key={act.id}
              onClick={() => setSelectedActivity(act)}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg border border-stone-200 transition-all cursor-pointer flex flex-col group"
            >
              <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                <img
                  src={act.imageUrl}
                  alt={act.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs ${
                  act.status === 'Akan Datang'
                    ? 'bg-amber-800 text-amber-100'
                    : 'bg-emerald-700 text-white'
                }`}>
                  {act.status}
                </span>

                <span className="absolute bottom-3 left-3 bg-stone-900/80 text-white text-[11px] font-semibold px-2.5 py-0.5 rounded backdrop-blur-xs">
                  {act.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-amber-700" />
                    <span>{act.date}</span>
                  </div>

                  <h4 className="text-base font-bold text-stone-900 leading-snug group-hover:text-amber-800 transition-colors">
                    {act.title}
                  </h4>

                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {act.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-stone-500 flex items-center gap-1 truncate max-w-[180px]">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    {act.location}
                  </span>
                  <span className="text-amber-800 font-bold group-hover:translate-x-0.5 transition-transform flex items-center">
                    Detail <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Activity Detail Modal Popup */}
        {selectedActivity && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
              <button
                onClick={() => setSelectedActivity(null)}
                className="absolute top-4 right-4 bg-stone-100 hover:bg-stone-200 text-stone-600 p-2 rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                    {selectedActivity.category}
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-stone-100 text-stone-700">
                    Status: {selectedActivity.status}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-stone-900 font-heading">
                  {selectedActivity.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {selectedActivity.description}
                </p>

                {/* Key Timetable & Location Table */}
                <div className="bg-amber-50/60 rounded-2xl p-4 border border-amber-200/60 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500 font-medium flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-800" /> Tanggal:
                    </span>
                    <span className="font-bold text-stone-900">{selectedActivity.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500 font-medium flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-800" /> Waktu:
                    </span>
                    <span className="font-bold text-stone-900">{selectedActivity.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500 font-medium flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-800" /> Tempat Pelaksanaan:
                    </span>
                    <span className="font-bold text-stone-900 text-right">{selectedActivity.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500 font-medium flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-amber-800" /> Sasaran Peserta:
                    </span>
                    <span className="font-bold text-stone-900 text-right">{selectedActivity.targetParticipants}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500 font-medium flex items-center gap-1.5">
                      <Shirt className="w-3.5 h-3.5 text-amber-800" /> Ketentuan Seragam:
                    </span>
                    <span className="font-bold text-stone-900 text-right">{selectedActivity.dressCode}</span>
                  </div>
                </div>

                {/* Equipment Packing List */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
                    <Backpack className="w-4 h-4 text-amber-800" />
                    Daftar Perlengkapan Wajib:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedActivity.equipment.map((eq, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{eq}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-stone-100 rounded-xl text-[11px] text-stone-600">
                  <strong>Catatan untuk Orang Tua:</strong> Surat izin resmi dan nomor kontak narahubung panitia pembina dapat diperoleh pada menu Pengumuman atau langsung menghubungi WhatsApp Pembina.
                </div>

                <div className="pt-2 text-center">
                  <button
                    onClick={() => setSelectedActivity(null)}
                    className="px-6 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs cursor-pointer"
                  >
                    Tutup Informasi
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
