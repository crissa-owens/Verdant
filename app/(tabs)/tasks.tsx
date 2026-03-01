import { AllTasks } from "../components/tasks/all-tasks";
import { SproutContext } from "../context/sprout";
import { useContext } from "react";

export default function TaskPage() {
  const context = useContext(SproutContext);

  if (!context) throw new Error("SproutContext missing");
  return <AllTasks sprouts={context.sprouts} setSprouts={context.setSprouts} />;
}

