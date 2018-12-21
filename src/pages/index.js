import React from 'react'
import {graphql, StaticQuery} from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';


const IndexPage = () => (
  <Layout>
  <StaticQuery
    query={graphql`
      {
        allAirtable{
          edges {
            node {
              data {
                frase
                ejemplo
              }
            }
          }
        }
      }
    `}

    render={data => {
      
      const count = data.allAirtable.edges.length -1;
      const index = Math.round(Math.random() * count);
      const phrase =  data.allAirtable.edges[index];
    
      return (
        <>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <h1>{phrase.node.data.frase}</h1>
          <blockquote>{phrase.node.data.ejemplo}</blockquote>
        </>
      )
    }
  }
    />
    </Layout>
    
)

export default IndexPage
