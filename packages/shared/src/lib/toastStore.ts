import type { Tone } from "./tone";

export type ToastTone = Extract<Tone, "info" | "safe" | "warning" | "danger">;
export type ToastItem = { id: number; tone: ToastTone; message: string };

type Listener = () => void;

let items: ToastItem[] = [];
let nextId = 1;
const listeners = new Set<Listener>();

function emit() {
  listeners.forEach((listener) => listener());
}

function dismiss(id: number) {
  items = items.filter((item) => item.id !== id);
  emit();
}

function push(tone: ToastTone, message: string, duration = 5000) {
  const id = nextId++;
  items = [...items, { id, tone, message }];
  emit();
  if (duration > 0) window.setTimeout(() => dismiss(id), duration);
  return id;
}

export const toastStore = {
  subscribe(listener: Listener) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
  getSnapshot: () => items,
  dismiss,
};

export const toast = {
  info: (message: string, duration?: number) => push("info", message, duration),
  success: (message: string, duration?: number) =>
    push("safe", message, duration),
  warning: (message: string, duration?: number) =>
    push("warning", message, duration),
  error: (message: string, duration?: number) =>
    push("danger", message, duration),
};
