import React, { useState } from 'react'
import './myprofile.css'
import { assets } from '../../assets/assets_frontend/assets'
const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    Image: assets.profile_pic,
    email: "richardjameswap@gmail.com",
    phone: "+1  123 456 7890",
    Address: {
      line1: "57th Cross, Richmond ",
      line2: "Circle, Church Road, London"
    },
    Gender: "Male",
    dob: '2003-8-15'

  })
  const [isEdited, setIsEdited] = useState(false)
  return (
    <div className='profileContainer'>
      <img className='image' src={userData.Image} alt='' />
      {
        isEdited ? <input className='input' type='text' value={userData.name} onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} /> : <h3>{userData.name}</h3>
      }
      <hr />
      <div className='contactInfo'>
        <p className='underline'>CONTACT INFORMATION</p>
        <div className='data'>
          <p>Email id:</p>
          {<p className='answer'>{userData.name}</p>}
          <p>Phone:</p>
          {
            isEdited ? <input className='input' value={userData.phone} type='text' onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} /> : <p className='answer'>{userData.phone}</p>
          }
          <p>Address</p>
          {
            isEdited ? <p><input className='input' onChange={(e) => setUserData(prev => ({ ...prev, Address: { ...prev.Address, line1: e.target.value } }))} value={userData.Address.line1} type='text' /> <br /><input className='input' onChange={(e) => setUserData(prev => ({ ...prev, Address: { ...prev.Address, line2: e.target.value } }))} value={userData.Address.line2} type='text' /></p> : <p className='answer'>{userData.Address.line1}<br />{userData.Address.line2}</p>
          }
        </div>
      </div>
      <div className='basicInfo'>
        <p className='underline'>BASIC INFORMATION</p>
        <div className='data'>
          <p>Gender:</p>
          {
            isEdited ? <select className='input' onChange={(e) => setUserData(prev => ({ ...prev, Gender: e.target.value }))}><option value="Male">Male</option><option value="Female">Female</option></select> : <p className='answer'>{userData.Gender}</p>
          }
          <p>Birthday:</p>
          {
            isEdited ? <input className='input' type='date' onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} /> : <p className='answer'>{userData.dob}</p>
          }
        </div>
      </div>
      <div className='buttons'>
        {
          isEdited ? <button onClick={() => setIsEdited(false)}>Save information</button> :
            <button onClick={() => setIsEdited(true)}>Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile