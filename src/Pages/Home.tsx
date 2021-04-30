import React from "react";

const Home: React.FC<{}> = (): JSX.Element => {
  return (
    <div className="bg-gray-100 min-w-full min-h-screen flex flex-col justify-center items-center window-drag">
      <div className="bg-white rounded shadow flex flex-col justify-center items-center p-10">
        <p>Hello World</p>
      </div>
    </div>
  );
};

export default Home;
