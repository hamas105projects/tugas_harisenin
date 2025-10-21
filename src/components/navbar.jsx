import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // wajib!
import profile from '../assets/header/profile.jpg';
import LogoLarge from "./logoBig";
import './style/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="header">
        <div className='logo-dekstop'>
        <LogoLarge />
        </div>
        <div className="menu">
          <Link to="/series">Series</Link>
          <Link to="/film">Film</Link>
          <Link to="/daftar-saya">Daftar Saya</Link>
        </div>
      </div>
      <div className="profile-dropdown" ref={dropdownRef}>
        <img
          src={profile}
          alt="Profil"
          className="profile-icon"
          id="dropdownBtn"
          onClick={toggleDropdown}
          style={{ cursor: 'pointer' }}
        />
        <div
          className="dropdown-content"
          id="dropdownMenu"
          style={{ display: isOpen ? 'block' : 'none' }}
        >
          <Link to="/profil" style={{ color: '#3254ff' }}>
            <i className="fa-solid fa-user" style={{ marginRight: '8px' }}></i>Profil Saya
          </Link>
          <Link to="/ubah-premium">&#9733; Ubah Premium</Link>
          <Link to="/login">
            <i className="fa fa-sign-out" aria-hidden="true" style={{ marginRight: '8px' }}></i>Keluar
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;