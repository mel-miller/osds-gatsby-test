import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"


export default function ComponentExample({ data }) {
  const comp = data.mdx
  return (
    <Layout>
      <div className="component-example">
        <h1>{comp.frontmatter.title}</h1>
        <MDXRenderer>{comp.body}</MDXRenderer>
      </div>
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
