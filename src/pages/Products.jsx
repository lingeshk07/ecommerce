import { useNavigate } from "react-router-dom";
import products from "../data/products";

function Products() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Products</h2>

      {products.map(product => (
        <div key={product.id} style={{ marginBottom: "15px" }}>
          <img src={product.image} width="150" />
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>

          <button onClick={() => navigate(`/product/${product.id}`)}>
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
