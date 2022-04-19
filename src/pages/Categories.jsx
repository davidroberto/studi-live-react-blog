import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Categories = ({}) => {
  const { category } = useParams();

  const [mealsByCategory, setMealsByCategory] = useState([]);

  useEffect(() => {
    (async function () {
      const url =
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category;
      const response = await fetch(url);
      const mealsFromApi = await response.json();

      setMealsByCategory(mealsFromApi.meals);
    })();
  }, [category]);

  return (
    <div>
      <h1>Recette pour la catégorie : </h1>
      {mealsByCategory.map((mealByCategory) => {
        return <li key={mealByCategory.idMeal}>{mealByCategory.strMeal}</li>;
      })}
    </div>
  );
};

export default Categories;
