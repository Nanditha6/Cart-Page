import React from "react";

class Product extends React.Component {
  constructor(){
    super();
  }
  render() {
    return (
    <div className="product-block">
        <div className="product-image fleft"><img className="thumbnail-product" src="../images/products/product11.jpg"/></div>
        <div className="product-details fleft">
          <p className="product-title fleft">Bunco Game Tin by Cardinal</p>
          <p className="product-info">Color: Multi/None </p>
          <p className="product-info">Size : NO SIZE </p>
          <p className="product-info">SKU # 88867794 </p>
        </div>
        <div className="product-quantity fright">
          <input type="button" value="+"/>
          <span> 1 </span>
          <input type="button" value="-"/>
        </div>
    </div>
    );
  }
}

export default Product;



