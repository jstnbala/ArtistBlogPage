import React from 'react';
import './index.css'; // Import CSS file

const Merchandise = () => {
  const products = [
    {
      name: "Ed Sheeran Logo T-Shirt",
      description: "This stylish t-shirt features Ed Sheeran's logo printed on the front. Made from high-quality cotton for maximum comfort.",
      image: "./images/shirt1.jpg"
    },
    {
      name: "Ed Sheeran Signature (=) Jacket",
      description: "Stay warm in style with this signature Ed Sheeran jacket. Featuring a sleek design and durable materials.",
      image: "./images/jacket1.jpg"
    },
    {
      name: "Ed Sheeran Cap",
      description: "Complete your look with this trendy Ed Sheeran cap. Adjustable strap for a comfortable fit.",
      image: "./images/cap1.jpg"
    }
  ];

  return (
    <div className="merchandise-container">
      <h1 className="title">GRAB YOURS NOW!</h1>
      <div className="products">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Merchandise;
