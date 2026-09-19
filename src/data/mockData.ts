import {
  ActivityItem,
  PhotoItem,
  AnnouncementItem,
  TrainingSchedule,
  PembinaProfile,
  ScoutTask,
  TaskSubmission,
  LiveNotification
} from '../types';

export const PANGKALAN_INFO = {
  schoolName: 'SMP PGRI 6 BOGOR',
  gudepName: 'PANGKALAN SMP PGRI 6 BOGOR',
  gudepPutra: '01.043',
  gudepPutri: '01.044',
  motto: 'Satyaku Kudarmakan, Darmaku Kubaktikan',
  triSatya: [
    'Menjalankan kewajibanku terhadap Tuhan, Negara Kesatuan Republik Indonesia dan mengamalkan Pancasila.',
    'Menolong sesama hidup dan mempersiapkan diri membangun masyarakat.',
    'Menepati Dasa Darma.'
  ],
  dasaDarma: [
    'Taqwa kepada Tuhan Yang Maha Esa',
    'Cinta alam dan kasih sayang sesama manusia',
    'Patriot yang sopan dan kesatria',
    'Patuh dan suka bermusyawarah',
    'Rela menolong dan tabah',
    'Rajin, terampil, dan gembira',
    'Hemat, cermat, dan bersahaja',
    'Disiplin, berani, dan setia',
    'Bertanggung jawab dan dapat dipercaya',
    'Suci dalam pikiran, perkataan, dan perbuatan'
  ],
  address: 'Jl. Ciwaringin No. 12, RT.02/RW.07, Kel. Ciwaringin, Kec. Bogor Tengah, Kota Bogor, Jawa Barat 16124',
  mapCoordinates: {
    lat: -6.5887,
    lng: 106.7932,
    googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4886616089335!2d106.78768787593256!3d-6.586043164380183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5c0c978087b%3A0x6a05ba201e51b681!2sSMP%20PGRI%206%20Bogor!5e0!3m2!1sid!2sid!4v1710600000000!5m2!1sid!2sid',
    googleMapsLink: 'https://maps.google.com/?q=SMP+PGRI+6+Bogor'
  },
  email: 'pramuka.smppgri6bogor@gmail.com',
  phone: '+62 251 8324567',
  whatsappCare: '6281234567890',
  instagram: '@pramukapgri6bogor',
  stats: {
    totalAnggota: 248,
    pembinaBersertifikat: 6,
    prestasiJuara: 34,
    reguAktif: 12
  }
};

export const INITIAL_ANNOUNCEMENTS: AnnouncementItem[] = [
  {
    id: 'ann-1',
    title: 'Surat Edaran: Persiapan Perkemahan Sabtu-Minggu (PERSAMI) Angkatan 2026',
    date: '18 September 2026',
    category: 'PENTING',
    priority: 'Tinggi',
    isPinned: true,
    targetAudience: 'Orang Tua / Wali',
    content: 'Diberitahukan kepada seluruh Orang Tua/Wali calon Penggalang Ramu bahwa kegiatan PERSAMI pelantikan kenaikan tingkat akan diselenggarakan pada 3-4 Oktober 2026 di Bumi Perkemahan Curug Nangka Bogor. Surat izin orang tua dan lembar medis wajib diserahkan paling lambat Sabtu ini saat latihan rutin.',
    attachmentName: 'Surat_Izin_Ortu_Persami_2026.pdf'
  },
  {
    id: 'ann-2',
    title: 'Pembaruan Jadwal Latihan Mingguan & Materi Sandi Kotak II',
    date: '16 September 2026',
    category: 'KEGIATAN',
    priority: 'Sedang',
    targetAudience: 'Semua Anggota',
    content: 'Latihan rutin hari Sabtu, 20 September 2026 dimulai tepat pukul 08.00 WIB. Materi utama: Pendalaman Sandi Kotak II, Morse peluit lapangan, dan praktik menara kaki tiga tanpa pasak. Harap membawa tali pandu pramuka 10 meter (minimal 2 utas per anggota) serta tongkat pramuka berstandar 160 cm.',
    attachmentName: 'Modul_Sandi_Dan_Morse.pdf'
  },
  {
    id: 'ann-3',
    title: 'Pendaftaran Anggota Baru Ekstrakurikuler Wajib Pramuka Kelas VII Dibuka',
    date: '10 September 2026',
    category: 'INFORMASI',
    priority: 'Tinggi',
    targetAudience: 'Calon Anggota',
    content: 'Bagi peserta didik baru kelas 7 SMP PGRI 6 Bogor, formulir registrasi online kini telah aktif melalui portal ini. Calon anggota dapat langsung mengisi biodata, memilih minat keahlian regu (Rajawali, Singa, Melati, Mawar, dll.), serta mencetak Kartu Tanda Anggota Sementara (KTAS).',
    attachmentName: 'Panduan_Pendaftaran_Gudep01043_01044.pdf'
  },
  {
    id: 'ann-4',
    title: 'Himbauan Cuaca & Perlengkapan Lapangan Musim Hujan di Bogor',
    date: '08 September 2026',
    category: 'DARURAT',
    priority: 'Tinggi',
    targetAudience: 'Semua Anggota',
    content: 'Mengingat curah hujan tinggi di wilayah Kota Bogor pada sore hari, setiap anggota diwajibkan membawa ponco/jas hujan warna gelap, kantong plastik pembungkus baju ganti di dalam tas ransel, dan sepatu lapangan anti-selip saat mengikuti latihan lapangan terbuka.',
  }
];

