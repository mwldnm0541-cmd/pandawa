import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Announcements } from './components/Announcements';
import { ScheduleGoogleCalendar } from './components/ScheduleGoogleCalendar';
import { RegistrationForm } from './components/RegistrationForm';
import { TaskSubmissionComponent } from './components/TaskSubmission';
import { TaskGrading } from './components/TaskGrading';
import { TrainersProfile } from './components/TrainersProfile';
import { PhotoGallery } from './components/PhotoGallery';
import { Activities } from './components/Activities';
import { LocationMap } from './components/LocationMap';
import { ContactParents } from './components/ContactParents';
import { NotificationToast } from './components/NotificationToast';
import { Footer } from './components/Footer';

import { 
  INITIAL_ANNOUNCEMENTS, 
  INITIAL_SUBMISSIONS, 
  INITIAL_NOTIFICATIONS 
} from './data/mockData';
import { 
  AnnouncementItem, 
  TaskSubmission, 
  NewMemberRegistration, 
  LiveNotification 
} from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('beranda');
  const [announcements, setAnnouncements] = useState<AnnouncementItem[]>(INITIAL_ANNOUNCEMENTS);
  const [submissions, setSubmissions] = useState<TaskSubmission[]>(INITIAL_SUBMISSIONS);
  const [registrations, setRegistrations] = useState<NewMemberRegistration[]>([]);
  const [notifications, setNotifications] = useState<LiveNotification[]>(INITIAL_NOTIFICATIONS);
  const [activeToast, setActiveToast] = useState<LiveNotification | null>(null);

  // Handle new announcement created
  const handleAddAnnouncement = (item: AnnouncementItem) => {
    setAnnouncements([item, ...announcements]);
    
    // Trigger real-time notification
    const newNotif: LiveNotification = {
      id: `notif-${Date.now()}`,
      title: `Warta Baru: ${item.title}`,
      message: item.content.slice(0, 110) + '...',
      timestamp: 'Baru saja',
      type: item.category === 'DARURAT' || item.priority === 'Tinggi' ? 'urgent' : 'info',
      read: false,
      linkTab: 'pengumuman'
    };

    setNotifications(prev => [newNotif, ...prev]);
    setActiveToast(newNotif);
  };

  // Handle new student task submitted
  const handleTaskSubmitted = (sub: TaskSubmission) => {
    setSubmissions([sub, ...submissions]);

    // Push notification
    const newNotif: LiveNotification = {
      id: `notif-${Date.now()}`,
      title: 'Tugas Masuk untuk Dinilai',
      message: `Tugas "${sub.taskTitle}" telah dikumpulkan oleh ${sub.studentName} (${sub.regu}).`,
      timestamp: 'Baru saja',
      type: 'info',
      read: false,
      linkTab: 'nilai'
    };

    setNotifications(prev => [newNotif, ...prev]);
    setActiveToast(newNotif);
  };

  // Handle grading submission by Pembina
  const handleGradeSubmission = (
    id: string, 
    score: number, 
    feedback: string, 
    gradedBy: string
  ) => {
    setSubmissions(prev =>
      prev.map(sub => {
        if (sub.id === id) {
          return {
            ...sub,
            status: 'Dinilai',
            score,
            feedback,
            gradedBy
          };
        }
        return sub;
      })
    );

    const targetSub = submissions.find(s => s.id === id);
    const newNotif: LiveNotification = {
      id: `notif-${Date.now()}`,
      title: `Nilai Tugas Diterbitkan (Skor: ${score})`,
      message: `Tugas "${targetSub?.taskTitle || 'SKU'}" milik ${targetSub?.studentName || 'Siswa'} telah dinilai oleh ${gradedBy}.`,
      timestamp: 'Baru saja',
      type: 'success',
      read: false,
      linkTab: 'nilai'
    };

    setNotifications(prev => [newNotif, ...prev]);
    setActiveToast(newNotif);
  };

  // Handle new scout registration
  const handleRegistrationComplete = (reg: NewMemberRegistration) => {
    setRegistrations([reg, ...registrations]);

    const newNotif: LiveNotification = {
      id: `notif-${Date.now()}`,
      title: 'Anggota Baru Terdaftar!',
      message: `${reg.fullName} (${reg.classGrade}) resmi mendaftar di ${reg.gudep}. Nomor KTA: ${reg.registrationNumber}`,
      timestamp: 'Baru saja',
      type: 'success',
      read: false,
      linkTab: 'pendaftaran'
    };

    setNotifications(prev => [newNotif, ...prev]);
    setActiveToast(newNotif);
  };

  // Trigger simulated real-time alert for demo/interactive testing
  const handleTriggerSimulatedBroadcast = () => {
    const alerts = [
      {
        title: 'Pengingat Latihan: Bawa Tongkat & Tali',
        message: 'Latihan Sabtu besok pukul 08.00 WIB tepat di Lapangan SMP PGRI 6 Bogor. Pastikan membawa seragam lengkap!',
        type: 'info' as const,
        tab: 'jadwal'
      },
      {
        title: 'Surat Izin Orang Tua Terbit',
        message: 'Surat edaran izin perkemahan PERSAMI Curug Nangka telah dapat diunduh di papan pengumuman.',
        type: 'urgent' as const,
        tab: 'pengumuman'
      },
      {
        title: 'Verifikasi Butir SKU Ramu Lulus',
        message: 'Ujian mandiri simpul dan sandi telah disahkan oleh Pembina Gudep 01.043.',
        type: 'success' as const,
        tab: 'nilai'
      }
    ];

    const pick = alerts[Math.floor(Math.random() * alerts.length)];
    const newNotif: LiveNotification = {
      id: `notif-${Date.now()}`,
      title: pick.title,
      message: pick.message,
      timestamp: 'Baru saja',
      type: pick.type,
      read: false,
      linkTab: pick.tab
    };

    setNotifications(prev => [newNotif, ...prev]);
    setActiveToast(newNotif);
  };

  const markNotificationAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const clearAllNotifications = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-50/30 text-stone-800 antialiased selection:bg-amber-800 selection:text-white">
      {/* Top Sticky Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        notifications={notifications}
        markNotificationAsRead={markNotificationAsRead}
        clearAllNotifications={clearAllNotifications}
        onTriggerSimulatedBroadcast={handleTriggerSimulatedBroadcast}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {/* Beranda Tab (Comprehensive Overview) */}
        {activeTab === 'beranda' && (
          <div>
            <Hero onNavigate={setActiveTab} />
            
            {/* Quick Section Jump Cards */}
            <div className="bg-white py-10 border-b border-amber-200/50">
              <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  
                  <div 
                    onClick={() => setActiveTab('kegiatan')}
                    className="p-4 rounded-2xl bg-amber-50/80 hover:bg-amber-100/90 border border-amber-200 cursor-pointer transition-all hover:scale-[1.02] text-center space-y-1.5"
                  >
                    <span className="text-2xl">⛺</span>
                    <h3 className="font-bold text-stone-900 text-sm">Kegiatan & Persami</h3>
                    <p className="text-[11px] text-stone-500">Agenda kemah & LT-II</p>
                  </div>

                  <div 
                    onClick={() => setActiveTab('jadwal')}
                    className="p-4 rounded-2xl bg-amber-50/80 hover:bg-amber-100/90 border border-amber-200 cursor-pointer transition-all hover:scale-[1.02] text-center space-y-1.5"
                  >
                    <span className="text-2xl">📅</span>
                    <h3 className="font-bold text-stone-900 text-sm">Google Calendar</h3>
                    <p className="text-[11px] text-stone-500">Sinkronisasi latihan Sabtu</p>
                  </div>

                  <div 
                    onClick={() => setActiveTab('tugas')}
                    className="p-4 rounded-2xl bg-amber-50/80 hover:bg-amber-100/90 border border-amber-200 cursor-pointer transition-all hover:scale-[1.02] text-center space-y-1.5"
                  >
                    <span className="text-2xl">📝</span>
                    <h3 className="font-bold text-stone-900 text-sm">Kirim Tugas SKU</h3>
                    <p className="text-[11px] text-stone-500">Video simpul & sandi</p>
                  </div>

                  <div 
                    onClick={() => setActiveTab('nilai')}
                    className="p-4 rounded-2xl bg-amber-50/80 hover:bg-amber-100/90 border border-amber-200 cursor-pointer transition-all hover:scale-[1.02] text-center space-y-1.5"
                  >
                    <span className="text-2xl">🏆</span>
                    <h3 className="font-bold text-stone-900 text-sm">Nilai Tugas & SKU</h3>
                    <p className="text-[11px] text-stone-500">Cek skor & pengesahan</p>
                  </div>

                </div>
              </div>
            </div>

            {/* Announcements Highlight */}
            <Announcements 
              announcements={announcements} 
              onAddAnnouncement={handleAddAnnouncement} 
            />

            {/* Upcoming Activities Highlight */}
            <Activities />

            {/* Google Calendar Training Schedule */}
            <ScheduleGoogleCalendar />

            {/* Photo Gallery Highlight */}
            <PhotoGallery />

            {/* Trainers Preview */}
            <TrainersProfile />

            {/* Map & Location */}
            <LocationMap />

            {/* Contact & Consultation */}
            <ContactParents />
          </div>
        )}

        {/* Kegiatan Tab */}
        {activeTab === 'kegiatan' && (
          <div className="pt-4">
            <Activities />
          </div>
        )}

        {/* Pengumuman Tab */}
        {activeTab === 'pengumuman' && (
          <div className="pt-4">
            <Announcements 
              announcements={announcements} 
              onAddAnnouncement={handleAddAnnouncement} 
            />
          </div>
        )}

        {/* Jadwal & Google Calendar Tab */}
        {activeTab === 'jadwal' && (
          <div className="pt-4">
            <ScheduleGoogleCalendar />
          </div>
        )}

        {/* Galeri Foto Tab */}
        {activeTab === 'galeri' && (
          <div className="pt-4">
            <PhotoGallery />
          </div>
        )}

        {/* Pendaftaran Anggota Baru (PPDB) Tab */}
        {activeTab === 'pendaftaran' && (
          <div className="pt-4">
            <RegistrationForm onRegistrationComplete={handleRegistrationComplete} />
          </div>
        )}

        {/* Pengiriman Tugas SKU Tab */}
        {activeTab === 'tugas' && (
          <div className="pt-4">
            <TaskSubmissionComponent 
              onTaskSubmitted={handleTaskSubmitted}
              onNavigateToGrading={() => setActiveTab('nilai')}
            />
          </div>
        )}

        {/* Nilai Tugas & Butir SKU Tab */}
        {activeTab === 'nilai' && (
          <div className="pt-4">
            <TaskGrading 
              submissions={submissions}
              onGradeSubmission={handleGradeSubmission}
            />
          </div>
        )}

        {/* Profil Pembina Tab */}
        {activeTab === 'pembina' && (
          <div className="pt-4">
            <TrainersProfile />
          </div>
        )}

        {/* Lokasi & Kontak Tab */}
        {activeTab === 'lokasi-kontak' && (
          <div className="pt-4">
            <LocationMap />
            <ContactParents />
          </div>
        )}
      </main>

      {/* Floating Real-Time Notification Toast */}
      <NotificationToast
        notification={activeToast}
        onClose={() => setActiveToast(null)}
        onNavigate={setActiveTab}
      />

      {/* Footer */}
      <Footer onNavigate={setActiveTab} />
    </div>
  );
}
