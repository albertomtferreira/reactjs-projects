import { useEffect, useState } from "react";
import "./load_more_button.styles.css";

export default function LoadMoreButton({}) {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [count, setCount] = useState(1);
  // const [error, setError] = useState(null);
  const [disableButton, setDisableButton] = useState(false);

  // async function fectchProducts() {
  //   try {
  //     setLoading(true);
  //     const response = await fetch(
  //       `https://dummyjson.com/recipes?limit=10&skip=${
  //         count === 0 ? 3 : count * 3
  //       }&select=name,image`
  //     );
  //     const result = await response.json();

  //     if (result && result.recipes && result.recipes.length) {
  //       //setRecipes([...recipes, ...result?.recipes]);
        
  //       //setRecipes((prevData) =>[...prevData, ...result.recipes]);
  //       setLoading(false);
  //       setRecipes(result.recipes);
  //     }
  //   } catch (err) {
  //     setError(err);
  //     setLoading(false);
  //   }
  // }

  useEffect(() => {
    loadMore();
  }, [count]);

  useEffect(() => {
    if (recipes && recipes.length === 50) {
      setDisableButton(true);
    }
  }, [recipes]);

  

  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/recipes?limit=10&skip=${
          (count -1 ) * 10
        }&select=name,image`
      );
      const data = await response.json();
      setLoading(false);
      //setRecipes((prevData) =>[...prevData, ...data.recipes]);
      setRecipes([...recipes, ...data?.recipes]);
    } 
    catch (error) {
      console.log(error);
      setLoading(false);
    }
  };


  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="load-more-buttom-container">
      <div className="recipe-container">
        {console.log(recipes)}
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
      {/* <div className="buttom-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          {!disableButton ? "Load More Recipes" : "No More Recipes"}
        </button>
      </div> */}
      <div className="m-2 p-3">
            
              <button disabled={disableButton} className="btn loadmore"  onClick={(e) => {
                e.preventDefault();
                setCount(count + 1);
              }}>
                {loading ? "Loading ... " : (
                  <>
                    {" "}
                    {!disableButton ? "Load More Recipes" : "No More Recipes"}
                  </>
                  

                )}
              </button>
      
      </div>  
    </div>
  );
}

