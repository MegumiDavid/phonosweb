import React from 'react'
import '../style/Home.scss'

import Navbar from '../components/home/Navbar'
import Header from '../components/home/Header'
import Services from '../components/home/Services'
import Aboutus from '../components/home/Aboutus'
import Faq from  '../components/home/Faq'
import Footer from '../components/home/Footer'

const Home = () =>  {
  return (
    <>
        <Navbar />
        <Header />
        <Services />
        <Aboutus />
        <Faq />
        <Footer />
    </>
  )
}

export default Home