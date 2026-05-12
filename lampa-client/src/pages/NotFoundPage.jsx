import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#0A1628', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
      <div style={{ textAlign: 'center', maxWidth: '480px' }}>
        <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: '120px', color: 'rgba(201,150,42,0.15)', lineHeight: 1, marginBottom: '-20px' }}>
          404
        </div>
        <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: '32px', color: 'white', marginBottom: '14px' }}>
          Page Not Found
        </div>
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: '1.7', marginBottom: '36px' }}>
          This page doesn't exist or was moved. Head back to the shop to find what you're looking for.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <Button to="/" variant="primary" style={{ padding: '12px 28px' }}>Back Home</Button>
          <Button to="/products" variant="ghost" style={{ padding: '12px 28px' }}>View Products</Button>
        </div>

        <div style={{ marginTop: '56px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', maxWidth: '360px', margin: '56px auto 0' }}>
          {[['/products', '🛍️', 'Shop Products'], ['/about', 'ℹ️', 'About Store'], ['/auth/signin', '🔑', 'Sign In'], ['/auth/signup', '✨', 'Create Account']].map(([to, emoji, label]) => (
            <Link key={to} to={to} style={{
              textDecoration: 'none', padding: '18px', borderRadius: '14px',
              border: '1px solid rgba(201,150,42,0.2)', background: 'rgba(255,255,255,0.03)',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,150,42,0.08)'; e.currentTarget.style.borderColor = 'rgba(201,150,42,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(201,150,42,0.2)'; }}
            >
              <div style={{ fontSize: '24px', marginBottom: '6px' }}>{emoji}</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>{label}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;