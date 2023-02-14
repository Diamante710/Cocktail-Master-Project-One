
var nameEl = $('.drink-name')
var infoEl = $('.instructions')
var itemsEl = $('.ingredients')
var results = $('.results')
// these variables are for element creation



$(document).ready(function () {
    $('select').on('change', function () {
        var selectedValue = $(this).val()
        console.log(selectedValue)
        var api = `https://thecocktaildb.com/api/json/v1/1/filter.php?i=` + selectedValue
        fetch(api)
            .then(function (response) {

                return response.json()
            })
            .then(function (data) {

                results.html("")
                console.log(data)

                //if my data >10, randomly select 10 and look it through my next function.  if <10 display run it through my next funciton ats is.             
                var allDrinks = data.drinks;
                var RandomDrinks = []
                for (let i = 0; i < Math.min(9, allDrinks.length); i++) {
                    let randomIndex = Math.floor(Math.random() * allDrinks.length);
                    RandomDrinks.push(allDrinks[randomIndex]);
                    allDrinks.splice(randomIndex, 1);
                }

                console.log(RandomDrinks);


                for (let i = 0; i < RandomDrinks.length; i++) {

                    // new api start
                    var newApi = `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${RandomDrinks[i].idDrink}`

                    fetch(newApi)
                        .then(function (response) {
                            return response.json()
                        })
                        .then(function (juice) {
                            console.log(juice)
                            const drinkInfo = juice.drinks[0]

                            var card = $('<div>')
                            card.addClass('flip-card')

                            var inner = $('<div>')
                            inner.addClass('flip-card-inner')
                            card.append(inner)

                            var front = $('<div>')
                            front.addClass('flip-card-front')
                            inner.append(front)

                            var img = $('<img>')
                            img.attr('src', drinkInfo.strDrinkThumb)
                            front.append(img)

                            var back = $('<div>')
                            back.addClass('flip-card-back')

                            var drinkName = $('<h4>')
                            drinkName.addClass('drink-name')
                            drinkName.text(drinkInfo.strDrink)
                            back.append(drinkName)
                            console.log(drinkInfo.strDrink)


                            var instruct = $('<p>')
                            instruct.addClass('instructions')
                            instruct.text(drinkInfo.strInstructions)
                            back.append(instruct)

                            // var ingredients = $('<p>')
                            // ingredients.addClass('ingredients')
                            // ingredients.text(drinkInfo.strIngredient1 + strIngredient2 + strIngredient3)
                            // back.append(ingredients)

                            inner.append(back)
                            results.append(card)

                        })
                }
                return data;
            })

        fetch("https://icanhazdadjoke.com/", { headers: { "Accept": "application/json" } })
            .then(function (response) {
                response.json()

                    .then(function (data) {
                        console.log(data.joke)
                        // .catch(error => console.error(error));
                    })
            })
    })
})

// presentation 
// README