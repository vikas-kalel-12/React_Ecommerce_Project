import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar";
import LoginIcon from "../../assets/login-icon.png";
import CartIcon from "../../assets/cart-icon.png";
import ShopIcon from "../../assets/shop-logo.webp";

import "./index.scss";
import useAuthorization from "../../hooks/useAuthorization";

const Header = () => {
  const navigate = useNavigate();

  const { isAuthorized } = useAuthorization();

  const imgIcons = [
    {
      src: LoginIcon,
      alt: "Login Icon",
      text: isAuthorized ? "Logout" : "Login",
      url: isAuthorized ? "logout" : "login",
    },
    {
      src: CartIcon,
      alt: "Cart Icon",
      text: "Cart",
      url: "cart",
    },
  ];

  return (
    <div className="header-container w-full h-16 bg-orange-400">
      <img
        onClick={() => navigate("/")}
        src={ShopIcon}
        className="shop-logo"
        alt="Shop Logo"
      />
      <SearchBar />
      {imgIcons?.map((img) => (
        <Link key={img.text} to={`/${img.url}`}>
          <div className="icon-wrapper">
            <img
              className="img-icon w-[30px] h-[30px] object-contain"
              src={img.src}
              srcSet={`${img.src} 1x`} // Assuming you have a higher resolution version
              alt={img.alt}
              loading="lazy"
            />
            <span>{img.text}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Header;
