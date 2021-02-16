// import React from "react";
// // import { Link } from 'gatsby'
// import Layout from '../components/layout'
// import { graphql, Link } from 'gatsby'
// import '../styles/articles.scss'

// const Article = ({ data }) => {

//     const { articles: { nodes: article },
//     } = data
//     return (
//         <Layout>
//             <div className="articles-wrapper">
//                 <div className="articles-container">
//                     {article.map((articl) => {
//                         return (
//                             <Link to={`../${articl.slug}`}>
//                                 <div className="card-wrapper">
//                                     <div className="blog-card">

//                                         <img className="blog-img" alt="img" src={articl.image.childImageSharp.fluid.src} />
//                                         <div className="text-overlay">
//                                             <h2>{articl.title}</h2>
//                                             <p>{articl.description}
//                                             </p>
//                                         </div>
//                                     </div>
//                                     <div className="credit">Created by <a className="creator-link" href="https://brettstevenson.io">Brett Stevenson</a></div>
//                                 </div>
//                             </Link>
//                         )
//                     })}
//                 </div>
//             </div>
//         </Layout>
//     )

// }

// export default Article
// // (filter: {category: {name: {eq: "makale"}}}) 
// export const pageQuery = graphql`
//     {
//         articles: allStrapiArticle{
//             nodes {
//               title
//               author {
//                 name
//                 id
//               }
//               slug
//               description
//               id
//               slug
//             publishedAt
//             image {
//                 childImageSharp {
//                 fluid {
//                     src
//                 }
//                 }
//                 id
//             }
//             }
//           }
//     }
//   `
