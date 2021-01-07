import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"

const Home = () => (
  <Layout>
    <h1>Home</h1>
    <p>This demo site is built with <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer" className="osds-link">Gatsby</a> to test the implementation of OSDS components. The stylesheet was added via the CDN and the markup was created via React Components.</p>
    <p>At this time the following components have example pages:</p>

    <ul className="osds-list-ul">
      <li className="osds-list-item"><Link className="osds-link" to="/accordions">Accordions</Link></li>
      <li className="osds-list-item"><Link className="osds-link" to="/alerts">Alerts</Link></li>
      <li className="osds-list-item"><Link className="osds-link" to="/buttons">Buttons</Link></li>
    </ul>
  </Layout>
)

export default Home
