"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { resume } from "@/data/resume";
import { ProjectCard } from "@/components/project-card";

export default function ProjectsPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 py-12 px-4 md:px-24 bg-background">
                <div className="max-w-6xl mx-auto space-y-12">
                    <div className="space-y-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl font-bold tracking-tight sm:text-5xl"
                        >
                            Projects
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-muted-foreground"
                        >
                            A showcase of my mobile application development work.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {resume.projects.map((project, index) => (
                            <ProjectCard key={project.name} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
