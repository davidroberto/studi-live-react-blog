import logo from "./logo.svg";
import "./App.css";
import Meal from "./Meal.js";
import { useEffect, useState } from "react";
import Menu from "./Menu";

const App = () => {
  // useState retourne deux éléments :
  // une variable qui contient la valeur du state
  // et une fonction qui permet de modifier cette valeur
  const [meal, setMeal] = useState(null);

  // useEffect par défaut est appelé après chaque rendu du composant
  // si on lui passe en second argument un tableau vide, il ne sera appelé
  // qu'une seule fois après le premier rendu du composant
  // si dans le tableau on lui passe des variables, useEffect sera appelé
  // à chaque fois que la valeur de la variable est modifiée
  useEffect(() => {
    (async function () {
      const url = "https://www.themealdb.com/api/json/v1/1/random.php";

      const response = await fetch(url);
      const mealsFromApi = await response.json();
      setMeal(mealsFromApi.meals[0]);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>
      <Meal meal={meal} />
    </div>
  );
};

export default App;
