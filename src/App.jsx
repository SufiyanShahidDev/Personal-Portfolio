import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ResumeSection from "./components/ResumeSection";
import PortfolioSection from "./components/PortfolioSection";
import ContactSection from "./components/ContactSection";

const sections = ["home", "about", "resume", "portfolio", "contact"];

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };

  const activeIndex = sections.indexOf(activeSection);

  return (
    <>
      <Navbar activeSection={activeSection} onSectionChange={handleSectionChange} />

      <main className="portfolio-container h-screen w-screen [perspective:1500px] [perspective-origin:50%]">
        <div
          className="portfolio-cube relative h-full w-full [transform-style:preserve-3d]"
          style={{ transform: `rotateY(${activeIndex * -90}deg)` }}
        >
          <HomeSection />
          <AboutSection />
          <ResumeSection />
          <PortfolioSection />
          <ContactSection isActive={activeSection === "contact"} />
        </div>
      </main>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
