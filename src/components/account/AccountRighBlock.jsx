import React from 'react'
import logo from '../../image/logo.svg'
import SocialMedia from '../SocialMedia'
import { Link } from 'react-router-dom'
import TextTranslate from '../../translate/TextTranslate'

function AccountRighBlock({ path, linkName }) {
  return (
    <div className='right-block'>
      <div className="inner">
        <Link className='logo' to='/'><img src={logo} alt="logo" /></Link>
        <SocialMedia />
        <Link className='main-link' to={`/${path}`}><TextTranslate text={linkName} /></Link>
      </div>
    </div>
  )
}

export default AccountRighBlock
