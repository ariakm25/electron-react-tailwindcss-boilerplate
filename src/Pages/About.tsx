import React from "react";
import { Link } from "react-router-dom";

const About: React.FC<{}> = (): JSX.Element => {
  return (
    <div className="bg-gray-100 min-w-full min-h-screen flex flex-col justify-center items-center window-drag">
      <div className="bg-white rounded shadow flex flex-col justify-center items-center p-8">
        <p className="mb-4">About</p>
        <Link to="/"> {"<"} Back Home</Link>
      </div>
    </div>
  );
};

export default About;
