import React from 'react'
import TextTranslate from '../../translate/TextTranslate'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteActiveProfile, logOutActiveProfile, updateUsersData } from '../../redux/actions/AccountActions';
import { deleteOrderData } from '../../redux/actions/OrderAction';
import { removeAllProductsFromBasket, removeAllProductsFromComparisons, removeAllProductsFromWishlist } from '../../redux/actions/ProductAction';

function ProfileMenu({ showProfileMenu, toggleProfileMenu, activeCollapseMenu, handleCollapseButtonClick, activeProfileSection }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userAccounts = useSelector(state => state.accountState.userAccounts);
    const activeUserAccount = useSelector(state => state.accountState.activeUserAccount);

    const handleDeleteProfileButton = () => {
        dispatch(deleteActiveProfile(activeUserAccount?.userID))
        dispatch(deleteOrderData(activeUserAccount?.userID))
        dispatch(logOutActiveProfile())
        dispatch(removeAllProductsFromBasket())
        dispatch(removeAllProductsFromComparisons())
        dispatch(removeAllProductsFromWishlist())
        navigate('/')
    }


    const basketProducts = useSelector(state => state.productState.basketProducts)
    const wishlistProducts = useSelector(state => state.productState.wishlistProducts)
    const comparisonProducts = useSelector(state => state.productState.comparisonProducts);

    const handleLogOutButton = () => {

        const updatedUser = userAccounts.find((user) => user.userID === activeUserAccount.userID)
        updatedUser.userBasketProducts = [...basketProducts]
        updatedUser.userWishlistProducts = [...wishlistProducts]
        updatedUser.userCompareProduts = [...comparisonProducts]
        
        dispatch(updateUsersData(userAccounts))
        dispatch(removeAllProductsFromBasket())
        dispatch(removeAllProductsFromComparisons())
        dispatch(removeAllProductsFromWishlist())

        dispatch(logOutActiveProfile())
        navigate('/')
    }
    return (
        <>
            <div className={`profile-menu-backdrop ${showProfileMenu ? 'd-xl-none' : 'd-none d-xl-none'}`} onClick={toggleProfileMenu}></div>
            <div className={`profile-menu ${showProfileMenu ? 'active' : ''}`}>
                <div className='menu-header'>
                    <button onClick={toggleProfileMenu} className='close-button'><i className="fa-solid fa-xmark"></i></button>
                </div>
                <div className="menu-body">
                    <div className="collapse-item">
                        <button className={`collapse-button ${activeCollapseMenu === 'my-account' ? 'active' : ''}`} type='button' onClick={() => handleCollapseButtonClick('my-account')}>
                            <span><TextTranslate text='Mənim hesabım' /></span>
                            <i className='fa-solid fa-chevron-up'></i>
                        </button>
                        <div className={`collapse-menu ${activeCollapseMenu === 'my-account' ? 'd-none' : ''}`}>
                            <div className="inner">
                                <div className="item">
                                    <Link to='/profile/settings' onClick={toggleProfileMenu} className={`${activeProfileSection === 'settings' ? 'active' : ''}`}><TextTranslate text={'Tənzimləmələr'} /></Link>
                                </div>
                                <div className="item">
                                    <button onClick={handleDeleteProfileButton}><TextTranslate text={'Hesabı sil'} /></button>
                                </div>
                                <div className="item">
                                    <button onClick={handleLogOutButton}><TextTranslate text={'Çıxış'} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="collapse-item">
                        <button className={`collapse-button ${activeCollapseMenu === 'my-messages' ? 'active' : ''}`} type='button' onClick={() => handleCollapseButtonClick('my-messages')}>
                            <span><TextTranslate text='İsmarıclarım' /></span>
                            <i className='fa-solid fa-chevron-up'></i>
                        </button>
                        <div className={`collapse-menu ${activeCollapseMenu === 'my-messages' ? 'd-none' : ''}`}>
                            <div className="inner">
                                <div className="item">
                                    <Link to='/profile/sends' onClick={toggleProfileMenu} className={`${activeProfileSection === 'sends' ? 'active' : ''}`}><TextTranslate text={'Göndərilənlər'} /></Link>
                                </div>
                                <div className="item">
                                    <Link to='/profile/write-to-us' onClick={toggleProfileMenu} className={`${activeProfileSection === 'write-message' ? 'active' : ''}`}><TextTranslate text={'Bizə yazın'} /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="collapse-item">
                        <button className={`collapse-button ${activeCollapseMenu === 'my-orders' ? 'active' : ''}`} type='button' onClick={() => handleCollapseButtonClick('my-orders')}>
                            <span><TextTranslate text='Sifarişlər' /></span>
                            <i className='fa-solid fa-chevron-up'></i>
                        </button>
                        <div className={`collapse-menu ${activeCollapseMenu === 'my-orders' ? 'd-none' : ''}`}>
                            <div className="inner">
                                <div className="item">
                                    <Link to='order-history' onClick={toggleProfileMenu} className={`${activeProfileSection === 'order-history' ? 'active' : ''}`}><TextTranslate text={'Sifariş tarixcəsi'} /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="collapse-item">
                        <button className={`collapse-button ${activeCollapseMenu === 'my-lists' ? 'active' : ''}`} type='button' onClick={() => handleCollapseButtonClick('my-lists')}>
                            <span><TextTranslate text='Sifarişlər' /></span>
                            <i className='fa-solid fa-chevron-up'></i>
                        </button>
                        <div className={`collapse-menu ${activeCollapseMenu === 'my-lists' ? 'd-none' : ''}`}>
                            <div className="inner">
                                <div className="item">
                                    <Link to='/basket'><TextTranslate text={'Səbət'} /></Link>
                                </div>
                                <div className="item">
                                    <Link to='/wishlist'><TextTranslate text={'Seçilmişlər'} /></Link>
                                </div>
                                <div className="item">
                                    <Link to='/compare'><TextTranslate text={'Müqayisə olunanlar'} /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileMenu
