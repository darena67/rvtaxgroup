import React from "react"
import { Link } from "gatsby"
import HeroOther from "../components/heroOthers"
import Layout from "../components/layout"
import AboutIllustration from "../images/illustration/about-illustration.png"
import About2Illustration from "../images/illustration/about-illustration2.png"
import DariaPhoto from "../images/about_daria.jpg"
import SvetlanaPhoto from "../images/about_svetlana.jpg"
import AboutCard from "../components/aboutCard"
import AboutInfoList from "../components/aboutInfolist"
import SEO from "../components/seo"

const AboutPage = () => (
  <div className="about">
    <SEO pageTitle="About us" />
    <Layout>
      <HeroOther
        title="about us"
        subtitle={[
          "Cannabis is your passion. Accounting is our specialty.",
          "Whether it is bookkeeping, tax preparation or audits.",
          "- we are here to help",
        ]}
        image={AboutIllustration}
      />
      <div className="about__section section container">
        {/* <div className="about__card">
          <img src={DariaPhoto} alt="Daria " />
          <div className="about__CardContent">
            <h3 className="about__title">
              Daria Nagal <span className="about__subtitle">CPA, EA</span>
            </h3>
            <p>
              Daria is a Certified Public Accountant and an Enrolled Agent. She
              has over six years experience in Public Accounting, where she
              primarily focused on the taxation of small businesses, real estate
              entities, and high-net-worth individuals.
            </p>
            <p>
              Daria learned all ins and outs of the Cannabis Industry at a large
              dispensary and distributor, where she oversaw local tax
              compliance. At Red Eye CPA Daria is in charge of section 280 E
              mitigation and local taxes.
            </p>
          </div>
        </div> */}
        <AboutCard image={DariaPhoto} name="Daria Nagal" />
        <AboutCard image={SvetlanaPhoto} name="Svetlana Diaz" />
      </div>
      <h3 className="about__desc  container text-center">
        We are both excited about the legalization of marijuana and are very
        happy to be part of an industry that helps so many people
      </h3>

      <div className="about__infoList section bg-info-blue text-light ">
        <AboutInfoList image={About2Illustration} />
      </div>
      <div className="section  container text-center">
        <h3 className="cta__text ">
          Are things like taxes & bookkeeping keeping you from running your
          business?
        </h3>
        <Link to="/contact" className="btn btn-cta">
          Lets Talk!
        </Link>
      </div>
    </Layout>
  </div>
)

export default AboutPage
