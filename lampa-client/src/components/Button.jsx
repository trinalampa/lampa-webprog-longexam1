import { Link } from 'react-router-dom';

const styles = {
  primary: {
    background: 'linear-gradient(135deg, #C9962A, #F5C842)',
    color: '#0A1628',
    border: 'none',
  },
  secondary: {
    background: 'transparent',
    color: '#0A1628',
    border: '1.5px solid #0A1628',
  },
  ghost: {
    background: 'transparent',
    color: 'white',
    border: '1.5px solid rgba(255,255,255,0.4)',
  },
  outline: {
    background: 'transparent',
    color: '#C9962A',
    border: '1.5px solid #C9962A',
  },
};

const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '9px 22px',
  borderRadius: '100px',
  fontSize: '11px',
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'opacity 0.2s, transform 0.15s',
  fontFamily: 'DM Sans, sans-serif',
};

const Button = ({ children, to, type = 'button', variant = 'secondary', className = '', style: extraStyle = {} }) => {
  const combined = { ...base, ...styles[variant] ?? styles.secondary, ...extraStyle };

  const handlers = {
    onMouseEnter: e => { e.currentTarget.style.opacity = '0.82'; e.currentTarget.style.transform = 'translateY(-1px)'; },
    onMouseLeave: e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; },
  };

  if (to) return <Link to={to} style={combined} className={className} {...handlers}>{children}</Link>;
  return <button type={type} style={combined} className={className} {...handlers}>{children}</button>;
};

export default Button;