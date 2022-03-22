import { useEffect } from "react";
import axios from "axios";

const Meal = () => {
  let meal = null;

  useEffect(() => {
    (async function () {
      const url = "https://www.themealdb.com/api/json/v1/1/random.php";

      const response = await fetch(url);
      const mealsFromApi = await response.json();
      meal = mealsFromApi.meals[0];
    })();

    // axios
    //   .get("https://www.themealdb.com/api/json/v1/1/random.php")
    //   .then((response) => {
    //   });
  });

  return (
    <>
      {meal ? (
        <article>
          <h2>{meal.strMeal}</h2>
        </article>
      ) : (
        <p>Pas de recette</p>
      )}
    </>
  );
};

export default Meal;
