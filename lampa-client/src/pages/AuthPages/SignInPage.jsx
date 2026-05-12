import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const input = {
  display: 'block', width: '100%', marginTop: '8px',
  padding: '12px 16px', borderRadius: '12px',
  border: '1.5px solid #DDD8D0', background: '#FEFEFE',
  fontSize: '14px', color: '#0A1628', outline: 'none',
  fontFamily: 'DM Sans, sans-serif', transition: 'border-color 0.2s',
};

const SignInPage = () => {
  return (
    <>
      <div style={{ fontSize: '10px', color: '#C9962A', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '10px' }}>
        Welcome back
      </div>
      <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '34px', color: '#0A1628', marginBottom: '8px', lineHeight: '1.2' }}>
        Sign In
      </h1>
      <p style={{ fontSize: '14px', color: 'rgba(10,22,40,0.5)', marginBottom: '32px', lineHeight: '1.6' }}>
        Access your account to manage orders and pickups.
      </p>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <div>
          <label style={{ fontSize: '12px', fontWeight: 600, color: '#0A1628', letterSpacing: '0.04em' }}>Email Address</label>
          <input type="email" placeholder="student@nu.edu.ph" autoComplete="email" style={input}
            onFocus={e => e.target.style.borderColor = '#C9962A'}
            onBlur={e => e.target.style.borderColor = '#DDD8D0'}
          />
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label style={{ fontSize: '12px', fontWeight: 600, color: '#0A1628', letterSpacing: '0.04em' }}>Password</label>
            <button type="button" style={{ fontSize: '12px', color: '#C9962A', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>
              Forgot password?
            </button>
          </div>
          <input type="password" placeholder="Enter your password" autoComplete="current-password" style={input}
            onFocus={e => e.target.style.borderColor = '#C9962A'}
            onBlur={e => e.target.style.borderColor = '#DDD8D0'}
          />
        </div>

        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <input type="checkbox" style={{ accentColor: '#C9962A', width: '15px', height: '15px' }} />
          <span style={{ fontSize: '13px', color: 'rgba(10,22,40,0.55)' }}>Remember me</span>
        </label>

        <Button type="submit" variant="primary" style={{ padding: '13px', fontSize: '12px', borderRadius: '12px', marginTop: '4px' }}>
          Sign In
        </Button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <Button type="button" variant="secondary" style={{ padding: '11px', fontSize: '11px', borderRadius: '10px' }}>Google</Button>
          <Button type="button" variant="secondary" style={{ padding: '11px', fontSize: '11px', borderRadius: '10px' }}>Apple</Button>
        </div>
      </form>

      <p style={{ marginTop: '28px', fontSize: '13px', color: 'rgba(10,22,40,0.5)', textAlign: 'center' }}>
        Don't have an account?{' '}
        <Link to="/auth/signup" style={{ color: '#C9962A', fontWeight: 700, textDecoration: 'none' }}>Sign Up</Link>
      </p>
    </>
  );
};

export default SignInPage;