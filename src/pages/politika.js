// import React from "react";
// import Layout from '../components/layout'
// import { graphql, Link } from 'gatsby'
// import '../styles/articles.scss'

// const Politics = ({ data }) => {

//     const { politics: { nodes: politics },
//     } = data
//     return (
//         <Layout>
//             <div className="articles-wrapper">
//                 <div className="articles-container">
//                     {politics.map((politic) => {
//                         return (
//                             <Link to={`../${politic.slug}`}>
//                                 <div className="card-wrapper">
//                                     <div className="blog-card">
//                                         <img className="blog-img" alt="img" src={politic.image.childImageSharp.fluid.src} />
//                                         <div className="text-overlay">
//                                             <h2>{politic.title}</h2>
//                                             <p>{politic.description}
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

// export default Politics
// // (filter: {category: {name: {eq: "politika"}}}) 
// export const pageQuery = graphql`
//     {
//         politics: allStrapiArticle{
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