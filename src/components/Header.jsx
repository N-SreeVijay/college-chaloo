import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onLoginClick, onContactClick }) => {
  return (
    <>
      <div className="header-bg-shape"></div>
      <header>
        <div className="brand-area">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="brand">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2 .715V17a1 1 0 001 1z"></path>
              </svg>
              <span>EduMon</span>
            </div>
          </Link>
        </div>

        <nav>
          <ul>
            <li className="header-search">
              <svg fill="none" width="18" height="18" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" placeholder="Search colleges, exams..." />
            </li>

            <li className="dropdown">
              <a href="#">Colleges ▾</a>
              <div className="dropdown-content">
                <a href="/course?type=btech">Engineering (B.Tech)</a>
                <a href="/course?type=mba">Management (MBA)</a>
                <a href="/course?type=mbbs">Medical (MBBS)</a>
                <a href="/course?type=pharma">Pharmacy</a>
                <a href="/course?type=arts">Arts & Design</a>
              </div>
            </li>
            <li><a href="#">Exams</a></li>
            <li><a href="#categories">Reviews</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onContactClick(); }}>Contact Us</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="icon-btn">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
            </svg>
          </button>
          <button className="login-btn-header" onClick={() => onLoginClick('login')}>Login / Register</button>
        </div>
      </header>
    </>
  );
};

export default Header;
