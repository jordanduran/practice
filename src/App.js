import { useState, useEffect } from 'react';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => setPhotos(data.slice(0, 12)))
      .catch((error) => console.error(error));
  });

  const handlePhotoClick = (id) => {
    if (id !== selectedPhoto) {
      setSelectedPhoto(id);
    } else {
      setSelectedPhoto(null);
    };
  };

  const listOfPhotos = photos.length
    ? photos.map((photo) => {
        return (
          <img
            src={photo.url}
            alt={photo.title}
            key={photo.id}
            className={selectedPhoto === photo.id ? 'photo large' : 'photo'}
            onClick={() => handlePhotoClick(photo.id)}
          />
        );
      })
    : 'No photos found';

  return <div className='photo-container'>{listOfPhotos}</div>;
};

export default App;
