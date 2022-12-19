import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { graphql, PageProps } from "gatsby";

export default function Blog({data} : PageProps<Queries.BlogTitlesQuery>){
    console.log(data);
    return (
       <Layout title="Blog">
        <ul>
          {data.allFile.nodes.map((file,index) => <li key={index}>{file.name}</li>)}
        </ul>
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
    }
    }
`;

// query는 data를 가져오고 싶을때 쓴다