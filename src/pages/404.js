import React from 'react';

import Layout from '../Layout';
import SEO from '../components/CustomComponents/Seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Não encontrado" />
    <h1>404: Não encontrado</h1>
    <p>Você acabou de tentar acessar uma página que não existe.</p>
  </Layout>
);

export default NotFoundPage;
