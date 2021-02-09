const name = 'Daria Nagal';
const siteUrl = 'https://redeyecpa.com';
const description = 'Cannabis CPA serving dispensaries, distributors and cultivators in the state of California.'

module.exports = {
  siteMetadata: {
    title: `Red Eye CPA`,
    description: description,
    author: name,
    siteUrl: siteUrl,
  },
  plugins: [
	  {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name,
        short_name: 'DN',
        description,
        start_url: '/',
        icon: 'src/images/redeye_logo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl,
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    `gatsby-plugin-sass`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-slug`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogImages`,
        path: `${__dirname}/content/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 590,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images-v2`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
            },
          },
        ],
      },
    },
		{
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-178386410-1', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: false, // default
          allowAdFeatures: false // default
        },
        googleTagManager: {
          trackingId: '', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-tagmanager', // default
          dataLayerName: 'dataLayer', // default
        },
        facebookPixel: {
          pixelId: '2834012876844507', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-facebook-pixel', // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },
  ],
};
