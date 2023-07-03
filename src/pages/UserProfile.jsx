import React, { useEffect, useState } from 'react'
import PrimarySection from '../components/sections/PrimarySection'
import { useSelector } from 'react-redux';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import TextTranslate from '../translate/TextTranslate';
import ProfileMenu from '../components/profile/ProfileMenu';
import ProfileSettings from '../components/profile/ProfileSettings';
import SendMessages from '../components/profile/SendMessages';
import WriteMessage from '../components/profile/WriteMessage';
import OrderHistory from '../components/profile/OrderHistory';

function UserProfile() {

    const navigate = useNavigate();
    const location = useLocation();
    const activeUserAccount = useSelector(state => state.accountState.activeUserAccount);

    useEffect(() => {
        if (!activeUserAccount) {
            navigate('/404')
        }
    }, [activeUserAccount, navigate])



    const [panelTitle, setPanelTitle] = useState('Tənzimləmələr');
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const toggleProfileMenu = () => setShowProfileMenu(!showProfileMenu);


    const [activeCollapseMenu, setActiveCollapseMenu] = useState();
    const handleCollapseButtonClick = (value) => {
        if (activeCollapseMenu === value) {
            setActiveCollapseMenu(null)
        } else {
            setActiveCollapseMenu(value)
        }
    }

    useEffect(() => {
        if (location.pathname === '/profile') {
            navigate('/profile/settings')
        }
    }, [location.pathname, navigate])

    const [activeProfileSection, setActiveProfileSection] = useState('settings')
    useEffect(() => {
        if (location.pathname === '/profile/settings') {
            setActiveProfileSection('settings')
            setPanelTitle('Tənzimləmələr')
        } else if (location.pathname === '/profile/sends') {
            setActiveProfileSection('sends')
            setPanelTitle('Göndərilənlər')
        } else if (location.pathname === '/profile/write-to-us') {
            setActiveProfileSection('write-message')
            setPanelTitle('Bizə yazın')
        } else if (location.pathname === '/profile/order-history') {
            setActiveProfileSection('order-history')
            setPanelTitle('Sifariş tarixçəsi')
        }
    }, [location.pathname])

    return (
        <PrimarySection className='profile' path='profile' rootLink='Şəxsi kabinet' sectionTitle='Şəxsi kabinet'>
            <div className="row">
                <div className="col-12 col-lg-4">
                    <ProfileMenu
                        showProfileMenu={showProfileMenu}
                        toggleProfileMenu={toggleProfileMenu}
                        activeCollapseMenu={activeCollapseMenu}
                        handleCollapseButtonClick={handleCollapseButtonClick}
                        activeProfileSection={activeProfileSection}
                    />
                </div>
                <div className="col-12 col-lg-8">
                    <div className="profile-main-panel">
                        <div className="header">
                            <h3 className="title"><TextTranslate text={panelTitle} /></h3>
                            <button onClick={toggleProfileMenu} className='menu-button d-xl-none'>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </button>
                        </div>
                        <div className="body">
                            <Routes>
                                <Route path='/settings' element={<ProfileSettings />} />
                                <Route path='/sends' element={<SendMessages />} />
                                <Route path='/write-to-us' element={<WriteMessage />} />
                                <Route path='/order-history' element={<OrderHistory />} />
                            </Routes>
                        </div>
                    </div>

                </div>
            </div>
        </PrimarySection>
    )
}

export default UserProfile
