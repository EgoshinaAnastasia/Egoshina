/*function showMessage(message) {
    console.log(message);
}
showMessage("Hi")
// showMessage("Hello")
// showMessage("Привет")*/

/*function sum(a, b = 0) {
   console.log(a + b); 
}
sum(2, 3);
sum(2, 0);
sum(2);*/

/*function sum(a, b ) {
    return a + b; 
 }
 const result = sum(3, 5);
 console.log(result);


 
 function positiveSum(2, 3) {
    if ( a > 0 && b> 0) {
        return a + b;
    }
    return "Ошибка вычисления"  
 }
 console.log(positiveSum(2, 3));
 console.log(positiveSum(-2, 3));*/

/*function getName() {
  const userName = "Alex";
  return userName;
}

function getUserName() {
  const userName = "Ivan";
  return userName;
}

console.log(getName());
console.log(getUserName());*/

/* const name = "Alex"

 function sayHello (message = "Hello") {
    console.log(`${message} - ${name}!!`);
 }
 sayHello();
 sayHello("Привет");*/

/*let name = "Alex"

 function sayHello (message = "Hello") {
    name = "Ivan"
    console.log(`${message} - ${name}!!`);
 }
 console.log(name)
 sayHello();
 console.log(name);*/

/* let a = 0;
 function sum(a, b = 3) {
    const result = a + b;
    a += 1;
    console.log(result);
 }
 sum(2);
 sum(2);
 sum(2);
 sum(2);
 sum(2);*/

//Задача 1
/*function sayHello(name = "Гость") {
  console.log(`Привет - ${name}!!`);
}
sayHello("Вася");
sayHello();*/

//задача 2
/*function stepen(a, b = 1){
    return a**b;
 }
 console.log(stepen(2));
 console.log(stepen(2, 10));*/

/*const sayHello = function (name) {
    console.log(`Hello ${name}`);
 }
 sayHello("Alex")*/

/*const sayHello = function (name) {
   console.log(`Hello ${name}`);
}
 const funcExample = function (calback) {
    for(let i = 0; i < 10000000000; i+=1) {}
    calback("Alex");
 }

 funcExample(sayHello);*/

//function declaration
/*sum(1, 2);
 function sum(a, b) {
    console.log(a + b);
 }*/

//function expression
/*const multiply = function sum(a, b) {
    console.log(a * b);
 };
 multiply(3, 4)*/

/*const getName = (name) => `Name-${name}`;

 console.log(getName("Alex"));
 console.log(getName("Ivan"));

 const getNameTwo = (name) => {
    return `Name-${name}`;
 }*/

/*const quadro = a => a ** 2;
 console.log(quadro(3));*/

//задача 1
/*const showString = (stroka, n) => {
  for (let i = 0; i < n; i += 1) {
    console.log(stroka);
  }
};
showString("hello", 5);
showString("Привет мир", 3);*/

//задача 2
/*const isVowel = (letter) => {
  if (
    letter === "а" ||
    letter === "у" ||
    letter === "о" ||
    letter === "ы" ||
    letter === "э" ||
    letter === "я" ||
    letter === "ю" ||
    letter === "и" ||
    letter === "е"
  ) {
    return true;
  }
  return false;
};
console.log(isVowel("и"));
console.log(isVowel("д"));*/
