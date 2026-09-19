import React, { useState } from 'react';
import { 
  Award, 
  Search, 
  CheckCircle2, 
  Clock, 
  FileText, 
  ExternalLink, 
  Star, 
  UserCheck, 
  Filter, 
  Edit3, 
  Save, 
  X,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import { TaskSubmission } from '../types';

interface TaskGradingProps {
  submissions: TaskSubmission[];
  onGradeSubmission: (id: string, score: number, feedback: string, gradedBy: string) => void;
}

export const TaskGrading: React.FC<TaskGradingProps> = ({
  submissions,
  onGradeSubmission
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'Semua' | 'Dinilai' | 'Menunggu Review'>('Semua');
  const [editingSubmission, setEditingSubmission] = useState<TaskSubmission | null>(null);

  // Quick grading modal state
  const [gradeScore, setGradeScore] = useState<number>(90);
  const [gradeFeedback, setGradeFeedback] = useState('');
  const [gradeInstructor, setGradeInstructor] = useState('Kak Hendra Wijaya, S.Pd (KML)');

  const filteredSubmissions = submissions.filter((sub) => {
    const matchesSearch = 
      sub.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.nisn.includes(searchQuery) ||
      sub.regu.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.taskTitle.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'Semua' || sub.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleOpenGradeModal = (sub: TaskSubmission) => {
    setEditingSubmission(sub);
    setGradeScore(sub.score || 90);
    setGradeFeedback(sub.feedback || 'Pengerjaan tugas sangat baik dan rapi. Butir SKU dinyatakan LULUS.');
    setGradeInstructor(sub.gradedBy || 'Kak Hendra Wijaya, S.Pd (KML)');
  };

  const handleSaveGrade = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSubmission) return;

    onGradeSubmission(
      editingSubmission.id,
      gradeScore,
      gradeFeedback,
      gradeInstructor
    );

    setEditingSubmission(null);
  };

  return (
    <section id="nilai-section" className="py-12 bg-amber-50/40">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-200 text-amber-900 mb-2.5">
            <Award className="w-3.5 h-3.5 text-amber-800" />
            <span>Transparansi Penilaian & Syarat Kecakapan Umum</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight font-heading">
            Hasil & Nilai Tugas Pramuka
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
            Pantau catatan koreksi, skor kelulusan butir SKU, serta apresiasi dari Pembina Gudep 01.043 - 01.044 untuk setiap tugas yang telah dikumpulkan.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-200 mb-8 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari nama siswa, NISN (misal: 0098765432), atau regu..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-700"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-xs font-semibold text-stone-500 hidden sm:inline">Status:</span>
              <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl w-full sm:w-auto">
                {(['Semua', 'Dinilai', 'Menunggu Review'] as const).map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex-1 sm:flex-initial ${
                      statusFilter === st
                        ? 'bg-amber-800 text-white shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Submissions List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredSubmissions.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 text-center border border-stone-200">
              <Award className="w-10 h-10 text-stone-300 mx-auto mb-2" />
              <p className="font-bold text-stone-700 text-sm">Tidak ada hasil tugas yang sesuai</p>
              <p className="text-xs text-stone-500 mt-1">Gunakan kata kunci lain atau kirimkan tugas baru pada menu Tugas.</p>
            </div>
          ) : (
            filteredSubmissions.map((sub) => {
              const isGraded = sub.status === 'Dinilai';
              return (
                <div
                  key={sub.id}
                  className={`bg-white rounded-2xl p-5 sm:p-6 shadow-sm border transition-all ${
                    isGraded ? 'border-amber-300/80 bg-gradient-to-r from-white via-white to-amber-50/20' : 'border-stone-200'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold text-stone-900">
                          {sub.studentName}
                        </span>
                        <span className="font-mono text-[11px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded font-semibold">
                          NISN: {sub.nisn}
                        </span>
                        <span className="text-[11px] bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded">
                          {sub.regu}
                        </span>
                      </div>

                      <h4 className="text-sm sm:text-base font-bold text-stone-900 leading-snug">
                        {sub.taskTitle}
                      </h4>
                    </div>

                    {/* Score or Status Badge */}
                    <div className="flex items-center gap-3 self-start sm:self-center">
                      {isGraded ? (
                        <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-300 px-3 py-1.5 rounded-xl">
                          <Star className="w-4 h-4 text-emerald-600 fill-emerald-500" />
                          <div className="text-right">
                            <span className="text-[10px] text-emerald-800 font-bold block uppercase">Nilai Akhir</span>
                            <span className="text-base font-black text-emerald-900 leading-none">{sub.score} / 100</span>
                          </div>
                        </div>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                          <Clock className="w-3.5 h-3.5 text-amber-700" />
                          Menunggu Penilaian
                        </span>
                      )}

                      {/* Pembina Quick Grade Button */}
                      <button
                        onClick={() => handleOpenGradeModal(sub)}
                        className="px-2.5 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors border border-stone-200"
                        title="Beri / Ubah Nilai (Simulasi Pembina)"
                      >
                        <Edit3 className="w-3.5 h-3.5 text-stone-500" />
                        <span className="hidden sm:inline">Koreksi</span>
                      </button>
                    </div>
                  </div>

                  {/* Student Link and Notes */}
                  <div className="bg-stone-50 rounded-xl p-3 text-xs text-stone-600 space-y-1.5 mb-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-stone-500">Tautan Berkas Siswa:</span>
                      <a
                        href={sub.linkOrFile}
                        target="_blank"
                        rel="noreferrer"
                        className="text-amber-800 hover:underline font-semibold flex items-center gap-1 truncate max-w-xs"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span className="truncate">{sub.linkOrFile}</span>
                        <ExternalLink className="w-3 h-3 flex-shrink-0" />
                      </a>
                    </div>
                    {sub.notes && (
                      <p className="text-stone-600 italic">
                        "{sub.notes}"
                      </p>
                    )}
                  </div>

                  {/* Feedback Box from Pembina */}
                  {isGraded && sub.feedback && (
                    <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs space-y-1">
                      <div className="flex items-center justify-between text-amber-900 font-bold">
                        <span className="flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
                          Ulasan & Pengesahan Pembina:
                        </span>
                        <span className="text-[11px] text-amber-800 font-normal">
                          Oleh: {sub.gradedBy}
                        </span>
                      </div>
                      <p className="text-stone-700 leading-relaxed">
                        {sub.feedback}
                      </p>
                    </div>
                  )}

                  <div className="mt-2 text-[10px] text-stone-400 text-right">
                    Dikirim pada: {sub.submittedAt}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Modal Koreksi Pembina (Simulasi Penilaian Instan) */}
        {editingSubmission && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative animate-in fade-in">
              <button
                onClick={() => setEditingSubmission(null)}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 p-1.5 rounded-lg hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-stone-100">
                <div className="w-8 h-8 rounded-lg bg-amber-800 text-white flex items-center justify-center font-bold text-xs">
                  ⚜
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-base">Lembar Penilaian Pembina</h3>
                  <p className="text-xs text-stone-500">
                    Siswa: {editingSubmission.studentName} ({editingSubmission.regu})
                  </p>
                </div>
              </div>

              <form onSubmit={handleSaveGrade} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Nilai Angka (0 - 100) *
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={100}
                    required
                    value={gradeScore}
                    onChange={(e) => setGradeScore(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-sm font-bold text-amber-900 focus:ring-2 focus:ring-amber-700 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Catatan Koreksi / Ulasan Pengesahan SKU *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={gradeFeedback}
                    onChange={(e) => setGradeFeedback(e.target.value)}
                    placeholder="Tuliskan catatan kelulusan butir SKU, kerapian ikatan, apresiasi..."
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs sm:text-sm focus:ring-2 focus:ring-amber-700 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Nama Pembina Penilai
                  </label>
                  <select
                    value={gradeInstructor}
                    onChange={(e) => setGradeInstructor(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-700 focus:outline-none"
                  >
                    <option value="Kak Hendra Wijaya, S.Pd (KML)">Kak Hendra Wijaya, S.Pd (KML - Pembina Putra)</option>
                    <option value="Kak Rina Wati, S.Si (KML)">Kak Rina Wati, S.Si (KML - Pembina Putri)</option>
                    <option value="Kak Ahmad Zarkasih, M.Pd (KMD)">Kak Ahmad Zarkasih, M.Pd (KMD)</option>
                  </select>
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setEditingSubmission(null)}
                    className="px-4 py-2 rounded-xl text-stone-600 hover:bg-stone-100 text-xs font-semibold"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold shadow-md cursor-pointer flex items-center gap-1.5"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Simpan & Sahkan Nilai</span>
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
