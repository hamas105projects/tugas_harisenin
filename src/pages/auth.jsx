import { useState } from 'react';
import LogoLarge from '../components/logoBig';
import './style/auth.css';
import './style/root.css';
import loginBg from '../assets/header/login.jpg';
import registerBg from '../assets/header/register.jpg';
import googleIcon from '../assets/header/google-icon.png';
import { useNavigate } from 'react-router-dom';



const Auth = () => {
  const [mode, setMode] = useState('login'); // 'login' atau 'register'
  const [showPasswordMain, setShowPasswordMain] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const togglePasswordMain = () => setShowPasswordMain(!showPasswordMain);
  const togglePasswordConfirm = () => setShowPasswordConfirm(!showPasswordConfirm);

  const loginStyle = {
    background: `url(${loginBg}) no-repeat center center fixed`,
    backgroundSize: 'cover',
  };

  const registerStyle = {
    background: `url(${registerBg}) no-repeat center center fixed`,
    backgroundSize: 'cover',
  };
  const navigate = useNavigate();
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  const validUser = { username: 'admin', password: '123456' };
  if (mode === 'login') {
    if (username === validUser.username && password === validUser.password) {
      navigate('/');
    } else {
      setError('Username atau password salah');
    }
  }
};


  return (
    <>
    <div className='auth-wrapper' style={mode === 'login' ? loginStyle : registerStyle}></div>
    <section >

      <div className="container">
        <div className="form-box">
          <div className="logo-wrapper">
            <LogoLarge />
          </div>

          <h2>{mode === 'login' ? 'Masuk' : 'Daftar'}</h2>
          <p className="welcome">Selamat datang {mode === 'login' ? 'kembali' : ''}!</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input 
            type="text" 
            id="username" 
            placeholder="Masukkan username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="password">{mode === 'login' ? 'Kata Sandi' : 'Buat Kata Sandi'}</label>
            <div className="input-group">
              <input
                type={showPasswordMain ? 'text' : 'password'}
                id="password"
                placeholder="Masukkan kata sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="toggle-password" onClick={togglePasswordMain}>
                <i className="fas fa-eye-slash" style={{ display: showPasswordMain ? 'block' : 'none' }} />
                <i className="fas fa-eye" style={{ display: showPasswordMain ? 'none' : 'block' }} />
              </span>
            </div>

            {mode === 'register' && (
              <>
                <label htmlFor="confirm">Konfirmasi Kata Sandi</label>
                <div className="input-group">
                  <input
                    type={showPasswordConfirm ? 'text' : 'password'}
                    id="confirm"
                    placeholder="Masukkan ulang kata sandi"
                  />
                  <span className="toggle-password" onClick={togglePasswordConfirm}>
                    <i className="fas fa-eye-slash" style={{ display: showPasswordConfirm ? 'block' : 'none' }} />
                    <i className="fas fa-eye" style={{ display: showPasswordConfirm ? 'none' : 'block' }} />
                  </span>
                </div>
              </>
            )}
            
          {error && <p className="error">{error}</p>}

            <button type="submit" className="btn-primary">
              {mode === 'login' ? 'Masuk' : 'Daftar'}
            </button>
          </form>

          <div className="login-utility">
            <p className="login-link">
              {mode === 'login' ? (
                <>
                  Belum punya akun? <span onClick={() => setMode('register')} style={{  cursor: 'pointer' }}><b>Daftar</b></span>
                </>
              ) : (
                <>
                  Sudah punya akun? <span onClick={() => setMode('login')} style={{ cursor: 'pointer' }}><b>Masuk</b></span>
                </>
              )}
            </p>
            {mode === 'login' && (
              <div className="forget-link">
                <a href="/kosong">Lupa kata sandi?</a>
              </div>
            )}
          </div>

          <div className="divider">atau</div>
          <button className="btn-google">
            <img src={googleIcon} alt="Google" className="google-icon" />
            {mode === 'login' ? 'Masuk' : 'Daftar'} dengan Google
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default Auth;
