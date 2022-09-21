import React, { useEffect, useState } from 'react';

// Components
import User from '../../components/User/User.js';
import Post from '../../components/Post/Post.js';
import Comment from '../../components/Comment/Comment.js';

// Services
import { getResource, resources } from '../../services/jsonplaceholder.js';

// Styles
import './Home.styles.scss';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      const usersData = await getResource(resources.USERS);
      const postsData = await getResource(resources.POST);
      const commentsData = await getResource(resources.COMMENTS);
      setUsers(usersData);
      setPosts(postsData);
      setComments(commentsData);
    })();
  }, []);

  const userCards = users.map(user => {
    return (
      <User key={user.id} name={user.name} email={user.email} />
    );
  });

  const postCards = posts.map(post => {
    return (
      <Post key={post.id} title={post.title} body={post.body} />
    );
  });

  const commentElements = comments.map(comment => {
    return (
      <Comment key={comment.id} name={comment.name} email={comment.email} body={comment.body} />
    );
  });

  return (
    <main>
      <section className="container">
        <h2>Users</h2>
        <div className="grid">
          {userCards}
        </div>
      </section>
      <section className="container">
        <h2>Posts</h2>
        <div className="grid">
          {postCards}
        </div>
      </section>
      <section className="container">
        <h2>Comments</h2>
        <div className="grid">
          {commentElements}
        </div>
      </section>
    </main>
  );
}