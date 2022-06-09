/* Promises ice cream */

let isOpen = true;

let promiseOrder = (time,work) => {
  return new Promise((resolve, reject) => { 
    if (isOpen) {
      setTimeout(() => {
        resolve(work())
      },time)

    } else {
      reject(console.log('Our shop is closed'));
    }
  })
}





promiseOrder(2000,() => console.log(`${stocks.fruits[0]} was selected`))


.then(() => {
  return promiseOrder(0000, ()=> {
    console.log('Production has started')
  })
})

.then(() => {
  return promiseOrder(2000, () => {
    console.log('The fruit has been chopped')
  })
})

.then(()=> {
  return promiseOrder(1000, () => {
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
  })
})

.then(()=> {
  return promiseOrder(1000,() => {
    console.log('The machine has been started')
  })
})

.then(()=> {
  return promiseOrder(2000,()=> {

    console.log(`Ice cream was placed on ${stocks.holder[0]}`)
  })
})

.then(()=> {
  return promiseOrder(2000,() => {
    console.log(`${stocks.toppings[0]} was added as toppings`)
  })
})

.then(()=> {
  return promiseOrder(2000, () => {
    console.log('Serve ice cream')
  })
})

.catch(() => {
  console.log('Customer left')
})

.finally(() => {
  console.log('Day ended, shop is close')
})