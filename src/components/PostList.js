import React from 'react';
import usePosts from '../hooks/usePosts';

const PostList = () => {
  const { posts, loading, error } = usePosts();

  if (loading) {
    return <div>Chargement des posts...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <div>
      <h2>Liste des Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: '1rem' }}>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
