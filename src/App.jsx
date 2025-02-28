import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CartModal from "./components/CartModal/CartModal";
import Hero from "./components/hero/Hero";
import ProductGrid from "./components/Product/ProductGrid";
import Alert from "./Alert/Alert";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alert, setAlert] = useState({ message: "", type: "", visible: false });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        setProducts(data);
        console.log(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  });

  function showAlert(message, type) {
    setAlert({ message, type, visible: true });
    setTimeout(() => {
      setAlert({ message: "", type: "", visible: false });
    }, 3000);
  }

  function handleAddToCart(product = {}) {
    const itemAlreadyExist = cart.find((item) => item.id === product.id);
    if (itemAlreadyExist) {
      showAlert("Item already added in cart", "error");
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      showAlert("Item added to the cart successfully", "success");
    }
  }
  function handleRemoveFromCart(productId) {
    if (productId) {
      setCart(cart.filter((item) => item.id !== productId));
      showAlert("Item Removed From the cart", "success");
    }
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  function handleCartQuantity(productId, newQuantity) {
    if (newQuantity < 1) return;

    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  }

  return (
    <>
      <Header cartLength={cart.length} handleOpenModal={handleOpenModal} />
      <Hero />
      <ProductGrid items={products} handleAddToCart={handleAddToCart} />
      <CartModal
        cartItems={cart}
        handleRemoveFromCart={handleRemoveFromCart}
        isModalOpen={isModalOpen}
        handleCartQuantity={handleCartQuantity}
        handleCloseModal={handleCloseModal}
      />
      <Footer />
      {alert.visible && <Alert message={alert.message} type={alert.type} />}
    </>
  );
}

export default App;
