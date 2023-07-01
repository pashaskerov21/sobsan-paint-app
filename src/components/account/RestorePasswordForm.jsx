import React from 'react'
import TextTranslate from '../../translate/TextTranslate'
import { Link } from 'react-router-dom'

function RestorePasswordForm() {
    return (
        <form className='form-general account'>
            <div className="form-floating">
                <input type="email" className="form-control" id="rp-email" placeholder="email" />
                <label htmlFor="rp-email"><TextTranslate text='E-poçt' /> *</label>
            </div>
            <div className="form-buttons">
                <button type='submit'><TextTranslate text='Göndər' /></button>
                <Link className='d-lg-none' to='/register'><TextTranslate text='Qeydiyyat' /></Link>
            </div>
        </form>
    )
}

export default RestorePasswordForm
