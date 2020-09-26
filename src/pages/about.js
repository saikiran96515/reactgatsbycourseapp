import React from "react"
import { graphql } from "gatsby"
import HeroSection from '../components/reuseable/HeroSection'
import InfoBlock from '../components/reuseable/InfoBlock'
import DualInfoBlock from '../components/reuseable/DualInfoBlock'
import Teamphotosection from '../components/About/teamphotosection'

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
    img={data.img.childImageSharp.fluid}
    title="About learnCodeOnline"
    subtitle=""
    heroclass="about-background"
    />
    
    <DualInfoBlock heading="A message from CEO" image="https://images.pexels.com/photos/1092426/pexels-photo-1092426.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"/>
    <InfoBlock heading="About Vision" />
    <Teamphotosection />
  </Layout>
)

export const query =graphql`
{
  img : file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_fixed
        }
      }
    }
}`

export default AboutPage
