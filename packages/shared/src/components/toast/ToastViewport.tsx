// Style
import "./ToastViewport.css";
// Components
import { Toast } from "./Toast";
// Utils
import type { ToastItem } from "@biaslayar/lib";

type ToastViewportProps = {
  toasts: ReadonlyArray<ToastItem>;
  onDismiss: (id: number) => void;
};

export function ToastViewport({ toasts, onDismiss }: ToastViewportProps) {
  return (
    <div className="toast-viewport">
      {toasts.map((item) => (
        <Toast
          key={item.id}
          tone={item.tone}
          message={item.message}
          onDismiss={() => onDismiss(item.id)}
        />
      ))}
    </div>
  );
}
