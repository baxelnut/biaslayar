import { useSyncExternalStore } from "react";
// Utils
import { toastStore } from "@biaslayar/lib";

export function useToasts() {
  const toasts = useSyncExternalStore(
    toastStore.subscribe,
    toastStore.getSnapshot,
    toastStore.getSnapshot,
  );
  return { toasts, dismiss: toastStore.dismiss };
}
