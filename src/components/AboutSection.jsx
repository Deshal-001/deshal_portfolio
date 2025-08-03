import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative overflow-hidden">
            {/* Large Vintage Image as background left */}
            <div className="absolute inset-y-0 left-0 w-1/3 min-w-[300px] z-0">
                <img
                    src="/me.jpeg"
                    alt="Deshal"
                    className="w-full h-full object-cover grayscale sepia rounded-r-3xl"
                    style={{
                        filter: "sepia(0.3) contrast(1.15) brightness(0.7) saturate(1.1)",
                        opacity: 0.7
                    }}
                />
                <div className="absolute inset-0 bg-black/70 rounded-r-3xl" />
            </div>

            <div className="container mx-auto max-w-5xl relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left: Text (on top of image) */}
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
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
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
                        <div className="gradient-border p-6 card-hover">
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
                        <div className="gradient-border p-6 card-hover">
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