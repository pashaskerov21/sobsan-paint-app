import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../image/icon/social-facebook.svg';
import instagram from '../image/icon/social-instagram.svg'
import youtube from '../image/icon/social-youtube.svg'

function SocialMedia() {
  return (
    <div className='social-icons'>
      <Link><img src={facebook} alt="social-icon" /></Link>
      <Link><img src={instagram} alt="social-icon" /></Link>
      <Link><img src={youtube} alt="social-icon" /></Link>
    </div>
  )
}

export default SocialMedia
