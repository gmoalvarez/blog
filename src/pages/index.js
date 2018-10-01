import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout'
import Header from '../components/Header'
import { Helmet } from 'react-helmet'

const IndexPage = ({data}) => {

  console.log('data: ', data)
  const {edges: posts} = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet title="Gatsby Starter - Stellar" />

      <Header />

      <div id="main">

        <section id="intro" className="main">
          <div className="spotlight">
            <div className="content">
              <header className="major">
                <h2>Ipsum sed adipiscing</h2>
              </header>
              <div>
                {posts.map (({node: post}) => {
                  const {frontmatter} = post;
                  return (
                    <div>
                      <h2>
                        <Link to={frontmatter.path}>
                          {frontmatter.title}
                        </Link>
                      </h2>
                      <p>{frontmatter.date}</p>
                      <p>{frontmatter.excerpt}</p>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>
      </div>

    </Layout>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`;

export default IndexPage;