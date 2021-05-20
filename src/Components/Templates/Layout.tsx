import React, { Fragment } from "react";
import { SideNav } from "../Molecules";

const Layout: React.FC<{}> = ({ children }): JSX.Element => {
  return (
    <Fragment>
      <div className="flex relative">
        <SideNav />
        <div className="py-4 px-8">{children}</div>
      </div>
    </Fragment>
  );
};

export default Layout;
