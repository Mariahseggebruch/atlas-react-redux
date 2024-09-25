import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store'; 
import { addCard } from '../slices/listsSlice'; 

export const NewCardForm: React.FC<{ listId: string }> = ({ listId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (title.trim() && description.trim()) {
      const newCard = {
        id: Date.now().toString(), 
        title,
        description,
        listId,
      };

      console.log(newCard)
      dispatch(addCard(newCard)); 
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="group/new-card m-3 flex h-44 w-full justify-center">
      <form
        onSubmit={handleSubmit}
        className="min-h-24 w-full flex-col items-start rounded bg-off-white-light px-4 text-blue group-hover/new-card:flex"
      >
        <input
          className="w-11/12 resize-none overflow-auto rounded-t-3xl border-0 bg-off-white-light px-0 py-6 text-xl font-black text-blue outline-none"
          autoFocus
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="w-11/12 resize-none overflow-auto border-0 bg-off-white-light text-blue outline-none"
          placeholder="Description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <div className="w-full">
          <button type="submit" className="w-full p-4">Save</button>
        </div>
      </form>
    </div>
  );
};
