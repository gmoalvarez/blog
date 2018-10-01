import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Header from '../components/Header'

const Template = ({data, location}) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const title = frontmatter.title
  const date = frontmatter.date

  return (
    <Layout>
      <Helmet title={`${title} - My Blog`}></Helmet>

      <Header />

      <div id="main">

        <section id="intro" className="main">
          <div className="spotlight">
            <div className="content">
              <header className="major">
                <h1>{title}</h1>
              </header>
              <div>
                <h3>{date}</h3>
                <div dangerouslySetInnerHTML={{ __html: html}}></div>
              </div>

            </div>
          </div>
        </section>
      </div>

    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM, DD, YYYY")
        path
        tags
        excerpt
      }
    }
  }
  `

export default Template