import About from "./components/About"
import Footer from "./components/Footer"
import GetInTouch from "./components/GetInTouch"
import Landing from "./components/Landing"
import Nav from "./components/Nav"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
    return <div className="h-screen">
        <Nav />
        <Landing />
        <About />
        <Skills />
        <Projects />
        <GetInTouch />
        <Footer />
    </div>
}

export default App