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

        var api = `https://thecocktaildb.com/api/json/v1/1/filter.php?i=` + selectedValue
        fetch(api)
            .then(function (response) {

                return response.json()
            })
            .then(function (data) {
                
                results.html("")
                // var name = data.drinks[0].strDrink
                // nameEl.text("Drink Name: " + name)
                
                // var image = $('#drink-image')
                // var thumb = data.drinks[0].strDrinkThumb

                // image.attr('src', thumb)
                // image.attr('data', data.drinks[0].idDrink)

                for (let i = 0; i < 10; i++) {
                    
                    // new api start
                    var newApi = `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${data.drinks[i].idDrink}`
                    // var back;
                    fetch(newApi)
                    .then(function (response) {
                        return response.json()
                    })
                    .then(function (juice) {
                        console.log(juice)
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
                        img.attr('src', data.drinks[i].strDrinkThumb)
                        front.append(img)
                        
                            
                            var back = $('<div>')
                            back.addClass('flip-card-back')
                            // inner.append(back)
                            
                            var drinkName = $('<h4>')
                            drinkName.addClass('drink-name')
                            drinkName.text(juice.drinks[0].strDrink)
                            back.append(drinkName)
                            console.log(juice.drinks[0].strDrink)
                            
                
                            var instruct = $('<p>')
                            instruct.addClass('instructions')
                            instruct.text(juice.drinks[0].strInstructions)
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