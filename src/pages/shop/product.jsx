import React from 'react'

export const Product = (props) => {
  // const { id, productName, price, productImage } = props.data;
    const { productName, price, productImage } = props.data;
  return (
    <div className='product'>

      <img src={productImage} alt={productName}/>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className='addToCartBtn'>Add to Cart</button>
    </div>
  )
}
