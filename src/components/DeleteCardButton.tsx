import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'; // Replace with your desired icon

interface DeleteCardButtonProps {
  onClick?: (cardId: number) => void;
}

export const DeleteCardButton: React.FC = () => {
  return (
    <button className="rounded-full bg-transparent p-2 hover:bg-gray-200">
      <TrashIcon className="h-5 w-5 text-gray-500 hover:text-gray-700" />
    </button>
  );
};
