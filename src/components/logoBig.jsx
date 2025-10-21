import logo from '../assets/header/logo.png';

const LogoLarge = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%', // biar fleksibel ikut wadah luar
    padding: 0,
  };

  const imageStyle = {
    height: 'clamp(20px, 5vw, 36px)', // kecil dan responsif
    width: 'auto',
    flexShrink: 0,
  };

  const textStyle = {
    fontFamily: "'Londrina Solid', cursive",
    fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', // responsif dan tidak terlalu besar
    color: '#fff',
    lineHeight: 1.1,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    flexShrink: 1,
  };

  return (
    <div style={containerStyle}>
      <img src={logo} alt="Logo" style={imageStyle} />
      <span style={textStyle}><strong>CHILL</strong></span>
    </div>
  );
};

export default LogoLarge;