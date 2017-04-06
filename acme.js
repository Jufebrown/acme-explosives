`use strict`

// variable initialization
let category
let type

// gets explosive category
const getCategory = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `json/categories.json`
    })
    .then((data, textStatus, XHR) => {
      resolve(data.id)
    })
  })
}

// gets explosive type
const getType = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `json/types.json`
    })
    .then((dataTypes, textStatus, XHR) => {
      resolve(dataTypes)
    })
  })
}

// gets explosive product
const getProduct = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `json/products.json`
    })
    .then((dataProducts, textStatus, XHR) => {
      resolve(dataProducts)
    })
  })
}


const loadData = () => {
  getCategory()
  .then((val) => {
    return getType()
  })
  .then((dataTypes){
    console.log(dataTypes)
  })
  .then((val) => {
    return getProduct()
  })
  .then((dataProducts) => {
    console.log(dataProducts)
  })
}

// sets explosive category
const setCategory = () => {
  category = $(".category").val()
  loadData()
}

$(".show").click(setCategory)
