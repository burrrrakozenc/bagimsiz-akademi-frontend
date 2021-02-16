import React from "react";
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import '../styles/articles.scss'

const Bagimsiz = ({ data }) => {

    const { bagimsiz: { nodes: bagimsiz },
    } = data
    return (
        <Layout>
            <div className="articles-wrapper">
                <div className="articles-container">
                    {bagimsiz.map((bag) => {
                        return (
                            <Link to={`../${bag.slug}`}>
                                <div className="card-wrapper">
                                    <div className="blog-card">
                                        <img className="blog-img" alt="img" src={bag.image.localFile.childImageSharp.fluid.src} />
                                        <div className="text-overlay">
                                            <h2>{bag.title}</h2>
                                            <p>{bag.description}
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

export default Bagimsiz

export const pageQuery = graphql`
    {
        bagimsiz: allStrapiArticle{
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
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
                    id
                  }
                  id
                }
                id
              }
              id
            }
          }
    }
  `