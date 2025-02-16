import MealItem from "./MealItem";

import useHttp from "../hooks/useHttp";

// import { useState, useEffect } from "react";

// If we added config as a param inside the below function it triggered an infinite loop
const requestConfig = {};

export default function Meals() {
  // we've had to add an initial data state to make sure that we don't get undefined when first loading the page
  // this was due to the state of the data in the hook folder.
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  console.log(loadedMeals);

  // or we could do this
  // if (!data) {
  //   return <p>No meals found</p>;
  // }

  // Before custom hook:
  // const [loadedMeals, setLoadedMeals] = useState([]);

  // useEffect(() => {
  //   async function loadMeals() {
  //     const response = await fetch("http://localhost:3000/meals");

  //     const meals = await response.json();
  //     setLoadedMeals(meals);
  //   }

  //   loadMeals();
  // }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
