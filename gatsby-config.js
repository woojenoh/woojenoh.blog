require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `제노로그`,
    siteTitleAlt: `제노로그`,
    siteHeadline: `제노로그`,
    siteUrl: `https://woojenoh.blog`,
    siteDescription: `제노로그`,
    siteLanguage: `ko`,
    siteImage: `/banner.png`,
    author: `woojenoh`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Email`,
            url: `mailto:woojenoh@gmail.com`,
          }
        ],
        formatString: 'YYYY.MM.DD',
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`],
        interval: 300,
        timeout: 30000,
        web: [
          {
            name: `Nanum Gothic`,
            file: `https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap`,
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `제노로그`,
        short_name: `제노로그`,
        description: `제노로그`,
        start_url: `/`,
        background_color: `#fff`,
        display: `standalone`,
        icons: [],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title: siteTitle
                description: siteDescription
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allPost } }) =>
              allPost.nodes.map((post) => {
                const url = site.siteMetadata.siteUrl + post.slug
                const content = `<p>${post.excerpt}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${url}">Keep reading</a>.</strong></div><br /> <br />`

                return {
                  title: post.title,
                  date: post.date,
                  excerpt: post.excerpt,
                  url,
                  guid: url,
                  custom_elements: [{ "content:encoded": content }],
                }
              }),
            query: `
              {
                allPost(sort: { fields: date, order: DESC }) {
                  nodes {
                    title
                    date(formatString: "MMMM D, YYYY")
                    excerpt
                    slug
                  }
                }
              }
            `,
            output: `rss.xml`,
            title: `제노로그`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
          shortname: `woojenoh`
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
          trackingIds: [
            `G-F9X3CFQ3LG`
          ],
          pluginConfig: {
            head: true
          }
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
