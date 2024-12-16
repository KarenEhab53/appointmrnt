import React from 'react'
import './contact.css'
import { assets } from '../../assets/assets_frontend/assets'
const Contact = () => {
  return (
    <div className='contact'>
      <h1>CONTACT <span>Us</span></h1>
      <div className='containerContact'>
        <img src={assets.contact_image} alt="" />
        <div className='data'>
          <h3>OUR OFFICE</h3>
          <p>00000 Willms Station<br />Suite 000, Washington, USA</p>
          <p>Tel: (000) 000-0000<br />Email: greatstackdev@gmail.com</p>
          <h3>CAREERS AT PRESCRIPTO</h3>
          <p>Learn more about our teams and job openings.</p>
          <button>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact