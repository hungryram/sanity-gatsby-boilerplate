import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/global/Layout"

export default function CategoryIndex({ data }) {

    const sanity = data.allSanityLegal

    return (
        <>
            <Layout>
                <div className="section">
                    <div className="container">
                        {sanity.nodes.map((pages) => {
                            return (
                                <p>{[pages.title]}</p>
                            )
                        })}
                    </div>
                </div>
            </Layout>
        </>
    )
}

export const query = graphql`
{
    allSanityCategory {
      nodes {
        title
        _id
      }
    }
  }
  
`