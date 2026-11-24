// Style
import "./Toast.css";
// Components
import { Button } from "@biaslayar/components";
// Utils
import { cx, type ToastTone } from "@biaslayar/lib";

type ToastProps = {
  tone?: ToastTone;
  message: string;
  onDismiss: () => void;
};

export function Toast({ tone = "info", message, onDismiss }: ToastProps) {
  return (
    <div
      className={cx("toast", `tone-${tone}`)}
      role={tone === "danger" ? "alert" : "status"}
    >
      <p className="toast__message">{message}</p>
      <Button
        variant="ghost"
        size="sm"
        onClick={onDismiss}
        aria-label="Tutup notifikasi"
      >
        Tutup
      </Button>
    </div>
  );
}
