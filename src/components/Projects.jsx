const Projects = () => {
    const projects = [
        {
            title: "SOLAR SYSTEM",
            url: "https://ayushverse.github.io/planets/",
            image: "/assets/images/p.png",
            description: "// STATUS: STABLE"
        },
        {
            title: "POPO PODCAST",
            url: "https://popo-podcast-cl79.vercel.app/",
            image: "/assets/images/popo-podcast.png",
            description: "// STATUS: ACTIVE"
        },
        {
            title: "TYPE SYNC",
            url: "https://type-sync-iota.vercel.app/",
            image: "/assets/images/typesync.png",
            description: "// STATUS: ONLINE"
        },
        {
            title: "HOME TUTOR",
            url: "https://frontend-sepia-sigma-68.vercel.app/",
            image: "/assets/images/hometutor.png",
            description: "// STATUS: VERIFIED"
        }
    ];

    return (
        <div className="fade-in px-4 md:px-8 pb-16" style={{ animationDelay: '0.8s' }}>
            <div className="flex justify-center md:justify-start md:ml-4 mt-16 mb-12 items-center gap-4">
                <div className="w-8 h-8 bg-red-600"></div>
                <h1 className="text-5xl md:text-6xl font-geo font-black tracking-widest text-white drop-shadow-[0_0_10px_rgba(255,0,0,0.7)]">
                    PROJECT_DATA
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block relative"
                    >
                        {/* Futuristic card styling */}
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-red-600 group-hover:border-white transition-colors"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-red-600 group-hover:border-white transition-colors"></div>

                        <div className="relative overflow-hidden bg-black border border-red-900 group-hover:border-red-500 transition-all duration-300 p-2">
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-72 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-red-900/10 group-hover:bg-transparent transition-all"></div>
                            </div>

                            <div className="mt-4 p-2 bg-red-950/20 group-hover:bg-red-600/20 transition-all">
                                <h3 className="text-3xl font-geo font-bold tracking-tighter text-red-500 group-hover:text-white mb-1">
                                    &gt; {project.title}
                                </h3>
                                <p className="text-xl text-red-700 group-hover:text-red-300 font-geo italic">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Projects;
