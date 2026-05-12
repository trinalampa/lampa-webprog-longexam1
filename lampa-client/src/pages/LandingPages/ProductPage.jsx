import { useParams, Link } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import products from '../../assets/product-content.js';

const stockStyle = {
  'In stock':  { color: '#15803D', bg: '#DCFCE7' },
  'Low stock': { color: '#B45309', bg: '#FEF3C7' },
  'Preorder':  { color: '#1D4ED8', bg: '#DBEAFE' },
};

function ProductPage() {
  const { name } = useParams();
  const product = products.find(p => p.name === name);
  const related = products.filter(p => p.name !== name).slice(0, 3);

  if (!product) {
    return (
      <div style={{ maxWidth: '600px', margin: '80px auto', padding: '0 32px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '28px', color: '#0A1628', marginBottom: '12px' }}>Product not found</div>
        <Button to="/products" variant="primary">Back to Products</Button>
      </div>
    );
  }

  const badge = stockStyle[product.stock] ?? stockStyle['In stock'];

  return (
    <div>
      {/* BREADCRUMB */}
      <div style={{ background: 'white', borderBottom: '1px solid #E8E2D9', padding: '14px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'rgba(10,22,40,0.4)' }}>
          <Link to="/" style={{ color: 'rgba(10,22,40,0.4)', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <Link to="/products" style={{ color: 'rgba(10,22,40,0.4)', textDecoration: 'none' }}>Products</Link>
          <span>›</span>
          <span style={{ color: '#0A1628', fontWeight: 500 }}>{product.title}</span>
        </div>
      </div>

      {/* PRODUCT DETAIL */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '52px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>

          {/* Image column */}
          <div>
            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #E8E2D9', position: 'relative', background: '#F0ECE4' }}>
              <img
                src={product.image}
                alt={product.title}
                style={{ width: '100%', height: '460px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
              <div style={{ position: 'absolute', top: '16px', left: '16px', background: '#0A1628', color: '#C9962A', fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em', padding: '4px 12px', borderRadius: '5px', textTransform: 'uppercase' }}>
                NU Official
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginTop: '12px' }}>
              {[0,1,2,3].map(i => (
                <div key={i} style={{ height: '80px', borderRadius: '8px', overflow: 'hidden', border: i === 0 ? '2px solid #C9962A' : '1px solid #E8E2D9', background: '#F0ECE4', cursor: 'pointer' }}>
                  {i === 0 && <img src={product.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />}
                </div>
              ))}
            </div>
          </div>

          {/* Info column */}
          <div style={{ paddingTop: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', color: '#C9962A', textTransform: 'uppercase' }}>{product.category}</span>
              <span style={{ fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '5px', color: badge.color, background: badge.bg }}>{product.stock}</span>
            </div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '40px', color: '#0A1628', lineHeight: 1.1, marginBottom: '16px' }}>{product.title}</div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '32px', color: '#0A1628', marginBottom: '28px' }}>{product.price}</div>

            <div style={{ borderTop: '1px solid #E8E2D9', borderBottom: '1px solid #E8E2D9', padding: '24px 0', marginBottom: '28px' }}>
              {product.content.map((para, i) => (
                <p key={i} style={{ fontSize: '14px', color: 'rgba(10,22,40,0.6)', lineHeight: 1.8, marginBottom: i < product.content.length - 1 ? '14px' : 0 }}>{para}</p>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px', marginBottom: '28px' }}>
              <Button variant="primary" style={{ flex: 1, padding: '15px 0', fontSize: '13px', borderRadius: '8px' }}>Add to Cart</Button>
              <Button to="/products" variant="secondary" style={{ padding: '15px 24px', fontSize: '13px', borderRadius: '8px' }}>← Back</Button>
            </div>

            <div style={{ background: '#F9F7F4', borderRadius: '12px', padding: '20px 24px', border: '1px solid #E8E2D9' }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '14px', color: '#0A1628', marginBottom: '16px' }}>Product Details</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                {[['Category', product.category], ['Availability', product.stock], ['Store', 'BulldogEx NU'], ['Pickup', 'On campus']].map(([k, v]) => (
                  <div key={k}>
                    <div style={{ fontSize: '10px', color: 'rgba(10,22,40,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px' }}>{k}</div>
                    <div style={{ fontSize: '13px', color: '#0A1628', fontWeight: 500 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RELATED */}
        <div style={{ marginTop: '88px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '32px' }}>
            <div>
              <div style={{ fontSize: '11px', color: '#C9962A', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px' }}>More Products</div>
              <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '32px', color: '#0A1628', lineHeight: 1.15 }}>You Might Also Like</div>
            </div>
            <Button to="/products" variant="secondary">View All</Button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {related.map(p => (
              <Link key={p.name} to={`/products/${p.name}`} style={{ textDecoration: 'none' }}>
                <div
                  style={{ background: 'white', borderRadius: '14px', overflow: 'hidden', border: '1px solid #E8E2D9', transition: 'transform 0.2s, box-shadow 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(10,22,40,0.08)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ height: '160px', overflow: 'hidden', background: '#F0ECE4' }}>
                    <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                  </div>
                  <div style={{ padding: '14px 16px' }}>
                    <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', color: '#C9962A', textTransform: 'uppercase', marginBottom: '5px' }}>{p.category}</div>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '16px', color: '#0A1628', marginBottom: '8px', lineHeight: 1.25 }}>{p.title}</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '15px', color: '#0A1628' }}>{p.price}</span>
                      <span style={{ fontSize: '11px', color: '#C9962A', fontWeight: 700 }}>View →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;