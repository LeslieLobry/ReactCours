import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "product",
    initialState: {
        products: [
            { id: 1, nom: "Pomme", prix: 1 },
            { id: 2, nom: "Banane", prix: 1 },
            { id: 3, nom: "Orange", prix: 1 },
            { id: 4, nom: "Poire", prix: 1 },
            { id: 5, nom: "Fraise", prix: 1 },
            { id: 6, nom: "Tomate", prix: 1 },
            { id: 7, nom: "Concombre", prix: 1 },
            { id: 8, nom: "Carotte", prix: 1 },
            { id: 9, nom: "Laitue", prix: 1 },
            { id: 10, nom: "Pain", prix: 2 }
        ],
    },
    reducers: {
        addProducts: (state, action) => {
            const newProduct = {
                id: Date.now(),
                nom: action.payload.nom,
                prix: action.payload.prix,
            };
            state.products.push(newProduct);
        },
        deleteProducts: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload);
        },
        
        updateProducts: (state, action) => {
            state.products = state.products.map((product) => {
                if (product.id === action.payload.id) {
                    return {
                        ...product,
                        nom: action.payload.nom,
                        prix: action.payload.prix,
                    };
                }
                return product;
            });
        },
    },
});

export const { addProducts, deleteProducts, updateProducts } = productsSlice.actions;
export default productsSlice.reducer;
