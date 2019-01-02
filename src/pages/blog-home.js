import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { checkPropTypes } from 'prop-types';

const BlogPage = ({data}) => ( 
  <div> 
    <h1>Know What Grinds My Gears?</h1> 
    { data.allNodeArticle.edges.map(
      (
        { node }) => ( 
         
          <div style={{ margin: '0 1em 2em 1em' }}> 
            {/* <Img fluid={ node.relationships.field_image.uri.url } /> */}
            <h3 style={{ margin: '0 0 .5em 0' }}> { node.title }</h3>
            <div dangerouslySetInnerHTML={{ __html: node.body.summary }} />
            <Link to= { node.id } >read</Link>
            <Link to= { node.relationships.field_image.uri.url } > read2</Link>
            <figure> src={ node.relationships.field_image.uri.url }</figure>
            <img src={ node.relationships.field_image.uri.url }  />
            <a href={ node.relationships.field_image.uri.url }  />
         </div>
        )
      )
    }

  </div> 
) 

{/* <Img = fluid={props.data.imageQuery.allImageSharp.edges.node.fluid} /> */}

export default BlogPage

export const query = graphql`
  query allNodeArticle {
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
        relationships {
          field_image {
            uri {
              value
              url
            }
          }
        }
      } 
    }
  }
}
`


export const query2 = graphql`
query nodeArticle {
  nodeArticle {
    relationships {
      field_image {
        localFile {
          publicURL
        }
      }
    }
  }
}
`

// export const imageQuery = graphql`
// query allImageSharp {
//   allImageSharp {
//     edges{
//       node{
//         original {
//           width
//           height
//           src
//         } 
//         parent {
//           id
//         }
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// }
// `

// export const pageQuery = graphql`
//   query {
//     imageOne: file(relativePath: { eq: "one.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `