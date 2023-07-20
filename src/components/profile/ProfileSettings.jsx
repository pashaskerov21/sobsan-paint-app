import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TextTranslate from '../../translate/TextTranslate';
import { toast } from 'react-toastify';
import { updateUsersData } from '../../redux/actions/AccountActions';

function ProfileSettings() {
  const [profileFirstName, setProfileFirstName] = useState('');
  const [profileLastName, setProfileLastName] = useState('');
  const [profilePhone, setProfilePhone] = useState('');
  const [profileAdress, setProfileAddress] = useState('');
  const [profileEmail, setProfileEmail] = useState('');

  const [profileGender, setProfileGender] = useState('');
  const [profilePhoneSecond, setProfilePhoneSecond] = useState('');
  const [profileNewPassword, setProfileNewPassword] = useState('');
  const [profileNewPasswordReply, setProfileNewPasswordReply] = useState('');
  const [profileCityDeliveryAddress, setProfileCityDeliveryAddress] = useState('');
  const [profileRegionDeliveryAddress, setProfileRegionDeliveryAddress] = useState('');
  const [profileDeliveryAddressDetail, setProfileDeliveryAddressDetail] = useState('');

  const activeUserAccount = useSelector(state => state.accountState.activeUserAccount);

  useEffect(() => {
    if (activeUserAccount) {
      setProfileFirstName(activeUserAccount?.userFirstName);
      setProfileLastName(activeUserAccount?.userLastName);
      setProfilePhone(activeUserAccount?.userPhone);
      setProfilePhoneSecond(activeUserAccount?.userPhoneSecond);
      setProfileEmail(activeUserAccount?.userEmail);
      setProfileAddress(activeUserAccount?.userAddress);
      setProfileCityDeliveryAddress(activeUserAccount?.userCityAddress)
      setProfileRegionDeliveryAddress(activeUserAccount?.userRegionAddress)
      setProfileDeliveryAddressDetail(activeUserAccount?.userAddressDetail)
      setProfileGender(activeUserAccount?.userGender)

    }
  }, [activeUserAccount])



  const dispatch = useDispatch();
  const userAccounts = useSelector(state => state.accountState.userAccounts);

  const [activeCollapseMenu, setActiveCollapseMenu] = useState();
  const handleCollapseButtonClick = (value) => {
    if (activeCollapseMenu === value) {
      setActiveCollapseMenu(null)
    } else {
      setActiveCollapseMenu(value)
    }
  }

  const hadnleProfileSettingFormSumbit = (e) => {
    e.preventDefault();



    if (activeUserAccount) {


      if (profileNewPassword === profileNewPasswordReply) {


        if (profileFirstName !== activeUserAccount?.userFirstName ||
          profileLastName !== activeUserAccount?.userLastName ||
          profilePhone !== activeUserAccount.userPhone ||
          profilePhoneSecond !== activeUserAccount.userPhoneSecond ||
          profileAdress !== activeUserAccount.userAddress ||
          profileCityDeliveryAddress !== activeUserAccount.userCityAddress ||
          profileRegionDeliveryAddress !== activeUserAccount.userRegionAddress ||
          profileDeliveryAddressDetail !== activeUserAccount.userAddressDetail ||
          profileEmail !== activeUserAccount.userEmail ||
          profileNewPassword !== activeUserAccount.userPassword ||
          profileGender !== activeUserAccount.userGender
        ) {
          const updatedUser = userAccounts.find((user) => user.userID === activeUserAccount.userID);
          updatedUser.userFirstName = profileFirstName;
          updatedUser.userLastName = profileLastName;
          updatedUser.userPhone = profilePhone;
          updatedUser.userPhoneSecond = profilePhoneSecond;
          updatedUser.userAddress = profileAdress;
          updatedUser.userCityAddress = profileCityDeliveryAddress;
          updatedUser.userRegionAddress = profileRegionDeliveryAddress;
          updatedUser.userAddressDetail = profileDeliveryAddressDetail;
          updatedUser.userGender = profileGender;
          if (updatedUser.userEmail !== profileEmail) {
            updatedUser.userEmail = profileEmail;
          }
          if (updatedUser.userPassword !== profileNewPassword) {
            updatedUser.userPassword = profileNewPassword;
          }

          dispatch(updateUsersData(userAccounts))

          toast.success('İstifadəçi məlumatlarınız yeniləndi!');
          setProfileNewPassword('')
          setProfileNewPasswordReply('')
        }


      } else {
        toast.error('Şifrə yanlışdır!');
      }
    } else {
      toast.error('Əməlliyyat uğursuz oldu')
    }
  }

  return (
    <form onSubmit={hadnleProfileSettingFormSumbit} className="form-general profile-settings">
      <div className="collapse-item">
        <button className={`collapse-button ${activeCollapseMenu === 'profil-data' ? 'active' : ''}`} type='button' onClick={() => handleCollapseButtonClick('profil-data')}>
          <span><TextTranslate text='Profil məlumatları' /></span>
          <i className='fa-solid fa-chevron-up'></i>
        </button>
        <div className={`collapse-menu ${activeCollapseMenu === 'profil-data' ? 'd-none' : ''}`}>
          <div className="inner">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-floating">
                  <input type="text" className="form-control" id="profile-fname" placeholder="fname" value={profileFirstName} onChange={(e) => setProfileFirstName(e.target.value)} />
                  <label htmlFor="profile-fname"><TextTranslate text='Ad' /></label>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-floating">
                  <input type="text" className="form-control" id="profile-lname" placeholder="lname" value={profileLastName} onChange={(e) => setProfileLastName(e.target.value)} />
                  <label htmlFor="profile-lname"><TextTranslate text='Soyad' /></label>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="gender">
                  <span><TextTranslate text='Cinsi:' /></span>
                  <div className="form-check me-4">
                    <input type="radio" id='gender-man' className='form-check-input' name='gender' checked={profileGender === 'Kişi'} value='Kişi' onChange={(e) => setProfileGender(e.target.value)} />
                    <label htmlFor="gender-man" className='form-check-label'><TextTranslate text='Kişi' /></label>
                  </div>
                  <div className="form-check">
                    <input type="radio" id='gender-woman' className='form-check-input' name='gender' checked={profileGender === 'Qadın'} value='Qadın' onChange={(e) => setProfileGender(e.target.value)} />
                    <label htmlFor="gender-woman" className='form-check-label'><TextTranslate text='Qadın' /></label>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-floating">
                  <input type="text" className="form-control" id="profile-address" placeholder="address" value={profileAdress} onChange={(e) => setProfileAddress(e.target.value)} />
                  <label htmlFor="profile-address"><TextTranslate text='Ünvan' /></label>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-floating">
                  <input type="number" className="form-control" id="profile-phone" placeholder="phone" value={profilePhone} onChange={(e) => setProfilePhone(e.target.value)} />
                  <label htmlFor="profile-phone"><TextTranslate text='Telefon' /></label>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-floating">
                  <input type="number" className="form-control" id="profile-phone-2" placeholder="phone" value={profilePhoneSecond} onChange={(e) => setProfilePhoneSecond(e.target.value)} />
                  <label htmlFor="profile-phone-2"><TextTranslate text='Telefon (əlavə)' /></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="collapse-item">
        <button className={`collapse-button ${activeCollapseMenu === 'account-data' ? 'active' : ''}`} type='button' onClick={() => handleCollapseButtonClick('account-data')}>
          <span><TextTranslate text='Hesab məlumatları' /></span>
          <i className='fa-solid fa-chevron-up'></i>
        </button>
        <div className={`collapse-menu ${activeCollapseMenu === 'account-data' ? 'd-none' : ''}`}>
          <div className="inner">
            <div className="row">
              <div className="col-12">
                <div className="form-floating">
                  <input type="email" className="form-control" id="profile-email" placeholder="email" value={profileEmail} onChange={(e) => setProfileEmail(e.target.value)} />
                  <label htmlFor="profile-email"><TextTranslate text='E-poçt' /></label>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-floating">
                  <input type="password" className="form-control" id="profile-password" placeholder="password" value={profileNewPassword} onChange={(e) => setProfileNewPassword(e.target.value)} />
                  <label htmlFor="profile-password"><TextTranslate text='Şifrə' /></label>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-floating">
                  <input type="password" className="form-control" id="profile-password-reply" placeholder="password-reply" value={profileNewPasswordReply} onChange={(e) => setProfileNewPasswordReply(e.target.value)} />
                  <label htmlFor="profile-password-reply"><TextTranslate text='Şifrənizi təsdiq edin' /></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="collapse-item">
        <button className={`collapse-button ${activeCollapseMenu === 'delivery-data' ? 'active' : ''}`} type='button' onClick={() => handleCollapseButtonClick('delivery-data')}>
          <span><TextTranslate text='Çatdırılma məlumatları' /></span>
          <i className='fa-solid fa-chevron-up'></i>
        </button>
        <div className={`collapse-menu ${activeCollapseMenu === 'delivery-data' ? 'd-none' : ''}`}>
          <div className="inner">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="form-floating">
                  <input type="text" className="form-control" id="profile-city" placeholder="city" value={profileCityDeliveryAddress} onChange={(e) => setProfileCityDeliveryAddress(e.target.value)} />
                  <label htmlFor="profile-city"><TextTranslate text='Şəhər' /></label>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="form-floating">
                  <input type="text" className="form-control" id="profile-region" placeholder="region" value={profileRegionDeliveryAddress} onChange={(e) => setProfileRegionDeliveryAddress(e.target.value)} />
                  <label htmlFor="profile-region"><TextTranslate text='Rayon, qəsəbə' /></label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating mt-3">
                  <textarea id='profile-address-detail' className="form-control" placeholder='address' value={profileDeliveryAddressDetail} onChange={(e) => setProfileDeliveryAddressDetail(e.target.value)}></textarea >
                  <label htmlFor="profile-address-detail"><TextTranslate text='Əlavə təsvir (küçə, ev və s.)' /></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className='submit-button' type="submit"><TextTranslate text='Yadda saxla' /></button>
    </form>
  )
}

export default ProfileSettings
