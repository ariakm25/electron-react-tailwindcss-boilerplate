import React from "react";
import { Layout, PageTitle } from "../Components";

const Home: React.FC<{}> = (): JSX.Element => {
  return (
    <Layout>
      <PageTitle title="Home" subTitle="This is Home Page." />
    </Layout>
  );
};

export default Home;
