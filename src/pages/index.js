import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

import Layout from '../Layout';
import Home from './home';

import SEO from '../components/CustomComponents/Seo';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Máquina dos sonhos BeCapital"
      description="Máquina dos sonhos BeCapital"
    />
    <Home />
  </Layout>
);

export default IndexPage;
