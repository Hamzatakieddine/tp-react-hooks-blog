import { useState, useEffect } from 'react';

const usePosts = () => {
  const [posts, setPosts] = useState([]);      // État pour stocker les posts
  const [loading, setLoading] = useState(true); // État pour gérer le chargement
  const [error, setError] = useState(null);    // État pour gérer les erreurs

  useEffect(() => {
    // Fonction pour récupérer les posts
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/posts');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des posts');
        }
        const data = await response.json();
        setPosts(data.posts);  // Mettez à jour l'état des posts
      } catch (err) {
        setError(err.message);  // Si une erreur se produit, mettez à jour l'état des erreurs
      } finally {
        setLoading(false);  // Désactive le chargement une fois que la requête est terminée
      }
    };

    fetchPosts();  // Exécuter la fonction pour récupérer les posts
  }, []);  // Le tableau vide signifie que cet effet s'exécute une seule fois lors du montage

  return { posts, loading, error };  // Retourne les posts, le statut de chargement et les erreurs
};

export default usePosts;
