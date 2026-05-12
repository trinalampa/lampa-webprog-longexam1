import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import logo from '../../assets/img/nubdexchange_logo.png';
import banner from '../../assets/img/nu_bulldogex_banner.jpg';

const values = [
  { title: 'Student-First',    desc: 'Every product is chosen with NU students in mind — affordable, practical, and campus-ready.' },
  { title: 'Quality Assured',  desc: 'All items are official NU merchandise, sourced and verified directly through the university.' },
  { title: 'Fast Pickup',      desc: 'Order online and pick up on campus. No waiting, no hassle — just show your confirmation.' },
  { title: 'Secure Ordering',  desc: 'Your account and order details are protected. Safe checkout every time.' },
];

const steps = [
  { num: '01', title: 'Browse the Shop',     desc: 'Explore products by category or search for what you need.' },
  { num: '02', title: 'Add to Cart',         desc: 'Select your size or variant and add items to your order.' },
  { num: '03', title: 'Checkout',            desc: 'Review your order and confirm your pickup schedule.' },
  { num: '04', title: 'Pick Up on Campus',   desc: 'Collect your order at the designated NU pickup counter.' },
];

const AboutPage = () => (
  <div>

    {/* HERO */}
    <section style={{ position: 'relative', height: '360px', overflow: 'hidden' }}>
      <img src={banner} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(10,22,40,0.93) 45%, rgba(10,22,40,0.4) 100%)' }} />
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: 'linear-gradient(180deg, #C9962A, #F5C842 50%, #C9962A)' }} />

      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 52px' }}>
          <div style={{ fontSize: '11px', color: '#C9962A', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '14px' }}>About Us</div>
          <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '52px', color: 'white', lineHeight: 1.1, marginBottom: '16px' }}>
            The Official NU<br />Campus Store
          </div>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', maxWidth: '420px', lineHeight: 1.75 }}>
            BulldogEx Shop is the go-to marketplace for National University students — uniforms, essentials, merch, and more.
          </p>
        </div>
      </div>
    </section>

    {/* MISSION */}
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 32px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>

        {/* Image placeholder — replace with <img src={photo} style={{width:'100%',height:'100%',objectFit:'cover'}} /> */}
        <div style={{
          height: '420px', borderRadius: '16px', overflow: 'hidden',
          background: '#F0ECE4', border: '1px solid #E8E2D9',
          display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
        }}>
          <div style={{ textAlign: 'center' }}>
            <img src={logo} alt="" style={{ width: '96px', height: '96px', objectFit: 'contain', opacity: 0.35 }} />
            <div style={{ marginTop: '12px', fontSize: '12px', color: '#B0A898', letterSpacing: '0.08em' }}>Image Placeholder</div>
          </div>
          <div style={{
            position: 'absolute', bottom: '20px', left: '20px',
            background: '#0A1628', color: '#C9962A',
            fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em',
            padding: '5px 12px', borderRadius: '5px', textTransform: 'uppercase',
          }}>NU Official</div>
        </div>

        <div>
          <div style={{ fontSize: '11px', color: '#C9962A', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '14px' }}>Our Mission</div>
          <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '38px', color: '#0A1628', lineHeight: 1.15, marginBottom: '20px' }}>
            Built for NU Students, by NU
          </div>
          <p style={{ fontSize: '15px', color: 'rgba(10,22,40,0.6)', lineHeight: 1.8, marginBottom: '16px' }}>
            BulldogEx Shop was created to make campus life easier. We know students are busy — so we put everything they need in one simple, reliable store.
          </p>
          <p style={{ fontSize: '15px', color: 'rgba(10,22,40,0.6)', lineHeight: 1.8, marginBottom: '32px' }}>
            From ID lanyards to hoodies, care packs to desk organizers — every item is curated specifically for National University life.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Button to="/products" variant="primary" style={{ padding: '12px 28px', fontSize: '13px' }}>Browse Products</Button>
            <Button to="/auth/signup" variant="secondary" style={{ padding: '12px 28px', fontSize: '13px' }}>Create Account</Button>
          </div>
        </div>
      </div>
    </section>

    {/* STATS */}
    <div style={{ background: '#0A1628', borderTop: '1px solid rgba(201,150,42,0.15)', borderBottom: '1px solid rgba(201,150,42,0.15)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex' }}>
        {[['8+', 'Products'], ['6', 'Categories'], ['24+', 'Orders Served'], ['3', 'Pickup Slots']].map(([num, label], i) => (
          <div key={label} style={{ flex: 1, padding: '32px 0', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
            <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '36px', color: '#F5C842' }}>{num}</div>
            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '4px' }}>{label}</div>
          </div>
        ))}
      </div>
    </div>

    {/* VALUES */}
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 32px' }}>
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div style={{ fontSize: '11px', color: '#C9962A', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '10px' }}>What We Stand For</div>
        <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '36px', color: '#0A1628', lineHeight: 1.15 }}>Our Values</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {values.map((v, i) => (
          <div key={i} style={{ padding: '28px 24px', borderRadius: '14px', border: '1px solid #E8E2D9', background: 'white', transition: 'box-shadow 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 32px rgba(10,22,40,0.08)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'linear-gradient(135deg, #C9962A, #F5C842)', marginBottom: '16px' }} />
            <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '18px', color: '#0A1628', marginBottom: '10px' }}>{v.title}</div>
            <p style={{ fontSize: '13px', color: 'rgba(10,22,40,0.55)', lineHeight: 1.75 }}>{v.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* HOW IT WORKS */}
    <section style={{ background: '#0A1628', padding: '80px 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ fontSize: '11px', color: '#C9962A', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '10px' }}>Simple Process</div>
          <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '36px', color: 'white', lineHeight: 1.15 }}>How It Works</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {steps.map((s, i) => (
            <div key={i} style={{ padding: '32px 24px', borderRadius: '14px', border: '1px solid rgba(201,150,42,0.18)', background: 'rgba(255,255,255,0.03)', position: 'relative' }}>
              {i < steps.length - 1 && (
                <div style={{ position: 'absolute', top: '44px', right: '-10px', width: '20px', height: '1px', background: 'rgba(201,150,42,0.3)' }} />
              )}
              <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '36px', color: 'rgba(201,150,42,0.25)', lineHeight: 1, marginBottom: '16px' }}>{s.num}</div>
              <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '17px', color: 'white', marginBottom: '10px' }}>{s.title}</div>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section style={{ background: 'linear-gradient(135deg, #C9962A 0%, #F5C842 100%)', padding: '72px 32px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '38px', color: '#0A1628', lineHeight: 1.15, marginBottom: '14px' }}>Ready to Shop?</div>
        <p style={{ fontSize: '15px', color: 'rgba(10,22,40,0.6)', lineHeight: 1.75, marginBottom: '32px' }}>
          Join hundreds of NU students already using BulldogEx Shop to get their campus essentials fast and easy.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <Link to="/products" style={{ padding: '13px 32px', borderRadius: '8px', fontSize: '13px', fontWeight: 700, textDecoration: 'none', background: '#0A1628', color: 'white' }}>
            Browse Products
          </Link>
          <Link to="/auth/signup" style={{ padding: '13px 32px', borderRadius: '8px', fontSize: '13px', fontWeight: 700, textDecoration: 'none', background: 'transparent', color: '#0A1628', border: '1.5px solid rgba(10,22,40,0.35)' }}>
            Create Account
          </Link>
        </div>
      </div>
    </section>

  </div>
);

export default AboutPage;