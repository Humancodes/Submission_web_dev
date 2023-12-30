import React, { useEffect, useState } from 'react';
import Cards from '../../components/Cards/Cards';

const Dashboard = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://picsum.photos/v2/list?page=1&limit=4');
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchImages();
  }, []);
  const handleDelete = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this card?");
    if (isConfirmed) {
      const updatedImages = images.filter((image) => image.id !== id);
      setImages(updatedImages);
    }
  };
  return (
    <>
    <div className='relative grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {error ? (
          <div className="text-red-500">{error}</div>
      ) : (
          images.map((image) => (
            <Cards key={image.id} id={image.id} img={image.download_url} onDelete ={handleDelete}/>
        ))
      )}
    </div>

    

    </>
  )
}

export default Dashboard;