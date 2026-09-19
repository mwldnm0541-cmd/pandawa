import React, { useState } from 'react';
import { 
  FileText, 
  Upload, 
  Link as LinkIcon, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Video, 
  BookOpen, 
  Send,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ScoutTask, TaskSubmission } from '../types';
import { ACTIVE_TASKS } from '../data/mockData';

interface TaskSubmissionProps {
  onTaskSubmitted: (submission: TaskSubmission) => void;
  onNavigateToGrading: () => void;
}

export const TaskSubmissionComponent: React.FC<TaskSubmissionProps> = ({
  onTaskSubmitted,
  onNavigateToGrading
}) => {
  const [selectedTask, setSelectedTask] = useState<ScoutTask>(ACTIVE_TASKS[0]);
  const [studentName, setStudentName] = useState('');
  const [nisn, setNisn] = useState('');
  const [regu, setRegu] = useState('Regu Rajawali (Putra)');
  const [gudep, setGudep] = useState('01.043 (Putra)');
  const [linkOrFile, setLinkOrFile] = useState('');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState<TaskSubmission | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !nisn || !linkOrFile) return;

    setSubmitting(true);

    const newSubmission: TaskSubmission = {
      id: `sub-${Date.now()}`,
      taskId: selectedTask.id,
      taskTitle: selectedTask.title,
      studentName,
      nisn,
      regu,
      gudep,
      submittedAt: new Date().toLocaleString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }) + ' WIB',
      notes,
      linkOrFile,
      status: 'Menunggu Review'
    };

    setTimeout(() => {
      setSubmitting(false);
      setSubmittedSuccess(newSubmission);
      onTaskSubmitted(newSubmission);

      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (err) {}
    }, 600);
  };

  const handleReset = () => {
    setSubmittedSuccess(null);
    setLinkOrFile('');
    setNotes('');
  };

  return (
    <section id="tugas-section" className="py-12 bg-stone-100/60">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-200 text-amber-900 mb-2.5">
            <Upload className="w-3.5 h-3.5 text-amber-800" />
            <span>Portal Penyerahan Tugas & Uji SKU Mandiri</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight font-heading">
            Pengiriman Tugas Pramuka Daring
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
            Kirimkan dokumentasi video simpul/pionering, laporan pemecahan sandi morse, atau lembar kerja SKU secara daring untuk ditinjau dan dinilai langsung oleh Pembina Gugus Depan 01.043 - 01.044.
          </p>
        </div>

        {/* Success Confirmation Banner */}
        {submittedSuccess ? (
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-emerald-500/40 text-center space-y-5 animate-in zoom-in-95 duration-150">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-stone-900 font-heading">
                Tugas Berhasil Terkirim ke Pembina!
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm max-w-lg mx-auto">
                Tugas <strong>"{submittedSuccess.taskTitle}"</strong> atas nama <strong>{submittedSuccess.studentName}</strong> (NISN: {submittedSuccess.nisn}) telah masuk antrean penilaian Pembina Gudep.
              </p>
            </div>

            <div className="max-w-md mx-auto bg-stone-50 rounded-2xl p-4 border border-stone-200 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-stone-500">Waktu Kirim:</span>
                <span className="font-semibold text-stone-900">{submittedSuccess.submittedAt}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Regu & Pangkalan:</span>
                <span className="font-semibold text-stone-900">{submittedSuccess.regu}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Status Awal:</span>
                <span className="font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                  {submittedSuccess.status}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={onNavigateToGrading}
                className="px-6 py-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs sm:text-sm font-bold shadow-md cursor-pointer"
              >
                Cek Rekap Nilai Tugas Sekarang →
              </button>
              <button
                onClick={handleReset}
                className="px-5 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs sm:text-sm font-semibold cursor-pointer"
              >
                Kirim Tugas Lainnya
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Choose Available Active Tasks */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <span>Daftar Tugas SKU yang Sedang Aktif</span>
                <span className="text-[11px] bg-amber-700 text-white px-2 py-0.5 rounded-full font-bold">
                  {ACTIVE_TASKS.length} Tugas
                </span>
              </h3>

              {ACTIVE_TASKS.map((task) => {
                const isSelected = selectedTask.id === task.id;
                return (
                  <div
                    key={task.id}
                    onClick={() => setSelectedTask(task)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white border-amber-600 shadow-md ring-2 ring-amber-600/20'
                        : 'bg-white/80 border-stone-200 hover:border-amber-400 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 uppercase">
                        {task.category}
                      </span>
                      <span className="text-[11px] text-stone-500 flex items-center gap-1 font-medium">
                        <Clock className="w-3 h-3 text-red-500" /> Batas: {task.deadline}
                      </span>
                    </div>

                    <h4 className="font-bold text-stone-900 text-sm leading-snug mb-2">
                      {task.title}
                    </h4>

                    <p className="text-xs text-stone-600 leading-relaxed mb-3">
                      {task.description}
                    </p>

                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px]">
                      <span className="text-stone-500">Bentuk Pengumpulan:</span>
                      <span className="font-bold text-amber-800 flex items-center gap-1">
                        {task.submissionType === 'Video Praktik' && <Video className="w-3.5 h-3.5" />}
                        {task.submissionType === 'Buku Jurnal SKU' && <BookOpen className="w-3.5 h-3.5" />}
                        {task.submissionType === 'Laporan Teks & Foto' && <FileText className="w-3.5 h-3.5" />}
                        {task.submissionType}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Submission Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-stone-200 space-y-5"
              >
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-[11px] font-extrabold uppercase text-amber-800 tracking-wider">
                    Formulir Pengumpulan Tugas
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-stone-900 leading-snug mt-0.5">
                    {selectedTask.title}
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Nama Lengkap Siswa *
                    </label>
                    <input
                      type="text"
                      required
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="Contoh: Dimas Bagus Saputra"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:ring-2 focus:ring-amber-700 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      NISN Siswa *
                    </label>
                    <input
                      type="text"
                      required
                      value={nisn}
                      onChange={(e) => setNisn(e.target.value)}
                      placeholder="Contoh: 0098765501"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm font-mono focus:ring-2 focus:ring-amber-700 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Nama Regu *
                    </label>
                    <select
                      value={regu}
                      onChange={(e) => {
                        setRegu(e.target.value);
                        setGudep(e.target.value.includes('Putra') ? '01.043 (Putra)' : '01.044 (Putri)');
                      }}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:ring-2 focus:ring-amber-700 focus:outline-none"
                    >
                      <option value="Regu Rajawali (Putra)">Regu Rajawali (Putra)</option>
                      <option value="Regu Elang (Putra)">Regu Elang (Putra)</option>
                      <option value="Regu Singa (Putra)">Regu Singa (Putra)</option>
                      <option value="Regu Garuda (Putra)">Regu Garuda (Putra)</option>
                      <option value="Regu Melati (Putri)">Regu Melati (Putri)</option>
                      <option value="Regu Mawar (Putri)">Regu Mawar (Putri)</option>
                      <option value="Regu Teratai (Putri)">Regu Teratai (Putri)</option>
                      <option value="Regu Dahlia (Putri)">Regu Dahlia (Putri)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Gugus Depan
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={gudep}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-100 border border-stone-300 text-xs sm:text-sm text-stone-600 font-semibold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1 flex items-center justify-between">
                    <span>Tautan Berkas Tugas / Google Drive / Video Praktik *</span>
                    <span className="text-[11px] text-stone-500 font-normal">Pastikan akses link "Siapa saja dengan link"</span>
                  </label>
                  <div className="relative">
                    <LinkIcon className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={linkOrFile}
                      onChange={(e) => setLinkOrFile(e.target.value)}
                      placeholder="Contoh: https://drive.google.com/file/d/... atau link YouTube unlisted / dokumen foto"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:ring-2 focus:ring-amber-700 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Catatan Refleksi / Keterangan Pengerjaan (Opsional)
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Ceritakan kendala, keberhasilan membuat simpul, atau pemecahan sandi..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:ring-2 focus:ring-amber-700 focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 px-6 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? 'Mengirim Tugas...' : 'Kirim Tugas Sekarang'}</span>
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
