let stocks = {
  fruits: ['Strawberry', 'Grapes', 'Banana', 'Apple'],
  liquid: ['Water','Ice'],
  holder: ['Cone', 'Cup', 'Stick'],
  toppings: ['Chocolate', 'Peanuts'],
};

let isOpen = false;

function time(ms) {
  return new Promise ((resolve,reject) => {
    if(isOpen) {
      setTimeout(resolve,ms)
    }else {
      reject(console.log('Sorry shop is closed'))
    }
  })
}

async function kitchen() {
  try{
    await time(2000)
    console.log(`${stocks.fruits[0]} was selected`)

    await time(0000) // Se puede borrar, no altera la función
    console.log('Production has started')

    await time(2000)
    console.log('The fruit has been chopped')

    await time(1000)
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

    await time(1000)
    console.log('The machine has been started')

    await time(2000)
    console.log(`Ice cream was placed on ${stocks.holder[0]}`)

    await time(3000)
    console.log(`${stocks.toppings[0]} was added as toppings`)

    await time(2000)
    console.log('Serve ice cream')
  }
  catch(error) {
    console.log('Customer left', error)
  }
  finally {
    console.log('Day ended shop is closed')
  }
}

kitchen()

