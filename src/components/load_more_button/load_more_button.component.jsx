import { useEffect, useState } from "react";
import "./load_more_button.styles.css";

export default function LoadMoreButton({}) {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);
  const [disableButton, setDisableButton] = useState(false);

  async function fectchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/recipes?limit=10&skip=${
          count === 0 ? 0 : count * 10
        }&select=name,image`
      );
      const result = await response.json();

      if (result && result.recipes && result.recipes.length) {
        setRecipes((prevData) => [...prevData, ...result.recipes]);
        setLoading(false);
      }
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    fectchProducts();
  }, [count]);

  useEffect(() => {
    if (recipes && recipes.length === 50) {
      setDisableButton(true);
    }
  }, [recipes]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="load-more-buttom-container">
      <div className="recipe-container">
        {recipes && recipes.length
          ? recipes.map((item) => (
              <div className="recipe" key={item.id}>
                <p>{item.id}</p>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))
          : null}
      </div>
      <div className="buttom-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          {!disableButton ? "Load More Recipes" : "No More Recipes"}
        </button>
      </div>
    </div>
  );
}
