import { SEARCHITEM } from "./types";

export const recipeSearch = (name, values) => async (dispatch) => {
  values = String(values);
  const fix_values = values.replace(" ", "_");
  const bodyRaw = {
    query: `
    {
      RecipeQueries {
        searchByIngredients(Values: ${fix_values}) {
          objectId
          categories
          description
          ingredients
        }
      }
    }
    `,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(bodyRaw),
  };

  try {
    console.log("reducerTop");
    console.log(values);
    const result = await (await fetch("/graphql", requestOptions)).json();

    console.log("reducer");
    console.log(result);
    dispatch({
      type: SEARCHITEM,
      payload: result.RecipeQueries.searchByIngredients,
    });
  } catch (err) {
    console.log(err);
  }
};
