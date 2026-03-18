import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import RevealSection from "./components/RevealSection";
import ScrollToTop from "./components/ScrollToTop";
import SkillsSection from "./components/SkillsSection";
import {
  certifications,
  education,
  highlights,
  profile,
  projects,
  skills,
} from "./data/portfolio";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function App() {
  const [theme, setTheme] = useState("light");
  const [gpaValue, setGpaValue] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [focusIndex, setFocusIndex] = useState(0);
  const [heroGlow, setHeroGlow] = useState({ x: 50, y: 35, tiltX: 0, tiltY: 0 });

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
      return;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    setGpaValue(education.scoreValue);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, nextProgress)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setFocusIndex((current) => (current + 1) % profile.focusAreas.length);
    }, 2400);

    return () => window.clearInterval(intervalId);
  }, []);

  const handleHeroPointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX = ((event.clientX - bounds.left) / bounds.width) * 100;
    const relativeY = ((event.clientY - bounds.top) / bounds.height) * 100;

    setHeroGlow({
      x: relativeX,
      y: relativeY,
      tiltX: ((relativeY - 50) / 50) * -4,
      tiltY: ((relativeX - 50) / 50) * 5,
    });
  };

  const resetHeroPointer = () => {
    setHeroGlow({ x: 50, y: 35, tiltX: 0, tiltY: 0 });
  };

  return (
    <div className="page-shell">
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ width: `${scrollProgress}%` }} />
      </div>

      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <Header
        navigation={navigation}
        profile={profile}
        theme={theme}
        onToggleTheme={() =>
          setTheme((current) => (current === "light" ? "dark" : "light"))
        }
      />

      <main id="home">
        <RevealSection delay={0}>
          <HeroSection
            profile={profile}
            focusIndex={focusIndex}
            heroGlow={heroGlow}
            onHeroPointerMove={handleHeroPointerMove}
            onHeroPointerReset={resetHeroPointer}
          />
        </RevealSection>

        <RevealSection delay={80}>
          <AboutSection profile={profile} highlights={highlights} />
        </RevealSection>

        <RevealSection delay={120}>
          <SkillsSection skills={skills} />
        </RevealSection>

        <RevealSection delay={160}>
          <ProjectsSection projects={projects} />
        </RevealSection>

        <RevealSection delay={200}>
          <EducationSection
            education={education}
            certifications={certifications}
            gpaValue={gpaValue}
            onGpaChange={setGpaValue}
          />
        </RevealSection>

        <RevealSection delay={240}>
          <ContactSection profile={profile} />
        </RevealSection>
      </main>
      <ScrollToTop />
    </div>
  );
}

export default App;
