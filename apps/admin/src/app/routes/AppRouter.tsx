import { BrowserRouter } from "react-router-dom";
// Routes
import { AppRoutes } from "./AppRoutes";

export function AppRouter() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
