import React from "react";
import { useDispatch } from "react-redux";
import { deleteProducts, updateProducts } from "../productsSlice";
import "./ProductItem.css";
import productsSlice from "../productsSlice";
const ProductTable = ({ product }) => {
    const dispatch = useDispatch();

    const handleUpdate = (id) => {
        const product = products.find(p => p.id === id);
        const newNom = prompt("Nouveau nom:", product.nom);
        const newPrix = prompt("Nouveau prix:", product.prix);
        if (newNom && newPrix) {
            dispatch(updateProducts({ id: product.id, nom: newNom, prix: Number(newPrix) }));
        }
    };

    const handleDelete = (id) => {
        dispatch(deleteProducts(id));
    };

    return (
        <tr key={product.id}>
            <td>{product.nom}</td>
            <td>{product.prix}€</td>
            <td>
                <button onClick={() => handleUpdate(product.id)} className="btn-modify">Modifier</button>
                <button onClick={() => handleDelete(product.id)} className="btn-delete">Supprimer</button>
            </td>
        </tr>
    );
};

export default ProductTable;
