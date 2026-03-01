// context/SproutContext.tsx
import React from 'react';

type SproutContextType = {
  sprouts: number;
  setSprouts: React.Dispatch<React.SetStateAction<number>>;
};

export const SproutContext = React.createContext<SproutContextType | null>(null);