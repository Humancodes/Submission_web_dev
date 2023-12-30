import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { cardData } from '../../Api/cardData';

const CardInfo = () => {
  const { id } = useParams();
  const [cardDataItem, setCardDataItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedAuthor, setEditedAuthor] = useState('');
  useEffect(() => {
    const fetchCardData = async () => {
      try {
            const dataItem = cardData.find((card) => card.id === id);
      
            if (dataItem) {
              setCardDataItem(dataItem);
              setEditedAuthor(dataItem.author);
            } else {
              console.error('Card data not found');
            }
          
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchCardData();
  }, [id]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Perform the save/update operation using the edited data
    // For simplicity, we'll just update the author in state
    setCardDataItem((prevData) => ({
      ...prevData,
      author: editedAuthor,
    }));

    setIsEditing(false);
  };

  return (
    <div className='m-10'>
      <h2 className='text-[30px] mb-10 font-bold'>Card Information</h2>
      {cardDataItem ? (
        <div>
          <img className=' lg:max-w-[800px] lg:max-h-[500px]' src={cardDataItem.download_url} alt={cardDataItem.author} />
          <p className='my-3 font-semibold text-orange-500'>Card ID: {cardDataItem.id}</p>
          {isEditing ? (
            <>
              <input
                type="text"
                value={editedAuthor}
                onChange={(e) => setEditedAuthor(e.target.value)}
                className="border border-gray-300 p-1 mr-2"
              />
              <button onClick={handleSave} className="bg-green-500 text-white px-2 py-1 rounded">Save</button>
            </>
          ) : (
            <>
              <p className='my-3 font-semibold text-orange-500'>Author: {cardDataItem.author}</p>
              <button onClick={handleEdit} className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
            </>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default CardInfo;
