import React from 'react';
import './index.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        'https://a773bb7a-19bc-4167-8cd7-ade44ad77b71.mock.pstmn.io/products'
      )
      .then(function (result) {
        const products = result.data.products;
        console.log('a', products);
        setProducts(products);
      })
      .catch(function (error) {
        console.error('에러 발생', error);
      });
  }, []);
  console.log(products);

  return (
    <div>
      <div id="banner">
        <img src="/images/banners/banner1.png" alt="banner" />
      </div>
      <h1>판매되는 상품들</h1>
      <div id="product-list">
        {products.map(function (product, index) {
          return (
            <div className="product-card">
              <Link className="product-link" to={`/products/${product.id}`}>
                <div>
                  <img
                    className="product-img"
                    src={product.imageUrl}
                    alt="product"
                  />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}원</span>
                  <div className="product-seller">
                    <img
                      className="product-avatar"
                      src="/images/icons/avatar.png"
                      alt="seller avatar"
                    ></img>
                    <span>{product.seller}</span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
