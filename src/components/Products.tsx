import React from "react";
import ElementsCalc from '../components/ElementsCalc';
import productsData from '../data/products.json'; // Adjust the path based on the folder structure

const Products = () => {
  return (
    <div aria-label="products" className="products">
      <div aria-label="new-arrivals" className="new-arrivals">
        <div className="arrivals-text">New Arrivals</div>
          <div aria-label="product-items" className="product-items">
          {productsData.products
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) 
            .slice(0, 4)
            .map(product => (
            <button key={product.productId} className="sunglasses">
                <div className="img-container">
                <img src={product.images[0]} alt={product.model} className="product-img" />
                </div>
                <div className="flex-col pt-[10px]">
                  <p className="collection-name">{product.collection}</p>
                  <p className="product-name">{product.model}</p>
                </div>
                <div className="flex items-center pt-[5px] space-x-[15px]">
                  <p className="price">
                    {product.discount && product.discount > 0
                      ? `${Math.round(product.price * (1 - product.discount / 100))}€`
                      : `${product.price}€`
                    }
                  </p>
                  <p className={product.discount && product.discount > 0 ? "discounted-price" : "hidden"}>
                    {product.discount && product.discount > 0 ? `${product.price}€` : null}
                  </p>
                  {product.discount && product.discount > 0 && (
                    <div className="discount">
                      <p className="percentage">-{product.discount}%</p>
                    </div>
                  )}
                </div>    
            </button>
            ))}
        </div>
        <div className="btn-container">
          <button className="view-sep">
            <ElementsCalc text="View All →" separatorClass="shop-text" wrapperClass="arrivals-wrapper" />
          </button>
        </div>
      </div>
      <div aria-label="top-products" className='top-products'>
        <div className="top-text">Top Selling</div>
        <div aria-label="product-items" className="product-items">
        {productsData.products
            .sort((a, b) => (b.unitsSold) - (a.unitsSold)) // Sort by 'unitsSold' descending (most recent first)
            .slice(0, 4) // Get the first 4 most recent products
            .map(product => (
            <button key={product.productId} className="sunglasses">
                <div className="img-container">
                <img src={product.images[0]} alt={product.model} className="product-img" />
                </div>
                <div className="flex-col pt-[10px]">
                  <p className="collection-name">{product.collection}</p>
                  <p className="product-name">{product.model}</p>
                </div>
                <div className="flex items-center pt-[5px] space-x-[15px]">
                  <p className="price">
                    {product.discount && product.discount > 0
                      ? `${Math.round(product.price * (1 - product.discount / 100))}€`
                      : `${product.price}€`
                    }
                  </p>
                  <p className={product.discount && product.discount > 0 ? "discounted-price" : "hidden"}>
                    {product.discount && product.discount > 0 ? `${product.price}€` : null}
                  </p>
                  {product.discount && product.discount > 0 && (
                    <div className="discount">
                      <p className="percentage">-{product.discount}%</p>
                    </div>
                  )}
                </div>    
            </button>
            ))}
        </div>
        <div className="btn-container">
          <button className="view-sep">
            <ElementsCalc text="View All →" separatorClass="shop-text" wrapperClass="arrivals-wrapper" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
