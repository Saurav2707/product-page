import React from "react";
import image1 from "../assests/images/image1.jpg";
import image2 from "../assests/images/image2.jpg";

function Productpage() {
  return (
    <div className="box">
      <div className="images">
        <img src={image1} alt="of a shoe" />
        <img src={image2} alt="of a shoe" />
      </div>
      <div className="description">
        <div className="container">
          <div className="product-name">Carton London Sports</div>
          <div className="subtitle">Men Black and Red Running Shoes</div>
          <div className="rating">
            <div className="star">3★</div>
            <div>2 ratings</div>
          </div>
        </div>
        <div className="price">
          <div className="dp">Rs. 1599</div>
          <div className="op">
            <del>Rs. 3999</del>
          </div>
          <div className="discount">( 60% OFF )</div>
        </div>
        <div className="tax">inclusive of all taxes</div>
        <div className="bag">ADD TO BAG</div>
      </div>
    </div>
  );
}

export default Productpage;
