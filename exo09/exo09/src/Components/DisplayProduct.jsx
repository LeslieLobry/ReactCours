const DisplayProduct = ({produit}) => {
    return (
        <article >
            <h2>{produit.nom}</h2>
            <p>Prix : {produit.prix}</p>
            <p>Description : {produit.description}</p>
        </article>);
}

export default DisplayProduct;