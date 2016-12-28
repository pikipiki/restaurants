var FoodController = function(DataService) {

  DataService.getFoodData()
    .then(
      (res) => {
        this.foodData = new DataService.createSelectObject(res)
      }     
    )
    .catch(DataService.fail)

}

angular
  .module('components.food')
  .controller('FoodController', ['DataService', FoodController])