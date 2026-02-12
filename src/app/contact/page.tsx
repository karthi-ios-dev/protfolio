"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { resume } from "@/data/resume";
import { Mail, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 py-20 px-4 md:px-24 bg-background flex flex-col items-center justify-center">
                <div className="max-w-2xl w-full space-y-12 text-center">
                    <div className="space-y-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl font-bold tracking-tight sm:text-5xl"
                        >
                            Get in Touch
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-muted-foreground"
                        >
                            Feel free to reach out for collaborations or just to say hi!
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Contact Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-center space-x-4 p-4 rounded-lg bg-secondary/20">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <Mail className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-medium text-muted-foreground">Email</p>
                                        <a href={`mailto:${resume.basics.email}`} className="text-lg font-semibold hover:underline">
                                            {resume.basics.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 p-4 rounded-lg bg-secondary/20">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <Phone className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-medium text-muted-foreground">Phone</p>
                                        <a href={`tel:${resume.basics.phone}`} className="text-lg font-semibold hover:underline">
                                            {resume.basics.phone}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 p-4 rounded-lg bg-secondary/20">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <Linkedin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-medium text-muted-foreground">LinkedIn</p>
                                        <Link href={resume.basics.url} target="_blank" className="text-lg font-semibold hover:underline">
                                            {resume.basics.profiles[0].username}
                                        </Link>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
