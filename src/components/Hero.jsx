const Hero = () => {
    return (
        <div className="fade-in flex flex-col justify-center items-center pt-24 md:pt-36 relative" style={{ animationDelay: '0.4s' }}>
            {/* Cyberpunk decorative elements */}
            <div className="absolute top-0 left-0 w-20 h-1 bg-red-600"></div>
            <div className="absolute bottom-0 right-0 w-20 h-1 bg-red-600"></div>

            <p className="text-5xl md:text-6xl mb-4 font-geo font-bold text-red-600 tracking-tighter animate-pulse">
                &gt; AYUSH KUMAR
            </p>

            <h1 className="text-6xl md:text-8xl mt-2 mb-8 font-geo font-black bg-white bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,0,0,0.8)] border-y border-red-900 py-2">
                ENGINEERING STUDENT
            </h1>

            <div className="relative group">
                <div className="absolute -inset-1 bg-red-600 blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <a
                    href="/Ayush_Resume.pdf"
                    download
                    className="relative flex items-center justify-center bg-black border-2 border-red-600 px-10 py-4 text-2xl font-geo font-bold text-red-500 uppercase tracking-widest hover:text-white hover:bg-red-600 transition-all duration-300"
                >
                    DOWNLOAD_RESUME.sh
                </a>
            </div>
        </div>
    );
};

export default Hero;
