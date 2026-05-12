import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const input = {
  display: 'block', width: '100%', marginTop: '8px',
  padding: '12px 16px', borderRadius: '12px',
  border: '1.5px solid #DDD8D0', background: '#FEFEFE',
  fontSize: '14px', color: '#0A1628', outline: 'none',
  fontFamily: 'DM Sans, sans-serif', transition: 'border-color 0.2s',
};

const SignUpPage = () => {
  return (
    <>
      <div style={{ fontSize: '10px', color: '#C9962A', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '10px' }}>
        Join BulldogEx
      </div>
      <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '34px', color: '#0A1628', marginBottom: '8px', lineHeight: '1.2' }}>
        Create Account
      </h1>
      <p style={{ fontSize: '14px', color: 'rgba(10,22,40,0.5)', marginBottom: '32px', lineHeight: '1.6' }}>
        Sign up to order campus essentials and track your pickups.
      </p>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div>
            <label style={{ fontSize: '12px', fontWeight: 600, color: '#0A1628', letterSpacing: '0.04em' }}>First Name</label>
            <input type="text" placeholder="Juan" autoComplete="given-name" style={input}
              onFocus={e => e.target.style.borderColor = '#C9962A'}
              onBlur={e => e.target.style.borderColor = '#DDD8D0'}
            />
          </div>
          <div>
            <label style={{ fontSize: '12px', fontWeight: 600, color: '#0A1628', letterSpacing: '0.04em' }}>Last Name</label>
            <input type="text" placeholder="dela Cruz" autoComplete="family-name" style={input}
              onFocus={e => e.target.style.borderColor = '#C9962A'}
              onBlur={e => e.target.style.borderColor = '#DDD8D0'}
            />
          </div>
        </div>

        <div>
          <label style={{ fontSize: '12px', fontWeight: 600, color: '#0A1628', letterSpacing: '0.04em' }}>Email</label>
          <input type="email" placeholder="student@nu.edu.ph" autoComplete="email" style={input}
            onFocus={e => e.target.style.borderColor = '#C9962A'}
            onBlur={e => e.target.style.borderColor = '#DDD8D0'}
          />
        </div>

        <div>
          <label style={{ fontSize: '12px', fontWeight: 600, color: '#0A1628', letterSpacing: '0.04em' }}>Password</label>
          <input type="password" placeholder="Min. 8 characters" autoComplete="new-password" style={input}
            onFocus={e => e.target.style.borderColor = '#C9962A'}
            onBlur={e => e.target.style.borderColor = '#DDD8D0'}
          />
          <p style={{ fontSize: '11px', color: 'rgba(10,22,40,0.4)', marginTop: '6px' }}>Use letters, numbers, and symbols.</p>
        </div>

        <Button type="submit" variant="primary" style={{ padding: '13px', fontSize: '12px', borderRadius: '12px', marginTop: '4px' }}>
          Create Account
        </Button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <Button type="button" variant="secondary" style={{ padding: '11px', fontSize: '11px', borderRadius: '10px' }}>Google</Button>
          <Button type="button" variant="secondary" style={{ padding: '11px', fontSize: '11px', borderRadius: '10px' }}>Apple</Button>
        </div>
      </form>

      <p style={{ marginTop: '28px', fontSize: '13px', color: 'rgba(10,22,40,0.5)', textAlign: 'center' }}>
        Already have an account?{' '}
        <Link to="/auth/signin" style={{ color: '#C9962A', fontWeight: 700, textDecoration: 'none' }}>Sign In</Link>
      </p>
    </>
  );
};

export default SignUpPage;