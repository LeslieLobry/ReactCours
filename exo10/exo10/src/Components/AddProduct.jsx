import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "../productsSlice";

const AddProduct = () => {
    const dispatch = useDispatch();
    const [nom, setNom] = useState("");
    const [prix, setPrix] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProducts({ nom, prix: Number(prix) }));
        setNom("");
        setPrix("");
    };

    return (
        <div>
            <h2>Ajouter un produit</h2>
        <form onSubmit={handleSubmit}>
            <h3>Nom du produit : </h3>
            <input
                type="text"
                placeholder="Nom du produit"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required    
            />
           <h3>Prix du produit : </h3>
            <input
                type="number"
                placeholder="Prix du produit"
                value={prix}
                onChange={(e) => setPrix(e.target.value)}
                reaquired 
            />  
            <button type="submit">Ajouter</button>
        </form>
      
        </div>
    );
};

export default AddProduct;
