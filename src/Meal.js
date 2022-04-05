const Meal = ({ meal }) => {
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
