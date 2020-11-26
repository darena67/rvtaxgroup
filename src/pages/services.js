import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import HeroOther from "../components/heroOthers"
import Layout from "../components/layout"
import ServicesIllustration from "../images/illustration/service-illustration.png"
import ServicePageCard from "../components/cards/service-card"

import SEO from "../components/seo"

const ServicePage = () => {
  let data = useStaticQuery(graphql`
    query ServicePage {
      pagesYaml(page: {eq: "services"}) {
        intro
        services_list {
          title
          subtitle
          desc
          service_image{
            childImageSharp {
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  data = data.pagesYaml;
  return (
    <div className="service">
      <SEO pageTitle="Services" />
      <Layout>
        <HeroOther
          title="services"
          subtitle={[
            "We are a one-stop-shop serving small cannabis businesses in the state of California. We handle all the essential accounting functions required by the IRS and local authorities. Eliminate your worries by outsourcing to us the following  tasks:",
          ]}
          image={ServicesIllustration}
          intro={data.intro}
        />
        <div className="container section">
          {data.services_list.map((item,index) =>(
            <ServicePageCard
            key={index}
            image={item.service_image.childImageSharp.fluid}
            title={item.title}
            subtitle={item.subtitle}
            content={item.desc}
            
          />
          ))}
        </div>
        <div className="cta-section container text-center">
          <h3 className="cta__text ">Need something else?</h3>
          <Link to="/contact" className="btn btn-cta">
            Lets Talk!
          </Link>
        </div>
      </Layout>
    </div>
  )
}

export default ServicePage
