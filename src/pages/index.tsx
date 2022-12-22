import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function IndexPage() {
  return (
  <Layout title="Welcome to DevStickers">
   <StaticImage 
   height={1000}
   width={1000}
   src="https://images.unsplash.com/photo-1625768376503-68d2495d78c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
   alt="stickers on the wall"
   />
  </Layout>
  )
}

export const Head = () => <Seo title="Home" />;
 
// Head를 작성하면 자동으로 홈페이지 제목을 바꿔준다

