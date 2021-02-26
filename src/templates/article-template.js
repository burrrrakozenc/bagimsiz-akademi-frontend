import React, { Component } from 'react'
import Layout from '../components/layout'
import '../styles/article-template.css'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types';
import ReactMarkdown from "react-markdown"

class Article extends Component {
    render() {
        const {
            author,
            title,
            content,
            // slug,
            description,
            // image,
            publishedAt
        } = this.props.data.strapiArticle

        return (
            <Layout>
                <div className="article-container">
                    <div className="article-header">
                        <h2>{title}</h2>
                        <h4>{description}</h4>
                        <h5>Yazar: <Link to={`/${author.name}`}>{author.name}</Link></h5>
                        <p>Yayimlanma Tarihi: {publishedAt}</p>
                        <hr />
                    </div>
                    <div className="article-text-container">
                        <ReactMarkdown
                            source={content}
                            transformImageUri={uri => uri.startsWith('http') ? uri : `${process.env.IMAGE_BASE_URL}${uri}`}
                        />
                    </div>
                </div>
            </Layout>
        )
    }
}


Article.propTypes = {
    data: PropTypes.object.isRequired
}

export default Article
// image {
//     childImageSharp {
//       fluid {
//         src
//       }
//     }
//     id
//   }
export const pageQuery = graphql`
    query ArticleQuery($slug: String!){
        strapiArticle(slug: {eq: $slug}) {
            slug
            title
            content
            description
            author {
              name
              id
            }
            id
            publishedAt(formatString: "YYYY/MM/DD mm.ss")
      }
    }
  `