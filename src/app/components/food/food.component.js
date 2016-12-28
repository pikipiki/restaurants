var food = {
  controller: 'FoodController',
  templateUrl : 'src/app/components/food/food.html'
}

angular
  .module('components.food')
  .component('food', food)