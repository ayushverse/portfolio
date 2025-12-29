const HeroMemoji = () => {
    return (
        <div className="fade-in pr-5 mt-12 flex justify-center items-center" style={{ animationDelay: '0.6s' }}>
            <img src="/assets/images/m.png" alt="Memoji" className="h-40 md:h-44 drop-shadow-[0_0_20px_rgba(255,0,0,0.5)]" />
            <img src="/assets/images/arw.gif" alt="Arrow" className="h-14 md:h-16 invert brightness-200 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]" />
        </div>
    );
};

export default HeroMemoji;
