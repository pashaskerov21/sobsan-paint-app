import React from 'react'
import { Link } from 'react-router-dom'
import SocialMedia from '../SocialMedia'

function ContactInfo() {
    return (
        <div className='contact-info'>
            <div className="item">
                <i className="fa-solid fa-phone"></i>
                <Link>Tel: (+994 12) 404 45 45</Link>
                <Link>Tel: *4545</Link>
            </div>
            <div className="item">
                <i className="fa-solid fa-envelope"></i>
                <Link>sobsan@sobsan.com</Link>
            </div>
            <div className="item">
                <Link><i className="fa-solid fa-location-dot"></i></Link>
            </div>
            <SocialMedia/>
        </div>
    )
}

export default ContactInfo
