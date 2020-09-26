/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./reuseable/Footer"
import Navbar from "./reuseable/Navbar"
import "./bootstrap.min.css"
import "./layout.css"

const Layout =({children}) => (
  <>
  <Navbar></Navbar>
  {children}
  <Footer></Footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
