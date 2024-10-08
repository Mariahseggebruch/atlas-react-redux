import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ListProps {
  title: string;
  id: string;
}

export interface CardProps {
  id: string;
  listId?: string;
  title: string;
  description: string;
}

interface ListsState {
  lists: ListProps[];
  cards: Record<string, CardProps>;
}

const initialState: ListsState = {
  lists: [],
  cards: {} as Record<string, CardProps>,
};

export const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<{ id: string; title: string}>) => {
      const newList = {
        id: action.payload.id,
        title: action.payload.title,
      }
      state.lists.push(newList);
    },

    deleteList: (state, action: PayloadAction<{ id: string }>) => {
      const listId = action.payload.id;
      state.lists = state.lists.filter((list) => list.id !== listId);
      Object.keys(state.cards).forEach((cardId) => {
        if (state.cards[cardId].listId === listId) {
          delete state.cards[cardId]
        }
      });
    },

    clearBoard: (state) => {
      state.lists = [];
      state.cards = {};
    },

    deleteCard: (state, action: PayloadAction<{ id: string }>) => {
      delete state.cards[action.payload.id];
    },

    addCard: (state, action: PayloadAction<CardProps>) => {
      const newCard = action.payload;
      state.cards[newCard.id] = newCard;
    },

    moveCard: (
      state,
      action: PayloadAction<{ cardId: string; fromListId: string; toListId: string }>
    ) => {
      const { cardId, fromListId, toListId } = action.payload;
      const card = state.cards[cardId];

      if (card && card.listId === fromListId) {
        const updatedCard = { ...card, listId: toListId };

        state.cards = {
          ...state.cards,
          [cardId]: updatedCard,
        };
      }
    },
  },
});

export const { addList, deleteList, clearBoard, addCard, deleteCard, moveCard } = listsSlice.actions;
export default listsSlice.reducer;
