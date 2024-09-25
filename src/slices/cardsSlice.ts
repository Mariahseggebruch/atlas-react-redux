import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

interface Card {
  id: string;
  title: string;
  description: string;
  listId: string;
}

interface CardsSlice {
  cards: Record<string, Card>;
}

const initialState: CardsSlice = {
  cards: {},
}

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (
      state, action: PayloadAction<{ listId: string; title: string; description: string }>) => {
      const newCard = {
        id: nanoid(),
        listId: action.payload.listId,
        title: action.payload.title,
        description: action.payload.description,
      };
      state.cards[newCard.id] = newCard;
    },

    deleteCard: (state, action: PayloadAction<string>) => {
      const cardId = action.payload;
      delete state.cards[cardId];
    },
    clearBoard: (state) => {
      state.cards = {};
    },
  },
});

export const { addCard, deleteCard, clearBoard } = cardSlice.actions;
export default cardSlice.reducer;
