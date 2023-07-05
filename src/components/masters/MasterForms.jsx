import React, { useState } from 'react'
import TextTranslate from '../../translate/TextTranslate'
import { Link } from 'react-router-dom'

function MasterForms() {
    const [showForm, setShowForm] = useState('login')
    return (
        <div className="master-forms">
            <div className="buttons">
                <button className={showForm === 'login' ? 'active' : ''} onClick={() => setShowForm('login')}><TextTranslate text='Giriş' /></button>
                <button className={showForm === 'register' ? 'active' : ''} onClick={() => setShowForm('register')}><TextTranslate text='Qeydiyyat' /></button>
            </div>
            <form className={`form-general ${showForm === 'login' ? '' : 'd-none'}`}>
                <div className="form-floating">
                    <input type="number" className="form-control" id="master-login-phone" placeholder="phone" />
                    <label htmlFor="master-login-phone"><TextTranslate text='Telefon' /> *</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="master-login-password" placeholder="password" />
                    <label htmlFor="master-login-password"><TextTranslate text='Şifrə' /> *</label>
                </div>
                <div className="restore-password mb-0">
                    <Link><TextTranslate text='Şifrəmi unutdum' /></Link>
                </div>
                <button className='submit-button' type="submit"><TextTranslate text='Giriş' /></button>
            </form>
            <form className={`form-general ${showForm === 'register' ? '' : 'd-none'}`}>
                <div className="form-floating">
                    <input type="text" className="form-control" id="master-fname" placeholder="fname" />
                    <label htmlFor="master-fname"><TextTranslate text='Ad' /> *</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="master-lname" placeholder="lname" />
                    <label htmlFor="master-lname"><TextTranslate text='Soyad' /> *</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="master-father" placeholder="father" />
                    <label htmlFor="master-father"><TextTranslate text='Ata adı' /> *</label>
                </div>
                <div className="form-floating">
                    <input type="number" className="form-control" id="master-phone" placeholder="phone" />
                    <label htmlFor="master-phone"><TextTranslate text='Telefon' /> *</label>
                </div>
                <div className="form-floating">
                    <input type="email" className="form-control" id="master-email" placeholder="email" />
                    <label htmlFor="master-email"><TextTranslate text='E-poçt' /> *</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="master-password" placeholder="password" />
                    <label htmlFor="master-password"><TextTranslate text='Şifrə' /> *</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="master-password-2" placeholder="password-2" />
                    <label htmlFor="master-password-2"><TextTranslate text='Şifrənizi təsdiq edin' /> *</label>
                </div>
                <button className='submit-button' type="submit"><TextTranslate text='Qeydiyyat' /></button>
            </form>
        </div>
    )
}

export default MasterForms
