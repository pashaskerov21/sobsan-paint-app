import React, { useState } from 'react'
import arrow_down from '../../image/icon/arrow-down.svg'
import { useDispatch } from 'react-redux';
import { setLanguage } from '../../redux/actions/LanguageAction';

function Language() {
    const [langMenuActive, setLangMenuActive] = useState(false)
    const toggleLangMenu = () => {
        setLangMenuActive(!langMenuActive)
    }
    const openLangMenu = () => {
        setLangMenuActive(true);
    }
    const closeLangMenu = () => {
        setLangMenuActive(false)
    }
    const [activeLang, setActiveLang] = useState('az');
    const dispatch = useDispatch();
    const handleLanguageChange = (language) => {
        setActiveLang(language)
        dispatch(setLanguage(language));
    };
    return (
        <div className='language-dropdown item'>
            <button className='active-lang' onClick={toggleLangMenu} onMouseMove={openLangMenu} onMouseLeave={closeLangMenu}>
                <span>{activeLang}</span>
                <img src={arrow_down} alt="arrow-icon" />
            </button>
            <div className={langMenuActive ? 'lang-menu' : 'lang-menu d-none'} onMouseMove={openLangMenu} onMouseLeave={closeLangMenu}>
                <button className={activeLang === 'az' ? 'd-none' : null} onClick={() => handleLanguageChange('az')}>Az</button>
                <button className={activeLang === 'en' ? 'd-none' : null} onClick={() => handleLanguageChange('en')}>En</button>
                <button className={activeLang === 'ru' ? 'd-none' : null} onClick={() => handleLanguageChange('ru')}>Ru</button>
            </div>
        </div>
    )
}

export default Language
