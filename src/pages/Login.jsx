import React from 'react'
import PrimarySection from '../components/sections/PrimarySection'
import LoginForm from '../components/account/LoginForm'
import AccountRighBlock from '../components/account/AccountRighBlock'

function Login() {
  return (
    <PrimarySection className='login' path='login' rootLink='Giriş' sectionTitle='Giriş' >
      <div className="row">
        <div className="col-12 col-lg-6">
          <LoginForm/>
        </div>
        <div className="col-12 col-lg-6">
          <AccountRighBlock path='register' linkName='Qeydiyyat'/>
        </div>
      </div>
    </PrimarySection>
  )
}

export default Login
