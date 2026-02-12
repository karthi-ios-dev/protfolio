"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { resume } from "@/data/resume";
import { ProjectCard } from "@/components/project-card";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="flex flex-col items-center justify-center min-h-[90vh] p-4 md:p-24 relative overflow-hidden">
                    {/* Background decorative elements - Moved to Global Layout */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-center space-y-6 max-w-4xl z-10"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-secondary text-secondary-foreground border border-border/50 backdrop-blur-sm"
                        >
                            {resume.basics.label}
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 pb-2">
                            {resume.basics.name}
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px] mx-auto leading-relaxed">
                            Building secure, scalable, and high-performance iOS applications.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
                            <Link href="/projects">
                                <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow">
                                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href="/resume.pdf" target="_blank">
                                <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base backdrop-blur-sm bg-background/50">
                                    Download Resume <Download className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="ghost" size="lg" className="rounded-full px-8 h-12 text-base">
                                    Contact Me <Mail className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </section>

                {/* Brief About Section */}
                <section className="py-20 px-4 md:px-24 bg-background">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-8"
                        >
                            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {resume.basics.summary}
                            </p>
                            <Link href="/about">
                                <Button variant="link" className="p-0 text-primary font-semibold text-lg">
                                    Read more about my journey <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* Featured Projects Section */}
                <section className="py-20 px-4 md:px-24 bg-secondary/30">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex justify-between items-end mb-12"
                        >
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
                                <p className="text-muted-foreground">Some of my recent work</p>
                            </div>
                            <Link href="/projects" className="hidden md:block">
                                <Button variant="ghost">View All Projects <ArrowRight className="ml-2 h-4 w-4" /></Button>
                            </Link>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {resume.projects.slice(0, 3).map((project, index) => (
                                <ProjectCard key={project.name} project={project} index={index} />
                            ))}
                        </div>

                        <div className="mt-12 text-center md:hidden">
                            <Link href="/projects">
                                <Button variant="outline" className="w-full">View All Projects</Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
