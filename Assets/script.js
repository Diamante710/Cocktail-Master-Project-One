// list of variables
// const api key variable

const APIKey = "1";
const baseUrl = "https://www.thecocktaildb.com/api/json/v1/";

// const ingredientNameUrl = `${baseUrl}${APIKey}search.php?i=${drinkNameInput}`;
// const cocktailName = `${baseUrl}${APIKey}search.php?s=${spiritName}`;
// const randomCocktail = `${baseUrl}${APIKey}random.php`;
// const filterOrdinaryDrink = `${baseUrl}${APIKey}filter.php?c=Ordinary_Drink`;
// const filterCocktail = `${baseUrl}${APIKey}filter.php?c=Cocktail`;
// const listCategoriesFilter = `${baseUrl}${APIKey}list.php?c=list`;
// const listIngredientsFilter = `${baseUrl}${APIKey}list.php?i=list`;
// const listAlcoholicFilter = `${baseUrl}${APIKey}list.php?a=list`;


// need to append variables to parts of html

// create eventlistener button for search Bar


var searchBtn = document.querySelector("#submit-btn")

function findCocktail(){
    const alcoholicDrinks = `${baseUrl}${APIKey}filter.php?a=Alcoholic`;
    fetch(url)
        .then((response) => {
            console.log(response);
            return response.json();
        }).then((data) => {
            console.log(data)
            displayCurrent(data);
        })
    };
function findMocktail(){
    const nonAlcoholicDrinks = `${baseUrl}${APIKey}filter.php?a=Non_Alcoholic`;
    fetch(url)
        .then((response) => {
            console.log(response);
            return response.json();
        }).then((data) => {
            console.log(data)
            displayCurrent(data);
        })
    };
// create functions with above variables?

searchBtn.on('click', findCoktail)
searchBtn.on('click', findMocktail)
