import React from 'react';
import './Product.css';
// import { useStateValue } from './StateProvider'

function Product({ title, price, rating, image }) {
  // const [{ basket }, dispatch] = useStateValue()

  // const addToBasket = () => {
  //   //add item to basket
  //   dispatch({
  //     type: 'ADD_TO_BASKET',
  //     item: {
  //       id,
  //       title,
  //       image,
  //       price,
  //       rating,
  //     },
  //   })
  // }

  return (
    <div className="product">
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
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
