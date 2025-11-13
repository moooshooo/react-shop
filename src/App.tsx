import { useState } from "react";
import ListProducts from "./pages/ListProducts";
import HeaderPart from './pages/header.tsx'
import FooterPart from './pages/footer.tsx'
import type { ProductList } from "./pages/declarations";

function App() {
      const [product, setProduct] = useState<ProductList[]>([])

  return (
    <>
        <HeaderPart />
      <main id="product-listing">
       
        <ListProducts product={product} setProduct={setProduct} />
      </main>

        <FooterPart />
    </>
  );
}
export default App;
