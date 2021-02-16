// import React from "react";
// // import { Link } from 'gatsby'
// import Layout from '../components/layout'
// import { graphql, Link } from 'gatsby'
// import '../styles/articles.scss'

// const Book = ({ data }) => {

//     const { books: { nodes: books },
//     } = data
//     // console.log(article.title)
//     return (
//         <Layout>
//             <div className="articles-wrapper">
//                 <div className="articles-container">
//                     {books.map((book) => {
//                         return (
//                             <Link to={`../${book.slug}`}>
//                                 <div className="card-wrapper">
//                                     <div className="blog-card">
//                                         <img className="blog-img" alt="img" src={book.image.childImageSharp.fluid.src} />
//                                         <div className="text-overlay">
//                                             <h2>{book.title}</h2>
//                                             <p>{book.description}
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

// export default Book
// // (filter: {category: {name: {eq: "kitap"}}})
// export const pageQuery = graphql`
//     {
//         books: allStrapiArticle {
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