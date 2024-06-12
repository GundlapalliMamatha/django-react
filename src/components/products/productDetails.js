import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './productDetails.css';

const ProductDetails= () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product data from the Django backend
    axios.get('http://127.0.0.1:8000/appone/products/')
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details-container">
      <div className="table-container">
        <h1>Product Details</h1>
        <table>
          <tbody>
            <tr>
              <td><strong>ID:</strong></td>
              <td>{product.product_id}</td>
            </tr>
            <tr>
              <td><strong>Brand:</strong></td>
              <td>{product.product_brand}</td>
            </tr>
            <tr>
              <td><strong>Name:</strong></td>
              <td>{product.product_name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="table-container">
        <h2>Specifications</h2>
        <table>
          <tbody>
            <tr>
              <td><strong>Capacity:</strong></td>
              <td>{product.specifications.capacity}</td>
            </tr>
            <tr>
              <td><strong>Type:</strong></td>
              <td>{product.specifications.type}</td>
            </tr>
            <tr>
              <td><strong>Color:</strong></td>
              <td>{product.specifications.color}</td>
            </tr>
            <tr>
              <td><strong>Energy Rating:</strong></td>
              <td>{product.specifications.energy_rating}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="table-container">
        <h2>Pricing</h2>
        <table>
          <tbody>
            <tr>
              <td><strong>Currency:</strong></td>
              <td>{product.pricing.currency}</td>
            </tr>
            <tr>
              <td><strong>Amount:</strong></td>
              <td>{product.pricing.amount}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="table-container">
        <h3>Discount</h3>
        <table>
          <tbody>
            <tr>
              <td><strong>Value:</strong></td>
              <td>{product.pricing.discount.amount}</td>
            </tr>
            <tr>
              <td><strong>Expiry Date:</strong></td>
              <td>{product.pricing.discount.expiry_date}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="table-container">
        <h2>Availability</h2>
        <table>
          <tbody>
            <tr>
              <td><strong>In Stock:</strong></td>
              <td>{product.availability.in_stock ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <td><strong>Stock Count:</strong></td>
              <td>{product.availability.stock_count}</td>
            </tr>
            <tr>
              <td><strong>Estimated Delivery:</strong></td>
              <td>{product.availability.estimated_delivery}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetails;