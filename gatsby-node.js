const path = require('path')

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        const articleTemplate = path.resolve('src/templates/article-template.js')
        
        resolve(
            graphql(`
        {
            article: allStrapiArticle {
                edges {
                  node {
                    slug
                    id
              }
            }
          }
        }
        `).then((result) => {
            result.data.article.edges.forEach((edge) => {
                createPage({
                    path: edge.node.slug,
                    component: articleTemplate,
                    context: {
                        slug: edge.node.slug
                    }
                })
            })
            return
            })
        )
    })
}