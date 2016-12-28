var RestaurantController = function(DataService) {

  this.$onInit = () => {
    this.restaurantData = {}
  }

  DataService.getBurgerRestaurantData()
  .then(
    (res) => {
      this.restaurantData['Burger'] = new DataService.createSelectObject(res)
    }     
  )
  .catch(DataService.fail)

  DataService.getPizzaRestaurantData()
  .then(
    (res) => {
      this.restaurantData['Pizza'] = new DataService.createSelectObject(res)
    }     
  )
  .catch(DataService.fail)
  
  DataService.getSushiRestaurantData()
  .then(
    (res) => {
      this.restaurantData['Sushi'] = new DataService.createSelectObject(res)
    }     
  )
  .catch(DataService.fail)

}

angular
  .module('components.restaurant')
  .controller('RestaurantController', ['DataService', RestaurantController])