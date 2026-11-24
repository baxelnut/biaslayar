import { useEffect } from "react";

export function useScrollToTop(key: string) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [key]);
}