export const INITIAL_ACTIVITIES: ActivityItem[] = [
  {
    id: 'act-1',
    title: 'PERSAMI & Pelantikan Penggalang Ramu 2026',
    category: 'Perkemahan',
    date: '03 - 04 Oktober 2026',
    time: 'Sabtu 07.00 s.d Minggu 14.00 WIB',
    location: 'Bumi Perkemahan Curug Nangka, Tamansari, Bogor',
    description: 'Kegiatan perkemahan akbar tahunan untuk penguatan karakter kepemimpinan, uji syarat kecakapan umum (SKU) Ramu, malam api unggun, pentas seni kearifan lokal Sunda, dan survival dasar alam terbuka.',
    targetParticipants: 'Calon Penggalang & Penggalang Ramu Kelas VII & VIII',
    dressCode: 'Seragam Pramuka Lengkap (SPL) & Pakaian Lapangan Gudep',
    equipment: ['Ransel 40L+', 'Matras & Sleeping Bag', 'Piring & Sendok Plastik', 'Ponco Hujan', 'Obat Pribadi', 'Tali Pandu & Tongkat'],
    imageUrl: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=900&q=80',
    status: 'Akan Datang',
    featured: true
  },
  {
    id: 'act-2',
    title: 'Lomba Tingkat II (LT-II) Kwartir Ranting Bogor Barat',
    category: 'Perlombaan',
    date: '24 - 25 Oktober 2026',
    time: '07.30 - 17.00 WIB',
    location: 'Kompleks Lapangan Semeru / Pusdiklatcab Kota Bogor',
    description: 'Ajang kompetisi bergengsi regu berprestasi putra (Regu Rajawali) dan regu berprestasi putri (Regu Melati) menguji ketangkasan pionering tiang bendera 12 meter, semboyan morse optik, kompas bidik, dan LKBBT tongkat.',
    targetParticipants: 'Regu Inti Pratama Putra & Putri Terpilih',
    dressCode: 'Seragam Pramuka Berkelengkapan Lomba & Kacu Merah Putih Khusus',
    equipment: ['Tongkat Lomba 24 batang', 'Tali Rami Kualitas 1', 'Bendera Semaphore & Peluit', 'P3K Lapangan'],
    imageUrl: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=900&q=80',
    status: 'Akan Datang',
    featured: true
  },
  {
    id: 'act-3',
    title: 'Bakti Bersih Aliran Sungai Ciliwung & Bibit Pohon',
    category: 'Bakti Sosial',
    date: '12 November 2026',
    time: '07.00 - 11.00 WIB',
    location: 'Bantaran Sungai Ciliwung Sempur, Kota Bogor',
    description: 'Penerapan Dasa Darma kedua "Cinta alam dan kasih sayang sesama manusia". Penggalang SMP PGRI 6 Bogor menanam 100 bibit vetiver dan membersihkan sampah anorganik bersama komunitas relawan Bogor.',
    targetParticipants: 'Seluruh Anggota Regu Aktif Gudep 01.043 - 01.044',
    dressCode: 'Kaos Pramuka Gudep SMP PGRI 6 & Celana Lapangan Hitam/Coklat',
    equipment: ['Sarung Tangan Karet', 'Kantong Sampah Ramah Lingkungan', 'Sepatu Boot / Sepatu Kets', 'Tumbler Minum'],
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80',
    status: 'Akan Datang'
  },
  {
    id: 'act-4',
    title: 'Gladian Pemimpin Regu (DIANPINRU) Semester Ganjil',
    category: 'Latihan Rutin',
    date: '12 September 2026',
    time: '08.00 - 15.00 WIB',
    location: 'Sanggar Pramuka & Aula SMP PGRI 6 Bogor',
    description: 'Pelatihan manajemen administrasi regu, kepemimpinan demokratis, pembuatan peta pita & panorama, serta teknik penanganan gawat darurat lapangan untuk para Pinru dan Wapinru.',
    targetParticipants: 'Pemimpin Regu (Pinru) dan Wakil Pemimpin Regu (Wapinru)',
    dressCode: 'Seragam Pramuka Lengkap bertanda Pinru',
    equipment: ['Buku Kas & Logbook Regu', 'Papan Jalan / Clipboard', 'Busur Derajat & Penggaris'],
    imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80',
    status: 'Selesai'
  }
];

