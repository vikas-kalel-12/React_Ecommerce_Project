// SearchBar.js
import React from "react";
import "./index.scss"; // Import the CSS file for styling
import SearchIcon from "../../assets/search-icon.png";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <img
        className="search-icon w-[30px] h-[30px] object-contain"
        src={SearchIcon}
        srcSet={`${SearchIcon} 1x`} // Assuming you have a higher resolution version
        alt="Search Icon"
      />
      <input type="text" placeholder="Search..." className="search-input" />
    </div>
  );
};

export default SearchBar;
