"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Battery, Wifi, Signal } from "lucide-react";

interface PhoneMockupProps {
    children?: React.ReactNode;
    className?: string;
}

export function PhoneMockup({ children, className }: PhoneMockupProps) {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(
                now.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                })
            );
        };
        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl ${className}`}
        >
            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
            <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-background dark:bg-zinc-950 relative">
                {/* Status Bar */}
                <div className="absolute top-0 w-full px-6 pt-3 flex justify-between items-center z-10 text-[10px] font-medium text-foreground">
                    <span>{time}</span>
                    <div className="flex items-center space-x-1">
                        <Signal className="h-3 w-3" />
                        <Wifi className="h-3 w-3" />
                        <Battery className="h-3 w-3" />
                    </div>
                </div>

                {/* Screen Content */}
                <div className="h-full w-full overflow-hidden scrollbar-hide pt-10 pb-4 px-4">
                    <div className="h-full overflow-y-auto scrollbar-hide">
                        {children}
                    </div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-foreground/20 rounded-full z-20"></div>
            </div>
        </motion.div>
    );
}
