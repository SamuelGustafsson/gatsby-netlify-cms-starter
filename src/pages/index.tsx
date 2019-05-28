import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log("DATA", data)

  let test: string = "katt"

  return (
    <Layout>
      <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1>
    </Layout>
  )
}

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
`
