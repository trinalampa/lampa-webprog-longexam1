import { Outlet, Link } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const AuthLayout = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>

      <div style={{
        background: 'linear-gradient(160deg, #0A1628 0%, #122040 100%)',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        alignItems: 'center', padding: '60px', position: 'relative', overflow: 'hidden',
      }}>
        {[280, 420, 560].map((size, i) => (
          <div key={i} style={{
            position: 'absolute', width: size, height: size,
            border: '1px solid rgba(201,150,42,0.12)',
            borderRadius: '50%', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
          }} />
        ))}

        <div style={{
          position: 'absolute', top: 0, right: 0, width: '3px', height: '100%',
          background: 'linear-gradient(180deg, transparent, #C9962A 40%, #F5C842 60%, transparent)',
        }} />

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '340px' }}>
          <div style={{
            width: '72px', height: '72px', borderRadius: '50%',
            border: '2px solid #C9962A', background: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 24px',
          }}>
            <img src={logo} alt="NU" style={{ width: '52px', height: '52px', objectFit: 'contain' }} />
          </div>

          <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: '32px', color: 'white', lineHeight: '1.2', marginBottom: '8px' }}>
            BulldogEx Shop
          </div>
          <div style={{ fontSize: '10px', color: '#C9962A', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '28px' }}>
            National University
          </div>

          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.7' }}>
            Your official campus marketplace. Shop uniforms, essentials, and NU merch — all in one place.
          </p>

          <div style={{
            marginTop: '36px', padding: '20px 28px',
            background: 'rgba(201,150,42,0.1)', borderRadius: '14px',
            border: '1px solid rgba(201,150,42,0.2)',
          }}>
            {[['8+', 'Products'], ['24', 'Orders Served'], ['3', 'Pickup Slots']].map(([num, label]) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>{label}</span>
                <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: '16px', color: '#F5C842' }}>{num}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: '#F9F7F4', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 48px' }}>
        <div style={{ width: '100%', maxWidth: '400px' }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px' }}>
            <span style={{ fontSize: '12px', color: '#C9962A', fontWeight: 600, letterSpacing: '0.1em' }}>← Back to shop</span>
          </Link>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;