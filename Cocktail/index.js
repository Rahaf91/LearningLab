// here is the default code to fetch the url

/*fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => displayCocktail(data))
  .catch((error) => console.error("FETCH ERROR:", error));*/

///////////////////////////////////////////////////////

// here I have tried to write the fetch as we learned :)

async function getRandomCocktail() {
  try {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    console.log(response);
    if (!response.ok) {
      throw new Error("NETWORK RESPONSE ERROR");
    }
    const data = await response.json();
    console.log(data);
    displayCocktail(data);
  } catch (error) {
    console.error("FETCH ERROR:", error);
  }
}

getRandomCocktail();

//////////////////////////the end of my code ////////////////////////////////////////////
function displayCocktail(data) {
  const cocktail = data.drinks[0];
  const cocktailDiv = document.getElementById("cocktail");

  // cocktail name
  const cocktailName = cocktail.strDrink;
  const heading = document.createElement("h1");
  heading.innerHTML = cocktailName;
  cocktailDiv.appendChild(heading);

  // cocktail image
  const cocktailImg = document.createElement("img");
  cocktailImg.src = cocktail.strDrinkThumb;
  cocktailDiv.appendChild(cocktailImg);
  document.body.style.backgroundImage = "url('" + cocktail.strDrinkThumb + "')";

  // coctail ingredients
  const cocktailIngredients = document.createElement("ul");
  cocktailDiv.appendChild(cocktailIngredients);

  const getIngredients = Object.keys(cocktail)
    .filter(function (ingredient) {
      return ingredient.indexOf("strIngredient") == 0;
    })
    .reduce(function (ingredients, ingredient) {
      if (cocktail[ingredient] != null) {
        ingredients[ingredient] = cocktail[ingredient];
      }
      return ingredients;
    }, {});

  for (let key in getIngredients) {
    let value = getIngredients[key];
    listItem = document.createElement("li");
    listItem.innerHTML = value;
    cocktailIngredients.appendChild(listItem);
  }
}
