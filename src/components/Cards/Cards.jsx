import React from 'react';
import { Link } from 'react-router-dom';



const Cards = ({ id,img,onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <div className="max-w-[300px] mt-8 ml-5 shadow-xl">
      <div className="bg-white shadow-md rounded-lg overflow-hidden group">
        <img
          className="h-[250px] w-full object-cover transition-transform transform group-hover:scale-105 hover:cursor-pointer"
          src={img}
          alt={`img${id}`}
        />
        <div className="p-6 flex justify-between">
          <button onClick={handleDelete} className="text-sm px-[25px] py-[10px] bg-red-500 text-white rounded">
            Delete
          </button>
          <Link to={`/card/${id}`} className="text-sm px-[16px] py-[10px] bg-black text-white rounded">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
