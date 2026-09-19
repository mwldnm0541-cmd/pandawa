import React, { useState } from 'react';
import { 
  UserPlus, 
  CheckCircle2, 
  Printer, 
  Download, 
  ShieldCheck, 
  HeartHandshake, 
  QrCode, 
  Award, 
  Sparkles,
  RefreshCw,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { NewMemberRegistration } from '../types';
import { PANGKALAN_INFO } from '../data/mockData';

interface RegistrationFormProps {
  onRegistrationComplete: (reg: NewMemberRegistration) => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  onRegistrationComplete
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    nickname: '',
    gender: 'Laki-laki' as 'Laki-laki' | 'Perempuan',
    nisn: '',
    classGrade: 'Kelas 7A',
    pob: 'Bogor',
    dob: '2013-05-14',
    religion: 'Islam',
    bloodType: 'O',
    medicalHistory: 'Tidak ada riwayat alergi berat / kondisi sehat prima.',
    parentName: '',
    parentPhone: '',
    studentPhone: '',
    address: '',
    reguInterest: 'Regu Rajawali (Putra)',
    specialSkills: ['Pionering & Tali Temali']
  });

  const [submittedRegistration, setSubmittedRegistration] = useState<NewMemberRegistration | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableSkills = [
    'Pionering & Tali Temali',
    'Morse & Semaphore',
    'Pertolongan Pertama (P3K)',
    'Kompas & Navigasi Darat',
    'Baris-Berbaris Tongkat',
    'Pentas Seni & Yel-yel',
    'Survival & Memasak Rimba',
    'Dokumentasi & Jurnalistik'
  ];

  const reguOptionsPutra = [
    'Regu Rajawali (Putra)',
    'Regu Elang (Putra)',
    'Regu Singa (Putra)',
    'Regu Garuda (Putra)',
    'Regu Cobra (Putra)'
  ];

  const reguOptionsPutri = [
    'Regu Melati (Putri)',
    'Regu Mawar (Putri)',
    'Regu Teratai (Putri)',
    'Regu Dahlia (Putri)',
    'Regu Sakura (Putri)'
  ];

  const handleGenderChange = (newGender: 'Laki-laki' | 'Perempuan') => {
    setFormData(prev => ({
      ...prev,
      gender: newGender,
      reguInterest: newGender === 'Laki-laki' ? reguOptionsPutra[0] : reguOptionsPutri[0]
    }));
  };

  const toggleSkill = (skill: string) => {
    setFormData(prev => {
      const exists = prev.specialSkills.includes(skill);
      if (exists) {
        return { ...prev, specialSkills: prev.specialSkills.filter(s => s !== skill) };
      } else {
        return { ...prev, specialSkills: [...prev.specialSkills, skill] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate official registration number
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const gudepCode = formData.gender === 'Laki-laki' ? '01.043' : '01.044';
    const regNumber = `REG-${gudepCode.replace('.', '')}-2026-${randomCode}`;

    const newRecord: NewMemberRegistration = {
      id: `reg-${Date.now()}`,
      registrationNumber: regNumber,
      fullName: formData.fullName,
      nickname: formData.nickname,
      gender: formData.gender,
      gudep: formData.gender === 'Laki-laki' ? '01.043 (Putra)' : '01.044 (Putri)',
      nisn: formData.nisn,
      classGrade: formData.classGrade,
      pob: formData.pob,
      dob: formData.dob,
      religion: formData.religion,
      bloodType: formData.bloodType,
      medicalHistory: formData.medicalHistory,
      parentName: formData.parentName,
      parentPhone: formData.parentPhone,
      studentPhone: formData.studentPhone,
      address: formData.address,
      reguInterest: formData.reguInterest,
      specialSkills: formData.specialSkills,
      registeredAt: new Date().toLocaleString('id-ID')
    };

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedRegistration(newRecord);
      onRegistrationComplete(newRecord);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback
      }
    }, 600);
  };

  const handlePrintCard = () => {
    window.print();
  };

  return (
    <section id="pendaftaran-section" className="py-12 bg-amber-50/50">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-200 text-amber-900 mb-2.5">
            <UserPlus className="w-3.5 h-3.5 text-amber-800" />
            <span>Penerimaan Anggota Baru (PPDB Pramuka)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight font-heading">
            Formulir Pendaftaran Anggota Baru
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
            Pendaftaran resmi calon Penggalang Gugus Depan 01.043 (Pasukan Putra) & 01.044 (Pasukan Putri) Pangkalan SMP PGRI 6 Kota Bogor Tahun Ajaran 2026/2027.
          </p>
        </div>

        {/* If Already Submitted: Show Printable Membership Registration Card */}
        {submittedRegistration ? (
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border-2 border-amber-600 space-y-8 animate-in zoom-in-95 duration-200">
            
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-stone-900 font-heading">
                Pendaftaran Berhasil Diterima!
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm max-w-md mx-auto">
                Selamat bergabung dengan Gerakan Pramuka SMP PGRI 6 Bogor. Silakan cetak atau simpan <strong>Tanda Bukti Registrasi Anggota</strong> di bawah ini.
              </p>
            </div>

            {/* Printable Scout ID Card Container */}
            <div 
              id="scout-registration-card"
              className="max-w-2xl mx-auto bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-2xl border-2 border-amber-400 relative overflow-hidden"
            >
              {/* Background watermark badge */}
              <div className="absolute -right-8 -bottom-8 opacity-10 text-9xl pointer-events-none select-none">
                ⚜
              </div>

              {/* Card Header */}
              <div className="flex items-start justify-between border-b border-amber-500/40 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-600 flex items-center justify-center text-amber-100 font-bold text-2xl border border-amber-300">
                    ⚜
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-wide text-amber-300 font-heading">
                      GERAKAN PRAMUKA INDONESIA
                    </h4>
                    <p className="text-xs font-bold text-white">
                      PANGKALAN SMP PGRI 6 KOTA BOGOR
                    </p>
                    <p className="text-[11px] text-amber-200/80">
                      Gugus Depan {submittedRegistration.gudep}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] bg-amber-500 text-stone-900 font-black px-2 py-0.5 rounded uppercase">
                    KTA SEMENTARA
                  </span>
                  <p className="text-xs font-mono font-bold text-amber-300 mt-1">
                    {submittedRegistration.registrationNumber}
                  </p>
                </div>
              </div>

              {/* Card Body Information */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-center">
                {/* Photo Simulation Box */}
                <div className="flex flex-col items-center justify-center bg-stone-800/80 border-2 border-dashed border-amber-500/40 rounded-xl p-4 text-center">
                  <div className="w-20 h-24 bg-stone-700 rounded-lg flex items-center justify-center text-stone-400 text-xs font-medium mb-1">
                    Pas Foto 3x4
                  </div>
                  <span className="text-[10px] text-amber-300 font-semibold mt-1">
                    {submittedRegistration.classGrade}
                  </span>
                </div>

                {/* Details Table */}
                <div className="sm:col-span-2 space-y-2 text-xs">
                  <div>
                    <span className="text-[11px] text-stone-400 block">Nama Lengkap Siswa:</span>
                    <span className="text-base font-bold text-white capitalize">
                      {submittedRegistration.fullName} ({submittedRegistration.nickname})
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div>
                      <span className="text-[11px] text-stone-400 block">NISN:</span>
                      <span className="font-mono font-semibold text-amber-200">
                        {submittedRegistration.nisn}
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] text-stone-400 block">Gol. Darah:</span>
                      <span className="font-semibold text-white">
                        {submittedRegistration.bloodType}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div>
                      <span className="text-[11px] text-stone-400 block">Pilihan Regu:</span>
                      <span className="font-bold text-amber-400">
                        {submittedRegistration.reguInterest}
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] text-stone-400 block">Nama Orang Tua / Wali:</span>
                      <span className="font-medium text-stone-200">
                        {submittedRegistration.parentName}
                      </span>
                    </div>
                  </div>

                  <div className="pt-1">
                    <span className="text-[11px] text-stone-400 block">Alamat Tinggal:</span>
                    <span className="text-stone-300 line-clamp-1">
                      {submittedRegistration.address}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer Barcode & Validation */}
              <div className="mt-5 pt-4 border-t border-amber-500/30 flex flex-wrap items-center justify-between gap-3 text-[11px] text-stone-300">
                <div className="flex items-center gap-2">
                  <QrCode className="w-7 h-7 text-amber-400" />
                  <div>
                    <p className="font-bold text-white">Terdaftar Resmi di Mabigus</p>
                    <p className="text-[10px] text-stone-400">{submittedRegistration.registeredAt}</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-[10px] text-amber-200 italic font-serif">"Ikhlas Bakti Bina Bangsa"</p>
                  <p className="font-bold text-amber-400 text-xs">Pramuka SMP PGRI 6 Bogor</p>
                </div>
              </div>
            </div>

            {/* Print & Action Controls */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-stone-200">
              <button
                onClick={handlePrintCard}
                className="px-6 py-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Cetak / Simpan Kartu (PDF)</span>
              </button>

              <button
                onClick={() => setSubmittedRegistration(null)}
                className="px-5 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer border border-stone-300"
              >
                <RefreshCw className="w-4 h-4 text-stone-500" />
                <span>Daftarkan Anggota Baru Lainnya</span>
              </button>
            </div>

          </div>
        ) : (
          /* Main Interactive Registration Form */
          <form 
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-stone-200 space-y-8"
          >
            {/* Step 1: Identitas Calon Anggota */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-stone-200">
                <span className="w-6 h-6 rounded-full bg-amber-800 text-white text-xs font-black flex items-center justify-center">
                  1
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  Data Diri Calon Anggota Penggalang
                </h3>
              </div>

              {/* Gender Radio Selector (Auto Assigns Gudep) */}
              <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200/80">
                <label className="block text-xs font-bold text-amber-950 mb-2">
                  Jenis Kelamin (Menentukan Penempatan Gugus Depan) *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => handleGenderChange('Laki-laki')}
                    className={`p-3 rounded-xl border text-xs sm:text-sm font-bold flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                      formData.gender === 'Laki-laki'
                        ? 'bg-amber-800 text-white border-amber-800 shadow-md ring-2 ring-amber-600/30'
                        : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
                    }`}
                  >
                    <span>👦 Laki-laki (Putra)</span>
                    <span className="text-[11px] font-normal opacity-90">
                      Gugus Depan 01.043
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleGenderChange('Perempuan')}
                    className={`p-3 rounded-xl border text-xs sm:text-sm font-bold flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                      formData.gender === 'Perempuan'
                        ? 'bg-amber-800 text-white border-amber-800 shadow-md ring-2 ring-amber-600/30'
                        : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
                    }`}
                  >
                    <span>👧 Perempuan (Putri)</span>
                    <span className="text-[11px] font-normal opacity-90">
                      Gugus Depan 01.044
                    </span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Nama Lengkap Siswa *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Contoh: Muhammad Fikri Pratama"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:ring-2 focus:ring-amber-700 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Nama Panggilan *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nickname}
                    onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
                    placeholder="Contoh: Fikri"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:ring-2 focus:ring-amber-700 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    NISN (Nomor Induk Siswa Nasional) *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={10}
                    value={formData.nisn}
                    onChange={(e) => setFormData({ ...formData, nisn: e.target.value })}
                    placeholder="Contoh: 0098765432"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm font-mono focus:ring-2 focus:ring-amber-700 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Kelas di SMP PGRI 6 Bogor *
                  </label>
                  <select
                    value={formData.classGrade}
                    onChange={(e) => setFormData({ ...formData, classGrade: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:ring-2 focus:ring-amber-700 focus:outline-none"
                  >
                    <option value="Kelas 7A">Kelas 7A</option>
                    <option value="Kelas 7B">Kelas 7B</option>
                    <option value="Kelas 7C">Kelas 7C</option>
                    <option value="Kelas 7D">Kelas 7D</option>
                    <option value="Kelas 7E">Kelas 7E</option>
                    <option value="Kelas 7F">Kelas 7F</option>
                    <option value="Kelas 7G">Kelas 7G</option>
                    <option value="Kelas 8 (Penggalang Lanjutan)">Kelas 8 (Penggalang Lanjutan)</option>
                    <option value="Kelas 9 (Dewan Penggalang)">Kelas 9 (Dewan Penggalang)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Golongan Darah
                  </label>
                  <select
                    value={formData.bloodType}
                    onChange={(e) => setFormData({ ...formData, bloodType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:ring-2 focus:ring-amber-700 focus:outline-none"
                  >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="AB">AB</option>
                    <option value="O">O</option>
                    <option value="Belum Tahu">Belum Tahu</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Tempat Lahir *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.pob}
                    onChange={(e) => setFormData({ ...formData, pob: e.target.value })}
                    placeholder="Contoh: Bogor"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:ring-2 focus:ring-amber-700 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Tanggal Lahir *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:ring-2 focus:ring-amber-700 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Kontak & Orang Tua / Wali */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2.5 pb-2 border-b border-stone-200">
                <span className="w-6 h-6 rounded-full bg-amber-800 text-white text-xs font-black flex items-center justify-center">
                  2
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  Data Orang Tua / Wali & Kontak Darurat
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Nama Lengkap Orang Tua / Wali *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="Contoh: Bpk. Bambang Irawan / Ibu Siti"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:ring-2 focus:ring-amber-700 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Nomor WhatsApp Aktif Orang Tua * (Untuk Grup Warta)
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.parentPhone}
                    onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                    placeholder="Contoh: 081234567890"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:ring-2 focus:ring-amber-700 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Alamat Lengkap Tempat Tinggal di Bogor *
                </label>
                <textarea
                  required
                  rows={2}
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Contoh: Jl. Merdeka No. 45, RT.03/RW.05, Kel. Kebon Kelapa, Kec. Bogor Tengah, Kota Bogor"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:ring-2 focus:ring-amber-700 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1 flex items-center justify-between">
                  <span>Catatan Riwayat Kesehatan / Alergi (Opsional untuk Pertimbangan Kemah)</span>
                  <span className="text-[11px] text-stone-500 font-normal">Kerahasiaan Medis Terjaga</span>
                </label>
                <input
                  type="text"
                  value={formData.medicalHistory}
                  onChange={(e) => setFormData({ ...formData, medicalHistory: e.target.value })}
                  placeholder="Contoh: Asma ringan bila cuaca sangat dingin / Alergi udang / Sehat prima"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:ring-2 focus:ring-amber-700 focus:outline-none"
                />
              </div>
            </div>

            {/* Step 3: Pilihan Regu & Bakat Minat */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2.5 pb-2 border-b border-stone-200">
                <span className="w-6 h-6 rounded-full bg-amber-800 text-white text-xs font-black flex items-center justify-center">
                  3
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  Peminatan Regu & Minat Keahlian Pramuka
                </h3>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Pilihan Regu yang Diminati ({formData.gender === 'Laki-laki' ? 'Pasukan Putra' : 'Pasukan Putri'}) *
                </label>
                <select
                  value={formData.reguInterest}
                  onChange={(e) => setFormData({ ...formData, reguInterest: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-amber-700 focus:outline-none"
                >
                  {(formData.gender === 'Laki-laki' ? reguOptionsPutra : reguOptionsPutri).map((regu) => (
                    <option key={regu} value={regu}>
                      {regu}
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-stone-500 mt-1">
                  * Penetapan regu akhir akan disesuaikan dengan kuota Pinru dan Wapinru saat Gladian awal.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-2">
                  Minat Bidang Keahlian Kepramukaan (Pilih 1 atau lebih)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {availableSkills.map((skill) => {
                    const isSelected = formData.specialSkills.includes(skill);
                    return (
                      <button
                        type="button"
                        key={skill}
                        onClick={() => toggleSkill(skill)}
                        className={`p-2 rounded-xl text-xs font-medium text-left border transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'bg-amber-100 text-amber-950 border-amber-600 font-bold'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        <span className="truncate">{skill}</span>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-amber-800 flex-shrink-0 ml-1" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Submission Agreement Notice */}
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 text-xs text-stone-600 space-y-1">
              <p className="font-bold text-stone-800 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                Pernyataan Calon Anggota & Orang Tua:
              </p>
              <p>
                Dengan mengirimkan formulir ini, saya bersedia mematuhi Kode Kehormatan Pramuka (Tri Satya & Dasa Darma), mengikuti latihan rutin dengan disiplin, serta didukung penuh oleh orang tua/wali.
              </p>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto min-w-[280px] px-8 py-3.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Memproses Pendaftaran...' : 'Kirim Pendaftaran & Buat KTA Sementara'}
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};
