var category

function getCategory(){
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: `json/categories.json`
    })
    .then(function(data, textStatus, XHR){
      resolve(data.id)
    })
  })
}

function getType(){
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: `json/types.json`
    })
    .then(function(dataTypes, textStatus, XHR){
      resolve(dataTypes)
    })
  })
}

function getProduct(){
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: `json/products.json`
    })
    .then(function(dataProducts, textStatus, XHR){
      resolve(dataProducts)
    })
  })
}

getCategory()
.then(function(val){
  return getType()
})
.then(function(dataTypes){
  console.log(dataTypes)
})
.then(function(val){
  return getProduct()
})
.then(function(dataProducts){
  console.log(dataProducts)
})
