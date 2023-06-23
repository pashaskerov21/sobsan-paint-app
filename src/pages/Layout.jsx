import React, { useState } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Layout({ children }) {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
    return (
        <div className={theme === 'dark' ? 'app dark' : 'app'}>
            <ToastContainer position="bottom-right" autoClose={3000} />
            <Header theme={theme} toggleTheme={toggleTheme} />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
