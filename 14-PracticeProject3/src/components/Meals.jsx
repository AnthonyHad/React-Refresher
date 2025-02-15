import MealItem from "./MealItem";

import { useState, useEffect } from "react";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function loadMeals() {
      const response = await fetch("http://localhost:3000/meals");

      const meals = await response.json();
      setLoadedMeals(meals);
    }

    loadMeals();
  }, []);

  console.log(loadedMeals);
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
