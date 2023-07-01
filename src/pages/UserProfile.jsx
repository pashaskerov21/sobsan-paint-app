import React, { useEffect, useState } from 'react'
import PrimarySection from '../components/sections/PrimarySection'
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import TextTranslate from '../translate/TextTranslate';
import ProfileMenu from '../components/profile/ProfileMenu';
import ProfileSettings from '../components/profile/ProfileSettings';
import SendMessages from '../components/profile/SendMessages';
import WriteMessage from '../components/profile/WriteMessage';
import OrderHistory from '../components/profile/OrderHistory';
import { saveUserBasketProducts, saveUserCompareProducts, saveUserWishlistProducts } from '../redux/actions/AccountActions';

function UserProfile() {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const activeUserAccount = useSelector(state => state.accountState.activeUserAccount);

    useEffect(() => {
        if (!activeUserAccount) {
            navigate('/404')
        }
    }, [activeUserAccount,navigate])


    // const basketProducts = useSelector(state => state.productState.basketProducts)
    // const wishlistProducts = useSelector(state => state.productState.wishlistProducts);
    // const comparisonProducts = useSelector(state => state.productState.comparisonProducts);
    // console.log(comparisonProducts)

    // useEffect(() => {
    //     dispatch(saveUserBasketProducts(basketProducts))
    //     dispatch(saveUserWishlistProducts(wishlistProducts))
    //     dispatch(saveUserCompareProducts(comparisonProducts))
    // },[dispatch,basketProducts,wishlistProducts,comparisonProducts])





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
        if(location.pathname === '/profile'){
            navigate('/profile/settings')
        }
    },[location.pathname,navigate])

    const [activeProfileSection, setActiveProfileSection] = useState('settings')
    useEffect(() =>{
        if(location.pathname === '/profile/settings'){
            setActiveProfileSection('settings')
            setPanelTitle('Tənzimləmələr')
        }else if(location.pathname === '/profile/sends'){
            setActiveProfileSection('sends')
            setPanelTitle('Göndərilənlər')
        }else if(location.pathname === '/profile/write-to-us'){
            setActiveProfileSection('write-message')
            setPanelTitle('Bizə yazın')
        }else if(location.pathname === '/profile/order-history'){
            setActiveProfileSection('order-history')
            setPanelTitle('Sifariş tarixçəsi')
        }
    },[location.pathname])

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
                        <Routes>
                            <Route path='/settings' element={<ProfileSettings />} />
                            <Route path='/sends' element={<SendMessages/>} />
                            <Route path='/write-to-us' element={<WriteMessage/>} />
                            <Route path='/order-history' element={<OrderHistory/>} />
                        </Routes>
                    </div>

                </div>
            </div>
        </PrimarySection>
    )
}

export default UserProfile
