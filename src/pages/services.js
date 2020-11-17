import React from "react"
import { Link } from "gatsby"
import HeroOther from "../components/heroOthers"
import Layout from "../components/layout"
import ServicesIllustration from "../images/illustration/service-illustration.png"
import db from "../data/data"
import ServicePageCard from "../components/cards/service-card"

import AboutImage from "../images/about_1.png"
import SEO from "../components/seo"

const ServicePage = () => {
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
        />
        <div className="container section">
          {db.service.map(item => (
            <ServicePageCard
              key={item.id}
              image={AboutImage}
              title={item.title}
              subtitle={item.subtitle}
              content={item.content}
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
