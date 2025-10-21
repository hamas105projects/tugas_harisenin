import logoChill from '../assets/header/logo.png';
import './style/footer.css';

const Footer = () => {
  return (
    <footer className="chill-footer" role="contentinfo" aria-label="Situs CHILL">
      <div className="footer-inner">
        {/* Kiri: Logo dan copyright */}
        <div className="footer-brand">
          <a href="/" className="logo-link" aria-label="Beranda">
            <img src={logoChill} alt="CHILL" className="logo-footer" loading="lazy" />
            <strong>CHILL</strong>
          </a>
          <p className="copyright">©2023 CHILL All Rights Reserved</p>
        </div>

        {/* Tengah: Genre */}
        <nav className="footer-col footer-genre" aria-label="Genre">
          <h3 className="footer-title">Genre</h3>
          <ul className="footer-list">
            {[
              'aksi', 'anak-anak', 'anime', 'britania', 'drama',
              'fantasi-ilmiah-fantasi', 'kejahatan', 'kdrama', 'komedi',
              'petualangan', 'perang', 'remnants', 'sains-alam', 'thriller'
            ].map((genre) => (
              <li key={genre}>
                <a href={`/genre/${genre}`}>{genre.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Kanan: Bantuan */}
        <nav className="footer-col footer-help" aria-label="Bantuan">
          <h3 className="footer-title">Bantuan</h3>
          <ul className="footer-list">
            {[
              { href: '/faq', label: 'FAQ' },
              { href: '/kontak', label: 'Kontak Kami' },
              { href: '/privasi', label: 'Privasi' },
              { href: '/syarat-ketentuan', label: 'Syarat & Ketentuan' }
            ].map(({ href, label }) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile ≤ 500px: Accordion tanpa JS */}
      <div className="footer-mobile" aria-label="Navigasi footer">
        <div className="mobile-brand">
          <a href="/" className="logo-link" aria-label="Beranda">
            <img src={logoChill} alt="CHILL" className="logo-footer" loading="lazy" />
            <strong>CHILL</strong>
          </a>
          <p className="copyright">©2023 CHILL All Rights Reserved</p>
        </div>

        {/* Genre Accordion */}
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
                <a href={`/genre/${genre}`}>{genre.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</a>
              </li>
            ))}
          </ul>
        </details>

        {/* Bantuan Accordion */}
        <details>
          <summary>
            <span className="summary-text">Bantuan</span>
            <i className="fa-solid fa-angle-right"></i>
          </summary>
          <ul className="acc-list">
            {[
              { href: '/faq', label: 'FAQ' },
              { href: '/kontak', label: 'Kontak Kami' },
              { href: '/privasi', label: 'Privasi' },
              { href: '/syarat-ketentuan', label: 'Syarat & Ketentuan' }
            ].map(({ href, label }) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </details>
      </div>
    </footer>
  );
};

export default Footer;