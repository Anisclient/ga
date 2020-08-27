import React from 'react';
import './Product.css';
import { Link } from 'gatsby';

function Product({
  sections_id,
  title,
  price,
  rating,
  image,
  id,
  oneProductInPage,
}) {
  return (
    <Link
      to={`/${sections_id}/${id}`}
      className={`product ${oneProductInPage ? 'oneProductInPage' : ''}`}
    >
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="star" key={i}>
                &#11088;
              </span>
            ))}
        </div>
      </div>
      <img src={image} alt="product-bg" />
    </Link>
  );
}

export default Product;
