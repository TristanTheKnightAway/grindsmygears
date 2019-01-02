import React from 'react'
import { Link } from 'gatsby'

const BlogTeaser = ( {slug, title, summary} ) => (
  <div className="blog--teaser">
    <Link to={slug}>
      <h2>{title}</h2>
      </Link>
      <p>{summary}</p>
  </div>
)

export default BlogTeaser