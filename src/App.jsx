import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/home";
import Signup from "./pages/Signup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {/* Navbar only after login */}
      {isLoggedIn && <Navbar />}

      <div style={{ paddingTop: isLoggedIn ? '80px' : '0' }}>
        <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />

        <Route path="/signup" element={<Signup />} />

        {/* Protected products page */}
        <Route
          path="/product"
          element={
            isLoggedIn ? <Products /> : <Login setIsLoggedIn={setIsLoggedIn} />
          }
        />

        <Route
          path="/product/:id"
          element={
            isLoggedIn ? (
              <ProductDetails />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />

        <Route
          path="/cart"
          element={
            isLoggedIn ? <Cart /> : <Login setIsLoggedIn={setIsLoggedIn} />
          }
        />
        </Routes>
      </div>
    </div>
  );
}

export default App;
