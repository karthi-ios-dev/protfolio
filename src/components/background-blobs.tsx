export function BackgroundBlobs() {
    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10 bg-background/50">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob" />
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-pink-500/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-4000" />
        </div>
    );
}
