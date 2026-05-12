import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0A1628', borderTop: '1px solid rgba(201,150,42,0.3)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '48px', paddingBottom: '48px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>

          <div>
            <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: '24px', color: 'white', marginBottom: '8px' }}>BulldogEx Shop</div>
            <div style={{ fontSize: '10px', color: '#C9962A', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>National University</div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: '1.7', maxWidth: '240px' }}>
              Your campus marketplace for uniforms, essentials, and NU merch. Fast. Simple. Bulldog-approved.
            </p>
          </div>

          <div>
            <div style={{ fontSize: '10px', color: '#C9962A', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '16px' }}>Shop</div>
            {[['/', 'Home'], ['/products', 'All Products'], ['/about', 'About Store']].map(([to, label]) => (
              <Link key={to} to={to} style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: '10px', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'white'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
              >{label}</Link>
            ))}
          </div>

          <div>
            <div style={{ fontSize: '10px', color: '#C9962A', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '16px' }}>Account</div>
            {[['/auth/signin', 'Sign In'], ['/auth/signup', 'Create Account']].map(([to, label]) => (
              <Link key={to} to={to} style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: '10px', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'white'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
              >{label}</Link>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '24px' }}>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>© 2026 BulldogEx Shop · National University Philippines</p>
          <p style={{ fontSize: '11px', color: '#C9962A', fontWeight: 600, letterSpacing: '0.12em' }}>GO BULLDOGS </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;