export const INITIAL_PHOTOS: PhotoItem[] = [
  {
    id: 'photo-1',
    title: 'Pembuatan Menara Pandang Kaki Tiga 8 Meter Tanpa Pasak',
    category: 'Pionering',
    date: 'Agustus 2026',
    location: 'Lapangan SMP PGRI 6 Bogor',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
    caption: 'Kolaborasi Regu Rajawali dan Regu Elang mengaplikasikan ikatan palang dan canggah pada pionering menara pandang.',
    photographer: 'Kak Ilham Pratama (Kerani)'
  },
  {
    id: 'photo-2',
    title: 'Upacara Pembukaan Latihan Rutin & Penghormatan Sang Saka Merah Putih',
    category: 'Upacara',
    date: 'September 2026',
    location: 'Halaman Utama SMP PGRI 6 Bogor',
    imageUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=900&q=80',
    caption: 'Disiplin dan khidmat dalam upacara pembukaan latihan mingguan dipimpin oleh Pratama Putra.',
    photographer: 'Kak Siti Nurhaliza'
  },
  {
    id: 'photo-3',
    title: 'Pelatihan Kecepatan Sandi Semaphore & Pengiriman Berita Lapangan',
    category: 'Semaphore & Sandi',
    date: 'September 2026',
    location: 'Tribun Olahraga SMP PGRI 6 Bogor',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
    caption: 'Penggalang putri regu Melati berlatih menerima kode bendera semaphore jarak 50 meter dengan akurasi 98%.',
    photographer: 'Dokumentasi Mabigus'
  },
  {
    id: 'photo-4',
    title: 'Malam Renungan Api Unggun & Ikrar Dasa Darma Pramuka',
    category: 'Kemah & Survival',
    date: 'Juli 2026',
    location: 'Bumi Perkemahan Mandalawangi Bogor',
    imageUrl: 'https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=900&q=80',
    caption: 'Suasana hening saat pembacaan dasa darma pramuka di sekeliling api unggun simbol kehangatan persaudaraan.',
    photographer: 'Kak Hendra S.Pd'
  },
  {
    id: 'photo-5',
    title: 'Penyerahan Piala Juara Umum Lomba Ketangkasan Baris Berbaris Tongkat',
    category: 'Prestasi',
    date: 'Mei 2026',
    location: 'Kwarcab Gerakan Pramuka Kota Bogor',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
    caption: 'Gudep 01.043 - 01.044 SMP PGRI 6 Bogor meraih Juara 1 LKBBT dan Pionering Kreatif se-Bogor Barat.',
    photographer: 'Humas Kwarcab'
  },
  {
    id: 'photo-6',
    title: 'Simulasi Pertolongan Pertama Pada Kecelakaan (P3K) & Tandu Darurat',
    category: 'Latihan Mingguan',
    date: 'Agustus 2026',
    location: 'Lapangan Upacara',
    imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=900&q=80',
    caption: 'Praktik pembuatan tandu darurat menggunakan 2 tongkat pramuka dan 2 anak tali dalam waktu di bawah 3 menit.',
    photographer: 'Kak Rina Wati'
  }
];

