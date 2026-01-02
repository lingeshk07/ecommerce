import { useNavigate } from "react-router-dom";
import products from "../data/products";

function Products() {
  const navigate = useNavigate();

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem'
    }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '2rem',
        fontSize: '2rem'
      }}>Our Products</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '2rem'
      }}>
        {products.map(product => (
          <div key={product.id} style={{
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '1rem',
            textAlign: 'center',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <img src={product.image} alt={product.name} style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '4px',
              marginBottom: '1rem'
            }} />
            <h3 style={{ margin: '0.5rem 0', fontSize: '1.2rem' }}>{product.name}</h3>
            <p style={{
              fontSize: '1.1rem',
              fontWeight: 'bold',
              color: '#007bff',
              margin: '0.5rem 0'
            }}>₹{product.price}</p>

            <button
              onClick={() => navigate(`/product/${product.id}`)}
              style={{
                backgroundColor: '#28a745',
                border: 'none',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#218838'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#28a745'}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
