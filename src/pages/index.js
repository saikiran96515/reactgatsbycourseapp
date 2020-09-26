import React from "react"
import { graphql } from "gatsby"
import HeroSection from '../components/reuseable/HeroSection'
import InfoBlock from '../components/reuseable/InfoBlock'
import DualInfoBlock from '../components/reuseable/DualInfoBlock'
import CourseCart from '../components/Cart/CourseCart'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
    img={data.img.childImageSharp.fluid}
    title="I write Code"
    subtitle="LearnCodeOnline.in"
    heroclass="hero-background"
    />
    <InfoBlock heading="About Us" />
    <CourseCart  courses ={data.courses} />
    <DualInfoBlock heading="our team" image="https://images.pexels.com/photos/1092426/pexels-photo-1092426.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"/>
  </Layout>
)

export const query =graphql`
{
  img : file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_fixed
        }
      }
    }

    courses :allContentfulCourses{
      edges{
        node{
          id
          title
          price
          category
          description{
            description
          }
          image{
           fixed(width:200,height:200){
            ...GatsbyContentfulFixed_fixed
          }
        }
      }
    }
    }
}`

export default IndexPage
