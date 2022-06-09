const util = require('util')
const time = util.promisify(setTimeout)

let stocks = {
  fruits: ['Strawberry', 'Grapes', 'Banana', 'Apple'],
  liquid: ['Water','Ice'],
  holder: ['Cone', 'Cup', 'Stick'],
  toppings: ['Chocolate', 'Peanuts'],
};

let kitchen = {
  async fruitSelect () {
    try {
      await time(2000)
      console.log(`${stocks.fruits[0]} was selected`)
    }catch (e) {
      console.log(e)
    }
  },

  async startProduction () {
    try {
      await time(0000)
      console.log('Production has started')
    }catch (e) {
      console.log(e)
    }
  },

  async chopFruit () {
    try {
      await time(2000)
      console.log('The fruit has been chopped')
    }catch (e) {
      console.log(e)
    }
  },

  async addLiquids () {
    try {
      await time(1000)
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
    }catch (e) {
      console.log(e)
    }
  },

  async startMachine () {
    try {
      await time(1000)
      console.log('The machine has been started')
    }catch (e) {
      console.log(e)
    }
  },

  async setHolder() {
    try {
      await time(2000)
      console.log(`Ice cream was placed on ${stocks.holder[0]}`)
    } catch (e) {
      console.log(e)
    }
  },

  async addToppings() {
    try {
      await time(3000)
      console.log(`${stocks.toppings[0]} was added as toppings`)
    } catch (e) {
      console.log(e)
    }
  },

  async serveIceCream () {
    try {
      await time(2000)
      console.log('Serve ice cream')
    } catch (e) {
      console.log(e)
    }
  }
}

async function main () {
  console.time('Measuring time');
  await kitchen.fruitSelect()
  await kitchen.startProduction()
  await kitchen.chopFruit()
  await kitchen.addLiquids()
  await kitchen.startMachine()
  await kitchen.setHolder()
  await kitchen.addToppings()
  await kitchen.serveIceCream()
  console.timeEnd('Measuring time')

}


main()