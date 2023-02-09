// list of variables
// const api key variable

// need to append variables to parts of html

// create eventlistener button for search Bar
var nameEl = $('#drink-name')

$(document).ready(function () {
    $('select').on('change', function () {
        var selectedValue = $(this).val()
        console.log(selectedValue)
        var api = `https://thecocktaildb.com/api/json/v1/1/filter.php?i=` + selectedValue
        console.log(api)
        fetch(api)
            .then(function (response) {
                console.log(response)
                return response.json()
            })
            .then(function (data) {
                console.log(data)
                var name = data.drinks[0].strDrink
                nameEl.text("Drink Name: " + name)
                var image = $('#image')
                var thumb = data.drinks[0].strDrinkThumb
                image.attr('src', thumb)
                image.attr('data', data.drinks[0].idDrink)
                // image.append
                // console.log(nameEl.text(name))
                // for (let i = 0; i < 10; i++) {
                // }
                return data;
            })
    })
    $('#image').on(('click'), getIngredients)
})

function getIngredients (){
    var idDrink = $('#image').attr('data')
    console.log(idDrink)
    var newApi = `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
    fetch(newApi)
    .then(function (response) {
        console.log(response)
        return response.json()
    })
    .then(function (data) {
        console.log(data)
    })
}