import React from "react";

interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }): JSX.Element => {
  return <h1 className="text-2xl font-bold text-black mb-2">{text}</h1>;
};

export default Heading;
