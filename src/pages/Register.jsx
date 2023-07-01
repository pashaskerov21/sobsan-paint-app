import React from 'react'
import PrimarySection from '../components/sections/PrimarySection'
import RegisterForm from '../components/account/RegisterForm'
import AccountRighBlock from '../components/account/AccountRighBlock'

function Register() {
  return (
    <PrimarySection className='register' path='register' rootLink='Qeydiyyat' sectionTitle='Qeydiyyat'>
      <div className="row">
        <div className="col-12 col-lg-6 col-xxl-8">
          <RegisterForm/>
        </div>
        <div className="col-12 col-lg-6 col-xxl-4">
          <AccountRighBlock path='login' linkName='Giriş' />
        </div>
      </div>
    </PrimarySection>
  )
}

export default Register
