
import { useState } from "react";
import ListProducts from "../hooks/ListProducts.tsx";
import FilterProducts from "../hooks/FilterProducts.tsx";
import type { Product } from "../types/product.ts";

const Shop = () => {
  const [product, setProduct] = useState<Product[]>([]);

  return (
    <>
      <div id="product-listing">
        <FilterProducts product={product} setProduct={setProduct} />
        <ListProducts product={product} setProduct={setProduct} />
      </div>
    </>
  );
};
export default Shop;
