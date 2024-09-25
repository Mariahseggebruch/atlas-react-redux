import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { AppDispatch } from '../store';
import { addList, clearBoard} from "../slices/listsSlice"

export const Footer = () => {
  const [title, setTitle] = useState<string>("");

  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (title.trim()) {
      const newList = {
        id: Date.now().toString(),
        title,
        cardIds: []
      }
    
      dispatch(addList(newList))
      setTitle("")
    }
    
    }

  const handleClearBoard = () => {
    dispatch(clearBoard());
  }

  return (
    <footer className="sticky bottom-0 left-0 flex w-full items-center justify-center space-x-4 border-t-2 border-blue bg-off-white-light p-8">
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="List title"
          name={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-0 bg-transparent text-3xl font-semibold text-blue placeholder:text-blue placeholder:opacity-50 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded bg-teal px-4 py-2 text-xl font-semibold text-off-white-light"
        >
          Save
        </button>
        <button
          onClick={handleClearBoard}
          type="button"
          className="rounded bg-teal px-4 py-2 text-xl font-semibold text-off-white-light"
        >
          Clear Board
        </button>
      </form>
    </footer>
  );
};