export const TRAINING_SCHEDULES: TrainingSchedule[] = [
  {
    id: 'sched-1',
    weekNumber: 1,
    date: '2026-09-19',
    day: 'Sabtu',
    time: '08:00 - 11:30 WIB',
    topic: 'Morse, Semaphore & Komunikasi Lapangan',
    description: 'Penguasaan 26 huruf semaphore dengan bendera merah-kuning, peluit morse panjang-pendek, dan teknik pengiriman pesan darurat.',
    location: 'Lapangan Utama SMP PGRI 6 Bogor',
    instructor: 'Kak Hendra Wijaya, S.Pd (KML)',
    googleCalendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Latihan+Pramuka+SMP+PGRI+6+Bogor%3A+Morse+%26+Semaphore&dates=20260919T010000Z%2F20260919T043000Z&details=Latihan+rutin+Gerakan+Pramuka+Gudep+01.043-01.044+SMP+PGRI+6+Bogor.+Materi%3A+Morse%2C+Semaphore+dan+Komunikasi+Lapangan.+Bawa+bendera+semaphore%2C+buku+saku+SKU%2C+dan+tumbler.&location=SMP+PGRI+6+Bogor%2C+Jl.+Ciwaringin+No.12+Kota+Bogor',
    requirements: ['Seragam Pramuka Lengkap', 'Sepasang Bendera Semaphore', 'Peluit Lapangan', 'Buku Saku SKU']
  },
  {
    id: 'sched-2',
    weekNumber: 2,
    date: '2026-09-26',
    day: 'Sabtu',
    time: '08:00 - 11:30 WIB',
    topic: 'Pionering: Simpul Dasar, Ikatan Palang & Menara Kaki Tiga',
    description: 'Aplikasi simpul pangkal, jangkar, mati, ikatan silang, ikatan canggah, dan konstruksi jembatan monyet darurat.',
    location: 'Sanggar Pramuka & Lapangan Terbuka SMP PGRI 6',
    instructor: 'Kak Ahmad Zarkasih, M.Pd (KMD)',
    googleCalendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Latihan+Pramuka+SMP+PGRI+6+Bogor%3A+Pionering+%26+Tali+Temali&dates=20260926T010000Z%2F20260926T043000Z&details=Latihan+rutin+Pionering+dan+Tali+Temali+Gudep+01.043-01.044.+Bawa+2+utas+tali+pramuka+dan+tongkat+160cm.&location=SMP+PGRI+6+Bogor%2C+Jl.+Ciwaringin+No.12+Kota+Bogor',
    requirements: ['Tongkat Pramuka 160 cm', '2 Utas Tali Pramuka @10 meter', 'Kaos Lapangan Gudep', 'Alas Duduk']
  },
  {
    id: 'sched-3',
    weekNumber: 3,
    date: '2026-10-03',
    day: 'Sabtu - Minggu',
    time: '07:00 (Menginap)',
    topic: 'PERSAMI & Ujian Syarat Kecakapan Umum (SKU)',
    description: 'Perkemahan Sabtu-Minggu di alam terbuka, uji poin SKU Ramu/Rakit, penjelajahan kompas, api unggun, dan pelantikan.',
    location: 'Bumi Perkemahan Curug Nangka Bogor',
    instructor: 'Tim Pembina Gabungan Gudep 01.043 - 01.044',
    googleCalendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=PERSAMI+Pramuka+SMP+PGRI+6+Bogor+2026&dates=20261003T000000Z%2F20261004T070000Z&details=Perkemahan+Sabtu-Minggu+Pelantikan+Penggalang+Gudep+01.043-01.044+SMP+PGRI+6+Bogor+di+Buper+Curug+Nangka.&location=Bumi+Perkemahan+Curug+Nangka%2C+Bogor',
    requirements: ['Peralatan Berkemah Pribadi', 'Surat Izin Orang Tua Bertandatangan', 'Ransel', 'Obat Pribadi']
  },
  {
    id: 'sched-4',
    weekNumber: 4,
    date: '2026-10-10',
    day: 'Sabtu',
    time: '08:00 - 11:30 WIB',
    topic: 'Peta Pita, Kompas Bidik (Azimuth & Back-Azimuth) & Tanda Jejak',
    description: 'Navigasi darat dan penjelajahan rute lingkungan pangkalan, membaca kontur peta sederhana dan pembuatan laporan perjalanan.',
    location: 'Rute Sekitar Pangkalan SMP PGRI 6 Bogor',
    instructor: 'Kak Rina Wati, S.Si (KML Putri)',
    googleCalendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Latihan+Pramuka+SMP+PGRI+6+Bogor%3A+Kompas+%26+Peta+Pita&dates=20261010T010000Z%2F20261010T043000Z&details=Materi+Navigasi+Darat%2C+Kompas+Bidik%2C+dan+Peta+Pita+Gudep+01.043-01.044+SMP+PGRI+6+Bogor.&location=SMP+PGRI+6+Bogor%2C+Jl.+Ciwaringin+No.12+Kota+Bogor',
    requirements: ['Kompas Prisma/Bidik (per regu)', 'Papan Jalan & Kertas Milimeter', 'Penggaris 30cm', 'Pensil & Penghapus']
  }
];

