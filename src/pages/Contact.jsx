import React from 'react'
import PrimarySection from '../components/sections/PrimarySection'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'

function Contact() {
  return (
    <PrimarySection className='contact' path='conctact-us' rootLink='Əlaqə' sectionTitle='Əlaqə'>
      <div className="row">
        <div className="col-12 col-lg-6">
          <ContactForm/>
        </div>
        <div className="col-12 col-lg-6">
          <ContactInfo/>
        </div>
      </div>
    </PrimarySection>
  )
}

export default Contact
