import { configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import listsReducer from "./slices/listsSlice"
import cardsReducer from "./slices/cardsSlice"

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default storage (localStorage)

// Create persist configuration for lists and cards reducers
const listsPersistConfig = {
  key: 'lists',
  storage,
};

const cardsPersistConfig = {
  key: 'cards',
  storage,
};

// Persisted reducers
const persistedListsReducer = persistReducer(listsPersistConfig, listsReducer);
const persistedCardsReducer = persistReducer(cardsPersistConfig, cardsReducer);

// Create store with persisted reducers
export const store = configureStore({
  reducer: {
    lists: persistedListsReducer,
    cards: persistedCardsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create persistor
export const persistor = persistStore(store);

// Types for TypeScript autocomplete
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Add types to dispatch and selector hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
