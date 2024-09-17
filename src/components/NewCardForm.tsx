import React, { useState } from 'react';

export const NewCardForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();   

    // Handle form submission here (e.g., create a new card)
    console.log('Title:', title);
    console.log('Description:', description);
  };

  return (
    <div className="card-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border-b focus:outline-none w-full p-2"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border-b focus:outline-none w-full p-2 mt-2"
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
      >
        Save
      </button>
    </div>
  );
};
