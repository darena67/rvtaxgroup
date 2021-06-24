import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import HeroOther from "../components/heroOthers";
import Layout from "../components/layout";
import AboutCard from "../components/aboutCard";
import AboutInfoList from "../components/aboutInfolist";
import SEO from "../components/seo";

import { GatsbyImage } from "gatsby-plugin-image";

const AboutPage = () => {
  const data = useStaticQuery(graphql`query AboutPage {
  pagesYaml(page: {eq: "about"}) {
    intro
    page
    team {
      name
      position
      desc
      photo {
        childImageSharp {
          gatsbyImageData(width: 400, layout: CONSTRAINED, placeholder: BLURRED, backgroundColor: "white")
        }
      }
    }
  }
  AboutIllustrationImage: file(
    relativePath: {eq: "illustration/about-illustration.png"}
  ) {
    childImageSharp {
      gatsbyImageData(width: 1920, layout: CONSTRAINED, placeholder: BLURRED, backgroundColor: "white")
    }
  }
  AboutIllustration2Image: file(
    relativePath: {eq: "illustration/about-illustration2.png"}
  ) {
    childImageSharp {
      gatsbyImageData(width: 1920, layout: CONSTRAINED, placeholder: BLURRED, backgroundColor: "white")
    }
  }
  CertificationIconImage: file(relativePath: {eq: "pricing_certification1.png"}) {
    childImageSharp {
      gatsbyImageData(height: 250, layout: CONSTRAINED, placeholder: BLURRED, backgroundColor: "white")
    }
  }
  Certification2IconImage: file(relativePath: {eq: "pricing_certification2.png"}) {
    childImageSharp {
      gatsbyImageData(height: 170, layout: CONSTRAINED, placeholder: BLURRED, backgroundColor: "white")
    }
  }
}
`);
//  console.log(data);
  return (
    <div className="about">

      <SEO
        pageTitle="About us"
        description="Click here to find out about our tax qualifications and experience!"
      />

      <Layout>

        <HeroOther
          title="about us"
          subtitle={[
            "Cannabis is your passion. Accounting is our specialty.",
            "Whether it is bookkeeping, tax preparation or audits.",
            "- we are here to help",
          ]}
          intro={data.pagesYaml.intro}
          image={data.AboutIllustrationImage.childImageSharp.gatsbyImageData}
        />

        <div className="about__section section container">
          {data.pagesYaml.team.map((item) => (
            <AboutCard
              photo={item.photo.childImageSharp.gatsbyImageData}
              name={item.name}
              position={item.position}
              desc={item.desc}
            />
          ))}
        </div>

        <h3 className="about__desc  container text-center">
          We are both excited about the legalization of marijuana and are very
          happy to be part of an industry that helps so many people
        </h3>

        <div className="about__infoList section bg-info-blue text-light ">
          <AboutInfoList image={data.AboutIllustration2Image.childImageSharp.gatsbyImageData} />
        </div>

        <div className="section text-center">

            <h3 className="cta-section section-title">Our Certifications</h3>

            <GatsbyImage image={data.CertificationIconImage.childImageSharp.gatsbyImageData} alt="Certified Public Accountant" />
            <GatsbyImage image={data.Certification2IconImage.childImageSharp.gatsbyImageData} alt="Enrolled Agent Certification" />

          </div>

        </div>
          <div className="cta-section container text-center">
          <h3 className="cta__text ">
            Are things like taxes & bookkeeping keeping you from running your
            business?
          </h3>

          <Link to="/contact/" className="btn btn-cta">
            Lets Talk!
          </Link>
          </div>

      </Layout>

    </div>
  );
};

export default AboutPage;
