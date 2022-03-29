import React from 'react'
import Layout from './layout'

const Post = ({ title, children }) => {
    return (
      <Layout>
        <article style={{}}>
          <h1>
            {title}
          </h1>
          <section>{children}</section>
        </article>
      </Layout>
    );
  };
  
  export default Post;
   