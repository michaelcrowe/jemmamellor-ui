import { gql } from '@apollo/client';
import { getClient } from "@/lib/client";
import { DocumentRenderer } from '@keystone-6/document-renderer';
// import styles from './page.module.css';


const query = gql`query GetPosts {
  posts {
    id
    title
    content {
      document
    }
  }
}`;

export default async function Home() {
  const {data} = await getClient().query({ 
    query, 
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    }, 
  });

  return <div>{data.posts.map((post) => {
    return (
      <>
        <h2>{post.title}</h2>
        <DocumentRenderer document={post.content.document} />
      </>
    )
  })}</div>;
}
