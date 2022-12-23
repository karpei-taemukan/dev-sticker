import React from "react";
import { graphql, Link, Page, PageProps } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";


export default function Blog({data} : PageProps<Queries.BlogTitlesQuery>){
    console.log(data);
    return (
       <Layout title="Blog">
        <ul>
          {data.allFile.nodes.map((file,index) => <li key={index}>{file.name}</li>)}
        </ul>

        <section className="grid">
          {data.allMdx.nodes.map((file, index) => (
            <article key={index}>
              <Link to={`/blog/${file.frontmatter?.slug}`}>
              <h2>{file.frontmatter?.title}</h2>
              <h4>{file.frontmatter?.category}</h4>
              <h4>{file.frontmatter?.id}</h4>
              <h5>{file.frontmatter?.date}</h5>
              </Link>
              <hr/>
              <p>{file.excerpt}</p>
            </article>
          ))
        
          }
          </section>
       </Layout>
    )
}

export const Head = () => <Seo title="Blog" />;
  
// Gatsby는 html 먼저 로드한 후에 react를 로드한다

export const query = graphql` 
query BlogTitles{
    allFile{
      nodes{
        name
      }
    },
    allMdx{
      nodes{
        frontmatter{
          slug
          title
          category
          date(formatString: "YYYY/MM.DD")
          id
        }
        excerpt(pruneLength: 50)
      }
    }
    }
`;


// query는 data를 가져오고 싶을때 쓴다