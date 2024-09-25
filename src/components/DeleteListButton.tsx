import React from 'react';
import { XCircleIcon } from '@heroicons/react/24/solid';

export const DeleteListButton: React.FC = () => {
  return (
    <button className="rounded-full bg-transparent p-2 hover:bg-gray-200">
      <XCircleIcon className="h-5 w-5 text-gray-500 hover:text-gray-700" />
    </button>
  );
};
