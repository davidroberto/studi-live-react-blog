const Meals = ({ mealsByCategory }) => {
  return (
    <section>
      {mealsByCategory.map((mealByCategory) => {
        return <p key={mealByCategory.idMeal}>{mealByCategory.strMeal}</p>;
      })}
    </section>
  );
};

export default Meals;
