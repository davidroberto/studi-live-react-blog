import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({ displayMealsByCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async function () {
      const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

      const response = await fetch(url);
      const categoriesFromApi = await response.json();
      setCategories(categoriesFromApi.categories);
    })();
  }, []);

  return (
    <nav>
      <ul className="menu-items">
        {categories.map((category) => {
          return (
            <Link to={`/categories/${category.strCategory}`}>
              <li key={category.idCategory} className="menu-item">
                {category.strCategory}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
