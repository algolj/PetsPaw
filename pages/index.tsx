import type { NextPage } from 'next';

import Home from '../components/home';
import Layout from '../components/layout';

const Main: NextPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default Main;
