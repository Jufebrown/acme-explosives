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
    .then(function(dataType, textStatus, XHR){
      resolve(dataType)
    })
  })
}

function getProduct(){
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: `json/products.json`
    })
    .then(function(dataProduct, textStatus, XHR){
      resolve(dataProduct)
    })
  })
}

getCategory()
.then(function(val){
  return getType()
})
.then(function(dataType){
  console.log(dataType)
})
.then(function(val){
  return getProduct()
})
.then(function(dataProduct){
  console.log(dataProduct)
})
