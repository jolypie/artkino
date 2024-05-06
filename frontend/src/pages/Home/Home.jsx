import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './home.css'
import Sidebar from '../../components/sidebar/Sidebar'
import FadeSlider from '../../components/slider/FadeSlider'

function Home() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className='page-container'>
        <FadeSlider />

        <div className='trending'>
          {/* <h2>TRENDING THIS WEEK</h2> */}
        </div>
      </div>
    </div>
  )
}

export default Home