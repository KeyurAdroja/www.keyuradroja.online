import React from 'react';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../navbar1.css';
function Navbarnew() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <nav className='navigation' style={{ padding: '10px' }}>
        <a href='/' className='brand-name'>
          Keyur<b> ADROJA</b>
        </a>
        <button
          className='hamburger'
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='white'
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
              clipRule='evenodd'
            />
          </svg>
        </button>

        <div className='navigation-menu'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='About'>About</Link>
            </li>
            <li>
              <Link to='Portfolio'>Portfolio</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbarnew;
