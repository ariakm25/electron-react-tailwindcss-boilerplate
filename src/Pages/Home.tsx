import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../Components/Atoms";

const Home: React.FC<{}> = (): JSX.Element => {
  return (
    <div className="bg-gray-100 min-w-full min-h-screen flex flex-col justify-center items-center window-drag">
      <div className="bg-white rounded shadow flex flex-col justify-center items-center p-8">
        <p className="mb-4">Hello World</p>
        <Logo width="100px" className="mb-4" />
        <Link to="/about">Go to About {">"}</Link>
      </div>
    </div>
  );
};

export default Home;
