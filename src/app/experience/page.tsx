"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { resume } from "@/data/resume";
import { ExperienceCard } from "@/components/experience-card";

export default function ExperiencePage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 py-12 px-4 md:px-24 bg-background">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="space-y-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl font-bold tracking-tight sm:text-5xl"
                        >
                            Work Experience
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-muted-foreground"
                        >
                            My professional journey and career highlights.
                        </motion.p>
                    </div>

                    <div className="relative border-l border-border/50 ml-3 md:ml-6 pl-6 md:pl-12 space-y-12 py-4">
                        {resume.work.map((job, index) => (
                            <div key={index} className="relative">
                                {/* Timeline Node */}
                                <span className="absolute -left-[31px] md:-left-[55px] top-6 h-5 w-5 rounded-full border-4 border-background bg-primary" />

                                <ExperienceCard job={job} index={index} />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
