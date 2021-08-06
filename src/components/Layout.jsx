import React from 'react'

// Componentes
import Header from './Header'
import Contact from './Contact'
import Footer from './Footer'

// Styles
import "../assets/css/styles.css"


const Layout = ({ children }) => (
    <div className="App">
        <Header />

        { children }

        <Contact />
        <Footer />
    </div>
)

export default Layout