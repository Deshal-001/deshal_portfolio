import { Star } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { SpaceCursor } from "../components/SpaceCursor";
import { AboutSection } from "../components/AboutSection";
import { ProjectsSection } from "../components/ProjectSection";

export const Home = () => {
  return (
    <div className="min-h-screen">
        <SpaceCursor />
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Background Effect */}
        <StarBackground />

        {/* nav bar */}
        <Navbar />

        {/* main content */}
        <main>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
        </main>

        {/* footer */}

    </div>
  );
}