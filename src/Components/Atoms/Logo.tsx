import React from "react";

interface LogoProps extends React.HTMLAttributes<HTMLElement> {
  width?: string;
}

const Logo: React.FC<LogoProps> = ({ width, ...attributes }): JSX.Element => {
  return <img src="assets/img/logo.png" alt="Logo" {...attributes} />;
};

export default Logo;
