import { Link } from 'react-router-dom';
import logoSmall from '../assets/header/logo.png';
import LogoLarge from 'LogoLarge';
import 'layout.css';

const Layout = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="header">
          <LogoLarge className="logo-desktop" />
          <img src={logoSmall} alt="CHILL Logo Kecil" className="logo-mobile" />
          <div className="menu">
            <Link to="#">Series</Link>
            <Link to="#">Film</Link>
            <Link to="#">Daftar Saya</Link>
          </div>
        </div>
        <div className="profile-dropdown">
          <img src={logoSmall} alt="Profil" className="profile-icon" id="dropdownBtn" />
          <div className="dropdown-content" id="dropdownMenu">
            <Link to="#" style={{ color: '#3254ff' }}>
              <i className="fa-solid fa-user" style={{ marginRight: '8px' }}></i>Profil Saya
            </Link>
            <Link to="#">&#9733; Ubah Premium</Link>
            <Link to="/login">
              <i className="fa fa-sign-out" aria-hidden="true" style={{ marginRight: '8px' }}></i>Keluar
            </Link>
          </div>
        </div>
      </nav>

      {/* Footer */}
      <footer className="chill-footer" role="contentinfo" aria-label="Situs CHILL">
        <div className="footer-inner">
          {/* Kiri */}
          <div className="footer-brand">
            <Link to="/" className="logo-link" aria-label="Beranda">
              <LogoLarge className="logo-footer" />
            </Link>
            <p className="copyright">©2023 CHILL All Rights Reserved</p>
          </div>

          {/* Tengah */}
          <nav className="footer-col footer-genre" aria-label="Genre">
            <h3 className="footer-title">Genre</h3>
            <ul className="footer-list">
              {[
                'aksi', 'anak-anak', 'anime', 'britania', 'drama',
                'fantasi-ilmiah-fantasi', 'kejahatan', 'kdrama', 'komedi',
                'petualangan', 'perang', 'remnants', 'sains-alam', 'thriller'
              ].map((genre) => (
                <li key={genre}>
                  <Link to={`/genre/${genre}`}>{genre.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kanan */}
          <nav className="footer-col footer-help" aria-label="Bantuan">
            <h3 className="footer-title">Bantuan</h3>
            <ul className="footer-list">
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/kontak">Kontak Kami</Link></li>
              <li><Link to="/privasi">Privasi</Link></li>
              <li><Link to="/syarat-ketentuan">Syarat & Ketentuan</Link></li>
            </ul>
          </nav>
        </div>

        {/* Mobile Footer */}
        <div className="footer-mobile" aria-label="Navigasi footer">
          <div className="mobile-brand">
            <Link to="/" className="logo-link" aria-label="Beranda">
              <LogoLarge className="logo-footer" />
            </Link>
            <p className="copyright">©2023 CHILL All Rights Reserved</p>
          </div>

          {/* Accordion Genre */}
          <details>
            <summary>
              <span className="summary-text">Genre</span>
              <i className="fa-solid fa-angle-right"></i>
            </summary>
            <ul className="acc-list">
              {[
                'aksi', 'anak-anak', 'anime', 'britania', 'drama',
                'fantasi-ilmiah-fantasi', 'kejahatan', 'kdrama', 'komedi',
                'petualangan', 'perang', 'remnants', 'sains-alam', 'thriller'
              ].map((genre) => (
                <li key={genre}>
                  <Link to={`/genre/${genre}`}>{genre.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</Link>
                </li>
              ))}
            </ul>
          </details>

          {/* Accordion Bantuan */}
          <details>
            <summary>
              <span className="summary-text">Bantuan</span>
              <i className="fa-solid fa-angle-right"></i>
            </summary>
            <ul className="acc-list">
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/kontak">Kontak Kami</Link></li>
              <li><Link to="/privasi">Privasi</Link></li>
              <li><Link to="/syarat-ketentuan">Syarat & Ketentuan</Link></li>
            </ul>
          </details>
        </div>
      </footer>
    </>
  );
};

export default Layout;