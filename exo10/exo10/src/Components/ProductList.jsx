import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import "./ProductItem.css";
const ProductList = () => {
    const products = useSelector(state => state.product.products)

    return ( 
        <div className="container-tableau">
            <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prix</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <ProductItem key={product.id} product={product}/>
                ))}
            </tbody>
        </table>
        </div>
     );
}
 
export default ProductList;