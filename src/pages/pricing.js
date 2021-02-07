import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import HeroOther from "../components/heroOthers";
import PricingCard from "../components/cards/pricing";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import SEO from "../components/seo";
import Img from "gatsby-image"

const PricingPage = () => {
  let data = useStaticQuery(graphql`
    query PricingPage {
      pagesYaml(page: { eq: "pricing" }) {
        intro
        faqs {
          answer
          question
        }
        packages {
          feature_title
          feature {
            text
          }
          name
          desc
          pricing
        }
      }
    PricingIllustrationImage: file(relativePath: { eq: "illustration/pricing-illustration.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    CertificationIconImage: file(relativePath: { eq: "pricing_certification1.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 250) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
		}
    Certification2IconImage: file(relativePath: { eq: "pricing_certification2.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
		}
   }
  `);
  const data_yaml = data.pagesYaml;
  return (
    <div className="pricing">
      <SEO
        pageTitle="Pricing"
        description="Affordable Cannabis CPA for dispensaries, retailers and growers in the state of California. We offer different pricing packages and we are always at front about our fees. Check our website for more information."
      />
      <Layout>
        <HeroOther
          title="pricing"
          subtitle={["Find the plan that’s just right for your business"]}
          image={data.PricingIllustrationImage.childImageSharp.fluid}
          intro={data_yaml.intro}
        />
        <div className="pricing__cardContainer section container">
          {data_yaml.packages.map((item, index) => (
            <PricingCard
              key={index}
              title={item.name}
              subtitle={item.desc}
              price={item.pricing}
              featureTitle={item.feature_title}
              feature={item.feature}
            />
          ))}
        </div>
        <div className=" cta-section container text-center">
          <h3 className="cta__text ">
            Are these plans not your cup of tea? Please contact us for a customized
            plan.
          </h3>
          <Link to="/contact/" className="btn btn-cta">
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
              {data_yaml.faqs.map((item, index) => (
                <Accordion key={index}>
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
              <Img fluid={data.CertificationIconImage.childImageSharp.fluid} alt="Certification" />
              <Img fluid={data.Certification2IconImage.childImageSharp.fluid} alt="Certification" />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default PricingPage;
