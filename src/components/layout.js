import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { preToCodeBlock } from "mdx-utils"
import Code from "./code"
import SEO from "../components/seo"
import Header from "../components/header"

const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <Code {...props} />
    } else {
      return <pre {...preProps} />
    }
  },
}

const Layout = ({ children }) => (

  <MDXProvider components={components}>
    <SEO />
    <Header />
    <div style={{ margin: `2rem auto 1rem`, maxWidth: 1080, padding: `0 2rem` }}>
      {children}
    </div>
  </MDXProvider>
)

export default Layout
