import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { resume } from "@/data/resume";
import Link from "next/link";
import { Icons } from "@/components/icons";

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-8 mt-auto">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} {resume.basics.name}. All rights reserved.
                </p>
                <div className="flex items-center space-x-6">
                    {resume.basics.profiles.map((profile) => {
                        const Icon = Icons[profile.network as keyof typeof Icons] || Icons.GitHub;

                        return (
                            <Link
                                key={profile.network}
                                href={profile.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Icon className="h-5 w-5" />
                                <span className="sr-only">{profile.network}</span>
                            </Link>
                        );
                    })}
                    <a
                        href={`mailto:${resume.basics.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
