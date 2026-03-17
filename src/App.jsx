import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Showcase from './components/ShowCase'
import Performance from './components/Performance'
import Features from './components/Features'
import Highlights from './components/Highlights'
import Footer from './components/Footer'

// register GSAP in order to work
gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <>
    <NavBar />
    <Hero />
    <ProductViewer />
    <Showcase />
    <Performance />
    <Features />
    <Highlights />
    <Footer />
    </>
  )
}

export default App;