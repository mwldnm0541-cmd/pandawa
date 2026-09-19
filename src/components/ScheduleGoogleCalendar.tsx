import React, { useState, useEffect } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  UserCheck, 
  ExternalLink, 
  Download, 
  CheckSquare, 
  Sparkles,
  ChevronRight,
  Share2,
  CalendarDays,
  ShieldAlert
} from 'lucide-react';
import { TRAINING_SCHEDULES, PANGKALAN_INFO } from '../data/mockData';
import { TrainingSchedule } from '../types';

export const ScheduleGoogleCalendar: React.FC = () => {
  const [selectedSchedule, setSelectedSchedule] = useState<TrainingSchedule>(TRAINING_SCHEDULES[0]);
  const [copiedNotification, setCopiedNotification] = useState(false);

  // Generate downloadable .ics calendar file
  const downloadIcsFile = (sched: TrainingSchedule) => {
    // Format date string YYYYMMDDTHHmmssZ
    const cleanDate = sched.date.replace(/-/g, '');
    const startTime = `${cleanDate}T010000Z`; // 08:00 WIB = 01:00 UTC
    const endTime = `${cleanDate}T043000Z`;   // 11:30 WIB = 04:30 UTC

    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Pramuka SMP PGRI 6 Bogor//Gudep 01.043-01.044//ID',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:pramuka-pgri6-${sched.id}@smppgri6bogor.sch.id`,
      `SUMMARY:Latihan Pramuka SMP PGRI 6: ${sched.topic}`,
      `DESCRIPTION:${sched.description} | Instruktur: ${sched.instructor}`,
      `LOCATION:${sched.location}`,
      `DTSTART:${startTime}`,
      `DTEND:${endTime}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `Latihan_Pramuka_SMP_PGRI6_${sched.date}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyEventShareLink = (sched: TrainingSchedule) => {
    navigator.clipboard.writeText(
      `⚜ Jadwal Latihan Pramuka SMP PGRI 6 Bogor (Gudep 01.043 - 01.044)\n` +
      `📅 ${sched.day}, ${sched.date}\n` +
      `⏰ ${sched.time}\n` +
      `📌 Materi: ${sched.topic}\n` +
      `📍 Tempat: ${sched.location}\n` +
      `Pembina: ${sched.instructor}\n` +
      `Simpan ke Google Calendar: ${sched.googleCalendarUrl}`
    );
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 3000);
  };

  return (
    <section id="jadwal-section" className="py-12 bg-stone-100/70">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-200 text-amber-900 mb-2.5">
            <CalendarDays className="w-3.5 h-3.5 text-amber-800" />
            <span>Sinkronisasi Kalender Digital Terpadu</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight font-heading">
            Jadwal Latihan Mingguan & Google Calendar
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
            Latihan rutin diselenggarakan setiap hari <strong>Sabtu pukul 08.00 - 11.30 WIB</strong>. Seluruh materi, lokasi sanggar, dan perlengkapan dapat langsung disimpan ke kalender Google di ponsel pintar anggota dan orang tua.
          </p>
        </div>

        {/* Share Copied Notification */}
        {copiedNotification && (
          <div className="max-w-md mx-auto mb-6 p-3 rounded-xl bg-emerald-700 text-white text-xs font-semibold text-center shadow-lg animate-in fade-in">
            ✓ Detail jadwal disalin! Siap dibagikan ke WhatsApp grup regu atau orang tua.
          </div>
        )}

        {/* Grid: Training Schedules & Deep Event Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Timeline List of Weekly Schedules */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between px-1 mb-1">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <span>Agenda Latihan Semester Ini</span>
                <span className="text-[11px] bg-amber-700 text-white px-2 py-0.5 rounded-full font-bold">
                  {TRAINING_SCHEDULES.length} Sesi Terjadwal
                </span>
              </h3>
              <span className="text-xs text-stone-500 font-medium">Klik untuk rincian</span>
            </div>

            {TRAINING_SCHEDULES.map((sched) => {
              const isSelected = selectedSchedule.id === sched.id;
              return (
                <div
                  key={sched.id}
                  onClick={() => setSelectedSchedule(sched)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-amber-600 shadow-md ring-2 ring-amber-500/20'
                      : 'bg-white/80 border-stone-200 hover:border-amber-400 hover:bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      {/* Week Badge */}
                      <div className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center font-black flex-shrink-0 ${
                        isSelected 
                          ? 'bg-amber-800 text-white shadow-sm' 
                          : 'bg-stone-100 text-stone-700'
                      }`}>
                        <span className="text-[10px] uppercase font-bold tracking-tight">Minggu</span>
                        <span className="text-lg leading-none font-heading">{sched.weekNumber}</span>
                      </div>

                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                          <span className="font-bold text-amber-800 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" /> {sched.day}, {sched.date}
                          </span>
                          <span className="text-stone-400">•</span>
                          <span className="text-stone-600 font-medium">{sched.time}</span>
                        </div>

                        <h4 className="font-bold text-stone-900 text-sm sm:text-base leading-snug">
                          {sched.topic}
                        </h4>

                        <p className="text-xs text-stone-600 line-clamp-1">
                          {sched.description}
                        </p>
                      </div>
                    </div>

                    <ChevronRight className={`w-5 h-5 flex-shrink-0 mt-2 transition-transform ${
                      isSelected ? 'text-amber-700 translate-x-1' : 'text-stone-300'
                    }`} />
                  </div>

                  {/* Fast Action Buttons in Card */}
                  <div className="mt-3.5 pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] text-stone-500 flex items-center gap-1">
                      <UserCheck className="w-3.5 h-3.5 text-stone-400" />
                      {sched.instructor}
                    </span>

                    <div className="flex items-center gap-2">
                      <a
                        href={sched.googleCalendarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 transition-colors"
                        title="Simpan ke Google Calendar Anda"
                      >
                        <ExternalLink className="w-3 h-3 text-amber-700" />
                        <span>Google Calendar</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Schedule Inspection & Google Sync Station */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-white rounded-2xl border border-amber-700/30 p-6 shadow-xl space-y-5">
              
              <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center text-white font-bold text-lg">
                    📅
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-extrabold text-amber-800">
                      Rincian Latihan Terpilih
                    </span>
                    <h3 className="font-extrabold text-stone-900 text-base leading-tight">
                      Minggu Ke-{selectedSchedule.weekNumber}: {selectedSchedule.day}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => copyEventShareLink(selectedSchedule)}
                  className="p-2 rounded-lg bg-stone-100 hover:bg-amber-100 text-stone-600 hover:text-amber-800 transition-colors cursor-pointer"
                  title="Bagikan Info Latihan Ini"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              {/* Topic Headline */}
              <div className="space-y-2">
                <h4 className="text-lg font-extrabold text-stone-900 leading-tight">
                  {selectedSchedule.topic}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {selectedSchedule.description}
                </p>
              </div>

              {/* Key Meta Table */}
              <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 space-y-2.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-stone-500 font-medium flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-700" /> Waktu:
                  </span>
                  <span className="font-bold text-stone-900">{selectedSchedule.day}, {selectedSchedule.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-500 font-medium flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-700" /> Lokasi:
                  </span>
                  <span className="font-bold text-stone-900 text-right">{selectedSchedule.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-500 font-medium flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-amber-700" /> Pembina:
                  </span>
                  <span className="font-bold text-stone-900">{selectedSchedule.instructor}</span>
                </div>
              </div>

              {/* Checklist Perlengkapan Wajib */}
              <div className="space-y-2">
                <h5 className="text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckSquare className="w-3.5 h-3.5 text-amber-700" />
                  Perlengkapan Wajib Dibawa:
                </h5>
                <ul className="space-y-1.5">
                  {selectedSchedule.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-stone-700 bg-amber-50/70 p-2 rounded-lg border border-amber-200/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-700" />
                      <span className="font-medium">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Big Sync Actions */}
              <div className="pt-2 space-y-2.5">
                {/* 1-Click Google Calendar */}
                <a
                  href={selectedSchedule.googleCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CalendarIcon className="w-4 h-4" />
                  <span>Tambahkan ke Google Calendar</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>

                {/* Download .ICS File */}
                <button
                  onClick={() => downloadIcsFile(selectedSchedule)}
                  className="w-full py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer border border-stone-300"
                >
                  <Download className="w-4 h-4 text-stone-600" />
                  <span>Unduh Berkas Kalender (.ICS untuk HP/Outlook)</span>
                </button>
              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/70 text-[11px] text-amber-900 leading-normal flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Tips Orang Tua:</strong> Menambahkan latihan ke Google Calendar akan otomatis mengaktifkan pengingat notifikasi 1 hari dan 2 jam sebelum latihan dimulai.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