export const PEMBINA_PROFILES: PembinaProfile[] = [
  {
    id: 'pem-1',
    name: 'Drs. H. Mulyadi, M.Pd.',
    role: 'Ketua Mabigus (Kepala Sekolah)',
    gudep: 'Mabigus & Pangkalan',
    qualification: 'Mabigus Tersertifikasi Kwarda Jawa Barat',
    nta: '09.01.043.001',
    phone: '+62 812-8877-1122',
    whatsappUrl: 'https://wa.me/6281288771122?text=Halo%20Ka%20Mabigus%20SMP%20PGRI%206%20Bogor',
    email: 'kamabigus@smppgri6bogor.sch.id',
    bio: 'Pendidik berdedikasi tinggi dengan pengalaman memimpin pendidikan formal lebih dari 25 tahun. Mengedepankan pendidikan karakter Pramuka sebagai pilar utama pembentukan kedisiplinan dan budi pekerti luhur siswa.',
    experienceYears: 22,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
    achievements: [
      'Pembina Gugus Depan Berprestasi Tingkat Kota Bogor',
      'Penyelenggara Perkemahan Budaya Pelajar Teladan',
      'Penggagas Sanggar Pramuka Ramah Anak SMP PGRI 6'
    ]
  },
  {
    id: 'pem-2',
    name: 'Kak Hendra Wijaya, S.Pd., KML',
    role: 'Ketua Gugus Depan 01.043 (Pembina Putra)',
    gudep: 'Gudep 01.043 (Putra)',
    qualification: 'Kursus Pembina Mahir Tingkat Lanjutan (KML) Golongan Penggalang',
    nta: '09.01.043.005',
    phone: '+62 813-1234-5678',
    whatsappUrl: 'https://wa.me/6281312345678?text=Salam%20Pramuka%20Kak%20Hendra%2C%20saya%20ingin%20konsultasi%20kegiatan%20Pramuka%20Gudep%2001.043',
    email: 'hendra.pramukapgri6@gmail.com',
    bio: 'Aktif dalam kepramukaan sejak Siaga hingga Pandega dan kini mengabdi sebagai Pembina Pasukan Penggalang Putra. Spesialis pionering modern, survival lapangan, dan pembinaan mental generasi muda.',
    experienceYears: 14,
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
    achievements: [
      'Pelatih Terbaik Pusdiklatcab Kota Bogor 2023',
      'Juara 1 Lomba Cipta Pionering Tingkat Kwarda Jabar',
      'Pembina Pendamping Jambore Nasional XI Cibubur'
    ]
  },
  {
    id: 'pem-3',
    name: 'Kak Rina Wati, S.Si., KML',
    role: 'Ketua Gugus Depan 01.044 (Pembina Putri)',
    gudep: 'Gudep 01.044 (Putri)',
    qualification: 'Kursus Pembina Mahir Tingkat Lanjutan (KML) Golongan Penggalang',
    nta: '09.01.044.002',
    phone: '+62 856-7890-1234',
    whatsappUrl: 'https://wa.me/6285678901234?text=Salam%20Pramuka%20Kak%20Rina%2C%20saya%20ingin%20menanyakan%20kegiatan%20Pasukan%20Putri%20Gudep%2001.044',
    email: 'rina.wati@smppgri6bogor.sch.id',
    bio: 'Guru IPA yang memadukan pendidikan kepanduan dengan sains lingkungan. Fokus pada pembinaan regu putri berprestasi, kecakapan hidup (life skills), sandi-sandi, dan pertolongan pertama gawat darurat.',
    experienceYears: 11,
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
    achievements: [
      'Membawa Regu Melati meraih Juara 1 LT-II Berturut-turut',
      'Instruktur P3K & Sanitasi Lapangan Palang Merah / Pramuka',
      'Penyusun Modul SKU Digital Penggalang Ramu & Rakit'
    ]
  },
  {
    id: 'pem-4',
    name: 'Kak Ahmad Zarkasih, M.Pd., KMD',
    role: 'Pembina Pendamping & Pelatih Lapangan',
    gudep: 'Gudep 01.043 (Putra)',
    qualification: 'Kursus Pembina Mahir Tingkat Dasar (KMD) Penggalang',
    nta: '09.01.043.012',
    phone: '+62 878-9988-7766',
    whatsappUrl: 'https://wa.me/6287899887766?text=Salam%20Pramuka%20Kak%20Ahmad',
    email: 'ahmad.zarkasih@gmail.com',
    bio: 'Pembina energik yang memimpin latihan fisik, baris-berbaris tongkat (LKBBT), ketrampilan survival rimba, serta pengelolaan sanggar dan perlengkapan pangkalan.',
    experienceYears: 7,
    imageUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=500&q=80',
    achievements: [
      'Koreografer Baris-Berbaris Tongkat Terbaik Kota Bogor',
      'Koordinator Perlengkapan Kemah Bhakti Pelajar Se-Jawa Barat'
    ]
  }
];

