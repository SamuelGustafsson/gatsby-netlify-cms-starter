import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import HeroImage from "../shared/hero-image";

export default ({ data }) => {
  return (
    <Layout>
      <HeroImage />
      <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1>
    </Layout>
  );
};

// tslint:disable-next-line:typedef
export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          headings {
            depth
            value
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
