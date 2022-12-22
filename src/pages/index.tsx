import * as React from "react"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { graphql, Link, PageProps } from "gatsby";

export default function IndexPage({data}:PageProps<Queries.StickersQuery>) {
  console.log(data)
  return (
  <Layout title="Welcome to DevStickers">
   <StaticImage 
   height={1000}
   width={1000}
   src="https://images.unsplash.com/photo-1625768376503-68d2495d78c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
   alt="stickers on the wall"
   />
   <article>
{data.allContentfulStickerPack.nodes.map((sticker, index) => (<article key={index}>
  <GatsbyImage image={getImage(sticker.preview?.gatsbyImageData!)!} alt={sticker.name+""}/>
<Link to={`/products/${sticker.id}`}>
<h2>{sticker.name}</h2>
<h4>${sticker.price}</h4>
</Link>
</article>))}
   </article>
  </Layout>
  )
}

export const Head = () => <Seo title="Home" />;
 
// Head를 작성하면 자동으로 홈페이지 제목을 바꿔준다

export const query = graphql`
query Stickers {
  allContentfulStickerPack {
    nodes {
      name
      id
      price
      preview {
        gatsbyImageData(placeholder: BLURRED, height: 305)
      }
    }
  }

}
`;