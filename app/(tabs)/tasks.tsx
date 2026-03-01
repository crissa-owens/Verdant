import { useContext } from "react";
import { AllTasks } from "../components/tasks/all-tasks";
import { FavoriteContext } from "../context/favorite";
import { SproutContext } from "../context/sprout";

export default function TaskPage() {
  const sproutCtxt = useContext(SproutContext);
  const favCtxt = useContext(FavoriteContext);

  if (!sproutCtxt) throw new Error("SproutContext missing");
  if (!favCtxt) throw new Error("FavoriteContext missing");
  return (
    <AllTasks
      sprouts={sproutCtxt.sprouts}
      setSprouts={sproutCtxt.setSprouts}
      setFavorite={favCtxt.setFavorite}
    />
  );
}
