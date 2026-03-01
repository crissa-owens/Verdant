import React from 'react';
import { Task } from '../interfaces/task';

type FavoriteContextType = {
  favorite: Task | null;
  setFavorite: React.Dispatch<React.SetStateAction<Task | null>>;
};

export const FavoriteContext = React.createContext<FavoriteContextType | null>(null);