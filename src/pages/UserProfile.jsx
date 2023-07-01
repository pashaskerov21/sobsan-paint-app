import React, { useEffect, useState } from 'react'
import PrimarySection from '../components/sections/PrimarySection'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function UserProfile() {
    const [profileFirstName, setProfileFirstName] = useState();
    const [profileLastName, setProfileLastName] = useState();
    const [profilePhone, setProfilePhone] = useState();
    const [profileAdress, setProfileAddress] = useState();
    const [profileEmail,setProfileEmail] = useState();
    const [profilePassword, setProfilePassword] = useState();

    const activeUserAccount = useSelector(state => state.accountState.activeUserAccount);
    const navigate = useNavigate();

    useEffect(() => {
        if(activeUserAccount){
            setProfileFirstName(activeUserAccount?.userFirstName);
            setProfileLastName(activeUserAccount?.userLastName);
            setProfilePhone(activeUserAccount?.userPhone);
            setProfileAddress(activeUserAccount?.userAddress);
            setProfileEmail(activeUserAccount?.userEmail);
            setProfilePassword(activeUserAccount?.userPassword);
        }else{
            navigate('/404')
        }
    },[activeUserAccount,navigate])
    return (
        <PrimarySection className='user-profile' path='profile' rootLink='Şəxsi kabinet' sectionTitle='Şəxsi kabinet'>
            <div>{profileFirstName}</div>
            <div>{profileLastName}</div>
            <div>{profilePhone}</div>
            <div>{profileAdress}</div>
            <div>{profileEmail}</div>
            <div>{profilePassword}</div>
        </PrimarySection>
    )
}

export default UserProfile
