const Navbar = () => {
    return (
        <div className="fade-in flex flex-col md:flex-row gap-8 md:gap-12 justify-center md:justify-end items-center pr-0 md:pr-12 pt-10" style={{ animationDelay: '0.2s' }}>
            <a
                href="https://github.com/ayushverse"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-red-500 no-underline font-bold font-geo text-xl tracking-tighter transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]"
            >
                <div className="p-1 border-b-2 border-red-600 hover:border-white transition-colors">
                    <img
                        className="h-8 grayscale hover:grayscale-0 transition-all"
                        src="/assets/images/gi.png"
                        alt="GitHub"
                    />
                </div>
                <span>GITHUB</span>
                <span className="text-sm opacity-50">&#91;EXE&#93;</span>
            </a>

            <a
                href="https://www.linkedin.com/in/ayush-kumar-1134a1200/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-red-500 no-underline font-bold font-geo text-xl tracking-tighter transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]"
            >
                <div className="p-1 border-b-2 border-red-600 hover:border-white transition-colors">
                    <img
                        className="h-8 grayscale hover:grayscale-0 transition-all"
                        src="/assets/images/ln.png"
                        alt="LinkedIn"
                    />
                </div>
                <span>LINKEDIN</span>
                <span className="text-sm opacity-50">&#91;DIR&#93;</span>
            </a>

            <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRQDhsLQSCnpGBFzFGvHlfnmTrLlPCKrhWvWmZVxmbKlBzHCQHrHgXtpvZzscDxJTrFmhM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-red-500 no-underline font-bold font-geo text-xl tracking-tighter transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]"
            >
                <div className="p-1 border-b-2 border-red-600 hover:border-white transition-colors">
                    <img
                        className="h-8 grayscale hover:grayscale-0 transition-all"
                        src="/assets/images/e.png"
                        alt="Email"
                    />
                </div>
                <span>EMAIL</span>
                <span className="text-sm opacity-50">&#91;MSG&#93;</span>
            </a>
        </div>
    );
};

export default Navbar;
