import React from "react";
import Layout from "../../components/Layout";
import {graphql, PageProps} from "gatsby";
import { GatsbyImage,getImage } from "gatsby-plugin-image";

export default function ProductDetail({data}:PageProps<Queries.ProductQuery>){
    console.log(data);
return (
   <Layout title={data.contentfulStickerPack?.name!}>
    <GatsbyImage image={getImage(data.contentfulStickerPack?.preview?.gatsbyImageData!)!}
    alt={data.contentfulStickerPack?.name!} />
   <h2>${data.contentfulStickerPack?.price}</h2>
   
   </Layout>
    )
}


export const data = graphql`
query Product($id:String!) {
    contentfulStickerPack(
      id: {eq: $id}
      ) {
        name
        price
      preview {
        gatsbyImageData(height: 305, placeholder: BLURRED)
      }
    }
  }
`;