import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

interface IBlogPostProps{
    data: Queries.PostDetailQuery,
    children: any
}

export default function BlogPost({data, children}:IBlogPostProps){
  //console.log(data, children)
  const image = getImage(
    data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!
    );
    console.log(image)
    return (
    <Layout title="">
       <GatsbyImage image={image as any} alt={data.mdx?.frontmatter?.title!} />
    </Layout>
    )
}


export const query = graphql`
query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: {slug: {eq:$frontmatter__slug}}) {
      frontmatter {
        category
        date(formatString: "YYYY/MM.DD")
        slug
        id
        title
        headerImage {
          childImageSharp {
            gatsbyImageData(height: 450, placeholder: BLURRED)
          }
        }
    }
  }
}
`;

export const Head = ({data}:IBlogPostProps) => <Seo title={data.mdx?.frontmatter?.title+""}/>