import React from "react";

interface SubHeadingProps {
  text: string;
}

const SubHeading: React.FC<SubHeadingProps> = ({
  text,
}): JSX.Element => {
  return <h4 className="text-base font-semibold text-gray-muted mb-2">{text}</h4>;
};

export default SubHeading;
