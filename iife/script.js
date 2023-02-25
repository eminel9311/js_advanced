//example
;(function callNow() {
  console.log('run now');
})();

//iife privatfe
let count = 0;
;(function myFunc(){
  count ++;
  console.log(count);
  if(count < 10)
    myFunc()
})()

// myFunc() // error

// viết ứng dụng sử dụng IIFE

const app = (() => {
  const cars = [];
  return {
    list(){
      return cars;
    },
    add(car){
      cars.push(car);
    },
    edit(index, car) {
      cars[index] = car;
    },
    delete(index){
      cars.splice(index, 1)
    }
  }
})();