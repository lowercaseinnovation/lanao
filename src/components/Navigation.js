import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <div>
                <span className="Lanao-Logo">lanao</span>
                <p className="Navigation-Sub-Header">
                <span className="Lowercase-Logo">made with purpose by: lowercase innovation</span>
                </p>
            </div>
            <div>
                <ul>
                    <li><a href="/">Browse</a></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/support">Support</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;