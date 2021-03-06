import { graphql } from "gatsby"
import TagComponent from "../components/tag"

export default TagComponent

export const query = graphql`
  query($slug: String!, $formatString: String!) {
    allPost(sort: { fields: date, order: DESC }, filter: { tags: { elemMatch: { slug: { eq: $slug } } } }) {
      nodes {
        slug
        title
        date(formatString: $formatString)
        excerpt
        timeToRead
        description
        url
        isProject
        banner {
          childImageSharp {
            resize(width: 800, quality: 90) {
              src
            }
          }
        }
        tags {
          name
          slug
        }
      }
    }
  }
`
