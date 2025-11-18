import type { ProductList } from "../types/product";

const ListProducts = ({ product }: { product: ProductList }) => {
  return (
    <>
      <div className="product-list">
        {product.slice(0, 12).map((p) => (
          <div key={p.id} className="product-container">
            <div className="product-name-container">
              <p className="product-name">{p.name}</p>
              <p className="product-category">{p.category}</p>
            </div>
            <div className="product-img-holder">
              <img className="product-img" src={p.image} alt={p.name} />
            </div>
            <div className="product-price">
              <p className="product-price-text">{p.price} :-</p>
            </div>
            <div className="product-desc-container">
              <p className="product-desc-text">{p.description}</p>
            </div>
            <div className="product-desc-container">
              <p className="product-desc-text">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default ListProducts;
