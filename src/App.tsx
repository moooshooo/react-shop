import { useState } from "react";
import HeaderPart from "./pages/header.tsx";
import ListProducts from "./hooks/ListProducts.tsx";
import FilterProducts from "./hooks/FilterProducts.tsx";
import FooterPart from "./pages/footer.tsx";
import type { ProductList } from "./declarations";

console.log("Powered by: Mos\n===============");

function App() {
  const [product, setProduct] = useState<ProductList[]>([]);

  return (
    <>
      <HeaderPart />
      <main id="product-listing">
        <FilterProducts product={product} setProduct={setProduct} />
        <ListProducts product={product} setProduct={setProduct} />
      </main>

      <FooterPart />
    </>
  );
}
export default App;
