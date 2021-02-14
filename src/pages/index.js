import React from "react"
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import Image from "gatsby-image"
import * as PropTypes from 'prop-types'
import '../styles/layout.css'
import "../styles/framework.css"
import { Carousel } from 'react-responsive-carousel'

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

    return (
      <Layout>

        <>
          <div className="wrapper row2-after">
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
                            fluid={articleGallery.image.childImageSharp.fluid}
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
          {/* <hr style={{ height: '3px' }} /> */}

          <div className="wrapper row4">
            <footer id="footer" className="hoc clear">
              <div className="one_third first">
                <h6 className="heading">Id porttitor enim elit</h6>
                <ul className="nospace btmspace-30 linklist contact">
                  <li><i className="fa fa-map-marker"></i>
                    <address>
                      Street Name &amp; Number, Town, Postcode/Zip
          </address>
                  </li>
                  <li><i className="fa fa-phone"></i> +00 (123) 456 7890</li>
                  <li><i className="fa fa-envelope-o"></i> info@domain.com</li>
                </ul>
                <ul className="faico clear">
                  <li><Link className="faicon-facebook" href="#"><i className="fa fa-facebook"></i></Link></li>
                  <li><Link className="faicon-twitter" href="#"><i className="fa fa-twitter"></i></Link></li>
                  <li><Link className="faicon-dribble" href="#"><i className="fa fa-dribbble"></i></Link></li>
                  <li><Link className="faicon-linkedin" href="#"><i className="fa fa-linkedin"></i></Link></li>
                  <li><Link className="faicon-google-plus" href="#"><i className="fa fa-google-plus"></i></Link></li>
                  <li><Link className="faicon-vk" href="#"><i className="fa fa-vk"></i></Link></li>
                </ul>
              </div>
              <div className="one_third">
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
              </div>
            </footer>
          </div>
        </>
      </Layout>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const query = graphql`
query {
  gallery: allStrapiArticle(sort: {order: DESC, fields: publishedAt}, limit: 10) {
    nodes {
      title
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
      author {
        name
        id
      }
      id
      description
    }
  }

  navList: allStrapiArticle(sort: {order: DESC, fields: publishedAt}, limit: 6) {
    nodes {
      title
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
      author {
        name
        id
      }
      id
      description
    }
  }
}


`