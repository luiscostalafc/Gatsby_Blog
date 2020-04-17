import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import PostItem from '../components/PostItem';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about/"
      background="blue"
      category="Misc"
      date="16 de Abril de 2020"
      timeToRead="5"
      title="O título..."
      description="A descrição...."
    
    />
     
  </Layout>
)

export default IndexPage
