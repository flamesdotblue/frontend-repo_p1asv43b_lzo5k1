import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ModulesGrid from "./components/ModulesGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ModulesGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
