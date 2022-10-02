import React from "react";
import logo from "../assets/airbnb-ar21.svg";
import { TbWorld } from "react-icons/tb";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="search">
        <p>Anywhere</p>
        <p>Any week</p>
        <div
          class="add-guests"
          style={{ display: "flex", alignItems: "center" }}
        >
          <p>Add guests</p>
          <span className="search-icon">
            <AiOutlineSearch size={18} />
          </span>
        </div>
      </div>

      <div className="last-header-el">
        <div>Become a host</div>
        <div>
          <TbWorld size={20} />
        </div>
        <div className="profile-menu">
          <p>
            <AiOutlineMenu />
          </p>
          <p>
            <CgProfile size={28} />
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
