import React from 'react';
import "./index.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        <div>Logo</div>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header