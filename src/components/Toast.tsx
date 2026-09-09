import { CheckCircle2, AlertCircle, AlertTriangle, Info, X } from 'lucide-react';
import type { ToastItem } from '../context/ToastContext';
import './Toast.css';

const icons = {
  success: CheckCircle2,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
};

interface Props {
  toasts: ToastItem[];
  onDismiss: (id: number) => void;
}

export default function ToastViewport({ toasts, onDismiss }: Props) {
  if (toasts.length === 0) return null;

  return (
    <div className="toast-viewport">
      {toasts.map((toast) => {
        const Icon = icons[toast.type];
        return (
          <div
            key={toast.id}
            className={`toast toast-${toast.type} ${toast.leaving ? 'toast-leaving' : ''}`}
            role="status"
          >
            <Icon size={18} className="toast-icon" />
            <span className="toast-message">{toast.message}</span>
            <button className="toast-close" onClick={() => onDismiss(toast.id)} aria-label="Fermer">
              <X size={14} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
