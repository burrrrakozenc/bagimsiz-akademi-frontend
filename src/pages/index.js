import React from "react"
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import Image from "gatsby-image"
import * as PropTypes from 'prop-types'
import '../styles/layout.css'
import "../styles/framework.css"
import { Carousel } from 'react-responsive-carousel'
// import Footer from '../components/footer'

// import '../styles/indexCarousel.css'

const propTypes = {
  data: PropTypes.object.isRequired,
}



// const IndexPage = ({ data }) => {
//   const { allStrapiArticle: { nodes: home },
//   } = data

class IndexPage extends React.Component {
  render() {
    const Gallery = this.props.data.gallery.nodes
    const NavList = this.props.data.navList.nodes
    const IndexArticles = this.props.data.indexArticles.nodes

    return (
      <Layout>
          <div className="wrapper">
            <div className="bgded">
              <div id="pageintro" className="hoc clear">
                <div className="intro-wrapper">
                  <div className="pageintro-left">
                    {/* <div className=""> */}
                    <Carousel showThumbs={false}
                      showStatus={false}
                      useKeyboardArrows
                      className="presentation-mode"
                      infiniteLoop={true}
                      autoPlay={true}
                      dynamicHeight={false}
                    >
                      {Gallery.map((articleGallery) => {
                        return (<Link to={`../${articleGallery.slug}`}>
                          <Image key={articleGallery.id}
                            fluid={articleGallery.image.localFile.childImageSharp.fluid}
                            alt={articleGallery.title}
                            style={{
                              height: '38vh'
                            }}
                          />
                          <p style={{ fontSize: '15px', textTransform: 'none' }}>{articleGallery.description}</p>
                        </Link>
                        )
                      })}
                    </Carousel>
                    {/* </div> */}
                  </div>
                  <div className="pageintro-right"
                  // style={{
                  //   marginTop:'3rem',
                  // }}
                  >
                    <ul>
                      {NavList.map((articleList) => {
                        return (
                          <li key={articleList.id}>
                            <Link to={`../${articleList.slug}`}>{articleList.title}</Link>
                            <span>Yazar:{articleList.author.name}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="articles-wrapper" style={{paddingBottom:'5rem'}}>
            <div className="articles-container">
              {IndexArticles.map((article) => {
                return (
                  <Link key={article.id} to={`../${article.slug}`}>
                    <div className="card-wrapper">
                      <div className="blog-card">
                        <img className="blog-img" alt="img" src={article.image.localFile.childImageSharp.fluid.src} />
                        <div className="text-overlay">
                          <h2>{article.title}</h2>
                          <p>{article.description}
                          </p>
                        </div>
                      </div>
                      {/* <div className="credit">Yazar<a className="creator-link" href="https://brettstevenson.io">{article.author.name}</a></div> */}
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
          {/* <div className="center"> */}
              {/* </div> */}
              {/* <div className="one_third">
                <h6 className="heading">Elit eros congue nunc</h6>
                <ul className="nospace linklist">
                  <li>
                    <article>
                      <h2 className="nospace font-x1"><Link href="#">Curabitur lacinia neque</Link></h2>
                      <time className="font-xs block btmspace-10" datetime="2045-04-06">Friday, 6<sup>th</sup> April 2045</time>
                      <p className="nospace">Purus eget luctus rutrum ex quam semper libero lectus mauris eget [&hellip;]</p>
                    </article>
                  </li>
                  <li>
                    <article>
                      <h2 className="nospace font-x1"><Link href="#">Non molestie pulvinar</Link></h2>
                      <time className="font-xs block btmspace-10" datetime="2045-04-05">Thursday, 5<sup>th</sup> April 2045</time>
                      <p className="nospace">Quam ut arcu tristique est accumsan pretium nulla ut ullamcorper [&hellip;]</p>
                    </article>
                  </li>
                </ul>
              </div>
              <div className="one_third">
                <h6 className="heading">Vulputate justo</h6>
                <p className="nospace btmspace-30">Elit donec vel tincidunt turpis curabitur ac nibh condimentum finibus orci a.</p>
                <form method="post" action="#">
                  <fieldset>
                    <legend>Newsletter:</legend>
                    <input className="btmspace-15" type="text" value="" placeholder="Name" />
                    <input className="btmspace-15" type="text" value="" placeholder="Email" />
                    <button type="submit" value="submit">Submit</button>
                  </fieldset>
                </form>
              </div> */}
            {/* </footer> */}
          {/* </div> */}
        {/* <Footer/> */}
      </Layout>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

// , limit: 10

export const query = graphql`
query {
              gallery: allStrapiArticle(sort: {order: DESC, fields: publishedAt}) {
              nodes {
              title
              slug
              publishedAt
              image {
                      localFile{
                      childImageSharp {
                      fluid {
                      src
                    }
                }
                id
              }
              id
              }
              author {
                      name
                id
              }
              id
              description
            }
          }

  navList: allStrapiArticle(sort: {order: DESC, fields: publishedAt}) {
              nodes {
              title
              slug
              publishedAt
              image {
                      localFile{
                      childImageSharp {
                      fluid {
                      src
                    }
                }
                id
              }
              id
              }
              author {
                      name
                id
              }
              id
              description
            }
          }
  indexArticles: allStrapiArticle(limit: 3) {
    nodes {
      author {
        name
        id
      }
      description
      id
      slug
      title
      image {
        localFile {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
}


`