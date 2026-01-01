import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();          // like Flask <id>
  const navigate = useNavigate();      // like Flask redirect

  const product = products.find(p => p.id === Number(id));

  return (
    <div>
      <h2>Product Details</h2>

      {product ? (
        <>
          <img src={product.image} width="200" />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>₹{product.price}</p>
        </>
      ) : (
        <p>Product not found</p>
      )}

      <br /><br />

      <button onClick={() => navigate("/")}>
        ⬅ Go Back to Home
      </button>

      {/* Browser back alternative */}
      {/* <button onClick={() => navigate(-1)}>Go Back</button> */}
    </div>
  );
}

export default ProductDetails;
