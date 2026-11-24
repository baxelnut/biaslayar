import { QueryClientProvider } from "@tanstack/react-query";
// Routes
import { AppRouter } from "./routes";
// Utils
import { queryClient } from "@/lib/queryClient";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
}
