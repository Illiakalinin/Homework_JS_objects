/*
1. Створити об'єкт customer, що містить такі властивості:
-ім'я, 
-прізвище, 
-електронна адреса, 
-password,
-номер телефона,
-адреса (є рядком або *об'єктом з властивостями місто, вулиця, дім, квартира) ; 
  Методи: 
-Виведення адреси, 
-Зміна номера телефону (метод повинен приймати як параметр рядок з новим номером телефону).
-Додати об'єкту властивість isMale (для позначення статі, true - male, false - female).
-Видалити у об'єкта властивість адреса.

-Зробити копії об'єкту customer двома різними способами.
*/

const customer = {
  firstName: "Did",
  lastName: "Ivan",
  email: "DidIvan@gmail.com",
  password: "DidIvanTheOldMan",
  phoneNumber: "+380123456789",
  //! adress: ["Ukraine", "Lviv", "Stepana Bendery", 33, 33], - чи можна писати так?
  adress: {
    country: "Ukraine",
    town: "Lviv",
    street: "Stepana Bendery",
    house: 33,
    apartment: 33,
  },
  changePhoneNumber(newPhoneNumber) {
    this.phoneNumber = newPhoneNumber;
  },
};

console.log("customer.adress :>> ", customer.adress);
console.log("customer :>> ", customer);
customer.changePhoneNumber("+380987654321");
customer.isMale = true;
delete customer.adress;
console.log("changed customer :>> ", customer);

const customer2 = Object.assign({}, customer);
console.log("customer2 :>> ", customer2);
console.log("customer === customer2 :>> ", customer === customer2);

const customer3 = { ...customer };
console.log("customer3 :>> ", customer3);
console.log("customer === customer3 :>> ", customer === customer3);

/*
2. Перебрати і вивести властивості об'єкту 
cat {
    name: 'Murka',
    color: 'black',
    isMale: false,
    isFurnitureDemage: true,
}
циклом for..in.
*/

const cat = {
  name: "Murka",
  color: "black",
  isMale: false,
  isFurnitureDemage: true,
};
for (var key in cat) {
  console.log("cat." + key + "---" + cat[key]);
}

/*
3. Створити функцію-конструктор для створення об'єктів книг з властивостями:
-автор, 
-назва, 
-рік видання, 
-видавництво (рядок або *об'єкт з властивостями місто, назва), 
-ціна.
--Передбачити методи:
-для обчислення віку книги (у роках),
-для зміни ціни книги.
*/

function Book(autor, title, year, publisher, price) {
  this.autor = autor;
  this.title = title;
  this.year = year;
  this.publisher = publisher;
  this.price = price;
  this.bookAge = function (presentYear) {
    presentYear = new Date().getFullYear();
    age = presentYear - this.year;
    return `The "${this.title}" is ${age} years old.`;
  };
  this.changePrice = function (newPrice) {
    this.price = newPrice;
  };
}

const book1 = new Book(
  "Andrzej Sapkowski",
  "The Witcher",
  1986,
  "SuperNowa",
  15.49
);

console.log("book1 :", book1);
console.log("book1.bookAge :>> ", book1.bookAge());
book1.changePrice(12.49);
console.log("book1 after :>> ", book1);
