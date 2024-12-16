import React from 'react'
import "./about.css";
import { assets } from '../../assets/assets_frontend/assets'
const About = () => {
  return (  
    <div className='containerAbout'>
      <h1 className='h1'>About<span className='span'>Us</span></h1>
      <div className='data'>
        <img className='image' src={assets.about_image} alt='' />
        <div className='description'>
          <p>
            Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <p><span>Our Vision</span></p>
          <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>
      <div className='section'>
        <h2 className='h1'>Why<span className='span'>Choose Us</span></h2>

        <div className='table'>
          <div className='table-data'>
            <h3>Efficiency:</h3>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
          <div className='table-data'>
            <h3>Convenience:</h3>
            <p>Access to a network of trusted healthcare professionals in your area.</p>
          </div>
          <div className='table-data'>
            <h3>Personalization:</h3>
            <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About