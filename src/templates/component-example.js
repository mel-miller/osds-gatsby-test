import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"

export default function ComponentExample({ data }) {
  const comp = data.mdx
  return (
    <Layout pageTitle={comp.frontmatter.title}>
      <MDXRenderer>{comp.body}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`
