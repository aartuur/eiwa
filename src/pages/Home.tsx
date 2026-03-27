import ServicesSection from "@/components/sections/ServicesSection";
import HeroSection from "../components/sections/HeroSection";
import TargetSection from "@/components/sections/TargetSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <ServicesSection/>
            <TargetSection />
            <ProjectsSection/>
        </>
    ) 
}