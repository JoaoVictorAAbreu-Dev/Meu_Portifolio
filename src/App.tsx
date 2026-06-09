import { Suspense } from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { AppRoutes } from "./pages/AppRoutes";
import { ThemeProvider } from "./hooks/useTheme";

function App() {
  const Router = import.meta.env.BASE_URL === "/" ? BrowserRouter : HashRouter;

  return (
    <ThemeProvider>
      <Router>
        <Suspense fallback={<div className="min-h-screen bg-slate-50 dark:bg-slate-950" />}>
          <AppRoutes />
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
