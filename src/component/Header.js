import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="left">
        <div>Home</div>
        <div>Men</div>
        <div>Women</div>
        <div>Kids</div>
        <div>Home&Living</div>
        <div>Beauty</div>
      </div>
      <div className="right">
        <div className="search">
          <input className="input" type="text" placeholder="search" />
        </div>
        <div class="other">
          <div>Profile</div>
          <div>Wishlist</div>
          <div>Bag</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
