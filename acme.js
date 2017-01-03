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
    .then(function(data, textStatus, XHR){
      resolve(data)
    })
  })
}

function getProduct(){
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: `json/products.json`
    })
    .then(function(data, textStatus, XHR){
      resolve(data)
    })
  })
}

getCategory()
.then(function(val){
  return getType()
})
.then(function(data){
  console.log(data)
})
