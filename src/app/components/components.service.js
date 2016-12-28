var DataService = function($http) {

  this.apiUrl = "http://localhost:3000/"

  this.getFoodData             = () => $http.get(
    this.apiUrl + "foodData"
  )

  this.getBurgerRestaurantData = () => $http.get(
    this.apiUrl + "burgerRestaurantData"
  )

  this.getPizzaRestaurantData  = () => $http.get(
    this.apiUrl + "pizzaRestaurantData"
  )

  this.getSushiRestaurantData  = () => $http.get(
    this.apiUrl + "sushiRestaurantData"
  )

  this.fail = (err) => console.log(err.statusText)

  function createSelectObject(res){
    this.availableOptions = res.data,
    this.selectedOption = res.data[0]
  }

  this.createSelectObject = createSelectObject

}

angular
  .module('components')
  .service('DataService', ['$http', DataService])