const DisplayProduct = ({produit}) => {
    return (
        <article >
            <h2>{produit.nom}</h2>
            <p>Prix : {produit.prix}</p>
            <p>Description : {produit.description}</p>
            <img src={produit.image} alt="" className="imageProduit"width={150}/>
        </article>);
}

export default DisplayProduct;