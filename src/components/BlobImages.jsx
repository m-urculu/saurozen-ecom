import React, { useEffect, useState } from 'react';
import productsData from '../data/products.json'; // Adjust the path based on the folder structure

const ImageGallery = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Directly set the imported JSON data
    setProducts(productsData.products);
  }, []);

  return (
    <div>
      <h1>Product Image Gallery</h1>
      <div>
        {products.map((product) => (
          <div key={product.productId} className="product">
            <h2>Product ID: {product.productId} - Collection: {product.collection} - Model: {product.model} - Description: {product.description} - Price: {product.price}€ - Discount {product.discount}%</h2>
            <div className="images flex">
              {product.images.map((image, index) => (
                <div key={index} className="image-item">
                  <img 
                    src={image} 
                    alt={`Product ${product.productId} - Image ${index + 1}`} 
                    style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'contain' }} 
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
