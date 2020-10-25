'use strict';
//const hotel = {
//  name: 'Resort Hotel',
//  stars: 5,
//  capacity: 100,
//};

//console.log(hotel.name); // Resort Hotel
//console.log(hotel['name']); // Resort Hotel
//console.log(hotel);

let user = {
  name: "John",
  age: 30
};

// перебор значений
for (let value of Object.values(user)) {
  alert(value); // John, затем 30
}