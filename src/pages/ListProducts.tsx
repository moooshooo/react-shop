import { useEffect} from "react";
import type { Product, ProductList } from "./declarations";

const API_URL = "http://10.100.3.140:3000/products"

console.log("Powered by: Mos\n===============");
console.log("ListProducts");

const ListProducts = ({product , setProduct}:{product:Product, setProduct:Product }) => {

    useEffect(()=>{

    async function getProducts() {
        const getTheData = await fetch(API_URL)
        const parsedData = await getTheData.json()
        
        setProduct(parsedData)
        
        console.log("Products loaded")
    }
    getProducts()
    },[])

    return(
    <>
        <div className="product-list">
            {product.map((p)=> (
                <div key={p.id} className="product-container">
                    <div className="product-name">
                        <p className="product-name">
                            {p.name}
                        </p>
                    </div>
                    <div className="product-img-holder">
                        <img className="product-img" src={p.image} alt={p.name} />
                    </div>
                    <div className="product-price">
                        <p className="product-price-text">
                            {p.price}:-
                        </p>
                    </div>
                    <div className="product-desc-container">
                        <p className="product-desc-text">{p.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </>
    )
}
export default ListProducts