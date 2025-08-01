import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-5xl mx-auto text-center z-10">
                <div className="space-y-8">
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tight">
                        {/* <span className="opacity-0 animate-fade-in"> Hi, I'm</span> */}
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">
                            {" "}
                            Design Driven.
                        </span>
                        <br />
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                            {" "}
                            Performance Focused
                        </span>
                    </h1>

                    <p className="text-xl md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        Creating outstanding mobile experiences with modern technologies.
                        Specializing in mobile app development, designing and building apps that are both user-friendly and visually appealing
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-base md:text-lg text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-6 w-6 text-primary" />
            </div>
        </section>
    );
};