import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Shop', to: '/products' },
];

const NavBar = () => {
  return (
    <header style={{
      backgroundColor: '#0A1628',
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      borderBottom: '1px solid rgba(201,150,42,0.25)',
    }}>
      <div style={{ height: '3px', background: 'linear-gradient(90deg, #C9962A 0%, #F5C842 50%, #C9962A 100%)' }} />

      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '0 32px', height: '68px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>

        {/* LEFT — Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '11px', textDecoration: 'none' }}>
          <div style={{
            width: '40px', height: '40px', borderRadius: '50%',
            border: '2px solid #C9962A', background: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <img src={logo} alt="NU" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
          </div>
          <div>
            <div style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '18px', fontWeight: 800,
              color: 'white', lineHeight: 1.1,
            }}>BulldogEx</div>
            <div style={{
              fontSize: '9px', color: '#C9962A',
              fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase',
            }}>National University</div>
          </div>
        </Link>

        {/* RIGHT — Nav + Sign In */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2px', marginRight: '16px' }}>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                style={({ isActive }) => ({
                  padding: '8px 18px', borderRadius: '8px',
                  fontSize: '13px', fontWeight: isActive ? 600 : 400,
                  letterSpacing: '0.02em', textDecoration: 'none', transition: 'all 0.15s',
                  color: isActive ? '#F5C842' : 'rgba(255,255,255,0.65)',
                  borderBottom: isActive ? '2px solid #F5C842' : '2px solid transparent',
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/auth/signin"
            style={{
              padding: '9px 24px', borderRadius: '8px',
              fontSize: '13px', fontWeight: 600, letterSpacing: '0.03em',
              textDecoration: 'none',
              background: 'linear-gradient(135deg, #C9962A, #F5C842)',
              color: '#0A1628', transition: 'opacity 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;