import React from "react"
import { graphql } from "gatsby"
import HeroSection from '../components/reuseable/HeroSection'
import InfoBlock from '../components/reuseable/InfoBlock'

import Contact from '../components/Contact/contact' 
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
    img={data.img.childImageSharp.fluid}
    title="Contact Us"
    subtitle=""
    heroclass="about-background"
    />
    
    
    <InfoBlock heading="How can we help" />
    <Contact />
  </Layout>
)

export const query =graphql`
{
  img : file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
}`

export default ContactPage
