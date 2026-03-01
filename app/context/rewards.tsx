import React from 'react';
import { Reward } from '../interfaces/reward';

type RewardContextType = {
  reward: Reward | null;
  setReward: React.Dispatch<React.SetStateAction<Reward | null>>;
};

export const RewardContext = React.createContext<RewardContextType | null>(null);