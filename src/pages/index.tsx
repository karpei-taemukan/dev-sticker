import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function IndexPage() {
  return (
  <Layout title="Welcome to DevStickers">
    <div></div>
  </Layout>
  )
}

export const Head = () => <Seo title="Home" />;
 
// Head를 작성하면 자동으로 홈페이지 제목을 바꿔준다

