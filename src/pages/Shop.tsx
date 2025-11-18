
import { useEffect, useState } from "react";
import ListProducts from "../hooks/ListProducts.tsx";
import FilterProducts from "../hooks/FilterProducts.tsx";
import type { ProductList } from "../types/product.ts";

const API_URL = "https://api.leetcode.se/sample-products";
/* const API_URL = "https://api.futureplayground.se/products"
 */
console.log("Powered by: Mos\n===============");

const Shop = () => {
  const [product, setProduct] = useState<ProductList>([]);

   useEffect(() => {
    async function getProducts() {
      const getTheData = await fetch(API_URL);
      const parsedData = await getTheData.json();

      setProduct(parsedData);

      console.log("Products loaded");
    }
    getProducts();
  }, []);

  return (
    <>
      <div id="product-listing">
        <FilterProducts product={product}  />
        <ListProducts product={product}  />
      </div>
    </>
  );
};
export default Shop;
