import React from 'react';
import './CartModal.css';
import { Link } from "react-router-dom";

function CartModal({ cart, onClose, removeFromCart, removeAll, calculateTotal }) {
    const handleRemoveFromCart = (id) => {
        removeFromCart(id);
    };

    const handleRemoveAll = (id) => {
        removeAll(id);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Panier</h2>
                {cart.length === 0 ? (
                    <p>Votre panier est vide.</p>
                ) : (
                    <>
                        {cart.map(item => (
                            <div key={item.id}>
                                <p>{item.nom}</p>
                                <p>Quantité: {item.quantity}</p>
                                <p>Prix unitaire: {item.prix} €</p>
                                <p>Total: {item.prix * item.quantity} €</p>
                                <button onClick={() => handleRemoveFromCart(item.id)} className='btn-supprimer'>Supprimer un</button>
                            </div>
                        ))}
                        <div className="total">
                        <button onClick={() => handleRemoveAll()} className='btn-supprimer'>Supprimer tous</button>
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
