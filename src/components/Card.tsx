import React, { useState } from 'react';
import { DeleteCardButton } from '../components/DeleteCardButton'; // Import the DeleteCardButton component

export const Card: React.FC = () => {
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const handleMouseEnter = () => {
    setShowDeleteButton(true);
  };

  const handleMouseLeave = () => {
    setShowDeleteButton(false);   

  };

  return (
    <div className="card   
 relative p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h2 className="text-lg font-semibold mb-2">Lorem ipsum dolor</h2>
      <p className="text-gray-700">{`Sed viverra, diam eu facilisis bibendum, ante orci placerat quam`}</p>
      {showDeleteButton && (
        <div className="absolute top-2 right-2">
          <DeleteCardButton />
        </div>
      )}
    </div>
  );
};