export const ACTIVE_TASKS: ScoutTask[] = [
  {
    id: 'tsk-1',
    title: 'Ujian Mandiri Butir SKU Ramu: Simpul Mati, Simpul Jangkar & Ikatan Palang',
    category: 'SKU Ramu',
    deadline: '22 September 2026',
    description: 'Buat rekaman video singkat (1-2 menit) atau foto dokumentasi step-by-step pembuatan simpul mati, simpul jangkar, dan ikatan palang menggunakan 2 tongkat dan 1 tali. Jelaskan kegunaan masing-masing simpul dalam kehidupan sehari-hari.',
    requirements: [
      'Durasi video maksimal 2 menit atau foto kolase 3 simpul',
      'Menyebutkan Nama Lengkap, NISN, dan Nama Regu di awal',
      'Memperagakan kerapian dan kekuatan tarikan ikatan'
    ],
    submissionType: 'Video Praktik'
  },
  {
    id: 'tsk-2',
    title: 'Pecahkan Sandi Kotak I, II dan Terjemahkan Sandi Rumput Lapangan',
    category: 'Pionering & Sandi',
    deadline: '25 September 2026',
    description: 'Unduh lembar teka-teki sandi rahasia gudep. Terjemahkan instruksi penjelajahan yang ditulis menggunakan sandi kotak I, sandi kotak II, dan sandi rumput, lalu tuliskan laporan hasil pembacaan.',
    requirements: [
      'Format tulisan tangan rapi di lembar kertas bergaris',
      'Foto jelas lembar jawaban tidak buram',
      'Tuliskan langkah pemecahan kunci sandi'
    ],
    submissionType: 'Laporan Teks & Foto'
  },
  {
    id: 'tsk-3',
    title: 'Jurnal Pengamalan Tri Satya & Dasa Darma di Lingkungan Rumah & Sekolah',
    category: 'SKU Ramu',
    deadline: '28 September 2026',
    description: 'Catat 3 contoh perbuatan nyata pengamalan Dasa Darma kedua (Cinta alam dan kasih sayang sesama manusia) dan Dasa Darma keenam (Rajin, terampil, dan gembira) yang telah kamu lakukan selama 1 minggu terakhir dengan tanda tangan orang tua.',
    requirements: [
      'Laporan minimal 1 halaman kuarto / folio',
      'Disertai tanda tangan orang tua / wali sebagai verifikator',
      'Ketik atau foto buku saku SKU'
    ],
    submissionType: 'Buku Jurnal SKU'
  }
];

