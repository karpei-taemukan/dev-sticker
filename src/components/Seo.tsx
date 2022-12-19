import { graphql, useStaticQuery } from "gatsby";
import React from "react"

interface ISeoProps{
    title: string;
}

export default function Seo({title}:ISeoProps){
    const data = useStaticQuery<Queries.SeoDataQuery>(graphql`
    query SeoData{
        site{
          siteMetadata{
            title
          }
        }
      }
    `);
      // Gatsby가  웹사이트의 html을 만들고 있을때
      //(빌드(npm run build)할때//유저가 웹사이트에 도착하기 전)
      // useStaticQuery를 이용해 data를 받아온다
    console.log(data)
    console.log(data.site?.siteMetadata?.title)
    return <title>{title} | {data.site?.siteMetadata?.title}</title>
}