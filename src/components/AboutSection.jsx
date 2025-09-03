import { Briefcase, Code, User } from "lucide-react";
import { useState } from "react";

export const AboutSection = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <section id="about" className="py-16 px-2 md:py-24 md:px-4 relative overflow-hidden">
            {/* Large Vintage Image as background left (hidden on mobile, shown above text on mobile) */}
            {/* <div className="absolute inset-y-0 left-0 w-1/3 min-w-[200px] z-0 hidden md:block">
                <img
                    src="/me.jpeg"
                    alt="Deshal"
                    className="w-full h-full object-cover sepia transition-all duration-500"
                    style={{
                        filter: hovered
                            ? "sepia(0.4) contrast(1.1) brightness(0.6) saturate(1.1)"
                            : "sepia(0.4) contrast(1.1) brightness(0.5) saturate(1.1)",
                        opacity: 0.85,
                        borderRadius: "0 2rem 2rem 0",
                        boxShadow: "0 0 80px 40px rgba(0,0,0,0.7) inset"
                    }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                />
            </div> */}

            <div className="container mx-auto max-w-5xl relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Mobile: Show image above text */}
                    <div className="w-full flex justify-center mb-6 md:hidden">
                        <div
                            className="relative w-40 h-40"
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                        >
                            <img
                                src="/me.jpeg"
                                alt="Deshal"
                                className="w-full h-full object-cover sepia transition-all duration-500"
                                style={{
                                    filter: hovered
                                        ? "sepia(0.4) contrast(1.1) brightness(0.6) saturate(1.1)"
                                        : "sepia(0.4) contrast(1.1) brightness(0.5) saturate(1.1)",
                                    opacity: 0.85,
                                    borderRadius: "1rem",
                                    boxShadow: "0 0 40px 20px rgba(0,0,0,0.7) inset"
                                }}
                            />
                        </div>
                    </div>

                    {/* Left: Text (on top of image for desktop, below image for mobile) */}
                    <div className="space-y-6 relative">
                        <h3 className="text-2xl font-semibold text-white drop-shadow-lg">
                            Passionate Software Developer & Tech Creator
                        </h3>
                        <p className="text-muted-foreground text-white/90 drop-shadow">
                            With over 4 years of experience in software development, I specialize
                            in creating responsive, accessible, and performant
                            applications using modern technologies.
                        </p>
                        <p className="text-muted-foreground text-white/90 drop-shadow">
                            I'm passionate about creating elegant solutions to complex
                            problems, and I'm constantly learning new technologies and
                            techniques to stay at the forefront of the ever-evolving web
                            landscape.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a
                                href="/Kavindu_DESHAL_CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* Right: Skills Cards */}
                    <div className="grid grid-cols-1 gap-6 w-full">
                        <div className="gradient-border p-6 card-hover rounded-xl bg-background/80">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Mobile App Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive mobile applications with modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover rounded-xl bg-background/80">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground">
                                        Designing intuitive user interfaces and seamless user
                                        experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover rounded-xl bg-background/80">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground">
                                        Leading projects from conception to completion with agile
                                        methodologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};