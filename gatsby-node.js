const path = require(`path`)

// pages locale
exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions
    deletePage(page)
    // You can access the variable "locale" in your page queries now
    createPage({
        ...page,
        context: {
            ...page.context,
            locale: page.context.intl.language,
        },
    })
}

// blog posts
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

// const path = require('path')

// exports.createPages = ({ graphql, actions }) => {
//     const { createPage } = actions
//     return new Promise((resolve, reject) => {
//         const articleTemplate = path.resolve('src/templates/article-template.js')

//         resolve(
//             graphql(`
//         {
//             article: allStrapiArticle {
//                 edges {
//                   node {
//                     slug
//                     id
//               }
//             }
//           }
//         }
//         `).then((result) => {
//             result.data.article.edges.forEach((edge) => {
//                 createPage({
//                     path: edge.node.slug,
//                     component: articleTemplate,
//                     context: {
//                         slug: edge.node.slug
//                     }
//                 })
//             })
//             return
//             })
//         )
//     })
// }