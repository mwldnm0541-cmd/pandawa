import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Bus, 
  Car, 
  ExternalLink, 
  Compass, 
  Building2, 
  CheckCircle2,
  Phone,
  Clock
} from 'lucide-react';
import { PANGKALAN_INFO } from '../data/mockData';

export const LocationMap: React.FC = () => {
  const [activeZone, setActiveZone] = useState<string>('sanggar');

  const basecampZones = [
    {
      id: 'sanggar',
      name: 'Sanggar Pramuka Gudep 01.043 - 01.044',
      desc: 'Pusat administrasi regu, rapat dewan penggalang, penyimpanan piala kejuaraan, dan inventaris bendera.',
      icon: '⚜'
    },
    {
      id: 'lapangan',
      name: 'Lapangan Utama Pangkalan',
      desc: 'Tempat upacara pembukaan/penutupan latihan mingguan, praktik baris-berbaris tongkat (LKBBT), dan morse bendera.',
      icon: '🚩'
    },
    {
      id: 'gudang',
      name: 'Gudang Pionering & Tenda',
      desc: 'Tempat penyimpanan 80 tongkat pramuka berstandar, ratusan meter tali rami/pandu, 14 unit tenda dome dan regu, serta pasak.',
      icon: '⛺'
    },
    {
      id: 'uks',
      name: 'Pos Medis & UKS Sekolah',
      desc: 'Fasilitas pertolongan pertama (P3K) dan ruang istirahat bila ada anggota yang memerlukan penanganan kesehatan ringan saat latihan.',
      icon: '🩺'
    }
  ];

  return (
    <section id="lokasi-section" className="py-12 bg-amber-50/40 border-t border-stone-200">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-200 text-amber-900 mb-2.5">
            <MapPin className="w-3.5 h-3.5 text-amber-800" />
            <span>Peta Lokasi & Pangkalan SMP PGRI 6 Kota Bogor</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight font-heading">
            Lokasi Pangkalan & Panduan Rute
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
            Pangkalan Gerakan Pramuka Gudep 01.043 - 01.044 berpusat di kampus SMP PGRI 6 Bogor, kawasan strategis di jantung Kota Bogor yang mudah dijangkau angkutan umum.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Google Maps Embed */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-4 shadow-sm border border-stone-200 flex flex-col justify-between">
            <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-stone-200 shadow-inner">
              <iframe
                title="Peta Lokasi SMP PGRI 6 Bogor"
                src={PANGKALAN_INFO.mapCoordinates.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5">
                <span className="font-bold text-stone-900 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-700" /> Alamat Pangkalan:
                </span>
                <p className="text-stone-600">{PANGKALAN_INFO.address}</p>
              </div>

              <a
                href={PANGKALAN_INFO.mapCoordinates.googleMapsLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold transition-all shadow-sm cursor-pointer whitespace-nowrap"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Buka Petunjuk Arah (Navigasi)</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Transit Guide & Base Camp Facilities */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Panduan Angkutan Kota Bogor */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-200 space-y-3.5">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Bus className="w-4 h-4 text-amber-700" />
                <span>Akses Transportasi Umum Kota Bogor</span>
              </h3>

              <div className="space-y-2.5 text-xs text-stone-600">
                <div className="p-2.5 rounded-xl bg-amber-50/60 border border-amber-200/50">
                  <span className="font-bold text-amber-950 block">Dari Stasiun KRL Bogor:</span>
                  <span>Naik Angkot 02 atau 03 jurusan Pasar Anyar / Merdeka, turun di simpang Ciwaringin (± 8 menit perjalanan).</span>
                </div>
                <div className="p-2.5 rounded-xl bg-amber-50/60 border border-amber-200/50">
                  <span className="font-bold text-amber-950 block">Dari Terminal Baranangsiang:</span>
                  <span>Naik Biskita Trans Pakuan Koridor 1 atau 2 menuju Juanda, dilanjutkan Angkot 03 ke Jl. Ciwaringin.</span>
                </div>
                <div className="p-2.5 rounded-xl bg-amber-50/60 border border-amber-200/50">
                  <span className="font-bold text-amber-950 block">Kendaraan Pribadi / Antar-Jemput Orang Tua:</span>
                  <span>Tersedia area parkir aman di halaman sekolah untuk penjemputan anggota seusai latihan hari Sabtu.</span>
                </div>
              </div>
            </div>

            {/* Denah Zona Pangkalan Kepramukaan */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-200 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-amber-700" />
                  <span>Zona Fasilitas Pangkalan Pramuka</span>
                </h3>
                <span className="text-[11px] text-stone-500">Klik zona</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {basecampZones.map((zone) => (
                  <button
                    key={zone.id}
                    onClick={() => setActiveZone(zone.id)}
                    className={`p-2.5 rounded-xl text-left border transition-all text-xs cursor-pointer ${
                      activeZone === zone.id
                        ? 'bg-amber-800 text-white border-amber-800 shadow-sm'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <span className="text-base mr-1">{zone.icon}</span>
                    <span className="font-bold block truncate mt-0.5">{zone.name}</span>
                  </button>
                ))}
              </div>

              {/* Active Zone Detail Box */}
              {(() => {
                const cur = basecampZones.find(z => z.id === activeZone)!;
                return (
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-300/80 text-xs text-amber-950 animate-in fade-in">
                    <p className="font-bold text-amber-900 mb-0.5">{cur.name}</p>
                    <p className="text-stone-700 leading-relaxed">{cur.desc}</p>
                  </div>
                );
              })()}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