export const INITIAL_SUBMISSIONS: TaskSubmission[] = [
  {
    id: 'sub-1',
    taskId: 'tsk-1',
    taskTitle: 'Ujian Mandiri Butir SKU Ramu: Simpul Mati, Simpul Jangkar & Ikatan Palang',
    studentName: 'Fajar Kurniawan',
    nisn: '0098765432',
    regu: 'Regu Rajawali',
    gudep: '01.043 (Putra)',
    submittedAt: '15 September 2026, 14:20 WIB',
    notes: 'Tugas video praktik simpul sudah diunggah ke Google Drive. Tautan publik disertakan.',
    linkOrFile: 'https://drive.google.com/file/d/sample-video-simpul-fajar/view',
    status: 'Dinilai',
    score: 95,
    feedback: 'Luar biasa Fajar! Simpul jangkar dan ikatan palang sangat kokoh dan rapi. Penjelasan fungsi simpul di awal video sangat lugas. Poin SKU No. 18 terverifikasi LULUS.',
    gradedBy: 'Kak Hendra Wijaya, S.Pd (KML)'
  },
  {
    id: 'sub-2',
    taskId: 'tsk-2',
    taskTitle: 'Pecahkan Sandi Kotak I, II dan Terjemahkan Sandi Rumput Lapangan',
    studentName: 'Nadia Rahmawati',
    nisn: '0098765488',
    regu: 'Regu Melati',
    gudep: '01.044 (Putri)',
    submittedAt: '16 September 2026, 10:15 WIB',
    notes: 'Terjemahan sandi halaman 1-3 lengkap dengan rumus kunci titik dan garis.',
    linkOrFile: 'https://drive.google.com/file/d/sample-nadia-sandi/view',
    status: 'Dinilai',
    score: 92,
    feedback: 'Terjemahan akurat! Ada sedikit perbaikan pada sandi rumput nomor 4 (huruf S kurang satu rumput pendek), namun keseluruhan pemecahan sangat teliti. Poin SKU No. 20 LULUS.',
    gradedBy: 'Kak Rina Wati, S.Si (KML)'
  },
  {
    id: 'sub-3',
    taskId: 'tsk-1',
    taskTitle: 'Ujian Mandiri Butir SKU Ramu: Simpul Mati, Simpul Jangkar & Ikatan Palang',
    studentName: 'Dimas Bagus Saputra',
    nisn: '0098765501',
    regu: 'Regu Singa',
    gudep: '01.043 (Putra)',
    submittedAt: '16 September 2026, 11:45 WIB',
    notes: 'Foto kolase pengerjaan ikatan palang di sanggar sekolah.',
    linkOrFile: 'https://drive.google.com/file/d/sample-dimas-simpul/view',
    status: 'Menunggu Review'
  },
  {
    id: 'sub-4',
    taskId: 'tsk-3',
    taskTitle: 'Jurnal Pengamalan Tri Satya & Dasa Darma di Lingkungan Rumah & Sekolah',
    studentName: 'Aulia Zahra Putri',
    nisn: '0098765512',
    regu: 'Regu Mawar',
    gudep: '01.044 (Putri)',
    submittedAt: '16 September 2026, 09:30 WIB',
    notes: 'Jurnal bukti kerja bakti menanam pohon bersama keluarga & membantu adik belajar.',
    linkOrFile: 'https://drive.google.com/file/d/sample-aulia-jurnal/view',
    status: 'Menunggu Review'
  }
];

