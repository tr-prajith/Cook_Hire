import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Process from '../components/Process'
import Cooks from '../components/Cooks'
import About from '../components/About'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Cuisines from '../components/Cuisines'
import How from '../components/How'
 


const Home = () => {
    return (
        <div>
        <Navbar />
        <Hero />
        <Cuisines />
        <Process />
        <Cooks />
        <About />
        <How />
        <Reviews />
        <Banner />
        <Footer />
        </div>
    )
}

export default Home