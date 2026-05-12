import { Link } from 'react-router-dom';

const stockColors = {
  'In stock':  { color: '#15803D', bg: '#DCFCE7' },
  'Low stock': { color: '#B45309', bg: '#FEF3C7' },
  'Preorder':  { color: '#1D4ED8', bg: '#DBEAFE' },
};

const ProductCard = ({ product }) => {
  const badge = stockColors[product.stock] ?? stockColors['In stock'];

  return (
    <Link to={`/products/${product.name}`} style={{ textDecoration: 'none', display: 'block' }}>
      <article
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

          <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '17px', color: '#0A1628', marginBottom: '6px', lineHeight: 1.25 }}>
            {product.title}
          </div>

          <p style={{
            fontSize: '12px', color: 'rgba(10,22,40,0.45)', lineHeight: 1.65, marginBottom: '14px',
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>
            {product.content[0]}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '18px', color: '#0A1628' }}>
              {product.price}
            </span>
            <div style={{
              padding: '7px 16px', borderRadius: '6px',
              background: 'linear-gradient(135deg, #C9962A, #F5C842)',
              color: '#0A1628', fontSize: '11px', fontWeight: 700,
            }}>View</div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;