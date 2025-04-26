import React, { useState } from 'react';
import usePosts from '../hooks/usePosts';

const PostSearch = () => {
  const { posts, loading, error } = usePosts();
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtrer les posts en fonction du searchTerm
  const filteredPosts = posts.filter((post) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      post.title.toLowerCase().includes(lowerSearchTerm) ||
      post.body.toLowerCase().includes(lowerSearchTerm)
    );
  });

  if (loading) {
    return <div>Chargement des posts...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <div>
      <h2>Recherche de Posts</h2>
      <input
        type="text"
        placeholder="Rechercher par titre ou contenu..."
        value={searchTerm}
        onChange={handleChange}
        style={{
          padding: '0.5rem',
          marginBottom: '1rem',
          width: '100%',
          fontSize: '1rem'
        }}
      />

      {filteredPosts.length === 0 ? (
        <p>Aucun post trouvé.</p>
      ) : (
        <ul>
          {filteredPosts.map((post) => (
            <li key={post.id} style={{ marginBottom: '1rem' }}>
              <h3>{post.title}</h3>
              <p>{post.body.substring(0, 100)}...</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostSearch;