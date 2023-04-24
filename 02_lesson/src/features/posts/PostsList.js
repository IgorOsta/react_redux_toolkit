import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

function PostsList() {
  //? A hook to access the redux store's state
  const posts = useSelector(selectAllPosts);
  const renderPosts = posts.map((post) => (
    <article>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderPosts}
    </section>
  );
}

export default PostsList;
