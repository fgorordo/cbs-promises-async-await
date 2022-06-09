let stocks = {
  fruits: ['Strawberry', 'Grapes', 'Banana', 'Apple'],
  liquid: ['Water','Ice'],
  holder: ['Cone', 'Cup', 'Stick'],
  toppings: ['Chocolate', 'Peanuts'],
};


/* Callback hell ice cream*/

let orderCallbackHell = (callProduction) => {
  setTimeout(() =>{
    console.log(`${stocks.fruits[0]} was selected`);
    callProduction();
  }, 2000)
  
};

let productionCallbackHell = () => {
  setTimeout(() => {

    console.log('Production has started');

    setTimeout(() => {
      console.log('The fruit has been chopped')

      setTimeout(()=> {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

        setTimeout(()=> {
          console.log('The machine has been started')

          setTimeout(()=> {
            console.log(`Ice cream was placed on ${stocks.holder[0]}`)

            setTimeout(() => {
              console.log(`${stocks.toppings[0]} was added as toppings`)

              setTimeout(()=> {
                console.log('Serve ice cream')

              },2000)

            },3000)

          },2000)

        },1000)

      },1000)

    },2000)
  },0000)
};

orderCallbackHell(0,productionCallbackHell);