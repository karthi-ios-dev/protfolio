import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as a clean system-like font
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { BackgroundBlobs } from "@/components/background-blobs";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "iOS Developer Portfolio",
    description: "Portfolio of an iOS Developer specializing in Swift, SwiftUI, and UIKit.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} font-sans antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <BackgroundBlobs />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
