import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/layout/Navbar";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { GenomeAssemblyProject } from "./pages/GenomeAssemblyProject";
import { AutonomousDrivingProject } from "./pages/AutonomousDrivingProject";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-(--bg) text-(--text) transition-colors">
          <Navbar />

          <main className="px-4 sm:px-6 md:px-12 py-8 sm:py-12">
            <div className="max-w-4xl mx-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route
                  path="/projects/genome-assembly-parameters"
                  element={<GenomeAssemblyProject />}
                />
                <Route
                  path="/projects/autonomous-driving-tcp"
                  element={<AutonomousDrivingProject />}
                />
              </Routes>
            </div>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
