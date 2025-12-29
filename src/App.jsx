import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeroMemoji from './components/HeroMemoji'
import Projects from './components/Projects'

function App() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <HeroMemoji />
            <Projects />
        </div>
    )
}

export default App
