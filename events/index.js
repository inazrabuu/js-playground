const PizzaShop = require('./pizza-shop'),
      DrinkMachine = require('./drink-machine')

const pizzaShop = new PizzaShop(),
      drinkMachine = new DrinkMachine()

pizzaShop.on('order', (size, topping) => {
  console.log(`Baking order of ${size} pizza with ${topping} topping`)
  drinkMachine.serveDrink(size)
})

pizzaShop.order('large', 'mushrooms')
pizzaShop.displayOrderNumber()