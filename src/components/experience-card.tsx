import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Calendar, Building2 } from "lucide-react";

interface Job {
    name: string;
    position: string;
    url: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
}

interface ExperienceCardProps {
    job: Job;
    className?: string;
    index?: number;
}

export function ExperienceCard({ job, className, index = 0 }: ExperienceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
        >
            <Card className={cn("mb-6 glass-card hover:shadow-xl transition-all duration-300", className)}>
                <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                        <div>
                            <CardTitle className="text-xl font-bold">{job.position}</CardTitle>
                            <CardDescription className="flex items-center mt-1 text-base text-foreground/80">
                                <Building2 className="mr-1 h-4 w-4" />
                                {job.name}
                            </CardDescription>
                        </div>
                        <div className="flex items-center text-sm font-medium text-foreground/80 bg-white/50 dark:bg-black/50 px-3 py-1 rounded-full w-fit backdrop-blur-sm border border-white/20 dark:border-white/10">
                            <Calendar className="mr-1 h-4 w-4" />
                            {job.startDate} - {job.endDate}
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="mb-4 text-muted-foreground">{job.summary}</p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80">
                        {job.highlights.map((highlight, i) => (
                            <li key={i}>{highlight}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </motion.div>
    );
}
