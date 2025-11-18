import type { Product, ProductList } from "../types/product";

const FilterProducts = ({
  product
  
}: {
  product: ProductList;
  setProduct: ProductList;
}) => {
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
  );
};
export default FilterProducts;
