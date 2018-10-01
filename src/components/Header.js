import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>This programmer's journey</h1>
        <p>What do I say here?</p>
    </header>
)

export default Header
