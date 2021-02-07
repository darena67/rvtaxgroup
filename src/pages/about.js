import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import HeroOther from "../components/heroOthers";
import Layout from "../components/layout";
import AboutCard from "../components/aboutCard";
import AboutInfoList from "../components/aboutInfolist";
import SEO from "../components/seo";

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query AboutPage {
      pagesYaml(page: { eq: "about" }) {
        intro
        page
        team {
          name
          position
          desc
          photo {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      AboutIllustrationImage: file(relativePath: { eq: "illustration/about-illustration.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      AboutIllustration2Image: file(relativePath: { eq: "illustration/about-illustration2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);
  console.log(data);
  return (
    <div className="about">
      <SEO
        pageTitle="About us"
        description="Accountants with over 16 years of combined experience serving Cannabis industry in California. Click here to read more."
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
          image={data.AboutIllustrationImage.childImageSharp.fluid}
        />
        <div className="about__section section container">
          {data.pagesYaml.team.map((item) => (
            <AboutCard
              photo={item.photo.childImageSharp.fluid}
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
          <AboutInfoList image={data.AboutIllustration2Image.childImageSharp.fluid} />
        </div>
        <div className="section  container text-center">
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
