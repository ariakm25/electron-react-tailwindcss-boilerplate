import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "../../../assets/svg/home.svg";
import ProfileIcon from "../../../assets/svg/profile.svg";
import { Logo } from "../Atoms";

const SideNav: React.FC<{}> = (): JSX.Element => {
  return (
    <div className="w-12 bg-gray-secondary min-h-screen">
      <div className="flex flex-wrap flex-row">
        <div className="mx-auto">
          <Logo width="30px" className="py-3 mt-1 mb-4" />
        </div>
        <NavLink to="/" exact activeClassName="bg-gray-primary border-r-2 border-black" className="w-full flex justify-center py-3 mb-4">
          <HomeIcon />
        </NavLink>
        <NavLink to="/about" activeClassName="bg-gray-primary border-r-2 border-black" className="w-full flex justify-center py-3 mb-4">
          <ProfileIcon />
        </NavLink>
      </div>
    </div>
  );
};

export default SideNav;
