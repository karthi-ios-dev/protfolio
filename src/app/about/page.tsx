"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { resume } from "@/data/resume";
import { GraduationCap, Award, Code2, Mail, Phone, MapPin, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PhoneMockup } from "@/components/phone-mockup";
import { Icons } from "@/components/icons";

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 py-20 px-4 md:px-24 bg-background">
                <div className="max-w-4xl mx-auto space-y-16">
                    {/* Header & Phone Mockup Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-4"
                            >
                                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                                    About Me
                                </h1>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    I'm a passionate iOS Developer with a strong focus on building high-quality, user-centric mobile applications.
                                </p>
                            </motion.div>

                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="space-y-4"
                            >
                                <h2 className="text-2xl font-bold flex items-center">
                                    <Code2 className="mr-2 h-6 w-6" /> Professional Summary
                                </h2>
                                <div className="bg-secondary/20 p-6 rounded-lg border border-border/50">
                                    <p className="text-muted-foreground leading-relaxed">
                                        {resume.basics.summary}
                                    </p>
                                </div>
                            </motion.section>
                        </div>

                        {/* Phone Mockup */}
                        <div className="flex justify-center lg:justify-end">
                            <PhoneMockup className="transform hover:scale-105 transition-transform duration-500">
                                <div className="flex flex-col items-center space-y-4 py-8">
                                    <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                                        {resume.basics.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-xl font-bold">{resume.basics.name}</h3>
                                        <p className="text-sm text-muted-foreground">{resume.basics.label}</p>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="w-full space-y-2 mt-6"
                                    >
                                        <div className="bg-secondary/50 p-3 rounded-xl flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                                                <Mail className="h-4 w-4" />
                                            </div>
                                            <div className="flex-1 overflow-hidden">
                                                <p className="text-xs text-muted-foreground">Email</p>
                                                <p className="text-sm font-medium truncate">{resume.basics.email}</p>
                                            </div>
                                        </div>

                                        <div className="bg-secondary/50 p-3 rounded-xl flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                                <Phone className="h-4 w-4" />
                                            </div>
                                            <div className="flex-1 overflow-hidden">
                                                <p className="text-xs text-muted-foreground">Phone</p>
                                                <p className="text-sm font-medium truncate">{resume.basics.phone}</p>
                                            </div>
                                        </div>

                                        <div className="bg-secondary/50 p-3 rounded-xl flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                                                <MapPin className="h-4 w-4" />
                                            </div>
                                            <div className="flex-1 overflow-hidden">
                                                <p className="text-xs text-muted-foreground">Location</p>
                                                <p className="text-sm font-medium truncate sm:text-xs">
                                                    {resume.basics.location.city}, {resume.basics.location.country}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7 }}
                                        className="w-full pt-6"
                                    >
                                        <h4 className="text-sm font-semibold mb-3 px-1">Socials</h4>
                                        <div className="grid grid-cols-4 gap-2">
                                            {resume.basics.profiles.map((profile) => {
                                                const Icon = Icons[profile.network as keyof typeof Icons] || Icons.GitHub;

                                                return (
                                                    <a
                                                        key={profile.network}
                                                        href={profile.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-secondary/80 transition-colors"
                                                    >
                                                        <div className="h-10 w-10 rounded-xl bg-background border flex items-center justify-center shadow-sm">
                                                            {Icon && <Icon className="h-5 w-5" />}
                                                        </div>
                                                        <span className="text-[10px] font-medium">{profile.network}</span>
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    </motion.div>
                                </div>
                            </PhoneMockup>
                        </div>
                    </div>

                    {/* Skills */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl font-bold flex items-center">
                            <Award className="mr-2 h-6 w-6" /> Skills & Expertise
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            {resume.skills.map((skillGroup, index) => (
                                <div key={skillGroup.name} className="space-y-3">
                                    <h3 className="font-semibold text-lg">{skillGroup.name}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.keywords.map((keyword) => (
                                            <Badge key={keyword} variant="secondary" className="px-3 py-1">
                                                {keyword}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Education */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl font-bold flex items-center">
                            <GraduationCap className="mr-2 h-6 w-6" /> Education
                        </h2>
                        <div className="space-y-6">
                            {resume.education.map((edu, index) => (
                                <div key={index} className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 border-l-2 border-primary/20 pl-4 py-1">
                                    <div>
                                        <h3 className="font-bold text-lg">{edu.institution}</h3>
                                        <p className="text-foreground/80">{edu.area}</p>
                                        <p className="text-sm text-muted-foreground">{edu.studyType} • Score: {edu.score}</p>
                                    </div>
                                    <div className="text-sm font-medium text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full whitespace-nowrap">
                                        {edu.startDate} - {edu.endDate}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
