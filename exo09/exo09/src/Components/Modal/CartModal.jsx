import React, { useState } from 'react';
import './CartModal.css';

function CartModal({ cart, onClose, removeFromCart, removeAll, calculateTotal, updateQuantity }) {
    const handleRemoveFromCart = (id) => {
        removeFromCart(id);
    };

    const handleRemoveAll = () => {
        removeAll();
    };

    const handleQuantityChange = (id, newQuantity) => {
        // Vérifie que la quantité est un nombre valide et supérieur à 0
        if (newQuantity > 0) {
            updateQuantity(id, newQuantity); // Met à jour la quantité
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Panier</h2>
                {cart.length === 0 ? (
                    <>
                      <p>Votre panier est vide.</p>
                    <button onClick={onClose}>Retour aux articles</button>
                    </>
                  
                ) : (
                    <>
                        {cart.map(item => (
                            <div key={item.id}>
                                <p>{item.nom}</p>
                                <p>Prix unitaire: {item.prix} €</p>
                                <div>   
                                    <label>Quantité:</label>
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                        min="1" // La quantité doit être au minimum 1
                                    />
                                </div>
                                <p>Total pour cet article: {item.prix * item.quantity} €</p>
                                <button onClick={() => handleRemoveFromCart(item.id)} className='btn-supprimer'>
                                    Supprimer un
                                </button>
                            </div>
                        ))}
                        <div className="total">
                            <button onClick={handleRemoveAll} className='btn-supprimer'>
                                Supprimer tous
                            </button>
                            <h3>Total: {calculateTotal()} €</h3>
                            <button onClick={onClose}>Retour aux articles</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default CartModal;
