import React from "react"
import ContactForm from "../components/contactForm"
import ContactInfo from "../components/contactInfo"
import HeroOther from "../components/heroOthers"
import Layout from "../components/layout"
import ContactIllustration from "../images/illustration/contact-illustration.png"
import SEO from "../components/seo"

const ContactPage = () => {
  return (
    <div className="contact">
      <SEO pageTitle="Contact Us" />
      <Layout>
        <HeroOther
          title="contact"
          subtitle={[
            "We are here to answer your questions.",
            "And don’t worry,  we won't charge for a simple phone call.",
          ]}
          image={ContactIllustration}
        />
        <section className="section container">
          <div className="contact__formContainer">
            <h3>Please fill the form below for us to contact you</h3>
            <ContactForm />
          </div>
          <ContactInfo />
        </section>
      </Layout>
    </div>
  )
}

export default ContactPage
