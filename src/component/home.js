import React from 'react'
import Header from './header'
import Cloud from './Cloud'
import Slideshow from './imageslideshow'
import Offer from './offer'
import Days from './days'
import Ventura from './Ventura'
import Footer from './footer'

function Home() {
  return (
    <>
    <div className="header "style={{ backgroundImage:` url(${require("../frontimage.jpg")})`}}>
        <Header isIn='home'/>
      </div>
      <Cloud />
      <Slideshow/>
      <Offer/>
      <Days/>
      <Ventura/>
      <Footer/>
    </>
  )
}

export default Home