import React, { useState } from 'react';
import { 
  Image as ImageIcon, 
  Filter, 
  Maximize2, 
  Download, 
  Calendar, 
  MapPin, 
  User, 
  X,
  PlusCircle,
  CheckCircle2
} from 'lucide-react';
import { INITIAL_PHOTOS } from '../data/mockData';
import { PhotoItem } from '../types';

export const PhotoGallery: React.FC = () => {
  const [photos, setPhotos] = useState<PhotoItem[]>(INITIAL_PHOTOS);
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // New photo state
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<PhotoItem['category']>('Pionering');
  const [newCaption, setNewCaption] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [newPhotographer, setNewPhotographer] = useState('');

  const categories = [
    'Semua',
    'Pionering',
    'Upacara',
    'Kemah & Survival',
    'Semaphore & Sandi',
    'Prestasi',
    'Latihan Mingguan'
  ];

  const filteredPhotos = photos.filter((p) => {
    if (selectedCategory === 'Semua') return true;
    return p.category === selectedCategory;
  });

  const handleAddPhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newUrl) return;

    const newPhoto: PhotoItem = {
      id: `photo-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      date: new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' }),
      location: 'SMP PGRI 6 Bogor',
      imageUrl: newUrl,
      caption: newCaption,
      photographer: newPhotographer || 'Dokumentasi Dewan Penggalang'
    };

    setPhotos([newPhoto, ...photos]);
    setShowUploadModal(false);
    setUploadSuccess(true);
    setNewTitle('');
    setNewUrl('');
    setNewCaption('');
    setTimeout(() => setUploadSuccess(false), 4000);
  };

  return (
    <section id="galeri-section" className="py-12 bg-amber-50/40">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-amber-200/60 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-200 text-amber-900 mb-2">
              <ImageIcon className="w-3.5 h-3.5 text-amber-800" />
              <span>Dokumentasi Jejak Langkah Penggalang</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight font-heading">
              Galeri Foto Kegiatan Pramuka
            </h2>
            <p className="text-stone-600 text-sm mt-1 max-w-2xl">
              Potret semangat kebersamaan, kreativitas pionering menara pandang, upacara bendera, perkemahan, dan raihan prestasi Gudep 01.043 - 01.044.
            </p>
          </div>

          <button
            onClick={() => setShowUploadModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold shadow-md transition-all cursor-pointer self-start md:self-auto"
          >
            <PlusCircle className="w-4 h-4" />
            <span>+ Unggah Dokumentasi</span>
          </button>
        </div>

        {uploadSuccess && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 flex items-center gap-2 text-xs font-bold animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Foto dokumentasi berhasil ditambahkan ke album galeri!
          </div>
        )}

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          <span className="text-xs font-semibold text-stone-500 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Album:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-800 text-white shadow-sm'
                  : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-200 transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-semibold flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5" /> Klik untuk perbesar foto
                  </span>
                </div>
                <span className="absolute top-3 left-3 bg-stone-900/80 text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-md backdrop-blur-xs">
                  {photo.category}
                </span>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="text-sm font-bold text-stone-900 leading-snug group-hover:text-amber-800 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-2 mt-1">
                    {photo.caption}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {photo.date}
                  </span>
                  <span className="truncate max-w-[120px]">
                    Foto: {photo.photographer}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in">
            <div className="bg-stone-900 rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-hidden text-white flex flex-col relative shadow-2xl border border-stone-700">
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-10 bg-stone-800/80 hover:bg-stone-700 text-white p-2 rounded-full cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Area */}
              <div className="relative bg-black flex items-center justify-center max-h-[60vh] overflow-hidden">
                <img
                  src={activePhoto.imageUrl}
                  alt={activePhoto.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[60vh] w-auto object-contain mx-auto"
                />
              </div>

              {/* Photo Caption & Metadata */}
              <div className="p-6 bg-stone-900 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-0.5 rounded">
                    {activePhoto.category}
                  </span>
                  <div className="flex items-center gap-4 text-xs text-stone-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {activePhoto.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {activePhoto.location}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white font-heading">
                  {activePhoto.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  {activePhoto.caption}
                </p>

                <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-amber-400" />
                    Fotografer: <strong className="text-stone-200">{activePhoto.photographer}</strong>
                  </span>

                  <a
                    href={activePhoto.imageUrl}
                    target="_blank"
                    rel="noreferrer"
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-300 font-semibold text-xs transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Buka / Unduh Foto HD</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Unggah Foto Dokumentasi */}
        {showUploadModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative animate-in fade-in">
              <button
                onClick={() => setShowUploadModal(false)}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-base font-bold text-stone-900 mb-1">
                Unggah Foto Dokumentasi Kegiatan
              </h3>
              <p className="text-xs text-stone-500 mb-4">
                Berbagi momen kepramukaan Gudep 01.043 - 01.044 SMP PGRI 6 Bogor
              </p>

              <form onSubmit={handleAddPhoto} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Judul Foto *</label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Contoh: Latihan Yel-yel Regu Elang di Sanggar..."
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs sm:text-sm focus:ring-2 focus:ring-amber-700 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Kategori Album *</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-700 focus:outline-none"
                  >
                    <option value="Pionering">Pionering</option>
                    <option value="Upacara">Upacara</option>
                    <option value="Kemah & Survival">Kemah & Survival</option>
                    <option value="Semaphore & Sandi">Semaphore & Sandi</option>
                    <option value="Prestasi">Prestasi</option>
                    <option value="Latihan Mingguan">Latihan Mingguan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">URL Gambar (Unsplash / Google Drive / Web) *</label>
                  <input
                    type="url"
                    required
                    value={newUrl}
                    onChange={(e) => setNewUrl(e.target.value)}
                    placeholder="Contoh: https://images.unsplash.com/photo-..."
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs sm:text-sm focus:ring-2 focus:ring-amber-700 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Keterangan / Caption</label>
                  <textarea
                    rows={2}
                    value={newCaption}
                    onChange={(e) => setNewCaption(e.target.value)}
                    placeholder="Jelaskan suasana foto, regu yang berpartisipasi, dan lokasi kegiatan..."
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-700 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Nama Fotografer / Regu</label>
                  <input
                    type="text"
                    value={newPhotographer}
                    onChange={(e) => setNewPhotographer(e.target.value)}
                    placeholder="Contoh: Kak Siti (Regu Melati)"
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-700 focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowUploadModal(false)}
                    className="px-4 py-2 rounded-xl text-stone-600 hover:bg-stone-100 text-xs font-semibold"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold shadow-md cursor-pointer"
                  >
                    Simpan Foto
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
