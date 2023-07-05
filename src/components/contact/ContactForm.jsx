import React from 'react'
import TextTranslate from '../../translate/TextTranslate'

function ContactForm() {
    return (
        <form className='form-general'>
            <div className="info">
                <TextTranslate text='Bütün sual və müraciətlərinizi rahatlıqla bizə ünvanlaya bilərsiniz. Ən qısa zamanda və böyük məmnuniyyətlə cavablandıracağıq.'/>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" id="contact-fullname" placeholder="fullname" />
                <label htmlFor="contact-fullname"><TextTranslate text='Ad, Soyad' /> *</label>
            </div>
            <div className="form-floating">
                <input type="email" className="form-control" id="contact-email" placeholder="email" />
                <label htmlFor="contact-email"><TextTranslate text='E-poçt' /> *</label>
            </div>
            <div className="form-floating mt-3">
                <textarea id='contact-message' className="form-control" placeholder='contact-message'></textarea >
                <label htmlFor="contact-message"><TextTranslate text='Mesajınız' /></label>
            </div>
            <button className='submit-button' type="submit">Göndər</button>
        </form>
    )
}

export default ContactForm
