import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts, } from "../actions";
import UserHeader from "./UserHeader";

const PostList = ({ fetchPosts, posts}) => {
  useEffect(() => {
    fetchPosts();
  }, []);
  
  const postsList = posts.map(post => (
    <div className="item" key={post.id}>
      <i className="large middle aligned icon user" />
      <div className="content">
        <div className="description">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
        <UserHeader userId={post.userId}/>
      </div>
    </div>
  ));

  return (
    <div className="ui relaxed divided list">
      <h1>PostList</h1>
      {postsList}
    </div>
  );
};

const mapStateToProps = state => {
  return { posts: state.posts}
}

export default connect( mapStateToProps, { fetchPosts })(PostList);
