import React from 'react'
import PrimarySection from '../components/sections/PrimarySection'
import AccountRighBlock from '../components/account/AccountRighBlock'
import RestorePasswordForm from '../components/account/RestorePasswordForm'

function ForgetPassword() {
  return (
    <PrimarySection className='forget-password' path='forget-password' rootLink='Şifrəmi unutdum' sectionTitle='Şifrəmi unutdum'>
      <div className="row">
        <div className="col-12 col-lg-6">
          <RestorePasswordForm/>
        </div>
        <div className="col-12 col-lg-6">
          <AccountRighBlock path='register' linkName='Qeydiyyat' />
        </div>
      </div>
    </PrimarySection>
  )
}

export default ForgetPassword
