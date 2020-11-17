import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import HeroOther from "../components/heroOthers"
import PricingIllustration from "../images/illustration/pricing-illustration.png"
import PricingCard from "../components/cards/pricing"
import db from "../data/data"

import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import Certification1 from "../images/pricing_certification1.png"
import Certification2 from "../images/pricing_certification2.png"
import SEO from "../components/seo"

const PricingPage = () => {
  return (
    <div className="pricing">
      <SEO pageTitle="Pricing" />
      <Layout>
        <HeroOther
          title="pricing"
          subtitle={["Find the plan that’s just right for your business"]}
          image={PricingIllustration}
        />
        <div className="pricing__cardContainer section container">
          {db.pricing.map(item => (
            <PricingCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              price={item.pricing}
              featureTitle={item.featureTitle}
              feature={item.feature}
            />
          ))}
        </div>
        <div className=" cta-section container text-center">
          <h3 className="cta__text ">
            Is your package missing something ? Please contact for a customized
            plan
          </h3>
          <Link to="/contact" className="btn btn-cta">
            Inquire
          </Link>
        </div>

        <div className="faq-section section bg-info-blue text-light">
          <div className="container">
            <div className="faq__left">
              <h3 className="faq__title bold">Frequently Asked Questions</h3>
              <h6 className="faq__subtitle">
                Have a different question about how we work or the pricing plans
                available? Get in touch with us.
              </h6>
            </div>
            <div className="faq__right">
              {db.pricing_question.map(item => (
                <Accordion key={item.id}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                  >
                    <Typography className="faq__question">
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="faq__answer">
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <h2 className="section-title">Our Certifications</h2>
            <div className="pricing__certification">
              <img src={Certification1} alt="Certification" />
              <img src={Certification2} alt="Certification" />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default PricingPage
