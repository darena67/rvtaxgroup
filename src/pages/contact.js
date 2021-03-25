import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ContactForm from "../components/contactForm";
import ContactInfo from "../components/contactInfo";
import HeroOther from "../components/heroOthers";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ContactPage = () => {
  let data = useStaticQuery(graphql`
    query ContactPage {
      pagesYaml(page: { eq: "contact" }) {
        email
        phone
        intro
        address
      }
			ContactIllustration: file(relativePath: {eq: "illustration/contact-illustration.png"}) {
				childImageSharp {
					gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
				}
			}
    }
  `);
  const data_yaml = data.pagesYaml;
  return (
    <div className="contact">
      <SEO
        pageTitle="Contact Us"
        description="We are here to answer your questions. And don’t worry, we won't charge for a simple phone call."
      />
      <Layout>
        <HeroOther
          title="contact"
          intro={data_yaml.intro}
          image={data.ContactIllustration.childImageSharp.gatsbyImageData}
        />
        <section className="section container">
          <div className="contact__formContainer">
            <h3>Please fill the form below for us to contact you</h3>
            <ContactForm />
          </div>
          <ContactInfo
            phone={data_yaml.phone}
            address={data_yaml.address}
            email={data_yaml.email}
          />
        </section>
      </Layout>
    </div>
  );
};

export default ContactPage;
