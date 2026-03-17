import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Showcase from './components/ShowCase'

// register GSAP in order to work
gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <>
    <NavBar />
    <Hero />
    <ProductViewer />
    <Showcase />
    </>
  )
}

export default App