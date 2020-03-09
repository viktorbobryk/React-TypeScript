import React from 'react'

export const Navbar: React.FC = ()=> (
    <nav>
        <div className="nav-wrapper purple darken-2 px1">
            <a href="/" className="brand-logo">react + TypeScript</a>
            <ul className="right hide-on-med-and-down">
                <li><a href="/">To Do list</a></li>
                <li><a href="/">information</a></li>
            </ul>
        </div>
    </nav>
);