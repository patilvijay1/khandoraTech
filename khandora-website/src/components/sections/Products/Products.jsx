import React from "react";
import { productsData } from "../../../data/productsData";
import "./Products.css";

const Products = () => {
  return (
    <section className="products-section py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title">Our Products</h2>
            <p className="section-subtitle">
              Innovative solutions designed to empower your business
            </p>
          </div>
        </div>
        <div className="row g-4">
          {productsData.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6">
              <div className="product-card card h-100 border-0 shadow-sm">
                <img
                  src={product.image}
                  className="product-image card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="product-title card-title">{product.title}</h5>
                  <p className="product-description card-text text-muted">
                    {product.description}
                  </p>
                  <div className="product-features">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="product-feature badge bg-light text-dark me-2 mb-2"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="product-price mt-3">
                    <span className="price">{product.price}</span>
                    {product.oldPrice && (
                      <span className="old-price text-muted text-decoration-line-through ms-2">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                  <button className="btn btn-primary w-100 mt-3">
                    <i className="fas fa-shopping-cart me-2"></i>
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
