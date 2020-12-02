import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"

const Home = () => (
  <Layout>
    <p>This demo site is built with <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer" class="osds-link">Gatsby</a> to test the implementation of OSDS components. The stylesheet was added via the CDN and the markup was created via React Components.</p>
    <p>The following components have example pages:</p>

    <ul class="osds-list-ul">
      <li class="osds-list-item"><Link class="osds-link" to="/alerts">Alerts</Link></li>
      <li class="osds-list-item"><Link class="osds-link" to="/buttons">Buttons</Link></li>
    </ul>
  </Layout>
)

export default Home
