import React from "react"
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import BlogTeaser from '../components/blog-teaser.js'

const BlogPage = ( {data} ) => (
  <Layout>
    <h3>These things anger unicorns...</h3>
    {data.allNodeArticle.edges.map((post) => (
      <BlogTeaser
        key={post.node.id}
        slug={post.node.fields.slug}
        title={post.node.title}
        // image={post.node.relationships}
        summary={post.node.body.summary.length >0 ? post.node.body.summary : post.node.body.processed.substring(0,300)}
      />
    ))}
  </Layout>
)

export const query = graphql`
query BlogPageQuery {
  allNodeArticle { 
  edges { 
    node { 
      id
      title
      body { 
        value
        format
        processed
        summary
      }
      relationships{
        field_image {
          url
        }
      }
      fields {
        slug
      }
      }
    } 
  }
}
`

export default BlogPage

      // relationships {
      //   field_image {
      //     uri {
      //       value
      //       url
      //     }
      //   }