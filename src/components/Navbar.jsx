import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#fff',
      borderBottom: '1px solid #e0e0e0',
      padding: '1rem 2rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#007bff' }}>
          E-Shop
        </div>
        <div>
          <Link to="/" style={{ marginRight: '2rem', color: '#333' }}>Home</Link>
          <Link to="/cart" style={{ color: '#333' }}>Cart</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
