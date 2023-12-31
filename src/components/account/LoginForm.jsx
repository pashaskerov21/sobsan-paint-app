import React, { useState } from 'react'
import TextTranslate from '../../translate/TextTranslate'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { openActiveUserAccount } from '../../redux/actions/AccountActions';
import { toast } from 'react-toastify';
import { updateBasketProducts, updateCompareProducts, updateWishlistProducts } from '../../redux/actions/ProductAction';

function LoginForm() {
    const [loginEmailValue, setLoginEmailValue] = useState();
    const [loginPasswordValue, setLoginPasswordValue] = useState();

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userAccounts = useSelector(state => state.accountState.userAccounts);

    const handleLoginFormSubmit = (e) => {
        e.preventDefault();
        const activeProfile = userAccounts.find((user) => user.userEmail === loginEmailValue && user.userPassword === loginPasswordValue);
        if(activeProfile){
            dispatch(openActiveUserAccount(activeProfile))
            dispatch(updateBasketProducts(activeProfile?.userBasketProducts))
            dispatch(updateWishlistProducts(activeProfile?.userWishlistProducts))
            dispatch(updateCompareProducts(activeProfile?.userCompareProducts))
            navigate('/profile')
        }else{
            toast.error('Məlumatlar düzgün daxil edilməyib!')
        }
    }
    return (
        <form onSubmit={handleLoginFormSubmit} className='form-general account'>
            <div className="form-floating">
                <input type="email" className="form-control" id="login-email" placeholder="email" onChange={(e) => setLoginEmailValue(e.target.value)} />
                <label htmlFor="login-email"><TextTranslate text='E-poçt'/> *</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="login-password" placeholder="email" onChange={(e) => setLoginPasswordValue(e.target.value)} />
                <label htmlFor="login-password"><TextTranslate text='Şifrə'/> *</label>
            </div>
            <div className="restore-password">
                <Link to='/forget-password'><TextTranslate text='Şifrəmi unutdum'/></Link>
            </div>
            <div className="form-buttons">
                <button type='submit'><TextTranslate text='Giriş'/></button>
                <Link className='d-lg-none' to='/register'><TextTranslate text='Qeydiyyat'/></Link>
            </div>
        </form>
    )
}

export default LoginForm
