import { useEffect, useState } from "react";

const Menu = () => {
  const [categoriesFromApi, setCategoriesFromApi] = useState([]);
  const [mealsByCategory, setMealsByCategory] = useState([]);

  useEffect(() => {
    (async function () {
      const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

      const response = await fetch(url);
      const categoriesFromApi = await response.json();

      setCategoriesFromApi(categoriesFromApi.categories);
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
    <>
      <nav>
        <ul>
          {categoriesFromApi.map((category) => {
            return (
              <li
                key={category.idCategory}
                onClick={() => getMealsByCategory(category)}
              >
                {category.strCategory}
              </li>
            );
          })}
        </ul>
      </nav>
      <section>
        {mealsByCategory.map((mealByCategory) => {
          return <p key={mealByCategory.idMeal}>{mealByCategory.strMeal}</p>;
        })}
      </section>
    </>
  );
};

export default Menu;
