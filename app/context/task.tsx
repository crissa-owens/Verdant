import React from 'react';
import { Task } from '../interfaces/task';

type TaskContextType = {
  task: Task | null;
  setTask: React.Dispatch<React.SetStateAction<Task | null>>;
};

export const TaskContext = React.createContext<TaskContextType | null>(null);