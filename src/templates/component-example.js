import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from 'styled-components'
import Layout from "../components/layout"


const Wrapper = styled.div`
  h1 {
    margin-bottom: 1rem;
  }  
  h2 {
    font-size: 22px;
    font-weight: 600;
    display: block;
    margin: 3rem 0 0.5rem;
  }
  .gatsby-highlight pre {
    padding: 1rem;
    margin: 0;
    background-color: #202020 !important;
  }
  .prism-code {
    font-size: 15px;
  }
`

export default function ComponentExample({ data }) {
  const comp = data.mdx
  return (
    <Layout>
      <Wrapper className="component-example">
        <MDXRenderer>{comp.body}</MDXRenderer>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
    }
  }
`
