import React from "react";
import { Heading, SubHeading } from "../Atoms";

interface PageTitleProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  subTitle?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({
  title,
  subTitle,
  ...attributes
}): JSX.Element => {
  return (
    <div {...attributes}>
      <Heading text={title} />
      {subTitle && <SubHeading text={subTitle} />}
    </div>
  );
};

export default PageTitle;
