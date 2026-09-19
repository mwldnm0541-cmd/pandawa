import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  HelpCircle, 
  Send, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Users, 
  Clock,
  ExternalLink
} from 'lucide-react';
import { PANGKALAN_INFO, FAQ_PARENTS, PEMBINA_PROFILES } from '../data/mockData';
import { ContactMessage } from '../types';

export const ContactParents: React.FC = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [senderName, setSenderName] = useState('');
  const [senderRole, setSenderRole] = useState<ContactMessage['senderRole']>('Orang Tua Murid');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Pertanyaan Pendaftaran Anggota Baru');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !message || !phone) return;

    const newMsg: ContactMessage = {
      id: `msg-${Date.now()}`,
      senderName,
      senderRole,
      email: email || '-',
      phone,
      subject,
      message,
      createdAt: new Date().toLocaleString('id-ID')
    };

    setMessages([newMsg, ...messages]);
    setSubmitted(true);
    setSenderName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <section id="kontak-section" className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-200 text-amber-900 mb-2.5">
            <Phone className="w-3.5 h-3.5 text-amber-800" />
            <span>Pusat Layanan Komunikasi Calon Anggota & Orang Tua</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight font-heading">
            Hubungi Kami & Layanan Konsultasi
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
            Kami siap membantu dan menjawab setiap pertanyaan para orang tua murid serta calon anggota mengenai kegiatan kepramukaan di SMP PGRI 6 Bogor.
          </p>
        </div>

        {/* Fast Hotline Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          
          {/* Pembina Putra Hotline */}
          <div className="p-6 rounded-3xl bg-amber-50/70 border border-amber-200/80 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-800 text-white uppercase tracking-wider">
                Gudep 01.043 (Putra)
              </span>
              <h3 className="text-base font-bold text-stone-900">
                Kak Hendra Wijaya, S.Pd (KML)
              </h3>
              <p className="text-xs text-stone-600">
                Konsultasi Pasukan Penggalang Putra, latihan rutin, persiapan kemah, dan atribut putra.
              </p>
            </div>

            <a
              href="https://wa.me/6281312345678?text=Salam%20Pramuka%20Kak%20Hendra%2C%20saya%20orang%20tua%20siswa%20SMP%20PGRI%206%20ingin%20berkonsultasi"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat WhatsApp Pembina Putra</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>

          {/* Pembina Putri Hotline */}
          <div className="p-6 rounded-3xl bg-amber-50/70 border border-amber-200/80 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-800 text-white uppercase tracking-wider">
                Gudep 01.044 (Putri)
              </span>
              <h3 className="text-base font-bold text-stone-900">
                Kak Rina Wati, S.Si (KML)
              </h3>
              <p className="text-xs text-stone-600">
                Konsultasi Pasukan Penggalang Putri, kesehatan/alergi putri saat kemah, dan materi SKU.
              </p>
            </div>

            <a
              href="https://wa.me/6285678901234?text=Salam%20Pramuka%20Kak%20Rina%2C%20saya%20orang%20tua%20siswa%20SMP%20PGRI%206%20ingin%20berkonsultasi"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat WhatsApp Pembina Putri</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>

          {/* Sekretariat Sanggar & Email */}
          <div className="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-stone-800 text-white uppercase tracking-wider">
                Sekretariat Pangkalan
              </span>
              <h3 className="text-base font-bold text-stone-900">
                Sanggar Pramuka SMP PGRI 6
              </h3>
              <p className="text-xs text-stone-600">
                Surat dinas, izin dispensasi lomba, administrasi sertifikat SKU, dan kemitraan kwartir.
              </p>
              <p className="text-xs font-mono text-stone-700">
                pramuka.smppgri6bogor@gmail.com
              </p>
            </div>

            <a
              href="mailto:pramuka.smppgri6bogor@gmail.com?subject=Konsultasi%20Pramuka%20SMP%20PGRI%206%20Bogor"
              className="w-full py-2.5 px-4 rounded-xl bg-stone-800 hover:bg-stone-900 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Kirim Email Resmi</span>
            </a>
          </div>

        </div>

        {/* Two Columns: Consultation Form & FAQ Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Consultation Message Form */}
          <div className="lg:col-span-6 bg-stone-50/80 rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
            <div className="border-b border-stone-200 pb-4 mb-5">
              <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                <Send className="w-4 h-4 text-amber-800" />
                <span>Kirim Pesan Langsung ke Pembina</span>
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Pesan akan langsung diteruskan ke email dan nomor pembina pangkalan.
              </p>
            </div>

            {submitted && (
              <div className="mb-4 p-4 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 flex items-center gap-2 text-xs font-bold animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                Terima kasih! Pesan Anda telah kami terima dan akan dibalas secepatnya.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Nama Anda *
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Contoh: Ibu Dewi Sartika"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm bg-white focus:ring-2 focus:ring-amber-700 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Status Anda *
                  </label>
                  <select
                    value={senderRole}
                    onChange={(e) => setSenderRole(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm bg-white focus:ring-2 focus:ring-amber-700 focus:outline-none"
                  >
                    <option value="Orang Tua Murid">Orang Tua / Wali Murid</option>
                    <option value="Calon Anggota">Calon Anggota (Siswa)</option>
                    <option value="Alumni">Alumni Pramuka PGRI 6</option>
                    <option value="Masyarakat Umum">Masyarakat Umum</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Nomor WhatsApp / HP Aktif *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Contoh: 08123456789"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm bg-white focus:ring-2 focus:ring-amber-700 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Alamat Email (Opsional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Contoh: nama@email.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm bg-white focus:ring-2 focus:ring-amber-700 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Perihal Pesan *
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm bg-white focus:ring-2 focus:ring-amber-700 focus:outline-none"
                >
                  <option value="Pertanyaan Pendaftaran Anggota Baru">Pertanyaan Pendaftaran Anggota Baru</option>
                  <option value="Izin / Dispensasi Kegiatan Perkemahan">Izin / Dispensasi Kegiatan Perkemahan</option>
                  <option value="Informasi Seragam dan Atribut Lengkap">Informasi Seragam dan Atribut Lengkap</option>
                  <option value="Konsultasi Kesehatan / Kondisi Khusus Siswa">Konsultasi Kesehatan / Kondisi Khusus Siswa</option>
                  <option value="Penilaian & Ujian Syarat Kecakapan (SKU)">Penilaian & Ujian Syarat Kecakapan (SKU)</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Pesan / Pertanyaan Lengkap *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tuliskan pertanyaan Anda dengan jelas..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm bg-white focus:ring-2 focus:ring-amber-700 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Pesan Konsultasi</span>
              </button>
            </form>
          </div>

          {/* Right: FAQ for Parents & Prospective Members */}
          <div className="lg:col-span-6 space-y-4">
            <div className="border-b border-stone-200 pb-4 mb-2">
              <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-800" />
                <span>Tanya Jawab Seputar Kepramukaan (FAQ Orang Tua)</span>
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Pertanyaan yang paling sering diajukan orang tua dan wali murid.
              </p>
            </div>

            <div className="space-y-3">
              {FAQ_PARENTS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-stone-200 rounded-2xl overflow-hidden transition-all bg-stone-50/50"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 text-left font-bold text-xs sm:text-sm text-stone-900 flex items-center justify-between gap-3 hover:bg-stone-100 transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-amber-800 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-stone-400 flex-shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="p-4 pt-1 text-xs text-stone-600 leading-relaxed border-t border-stone-200 bg-white animate-in fade-in">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Safety Commitment Banner */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs text-amber-950 space-y-1 mt-4">
              <div className="flex items-center gap-2 font-bold text-amber-900">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                <span>Komitmen Keamanan & Perlindungan Anak</span>
              </div>
              <p className="leading-relaxed text-stone-700">
                Pangkalan SMP PGRI 6 Bogor menerapkan kebijakan "Safe from Harm" Gerakan Pramuka sedunia. Seluruh pembina dan pelatih berkomitmen menjaga lingkungan yang inklusif, bebas perundungan (anti-bullying), dan mengutamakan keselamatan fisik serta psikologis setiap anak didik.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
