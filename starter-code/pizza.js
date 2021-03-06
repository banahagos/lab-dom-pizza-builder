// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: { name: 'Pepperonni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function ($pep) {
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(mushroomItem => {
    if (state.mushrooms) {
      mushroomItem.style.visibility = "visible";
    }
    else {
      mushroomItem.style.visibility = "hidden"
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(greenPepperItem => {
    if (state.greenPeppers) {
      greenPepperItem.style.visibility = "visible";
    }
    else {
      greenPepperItem.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (state.whiteSauce) {
    document.querySelector('.sauce-white').style.visibility = "visible"
  }
  else {
    document.querySelector('.sauce-white').style.visibility = "hidden"
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.querySelector('.crust-gluten-free').style.visibility = "visible"
  }
  else {
    document.querySelector('.crust-gluten-free').style.visibility = "hidden"
  }
}

function renderButtons() {
  //Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperonni) {
    document.querySelector('.btn-pepperonni').classList.add('active')
  }
  else {
    document.querySelector('.btn-pepperonni').classList.remove('active')
  }

  if (state.mushrooms) {
    document.querySelector('.btn-mushrooms').classList.add('active')
  }
  else {
    document.querySelector('.btn-mushrooms').classList.remove('active')
  }

  if (state.greenPeppers) {
    document.querySelector('.btn-green-peppers').classList.add('active')
  }
  else {
    document.querySelector('.btn-green-peppers').classList.remove('active')
  }

  if (!state.whiteSauce) {
    document.querySelector('.btn-sauce').classList.remove('active')
  }
  else {
    document.querySelector('.btn-sauce').classList.add('active')
  }

  if (!state.glutenFreeCrust) {
    document.querySelector('.btn-crust').classList.remove('active')
  }
  else {
    document.querySelector('.btn-crust').classList.add('active')
  }

}

//TO DO
function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = 10;

  if(state.pepperonni) {
    totalPrice += ingredients.pepperonni.price;
    document.getElementById('pep-price').style.visibility = "visible"
  }
  else {
    document.getElementById('pep-price').style.visibility = "hidden"
  }

  if(state.mushrooms) {
    totalPrice += ingredients.mushrooms.price;
    document.getElementById('mushroom-price').style.visibility = "visible"
  }
  else {
    document.getElementById('mushroom-price').style.visibility = "hidden"
  }

  if(state.greenPeppers) {
    totalPrice += ingredients.greenPeppers.price;
    document.getElementById('green-peppers-price').style.visibility = "visible"
  }
  else {
    document.getElementById('green-peppers-price').style.visibility = "hidden"
  }

  if(!state.whiteSauce) {
    document.getElementById('white-sauce-price').style.visibility = "hidden"
  }
  else {
    totalPrice += ingredients.whiteSauce.price;
    document.getElementById('white-sauce-price').style.visibility = "visible"
  }

  if(!state.glutenFreeCrust){
    document.getElementById('gluten-free-price').style.visibility = "hidden"
  }
  else {
    totalPrice += ingredients.glutenFreeCrust.price;
    document.getElementById('gluten-free-price').style.visibility = "visible"
  }
  document.getElementById('total-price').innerHTML = `$${totalPrice}`
}




renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function () {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
let mushroomButton = document.querySelector('.btn-mushrooms');
mushroomButton.onclick = function () {
  state.mushrooms = !state.mushrooms;
  renderEverything()
}


// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
let greenPepperButton = document.querySelector('.btn-green-peppers');
greenPepperButton.onclick = function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
let sauceButton = document.querySelector('.btn-sauce')
sauceButton.onclick = function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
let crustButton = document.querySelector('.btn-crust');
crustButton.onclick = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything()
}