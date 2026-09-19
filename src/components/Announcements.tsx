import React, { useState } from 'react';
import { 
  Bell, 
  Search, 
  Filter, 
  Pin, 
  Download, 
  FileText, 
  Calendar, 
  Users, 
  AlertTriangle, 
  CheckCircle2, 
  Info, 
  PlusCircle,
  X
} from 'lucide-react';
import { AnnouncementItem } from '../types';

interface AnnouncementsProps {
  announcements: AnnouncementItem[];
  onAddAnnouncement: (item: AnnouncementItem) => void;
}

export const Announcements: React.FC<AnnouncementsProps> = ({
  announcements,
  onAddAnnouncement
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  // New Announcement Form State
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newCategory, setNewCategory] = useState<AnnouncementItem['category']>('KEGIATAN');
  const [newPriority, setNewPriority] = useState<AnnouncementItem['priority']>('Sedang');
  const [newAudience, setNewAudience] = useState<AnnouncementItem['targetAudience']>('Semua Anggota');
  const [newAttachment, setNewAttachment] = useState('');

  const categories = ['Semua', 'PENTING', 'KEGIATAN', 'SURAT RESMI', 'DARURAT', 'INFORMASI'];

  const filteredAnnouncements = announcements.filter((item) => {
    const matchesCat = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.targetAudience.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleDownload = (filename: string) => {
    // Generate sample mock file download
    const element = document.createElement('a');
    const file = new Blob([`SURAT / DOKUMEN RESMI GERAKAN PRAMUKA\nGUGUS DEPAN 01.043 - 01.044 SMP PGRI 6 BOGOR\n\nNama Dokumen: ${filename}\nTanggal: ${new Date().toLocaleDateString('id-ID')}\nStatus: Dokumen Resmi Terverifikasi\n\nIsi: Ini adalah simulasi unduhan berkas resmi untuk keperluan orang tua dan anggota Pramuka SMP PGRI 6 Bogor.`], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setDownloadSuccess(`Berkas "${filename}" berhasil diunduh!`);
    setTimeout(() => setDownloadSuccess(null), 4000);
  };

  const handleSubmitNewAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const newItem: AnnouncementItem = {
      id: `ann-${Date.now()}`,
      title: newTitle,
      content: newContent,
      category: newCategory,
      priority: newPriority,
      targetAudience: newAudience,
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      isPinned: newPriority === 'Tinggi',
      attachmentName: newAttachment.trim() ? newAttachment : undefined
    };

    onAddAnnouncement(newItem);
    setShowAddModal(false);
    setNewTitle('');
    setNewContent('');
    setNewAttachment('');
  };

  return (
    <section id="pengumuman-section" className="py-12 bg-amber-50/40">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-amber-200/60 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-200/80 text-amber-900 mb-2">
              <Bell className="w-3.5 h-3.5 text-amber-700" />
              <span>Sistem Warta & Surat Edaran Daring</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight font-heading">
              Papan Pengumuman Resmi
            </h2>
            <p className="text-stone-600 text-sm mt-1 max-w-2xl">
              Informasi terkini, surat edaran izin kegiatan bagi orang tua, himbauan latihan lapangan, dan kabar darurat pangkalan Gudep 01.043 - 01.044.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>+ Buat Warta Pembina</span>
            </button>
          </div>
        </div>

        {/* Download Success Banner */}
        {downloadSuccess && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 flex items-center gap-3 animate-in fade-in">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <p className="text-xs sm:text-sm font-semibold">{downloadSuccess}</p>
          </div>
        )}

        {/* Filters & Search Control Bar */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-200 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari pengumuman, surat izin orang tua, perlengkapan, kata kunci..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 bg-stone-50/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-700/50 focus:border-amber-700"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              <span className="text-xs font-semibold text-stone-500 mr-1 flex items-center gap-1 hidden sm:flex">
                <Filter className="w-3.5 h-3.5" /> Kategori:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-amber-800 text-white shadow-sm'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Announcement Feed */}
        <div className="space-y-4">
          {filteredAnnouncements.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-dashed border-stone-300">
              <Bell className="w-10 h-10 text-stone-300 mx-auto mb-3" />
              <p className="text-sm font-bold text-stone-700">Tidak ada pengumuman yang cocok</p>
              <p className="text-xs text-stone-500 mt-1">Coba gunakan kata kunci pencarian yang lain atau pilih kategori Semua.</p>
            </div>
          ) : (
            filteredAnnouncements.map((item) => {
              const isUrgent = item.category === 'DARURAT' || item.priority === 'Tinggi';
              return (
                <article
                  key={item.id}
                  className={`bg-white rounded-2xl p-5 sm:p-6 shadow-sm border transition-all hover:shadow-md ${
                    item.isPinned
                      ? 'border-amber-400 bg-gradient-to-r from-amber-50/70 via-white to-white'
                      : 'border-stone-200'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        {item.isPinned && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-600 text-white shadow-xs">
                            <Pin className="w-3 h-3" /> Dipin
                          </span>
                        )}
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                            item.category === 'DARURAT'
                              ? 'bg-red-100 text-red-800 border border-red-300'
                              : item.category === 'PENTING'
                              ? 'bg-amber-100 text-amber-900 border border-amber-300'
                              : item.category === 'SURAT RESMI'
                              ? 'bg-blue-100 text-blue-900 border border-blue-300'
                              : 'bg-stone-100 text-stone-800'
                          }`}
                        >
                          {item.category === 'DARURAT' && <AlertTriangle className="w-3 h-3" />}
                          {item.category === 'PENTING' && <Info className="w-3 h-3" />}
                          {item.category}
                        </span>

                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-stone-100 text-stone-600">
                          <Users className="w-3 h-3 text-stone-500" />
                          Untuk: {item.targetAudience}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-stone-500 whitespace-nowrap self-start sm:self-center">
                      <Calendar className="w-3.5 h-3.5 text-stone-400" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed whitespace-pre-line mb-4">
                    {item.content}
                  </p>

                  {/* Attachment Bar */}
                  {item.attachmentName && (
                    <div className="pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2 text-xs text-stone-600">
                        <FileText className="w-4 h-4 text-amber-700" />
                        <span className="font-semibold">{item.attachmentName}</span>
                        <span className="text-[10px] text-stone-400">(PDF Dokumen Resmi)</span>
                      </div>
                      <button
                        onClick={() => handleDownload(item.attachmentName!)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-100/80 hover:bg-amber-200 text-amber-900 text-xs font-bold transition-colors cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Unduh Dokumen</span>
                      </button>
                    </div>
                  )}
                </article>
              );
            })
          )}
        </div>

        {/* Modal Buat Pengumuman Baru (Simulasi Pembina) */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative animate-in fade-in">
              <button
                onClick={() => setShowAddModal(false)}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 p-1.5 rounded-lg hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-stone-100">
                <div className="w-8 h-8 rounded-lg bg-amber-800 text-white flex items-center justify-center text-sm font-bold">
                  ⚜
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-base">Terbitkan Warta / Surat Pembina</h3>
                  <p className="text-xs text-stone-500">Gugus Depan 01.043 - 01.044 SMP PGRI 6 Bogor</p>
                </div>
              </div>

              <form onSubmit={handleSubmitNewAnnouncement} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Judul Pengumuman / Perihal Surat *
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Contoh: Jadwal Ujian SKU Ramu Butir 15-20..."
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs sm:text-sm focus:ring-2 focus:ring-amber-700 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">Kategori</label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as any)}
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-700 focus:outline-none"
                    >
                      <option value="KEGIATAN">KEGIATAN</option>
                      <option value="PENTING">PENTING</option>
                      <option value="SURAT RESMI">SURAT RESMI</option>
                      <option value="DARURAT">DARURAT</option>
                      <option value="INFORMASI">INFORMASI</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">Prioritas</label>
                    <select
                      value={newPriority}
                      onChange={(e) => setNewPriority(e.target.value as any)}
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-700 focus:outline-none"
                    >
                      <option value="Tinggi">Tinggi (Pin)</option>
                      <option value="Sedang">Sedang</option>
                      <option value="Normal">Normal</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">Target Sasaran</label>
                    <select
                      value={newAudience}
                      onChange={(e) => setNewAudience(e.target.value as any)}
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-700 focus:outline-none"
                    >
                      <option value="Semua Anggota">Semua Anggota</option>
                      <option value="Orang Tua / Wali">Orang Tua / Wali</option>
                      <option value="Calon Anggota">Calon Anggota</option>
                      <option value="Penggalang Ramu">Penggalang Ramu</option>
                      <option value="Dewan Penggalang">Dewan Penggalang</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Isi Pengumuman Lengkap *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    placeholder="Tuliskan petunjuk teknis, waktu kumpul, perlengkapan yang harus dibawa..."
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs sm:text-sm focus:ring-2 focus:ring-amber-700 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Nama Berkas Lampiran (Opsional)
                  </label>
                  <input
                    type="text"
                    value={newAttachment}
                    onChange={(e) => setNewAttachment(e.target.value)}
                    placeholder="Contoh: Petunjuk_Teknis_Lomba_LT2.pdf"
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-700 focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 rounded-xl text-stone-600 hover:bg-stone-100 text-xs font-semibold"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold shadow-md cursor-pointer"
                  >
                    Siarkan Warta
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
