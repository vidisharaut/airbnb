import React from "react";
import {
  GiUfo,
  GiLaserSparks,
  GiMountainRoad,
  GiLightningDome,
  GiIsland,
  GiCaravan,
  GiSurfBoard,
  GiTreehouse,
  GiWillowTree,
} from "react-icons/gi";
import {
  BsFillHouseDoorFill,
  BsWater,
  BsArrowRightCircle,
  BsFilterLeft,
} from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";
import { IoIosSnow } from "react-icons/io";
import { FaSwimmingPool } from "react-icons/fa";
import { SiAframe } from "react-icons/si";
import { FiCoffee } from "react-icons/fi";

const Options = () => {
  return (
    <div className="options">
      <div className="option active">
        <GiUfo size={25} />
        <p>OMG!</p>
      </div>
      <div className="park option">
        <GiLaserSparks size={25} />
        <p>National Parks!</p>
      </div>
      <div className=" option">
        <BsFillHouseDoorFill size={25} />
        <p>Cabins</p>
      </div>
      <div className=" option">
        <GiMountainRoad size={25} />
        <p>COuntryside</p>
      </div>
      <div className=" option">
        <GiLightningDome size={25} />
        <p>Domes</p>
      </div>
      <div className=" option">
        <GiIsland size={25} />
        <p>Islands</p>
      </div>
      <div className=" option">
        <GiCaravan size={25} />
        <p>Campervans</p>
      </div>
      <div className=" option">
        <BsFillHouseDoorFill size={25} />
        <p>Tiny homes</p>
      </div>
      <div className=" option">
        <MdDesignServices size={25} />
        <p>Design</p>
      </div>
      <div className=" option">
        <IoIosSnow size={25} />
        <p>Arctic</p>
      </div>
      <div className=" option">
        <FaSwimmingPool size={25} />
        <p>Amazing pools</p>
      </div>
      <div className=" option">
        <BsWater size={25} />
        <p>Lakefront</p>
      </div>
      <div className=" option">
        <GiSurfBoard size={25} />
        <p>Surfing</p>
      </div>
      <div className=" option">
        <SiAframe size={25} />
        <p>A-frames</p>
      </div>
      <div className=" option">
        <GiTreehouse size={25} />
        <p>Treehouses</p>
      </div>
      <div className=" option">
        <GiWillowTree size={25} />
        <p>Tropical</p>
      </div>
      <div className=" option">
        <FiCoffee size={25} />
        <p>Bed &#38; breakfasts</p>
      </div>
      <div className="right">
        <div className=" right-arrow">
          <BsArrowRightCircle size={25} />
        </div>
        <div className="filter">
          <BsFilterLeft size={25} />
          <p>Filters</p>
        </div>
      </div>
    </div>
  );
};

export default Options;
