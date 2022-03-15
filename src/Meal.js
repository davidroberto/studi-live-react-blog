import { useEffect } from "react";

const Meal = () => {
  console.log("Meal render");
  // Je veux executer du code juste après le premier rendu du composant
  // Le code que je veux exécuter est un appel vers une API
  // pour récupérer des recettes de cuisine
  // et les afficher dans mon composant Meal, pour qu'elles soient
  // affichées dans ma page

  let meal = null;

  useEffect(() => {
    (async function () {
      const url = "https://www.themealdb.com/api/json/v1/1/random.php";

      const response = await fetch(url);

      const mealsFromApi = await response.json();

      meal = mealsFromApi.meals[0];
    })();
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
