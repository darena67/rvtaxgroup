import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
// import BackgroundImage from "gatsby-background-image"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import "./home-blog-card.scss"

const BlogCard = ({ image, title, date, content }) => {
  // const file = "blog-1.jpg"

  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       blog: file(relativePath: { eq: "blog-1.jpg" }) {
  //         childImageSharp {
  //           fluid(maxWidth: 400) {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   `
  // )
  return (
    <div className="blogCard">
      <img src={image} alt="" />
      {/* <BackgroundImage
        className="blogCard__image"
        fluid={data.blog.childImageSharp.fluid}
      /> */}
      <div className="blogCard__textContainer">
        <h3 className="blogCard__title">{title}</h3>
        <h5 className="blogCard__date">{date}</h5>
        <p className="blogCard__content">{content}</p>
        <Link to="/blog" className="blogCard__readmore">
          Read the blog
          <ArrowForwardIcon className="icon" />
        </Link>
      </div>
    </div>
  )
}

export default BlogCard
