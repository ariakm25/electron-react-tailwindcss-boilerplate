import React from "react";
import { Layout, PageTitle } from "../Components";

const About: React.FC<{}> = (): JSX.Element => {
  return (
    <Layout>
      <PageTitle title="About" subTitle="This is About Page." />
    </Layout>
  );
};

export default About;
