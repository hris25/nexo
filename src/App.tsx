import { useEffect, useState } from "react";
import Dashboard from "./components/pages/DashboardSimple";
import HomePage from "./components/pages/HomePageSimple";

function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "dashboard">("home");

  // Écouter les changements d'URL pour la navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#dashboard") {
        setCurrentPage("dashboard");
      } else {
        setCurrentPage("home");
      }
    };

    // Vérifier l'URL initiale
    handleHashChange();

    // Écouter les changements d'URL
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "dashboard":
        return <Dashboard />;
      default:
        return <HomePage />;
    }
  };

  return <div className="App">{renderPage()}</div>;
}

export default App;
