"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
    {
        category: "Languages",
        items: ["Swift", "Objective-C", "C++", "Python", "JavaScript/TypeScript"],
    },
    {
        category: "iOS Frameworks",
        items: ["SwiftUI", "UIKit", "Combine", "Core Data", "XCTest", "MetricKit"],
    },
    {
        category: "Architecture",
        items: ["MVVM", "MVC", "VIPER", "Clean Swift", "Coordinator Pattern"],
    },
    {
        category: "Tools & DevOps",
        items: ["Xcode", "Git", "CocoaPods", "SPM", "Fastlane", "GitHub Actions", "Firebase"],
    },
];

export default function Skills() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-12 max-w-5xl mx-auto"
                >
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl font-bold tracking-tight">Technical Skills</h1>
                        <p className="text-lg text-muted-foreground">
                            A comprehensive toolset for building world-class iOS applications.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {skills.map((skillGroup, index) => (
                            <motion.div
                                key={skillGroup.category}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Card className="h-full hover:shadow-md transition-shadow">
                                    <CardHeader>
                                        <CardTitle>{skillGroup.category}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            {skillGroup.items.map((item) => (
                                                <span
                                                    key={item}
                                                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
}
