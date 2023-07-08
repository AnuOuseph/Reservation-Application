/* eslint-disable no-unused-vars */
import React from 'react'
import NavBar from '../user-components/NavBar'
import Header from '../user-components/Header'
import Post from '../user-components/Post'
import Footer from '../user-components/Footer'
import Subscription from '../user-components/Subscription'
import Cities from '../user-components/Cities'
import Featured from '../user-components/Featured'
import Properties from '../user-components/Properties'

function Home() {
  return (
    <div>
        <NavBar/>
        <Header/>
        <Cities/>
        <Properties/>
        <Featured/>
        <Subscription/>
        <Footer/>

      
    </div>
  )
}

export default Home
