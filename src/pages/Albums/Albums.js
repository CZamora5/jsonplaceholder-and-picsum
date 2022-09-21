import React, { useState, useEffect } from 'react';
import { getResource, resources } from '../../services/jsonplaceholder.js';

export default function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    (async () => {
      const albumsData = await getResource(resources.ALBUMS);
      setAlbums(albumsData);
    })();
  }, []);

  const albumCards = albums.map(album => {
    return (
      <div key={album.id}>
        {album.title}
      </div>
    );
  });

  return (
    <main>
      <section className="container">
        <h2>Albums</h2>
        <div className="grid">
          {albumCards}
        </div>
      </section>
    </main>
  );
}