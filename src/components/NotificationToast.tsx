import React, { useEffect } from 'react';
import { 
  Bell, 
  AlertTriangle, 
  CheckCircle2, 
  Info, 
  X, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { LiveNotification } from '../types';

interface NotificationToastProps {
  notification: LiveNotification | null;
  onClose: () => void;
  onNavigate: (tab: string) => void;
}

export const NotificationToast: React.FC<NotificationToastProps> = ({
  notification,
  onClose,
  onNavigate
}) => {
  useEffect(() => {
    if (!notification) return;

    // Gentle audio chime using Web Audio API
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.12); // A5
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
      }
    } catch (e) {
      // Audio not permitted without interaction, ignore safely
    }

    const timer = setTimeout(() => {
      onClose();
    }, 7000);

    return () => clearTimeout(timer);
  }, [notification, onClose]);

  if (!notification) return null;

  return (
    <aside 
      aria-label="Pemberitahuan Sistem"
      className="fixed bottom-5 right-5 z-50 max-w-sm sm:max-w-md w-full bg-stone-900 border-2 border-amber-500 rounded-2xl shadow-2xl p-4 text-white animate-in slide-in-from-bottom-5 duration-200"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-amber-800 text-amber-300 mt-0.5 flex-shrink-0">
          {notification.type === 'urgent' && <AlertTriangle className="w-5 h-5 text-red-400" />}
          {notification.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
          {notification.type === 'info' && <Info className="w-5 h-5 text-blue-400" />}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400">
              Pembaruan Real-Time Pangkalan
            </span>
            <span className="text-[10px] text-stone-400">{notification.timestamp}</span>
          </div>

          <h4 className="font-bold text-sm text-white mt-0.5 leading-snug">
            {notification.title}
          </h4>

          <p className="text-xs text-stone-300 mt-1 leading-relaxed">
            {notification.message}
          </p>

          {notification.linkTab && (
            <div className="mt-3">
              <button
                onClick={() => {
                  onNavigate(notification.linkTab!);
                  onClose();
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs transition-colors cursor-pointer"
              >
                <span>Buka Rincian Pembaruan</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        <button
          onClick={onClose}
          className="text-stone-400 hover:text-white p-1 rounded-lg hover:bg-stone-800"
          aria-label="Tutup notifikasi"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};
