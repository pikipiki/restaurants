var restaurant = {
  templateUrl: 'src/app/components/restaurant/restaurant.html',
  controller: 'RestaurantController',
  bindings : {
    foodSelected: '@'
  }
}

angular
  .module('components.restaurant')
  .component('restaurant', restaurant)