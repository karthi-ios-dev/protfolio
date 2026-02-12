import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SkillBadgeProps {
    skill: string;
    index?: number;
    className?: string;
}

export function SkillBadge({ skill, index = 0, className }: SkillBadgeProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="inline-block"
        >
            <Badge
                variant="secondary"
                className={cn(
                    "bg-secondary/50 hover:bg-secondary text-base py-1 px-3 transition-colors duration-200 cursor-default",
                    className
                )}
            >
                {skill}
            </Badge>
        </motion.div>
    );
}
