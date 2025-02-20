import React, {useEffect, useRef} from "react";
import ElementsCalc from '../components/ElementsCalc';
import productsData from '../data/products.json'; // Adjust the path based on the folder structure

const Products = () => {
  const scrollRefs = [useRef(null), useRef(null)];
  const speed = 2;

  useEffect(() => {
    let positions = [0, 0];
    let directions = [1, 1];

    const scroll = () => {
      scrollRefs.forEach((ref, index) => {
        if (ref.current) {
          const { scrollWidth, clientWidth, scrollLeft } = ref.current;

          if (scrollLeft >= scrollWidth - clientWidth) directions[index] = -0.5;
          if (scrollLeft <= 0) directions[index] = 0.5;

          positions[index] += speed * directions[index];
          ref.current.scrollLeft = Math.round(positions[index]);
        }
      });

      requestAnimationFrame(scroll);
    };

    let animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);


  return (
    <div aria-label="products" className="products">
      <div id="new-arrivals" aria-label="new-arrivals" className="new-arrivals">
        <div className="arrivals-text">New Arrivals</div>
          <div ref={scrollRefs[0]} aria-label="product-items" className="product-items">
            {productsData.products
              .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
              .slice(0, 20)
              .map(product => (
                <button key={product.productId} className="sunglasses">
                  <div className="img-container">
                    <img src={product.images[0]} alt={product.model} className="product-img" />
                  </div>
                  <div className="name-container">
                    <p className="collection-name">{product.collection}</p>
                    <p className="product-name">{product.model}</p>
                  </div>
                  <div className="price-container">
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
              ))
            }
          </div>
        <div className="btn-container">
          <button className="view-sep">
            <ElementsCalc text="View All →" separatorClass="shop-text" wrapperClass="arrivals-wrapper" />
          </button>
        </div>
      </div>
      <div id="top-products" aria-label="top-products" className='top-products'>
        <div className="top-text">Top Selling</div>
        <div ref={scrollRefs[1]} aria-label="product-items" className="product-items">
          {productsData.products
              .sort((a, b) => (b.unitsSold) - (a.unitsSold)) // Sort by 'unitsSold' descending (most recent first)
              .slice(0, 20)
              .map(product => (
              <button key={product.productId} className="sunglasses">
                  <div className="img-container">
                  <img src={product.images[0]} alt={product.model} className="product-img" />
                  </div>
                  <div className="name-container">
                    <p className="collection-name">{product.collection}</p>
                    <p className="product-name">{product.model}</p>
                  </div>
                  <div className="price-container">
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
