import {prodDB} from "../assets/prodDB.js";
import {Product} from "./Product.jsx";

export function ProductList() {
    return (
        <div className="content">
            <h1>Products</h1>
            <div className="product-list">
                {
                    prodDB.map((product) => <Product key={product.id} {...product}/>)
                }
            </div>
        </div>
    )
}