
import React from 'react'
// import HeroImage from '../assets/hero-image.png'
import AboutImage from "../assets/aboutme-image.jpg";


const Hero = () => {
  return (
    <div className='bg-black text-white text-center mt-7 py-20' id="home">
        <img src={AboutImage} alt="" 
        className='mx-auto mb-9 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-5xl font-bold mt-7'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Aarchi Jain</span>
            , Full-Stack Developer
        </h1>
        <p className='mt-6 text-lg text-gray-300'>
            I specialize in building modern and responsive web applications.
        </p>
        <div className='mt-9 mb-4 space-x-4'>
            <a href="#contact">
            <button
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-5 py-3 rounded-full'>Contact With Me</button>
            </a>
            <a href="https://drive.google.com/file/d/1RLm79gGIQTF5vtssu_vlp7ZzPi2XuVjG/view">
            <button 
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-5 py-3 rounded-full'>Resume</button>
            </a>
        </div>

    </div>
  )
}

export default Hero
