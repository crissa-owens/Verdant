import { AllTasks } from "../components/tasks/all-tasks";
import { SproutContext } from "../context/sprout";
import { useContext } from "react";
import { TaskContext } from "../context/task";

export default function TaskPage() {
  const sproutCtxt = useContext(SproutContext);
  const taskCtxt = useContext(TaskContext);

  if (!sproutCtxt) throw new Error("SproutContext missing");
  if (!taskCtxt) throw new Error("TaskContext missing");
  return <AllTasks sprouts={sproutCtxt.sprouts} setSprouts={sproutCtxt.setSprouts} setFavorite={taskCtxt.setTask}/>;
}

