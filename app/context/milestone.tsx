import React from 'react';
import { Reward } from '../interfaces/reward';

type MilestoneContextType = {
  milestone: Reward | null;
  setMilestone: React.Dispatch<React.SetStateAction<Reward | null>>;
};

export const MilestoneContext = React.createContext<MilestoneContextType | null>(null);