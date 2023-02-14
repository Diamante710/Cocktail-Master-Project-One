

// list of variables
// const api key variable

// need to append variables to parts of html

// create eventlistener button for search Bar
var nameEl = $('.drink-name')
var infoEl = $('.instructions')
var itemsEl = $('.ingredients')
var results = $('.results')
// these variables are for element creation



$(document).ready(function () {
    $('select').on('change', function () {
        var selectedValue = $(this).val()
        console.log (selectedValue)
        var api = `https://thecocktaildb.com/api/json/v1/1/filter.php?i=` + selectedValue
        fetch(api)
            .then(function (response) {

                return response.json()
            })
            .then(function (data) {
                
                results.html("")
                console.log (data)
                // var name = data.drinks[0].strDrink
                // $('.drink-name').text("Drink Name: " + name)
                
                // var image = $('#drink-image')
                // var thumb = data.drinks[0].strDrinkThumb

                // image.attr('src', thumb)
                // image.attr('data', data.drinks[0].idDrink)

//if my data >10, randomly select 10 and look it through my next function.  if <10 display run it through my next funciton ats is.             
            var allDrinks = data.drinks;
            var RandomDrinks = []
            for (let i = 0; i < Math.min(10, allDrinks.length); i++) {
                let randomIndex = Math.floor(Math.random() * allDrinks.length);
                RandomDrinks.push(allDrinks[randomIndex]);
                allDrinks.splice(randomIndex, 1);
              }
              
              console.log(RandomDrinks);
            
            
            for (let i = 0; i < RandomDrinks.length; i++)  {
               
                    // new api start
                    var newApi = `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${RandomDrinks[i].idDrink}`
                    // var back;
                    fetch(newApi)
                    .then(function (response) {
                        return response.json()
                    })
                    .then(function (juice) {
                        console.log(juice)
                        const drinkInfo = juice.drinks[0]
                        // var inner = $('.flip-card-inner')
                        // var info = juice.drinks[0].strInstructions
                        // infoEl.text("How to make: " + info)
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
                            // inner.append(back)
                            
                            var drinkName = $('<h4>')
                            drinkName.addClass('drink-name')
                            drinkName.text(drinkInfo.strDrink)
                            back.append(drinkName)
                            console.log(drinkInfo.strDrink)
                            
                
                            var instruct = $('<p>')
                            instruct.addClass('instructions')
                            instruct.text(drinkInfo.strInstructions)
                            back.append(instruct)
                            
                            inner.append(back)
                        //    console.log(inner)
                        results.append(card)
                            
                        })
                }
                return data;
            })
    })
})

// create a randomize function that goes through drink list array
// math.random
// more CSS. make sexy. polish. grid in & grid out. prettier. bad if you will
// google fonts. background image.
// second API and local storage
// leaflet.js
// random dad joke API
// presentation & README
