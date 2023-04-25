import React from "react";
import { useSelector } from "react-redux";

const PostLists = () => {
  //? A hook to access the redux store's state
  const posts = useSelector((state) => state);
  console.log(posts);
  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostLists;
