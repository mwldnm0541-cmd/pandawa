export interface ActivityItem {
  id: string;
  title: string;
  category: 'Perkemahan' | 'Latihan Rutin' | 'Perlombaan' | 'Bakti Sosial' | 'Ujian SKU' | 'Pelantikan';
  date: string;
  time: string;
  location: string;
  description: string;
  targetParticipants: string;
  dressCode: string;
  equipment: string[];
  imageUrl: string;
  status: 'Akan Datang' | 'Sedang Berlangsung' | 'Selesai';
  featured?: boolean;
}

export interface PhotoItem {
  id: string;
  title: string;
  category: 'Pionering' | 'Upacara' | 'Kemah & Survival' | 'Semaphore & Sandi' | 'Prestasi' | 'Latihan Mingguan';
  date: string;
  location: string;
  imageUrl: string;
  caption: string;
  photographer: string;
}

export interface AnnouncementItem {
  id: string;
  title: string;
  date: string;
  category: 'PENTING' | 'KEGIATAN' | 'SURAT RESMI' | 'DARURAT' | 'INFORMASI';
  priority: 'Tinggi' | 'Sedang' | 'Normal';
  content: string;
  attachmentName?: string;
  targetAudience: 'Semua Anggota' | 'Orang Tua / Wali' | 'Calon Anggota' | 'Penggalang Ramu' | 'Dewan Penggalang';
  isPinned?: boolean;
}

export interface TrainingSchedule {
  id: string;
  weekNumber: number;
  date: string;
  day: string;
  time: string;
  topic: string;
  description: string;
  location: string;
  instructor: string;
  googleCalendarUrl: string;
  requirements: string[];
}

export interface PembinaProfile {
  id: string;
  name: string;
  role: string;
  gudep: 'Gudep 01.043 (Putra)' | 'Gudep 01.044 (Putri)' | 'Mabigus & Pangkalan';
  qualification: string; // e.g. KML (Kursus Pembina Mahir Tingkat Lanjutan), KMD, dsb.
  nta: string; // Nomor Tanda Anggota Gerakan Pramuka
  phone: string;
  whatsappUrl: string;
  email: string;
  bio: string;
  experienceYears: number;
  imageUrl: string;
  achievements: string[];
}

export interface ScoutTask {
  id: string;
  title: string;
  category: 'SKU Ramu' | 'SKU Rakit' | 'SKU Terap' | 'Kecakapan Khusus (SKK)' | 'Pionering & Sandi';
  deadline: string;
  description: string;
  requirements: string[];
  submissionType: 'Laporan Teks & Foto' | 'Video Praktik' | 'Buku Jurnal SKU';
}

export interface TaskSubmission {
  id: string;
  taskId: string;
  taskTitle: string;
  studentName: string;
  nisn: string;
  regu: string;
  gudep: string;
  submittedAt: string;
  notes: string;
  linkOrFile: string;
  status: 'Menunggu Review' | 'Dinilai' | 'Perlu Perbaikan';
  score?: number;
  feedback?: string;
  gradedBy?: string;
}

export interface NewMemberRegistration {
  id: string;
  registrationNumber: string;
  fullName: string;
  nickname: string;
  gender: 'Laki-laki' | 'Perempuan';
  gudep: '01.043 (Putra)' | '01.044 (Putri)';
  nisn: string;
  classGrade: string;
  pob: string;
  dob: string;
  religion: string;
  bloodType: string;
  medicalHistory: string;
  parentName: string;
  parentPhone: string;
  studentPhone: string;
  address: string;
  reguInterest: string;
  specialSkills: string[];
  registeredAt: string;
}

export interface LiveNotification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  type: 'urgent' | 'info' | 'success';
  read: boolean;
  linkTab?: string;
}

export interface ContactMessage {
  id: string;
  senderName: string;
  senderRole: 'Orang Tua Murid' | 'Calon Anggota' | 'Alumni' | 'Masyarakat Umum';
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
}
