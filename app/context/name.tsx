import React from 'react';

type NameContextType = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

export const NameContext = React.createContext<NameContextType | null>(null);