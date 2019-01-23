const path = require(`path`);

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-prismic`,
            options: {
                repositoryName: `anoun`,
                accessToken: `${process.env.API_KEY}`,
                linkResolver: ({ node, key, value }) => post => `/${post.uid}`
            }
        },
        // Setup for optimised images.
        // See https://www.gatsbyjs.org/packages/gatsby-image/
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: path.join(__dirname, `src`, `images`),
                name: `images`
            }
        },
    ]
};