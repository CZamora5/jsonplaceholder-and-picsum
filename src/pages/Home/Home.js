import React, { useEffect, useState } from 'react';

// Components
import User from '../../components/User/User.js';

// Services
import { getResource, resources } from '../../services/jsonplaceholder.js';

// Styles
import './Home.styles.scss';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const usersData = await getResource(resources.USERS);
      const postsData = await getResource(resources.POST);
      setUsers(usersData);
      setPosts(postsData);
    })();
  }, []);

  const userCards = users.map(user => {
    return (
      <User key={user.id} name={user.name} email={user.email} />
    );
  });
  const postCards = posts.map(post => {
    return (
      <User key={post.id} name={post.title} email={post.body} />
    );
  });

  return (
    <main>
      <section>
        <h2>Users</h2>
        <div className="grid">
          {userCards}
        </div>
      </section>
      <section>
        <h2>Posts</h2>
        <div className="grid">
          {postCards}
        </div>
      </section>
    </main>
  );
}