import React from 'react'
import logo from '../../logo.png'
import './Header.css'

export const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logotype" />
                <span className="App-name">GitSearch</span>          
        </header>
    )
}
