import React, { Component } from 'react'
import Layout from '../components/layout'
import '../styles/article-template.css'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types';
import ReactMarkdown from "react-markdown"

class Article extends Component {
    render() {
        const {
            // author,
            title,
            content,
            // slug,
            description,
            // image,
        } = this.props.data.strapiArticle

        return (
            <Layout>
                <div>
                    {title}
                    {description}
                </div>
                <div>
                    <ReactMarkdown 
                    source={content}
                    transformImageUri={uri => uri.startsWith('http') ? uri : `${process.env.IMAGE_BASE_URL}${uri}`}
                    />
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

      }
    }
  `