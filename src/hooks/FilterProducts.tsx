import type { ProductList } from "../pages/declarations";

const FilterProducts = ({ product, setProduct,}:{product: ProductList; setProduct: ProductList; }) => {


    
return (
    <>
    {product.slice(0, 12).map((p) => (
          <div key={p.id} className="filter-container">
            <div className="product-name-container">
                
              <p className="product-category">{p.category}</p>
            </div>
          </div>
        ))}
    </>
)
}
export default FilterProducts