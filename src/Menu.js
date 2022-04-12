import { useEffect, useState } from "react";

const Menu = ({ getMealsByCategory }) => {
  const [categoriesFromApi, setCategoriesFromApi] = useState([]);

  useEffect(() => {
    (async function () {
      const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

      const response = await fetch(url);
      const categoriesFromApi = await response.json();

      setCategoriesFromApi(categoriesFromApi.categories);
    })();
  }, []);

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
    </>
  );
};

export default Menu;
