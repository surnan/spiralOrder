
function eatingFruits(fruitsRemaining, lastFoodEaten){
  // function eatingFruits(){
  lastFoodEaten = "brocolli";
  fruitsRemaining += ",strawberry";
   return {a: fruitsRemaining, b: lastFoodEaten}
}

function spiralOrder(){
  let fruitsRemaining = ['apple', 'orange', 'fig', 'lemon', 'grapes'];
  let lastFoodEaten = "watermelon";


 console.log('1- fruitsRemaining:  ', fruitsRemaining);
 console.log('1- lastFoodEaten:    ', lastFoodEaten);

 let temp = eatingFruits(fruitsRemaining, lastFoodEaten);
 fruitsRemaining = temp.a;
lastFoodEaten = temp.b;

 console.log('2- fruitsRemaining:  ', fruitsRemaining);
 console.log('2- lastFoodEaten:    ', lastFoodEaten);
}

// let fruitsRemaining = ['apple', 'orange', 'fig', 'lemon', 'grapes'];
// let lastFoodEaten = "watermelon";
spiralOrder();
