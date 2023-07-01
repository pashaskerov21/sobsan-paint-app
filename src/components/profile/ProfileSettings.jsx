import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function ProfileSettings() {
  const [profileFirstName, setProfileFirstName] = useState();
  const [profileLastName, setProfileLastName] = useState();
  const [profilePhone, setProfilePhone] = useState();
  const [profileAdress, setProfileAddress] = useState();
  const [profileEmail, setProfileEmail] = useState();
  const [profilePassword, setProfilePassword] = useState();

  const activeUserAccount = useSelector(state => state.accountState.activeUserAccount);

  useEffect(() => {
    if (activeUserAccount) {
      setProfileFirstName(activeUserAccount?.userFirstName);
      setProfileLastName(activeUserAccount?.userLastName);
      setProfilePhone(activeUserAccount?.userPhone);
      setProfileAddress(activeUserAccount?.userAddress);
      setProfileEmail(activeUserAccount?.userEmail);
      setProfilePassword(activeUserAccount?.userPassword);
    }
  }, [activeUserAccount])
  return (
    <div>
      <div>{profileFirstName}</div>
      <div>{profileLastName}</div>
      <div>{profilePhone}</div>
      <div>{profileAdress}</div>
      <div>{profileEmail}</div>
      <div>{profilePassword}</div>
    </div>
  )
}

export default ProfileSettings
