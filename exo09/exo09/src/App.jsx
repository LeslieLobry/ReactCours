import { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayProduct from './Components/DisplayProduct';
import CartModal from './Components/Modal/CartModal'
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/produits")
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const addToCart = (item) => {
    setCart(prevCart => {
      // Vérifie si l'article est déjà dans le panier
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);

      if (existingItem) {
        // Si l'article est déjà dans le panier, on augmente la quantité
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // Sinon, on l'ajoute avec une quantité de 1
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
    alert('Article ajouté au panier !');
  };
  const removeAll=()=>{
    setCart([])
  };
  const removeFromCart = (produitId) => {
    const existingItem = cart.find(item => item.id === produitId);
    if (existingItem.quantity > 1) {
      setCart(cart.map(item =>
        item.id === produitId ? { ...item, quantity: item.quantity - 1 } : item
      ));
    } else {
      setCart(cart.filter(item => item.id !== produitId));
    }
  };
   const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.prix * item.quantity, 0);
  };

  return (
    <>
      <div>
      <button onClick={() => setIsCartOpen(true)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg> {cart.reduce((total, item) => total + item.quantity, 0)}
</button>
      </div>
      <div className="container">
        {data.map(produit => (
          <div key={produit.id} className='card'>
            <DisplayProduct produit={produit} addToCart={addToCart}/>
            <button className='btn-ajout' onClick={() => addToCart(produit)}>Ajouter au panier</button>
          </div>
        ))        
        }
      </div>
      {isCartOpen && <CartModal cart={cart} onClose={() => setIsCartOpen(false)}removeAll={removeAll} removeFromCart={removeFromCart} calculateTotal={calculateTotal} />}
    </>
  );
}

export default App;
