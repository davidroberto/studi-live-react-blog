import logo from "./logo.svg";
import "./App.css";
import Meal from "./Meal.js";
import Meals from "./Meals.js";
import { useEffect, useState } from "react";
import Menu from "./Menu";

const App = () => {
  const [meal, setMeal] = useState(null);
  const [mealsByCategory, setMealsByCategory] = useState([]);

  useEffect(() => {
    (async function () {
      const url = "https://www.themealdb.com/api/json/v1/1/random.php";

      const response = await fetch(url);
      const mealsFromApi = await response.json();

      setMeal(mealsFromApi.meals[0]);
    })();
  }, []);

  const getMealsByCategory = async (category) => {
    const categoryName = category.strCategory;

    const url =
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + categoryName;
    const response = await fetch(url);
    const mealsFromApi = await response.json();

    setMealsByCategory(mealsFromApi.meals);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Menu getMealsByCategory={getMealsByCategory} />
      </header>
      <Meals mealsByCategory={mealsByCategory} />
      <Meal meal={meal} />
    </div>
  );
};

export default App;
