import React from "react";
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import '../styles/articles.scss'

const Zizek = ({ data }) => {

    const { zizek: { nodes: zizek },
    } = data
    return (
        <Layout>
            <div className="articles-wrapper">
                <div className="articles-container">
                    {zizek.map((ziz) => {
                        return (
                            <Link to={`../${ziz.slug}`}>
                                <div className="card-wrapper">
                                    <div className="blog-card">
                                        <img className="blog-img" alt="img" src={ziz.image.childImageSharp.fluid.src} />
                                        <div className="text-overlay">
                                            <h2>{ziz.title}</h2>
                                            <p>{ziz.description}
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

export default Zizek

export const pageQuery = graphql`
    {
        zizek: allStrapiArticle(filter: {category: {name: {eq: "zizek-calismalari"}}}) {
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