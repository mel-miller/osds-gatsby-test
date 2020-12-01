import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { preToCodeBlock } from "mdx-utils"
import Code from "./code"
import SEO from "../components/seo"
import "./layout.css"

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
    <div style={{ margin: `3rem auto`, maxWidth: 960, padding: `0 1rem` }}>
      {children}
    </div>
  </MDXProvider>
)

export default Layout
