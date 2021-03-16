import React from 'react';
import { Link } from 'gatsby';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './home-blog-card.scss';
import { GatsbyImage } from "gatsby-plugin-image";

const BlogCard = ({ image, title, date, content, slug }) => {
  return (
        <Link to={`/blog${slug}`} className='blogCard__readmore'>
    <div className='blogCard'>
    <GatsbyImage image={image} className="blog__image" alt="Blog Image" />
      <div className='blogCard__textContainer'>
        <h3 className='blogCard__title'>{title}</h3>
        <h5 className='blogCard__date'>{date}</h5>
        <p className='blogCard__content'>{content}</p>
          Read the blog
          <ArrowForwardIcon className='icon' />
      </div>
    </div>
        </Link>
  );
};

export default BlogCard;
