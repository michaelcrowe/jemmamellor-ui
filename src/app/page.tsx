import { gql } from '@apollo/client';
import { getClient } from "@/lib/client";
import { DocumentRenderer } from '@keystone-6/document-renderer';
import React from 'react';
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

  console.log(data, 'DATA'); // You'll only see this log in the terminal (not browser console) as it's server-side

  return (
    <>
      {data.posts ? (
        data.posts.map((post) => (
          <React.Fragment key={post.id}>
            <h2>{post.title}</h2>
            <DocumentRenderer document={post.content.document} />
          </React.Fragment>
        ))
      ) : (
        "No posts yet..."
      )}
    </>
  );
}
