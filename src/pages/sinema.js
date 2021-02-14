import React from "react";
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import '../styles/articles.scss'

const Cinema = ({ data }) => {

    const { cinemas: { nodes: cinema },
    } = data
    // console.log(article.title)
    return (
        <Layout>
            <div className="articles-wrapper">
                <div className="articles-container">
                    {cinema.map((cine) => {
                        return (
                            <Link to={`../${cine.slug}`}>
                                <div className="card-wrapper">
                                    <div className="blog-card">
                                        <img className="blog-img" alt="img" src={cine.image.childImageSharp.fluid.src} />
                                        <div className="text-overlay">
                                            <h2>{cine.title}</h2>
                                            <p>{cine.description}
                                            </p>
                                        </div>

                                    </div>
                                    <div className="credit">Created by <a className="creator-link" href="https://brettstevenson.io">Brett Stevenson</a></div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </Layout>
    )

}

export default Cinema

export const pageQuery = graphql`
    {
        cinemas: allStrapiArticle(filter: {category: {name: {eq: "sinema"}}}) {
            nodes {
              title
              author {
                name
                id
              }
              slug
              description
              id
              slug
            publishedAt
            image {
                childImageSharp {
                fluid {
                    src
                }
                }
                id
            }
            }
          }
    }
  `