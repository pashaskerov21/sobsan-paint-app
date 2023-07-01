import React, { useState } from 'react'
import TextTranslate from '../../translate/TextTranslate'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { saveUserAccountData } from '../../redux/actions/AccountActions';

function RegisterForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { v4: uuidv4 } = require('uuid');
  const userAccounts = useSelector(state => state.accountState.userAccounts);

  const [userFirstName, setUserFirstName] = useState();
  const [userLastName, setUserLastName] = useState();
  const [userPhone, setUserPhone] = useState();
  const [userAddress, setUserAddress] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [userPasswordReply, setUserPasswordReply] = useState();
  const handleRegisterFormSubmit = (e) => {
    e.preventDefault();
    if (userPassword !== userPasswordReply) {
      toast.error('Şifrə yanlışdır!');
    } else {

      let newData = {
        userID: uuidv4(),
        userFirstName,
        userLastName,
        userPhone,
        userAddress,
        userEmail,
        userPassword,
      }

      let testUser = userAccounts.find((user) => user.userFirstName === userFirstName && user.userPhone === userPhone && user.userEmail === userEmail)

      if (testUser) {
        toast.error('Bu hesab mövcuddur');
      } else {
        dispatch(saveUserAccountData(newData))
        navigate('/login')
      }
    }
  }
  return (
    <form onSubmit={handleRegisterFormSubmit} className='form-general account'>
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="form-floating">
            <input type="text" className="form-control" id="register-fname" placeholder="fname" required onChange={(e) => setUserFirstName(e.target.value)} />
            <label htmlFor="register-fname"><TextTranslate text='Adınız' /> *</label>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="form-floating">
            <input type="text" className="form-control" id="register-lname" placeholder="lname" onChange={(e) => setUserLastName(e.target.value)} />
            <label htmlFor="register-lname"><TextTranslate text='Soydınız' /></label>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="form-floating">
            <input type="number" className="form-control" id="register-phone" placeholder="phone" required onChange={(e) => setUserPhone(e.target.value)} />
            <label htmlFor="register-phone"><TextTranslate text='Telefon' /> *</label>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="form-floating">
            <input type="text" className="form-control" id="register-address" placeholder="address" onChange={(e) => setUserAddress(e.target.value)} />
            <label htmlFor="register-address"><TextTranslate text='Ünvan' /></label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <input type="email" className="form-control" id="register-email" placeholder="email" required onChange={(e) => setUserEmail(e.target.value)} />
            <label htmlFor="register-email"><TextTranslate text='E-poçt' /> *</label>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="form-floating">
            <input type="password" className="form-control" id="register-password" placeholder="password" required onChange={(e) => setUserPassword(e.target.value)} />
            <label htmlFor="register-password"><TextTranslate text='Şifrə' /> *</label>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="form-floating">
            <input type="password" className="form-control" id="register-password-reply" placeholder="password-reply" required onChange={(e) => setUserPasswordReply(e.target.value)} />
            <label htmlFor="register-password-reply"><TextTranslate text='Şifrənizi təsdiq edin' /> *</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-buttons">
            <button type='submit'><TextTranslate text='Qeydiyyat' /></button>
            <Link className='d-lg-none' to='/login'><TextTranslate text='Giriş' /></Link>
          </div>
        </div>
      </div>



    </form>
  )
}

export default RegisterForm
