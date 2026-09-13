import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import Footer from "./components/Footer";
import technologiesData from "./data/technologies.json";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  // Simulates loading the JSON "from the network" so the loading state
  // is real and testable, even though the file is local.
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setTechnologies(technologiesData);
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  function handleAdd(tech) {
    const alreadyAdded = stack.some((item) => item.id === tech.id);

    if (alreadyAdded) {
      toast.warn(`${tech.name} is already in your stack.`);
      return;
    }

    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  }

  function handleRemove(id) {
    const removed = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (removed) toast.info(`${removed.name} removed from your stack.`);
  }

  function handleRemoveAll() {
    setStack([]);
    toast.info("Your stack has been cleared.");
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TechnologySection
        technologies={technologies}
        loading={loading}
        stack={stack}
        onAdd={handleAdd}
        onRemove={handleRemove}
        onRemoveAll={handleRemoveAll}
      />
      <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}
