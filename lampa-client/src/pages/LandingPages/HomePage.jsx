import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import banner from '../../assets/img/nu_bulldogex_banner.jpg';
import products from '../../assets/product-content.js';

const stockColors = {
  'In stock':  { color: '#15803D', bg: '#DCFCE7' },
  'Low stock': { color: '#B45309', bg: '#FEF3C7' },
  'Preorder':  { color: '#1D4ED8', bg: '#DBEAFE' },
};

const topSelling = products.slice(0, 4);
const popular = products.slice(4, 8);

const ProductCard = ({ product }) => {
  const badge = stockColors[product.stock] ?? stockColors['In stock'];
  return (
    <Link to={`/products/${product.name}`} style={{ textDecoration: 'none', display: 'block' }}>
      <div
        style={{
          background: 'white', borderRadius: '14px', overflow: 'hidden',
          border: '1px solid #E8E2D9', transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(10,22,40,0.1)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
      >
        <div style={{ height: '200px', background: '#F0ECE4', overflow: 'hidden', position: 'relative' }}>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          />
          <div style={{
            position: 'absolute', top: '10px', left: '10px',
            background: '#0A1628', color: '#C9962A',
            fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em',
            padding: '3px 9px', borderRadius: '4px', textTransform: 'uppercase',
          }}>NU Official</div>
        </div>
        <div style={{ padding: '16px 18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', color: '#C9962A', textTransform: 'uppercase' }}>
              {product.category}
            </span>
            <span style={{ fontSize: '10px', fontWeight: 600, padding: '2px 8px', borderRadius: '4px', color: badge.color, background: badge.bg }}>
              {product.stock}
            </span>
          </div>
          <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '17px', color: '#0A1628', marginBottom: '12px', lineHeight: 1.25 }}>
            {product.title}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '17px', color: '#0A1628' }}>
              {product.price}
            </span>
            <div style={{
              padding: '6px 14px', borderRadius: '6px',
              background: 'linear-gradient(135deg, #C9962A, #F5C842)',
              color: '#0A1628', fontSize: '11px', fontWeight: 700,
            }}>View</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const HomePage = () => (
  <div>
    {/* HERO */}
    <section style={{ position: 'relative', height: '580px', overflow: 'hidden' }}>
      <img src={banner} alt="BulldogEx" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(10,22,40,0.94) 40%, rgba(10,22,40,0.3) 100%)' }} />
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: 'linear-gradient(180deg, #C9962A, #F5C842 50%, #C9962A)' }} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 52px', width: '100%' }}>
          <div style={{
            display: 'inline-block', marginBottom: '22px', padding: '5px 16px', borderRadius: '6px',
            background: 'rgba(201,150,42,0.15)', border: '1px solid rgba(245,200,66,0.3)',
            fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', color: '#F5C842', textTransform: 'uppercase',
          }}>Official NU Campus Store</div>
          <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '58px', lineHeight: 1.12, color: 'white', marginBottom: '8px' }}>Shop Smart.</div>
          <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '58px', lineHeight: 1.12, color: '#F5C842', marginBottom: '28px' }}>Go Bulldogs.</div>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: '36px', maxWidth: '380px' }}>
            Campus uniforms, student essentials, and NU merch — everything you need, in one place.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Button to="/products" variant="primary" style={{ padding: '13px 32px', fontSize: '13px' }}>Shop Now</Button>
            <Button to="/about" variant="ghost" style={{ padding: '13px 32px', fontSize: '13px' }}>Learn More</Button>
          </div>
        </div>
      </div>
    </section>

    {/* STATS BAR */}
    <div style={{ background: '#0A1628', borderBottom: '1px solid rgba(201,150,42,0.15)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex' }}>
        {[['11+', 'Products'], ['6', 'Categories'], ['24+', 'Orders Served'], ['3', 'Pickup Slots']].map(([num, label], i) => (
          <div key={label} style={{ flex: 1, padding: '22px 0', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
            <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '28px', color: '#F5C842' }}>{num}</div>
            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '3px' }}>{label}</div>
          </div>
        ))}
      </div>
    </div>

    {/* TOP SELLING */}
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 32px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '36px' }}>
        <div>
          <div style={{ fontSize: '11px', color: '#C9962A', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px' }}>Best Sellers</div>
          <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '36px', color: '#0A1628', lineHeight: 1.15 }}>Top Selling</div>
        </div>
        <Button to="/products" variant="secondary">View All Products</Button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {topSelling.map(p => <ProductCard key={p.name} product={p} />)}
      </div>
    </section>

    {/* POPULAR */}
    <section style={{ background: '#0A1628', padding: '80px 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '36px' }}>
          <div>
            <div style={{ fontSize: '11px', color: '#C9962A', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px' }}>Trending Now</div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '36px', color: 'white', lineHeight: 1.15 }}>Popular Items</div>
          </div>
          <Button to="/products" variant="outline">Browse All</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {popular.map(p => <ProductCard key={p.name} product={p} />)}
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;