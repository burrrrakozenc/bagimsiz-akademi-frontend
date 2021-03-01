import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout";
import '../styles/search.css'
import { FormattedMessage, injectIntl, useIntl } from "gatsby-plugin-intl"

const AllArticles = props => {
  const intl = useIntl()
  const { data } = props
  const allPosts = data.allStrapiArticle.edges

  const emptyQuery = ""

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    console.log(event.target.value)
    const query = event.target.value
    const { data } = props

    const posts = data.allStrapiArticle.edges || []

    const filteredData = posts.filter(post => {
      const { description, title } = post.node
      return (
        description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase())
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  return (
    <Layout>
      <div className="search-container">

        <div className="search-box">
          <input
            className="search-input"
            type="text"
            aria-label="Search"
            placeholder={intl.formatMessage({ id: "searchHeader" })}
            // {<FormattedMessage id="author" />}
            onChange={handleInputChange}
          />
          <button type="submit" class="search-button">
            <i class="fa fa-search"></i>
          </button>
        </div>

        {posts.map(({ node }) => {
          const { slug } = node

          const { title, publishedAt, description, author } = node
          return (
            <article key={slug}>
              <header>
                <h2>
                  <Link to={slug}>{title}</Link>
                </h2>
                <div>
                  <p>{publishedAt}</p>
                  <p><FormattedMessage id="author" /> : {author.name}</p>
                </div>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                />
              </section>
              <hr />
            </article>
          )
        })}
      </div>
    </Layout>
  )
}

export default injectIntl(AllArticles)

export const pageQuery = graphql`
  query {
    allStrapiArticle {
        edges {
          node {
            author {
              name
            }
            title
            publishedAt(formatString: "YYYY/MM/DD")
            image {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            slug
            status
            content
            category {
              name
            }
            description
          }
        }
      }
    
  }
`

// allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
//     edges {
//       node {
//         excerpt(pruneLength: 200)
//         id
//         frontmatter {
//           title
//           description
//           date(formatString: "MMMM DD, YYYY")
//           tags
//         }
//         fields {
//           slug
//         }
//       }
//     }
//   }