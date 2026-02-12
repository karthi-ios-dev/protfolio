import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

interface Project {
    name: string;
    description: string;
    highlights: string[];
    technologies?: string[];
    url: string;
}

interface ProjectCardProps {
    project: Project;
    className?: string;
    index?: number;
}

export function ProjectCard({ project, className, index = 0 }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
        >
            <Card className={cn("h-full flex flex-col overflow-hidden glass-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-1", className)}>
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <CardTitle className="text-xl font-bold">{project.name}</CardTitle>

                    </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                    <CardDescription className="mb-4 text-base text-foreground/80">
                        {project.description}
                    </CardDescription>

                    {/* Tech Stack Icons */}
                    {project.technologies && project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => {
                                const Icon = Icons[tech as keyof typeof Icons];
                                return (
                                    <Badge key={tech} variant="secondary" className="flex items-center gap-1.5 px-3 py-1 bg-secondary/50 backdrop-blur-sm border-0">
                                        {Icon && <Icon className="h-3.5 w-3.5" />}
                                        <span className="text-xs">{tech}</span>
                                    </Badge>
                                );
                            })}
                        </div>
                    )}

                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground pt-2">
                        {project.highlights.slice(0, 3).map((highlight, i) => (
                            <li key={i}>{highlight}</li>
                        ))}
                    </ul>
                </CardContent>
                <CardFooter className="pt-2 mt-auto">
                    {project.url && (
                        <Link href={project.url} target="_blank" className="w-full">
                            <Button variant="default" size="sm" className="w-full gap-2 rounded-full font-semibold bg-foreground hover:bg-foreground/90 text-background">
                                <Icons.Apple className="h-4 w-4 mb-0.5" /> App Store
                            </Button>
                        </Link>
                    )}
                </CardFooter>
            </Card>
        </motion.div>
    );
}