export const INITIAL_NOTIFICATIONS: LiveNotification[] = [
  {
    id: 'notif-1',
    title: 'Surat Izin Persami Diterbitkan',
    message: 'Surat Izin Orang Tua untuk PERSAMI Curug Nangka telah dapat diunduh pada papan pengumuman.',
    timestamp: 'Baru saja',
    type: 'urgent',
    read: false,
    linkTab: 'pengumuman'
  },
  {
    id: 'notif-2',
    title: 'Nilai Tugas SKU Fajar Kurniawan',
    message: 'Tugas video simpul ikatan palang oleh Fajar Kurniawan telah dinilai (Skor: 95/100).',
    timestamp: '1 jam yang lalu',
    type: 'success',
    read: false,
    linkTab: 'nilai'
  },
  {
    id: 'notif-3',
    title: 'Sinkronisasi Jadwal Google Calendar',
    message: 'Jadwal latihan Sabtu ini telah diperbarui dengan materi Morse & Semaphore.',
    timestamp: '3 jam yang lalu',
    type: 'info',
    read: true,
    linkTab: 'jadwal'
  }
];

export const FAQ_PARENTS = [
  {
    q: 'Apakah kegiatan Pramuka di SMP PGRI 6 Bogor dipungut biaya bulanan?',
    a: 'Tidak. Kegiatan latihan rutin mingguan Gerakan Pramuka Gudep 01.043 - 01.044 bebas biaya (gratis) dan didukung sepenuhnya oleh pihak sekolah. Untuk perkemahan luar sekolah (seperti Persami), biaya hanya mencakup akomodasi tempat perkemahan, konsumsi, dan transportasi resmi yang dimusyawarahkan secara transparan bersama orang tua.'
  },
  {
    q: 'Pukul berapa latihan rutin mingguan selesai?',
    a: 'Latihan rutin dilaksanakan setiap hari Sabtu mulai pukul 08.00 WIB dan selesai tepat pukul 11.30 WIB sebelum waktu ibadah sholat dzuhur, sehingga siswa dapat pulang ke rumah tepat waktu dengan aman.'
  },
  {
    q: 'Bagaimana standar keselamatan dan pengawasan saat perkemahan di alam terbuka?',
    a: 'Setiap kegiatan perkemahan diawasi langsung oleh Pembina bersertifikat KML/KMD, guru pendamping, tim medis UKS sekolah, serta berkoordinasi dengan Puskesmas terdekat dan Polsek/Koramil setempat. Tenda putra dan putri terpisah dengan zona pengawasan ketat.'
  },
  {
    q: 'Bagaimana cara orang tua memantau perkembangan nilai dan kecakapan (SKU) anak?',
    a: 'Orang tua dapat menggunakan fitur "Hasil & Nilai Tugas" pada website ini dengan memasukkan NISN anak untuk melihat status butir SKU yang telah lulus, catatan pembina, dan tugas yang sedang dikerjakan.'
  },
  {
    q: 'Seragam dan atribut apa saja yang wajib disiapkan bagi siswa baru?',
    a: 'Seragam Pramuka standar nasional lengkap (kacu merah putih, ring kacu, baret coklat untuk putra atau topi penggalang coklat untuk putri, setangan leher, tanda pangkalan SMP PGRI 6 Bogor, nomor gudep 01.043/01.044, serta tali kur pramuka).'
  }
];
