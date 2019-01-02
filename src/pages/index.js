import React from 'react'
import { graphql } from "gatsby"


class IndexPage extends React.Component {

  render () {
    const pages = this.props.data.allNodeArticle.edges
    const pageTitles = pages.map(page => <li>{page.node.title}</li>)
    return <ul>{pageTitles}</ul>
  }
}

export default IndexPage

export const query = graphql`
  query pageQuery {
    allNodeArticle {
      edges {
        node {
          title
        }
      }
    }
  }
`