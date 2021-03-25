import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import HeroOther from "../components/heroOthers";
import Layout from "../components/layout";
import ServicePageCard from "../components/cards/service-card";

import SEO from "../components/seo";

const ServicePage = () => {
  let data = useStaticQuery(graphql`query ServicePage {
  pagesYaml(page: {eq: "services"}) {
    intro
    services_list {
      title
      subtitle
      desc
      service_image {
        childImageSharp {
          gatsbyImageData(width: 200, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
  ServiceIllustrationImage: file(
    relativePath: {eq: "illustration/service-illustration.png"}
  ) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
    }
  }
}
`);
  const data_yaml = data.pagesYaml;
  return (
    <div className="service">
      <SEO
        pageTitle="Services"
        description="Red Eye CPA offers affordable accounting services such as business and individual tax preparation, local tax returns, bookkeeping, set up of POS tax withholdings, and the IRS, FTB and CDTFA representation. Click here to learn more!"
      />
      <Layout>
        <HeroOther
          title="services"
          subtitle={[
            "We are a one-stop-shop serving small cannabis businesses in the state of California. We handle all the essential accounting functions required by the IRS and local authorities. Eliminate your worries by outsourcing to us the following  tasks:",
          ]}
          image={data.ServiceIllustrationImage.childImageSharp.gatsbyImageData}
          intro={data_yaml.intro}
        />
        <div className="container section">
          {data_yaml.services_list.map((item, index) => (
            <ServicePageCard
              key={index}
              image={item.service_image.childImageSharp.gatsbyImageData}
              title={item.title}
              subtitle={item.subtitle}
              content={item.desc}
            />
          ))}
        </div>
        <div className="cta-section container text-center">
          <h3 className="cta__text ">Need something else?</h3>
          <Link to="/contact/" className="btn btn-cta">
            Lets Talk!
          </Link>
        </div>
      </Layout>
    </div>
  );
};

export default ServicePage;
