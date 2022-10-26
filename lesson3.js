// if (1) {console.log("true")};

//const name = "Alex3";
//if (name === "Ivan")
//{console.log(`Привет ${name}`);
//} else if (name === "Alex")
//{console.log(`Привет друг ${name}`);}
// else if (name === "Petr") {
// console.log(`Hi ${name}`);
// }
// else {
//     console.log("Привет незнакомец");}

//   Тернарный оператор
/*if (true) {
     if (true) {
         console.log("true"); 
     } else {
        console.log("false");
     }
 } else {
     console.log("false");}*/

// const userName = "Alex45";
// const result = userName === "Alex" ? "Hello Alex" : "Hello User ";
// console.log(result);

/*const a = 100;
const b = 20;
const c = 300;

if (a < b && b < c) {
   console.log("c самый большой");
 } else if (a < b && b > c) {
   console.log("b самый большой");
 } else if (a < c) {
   console.log("C самый большой");
 } else {
  console.log("A самый большой");
 }*/

// if (a < b) {
//   b < c ? console.log(`c`) : console.log(`b`);
// } else {
//   a < c ? console.log(`c`) : console.log(`a`);
// }

// const UserRole = "admin";
// switch (UserRole) {
//   case "admin":
//     console.log("Это админ, и он любит чай");
//     break;
//   case "user":
//     console.log("Это юзер, и он любит кьолу");
//     break;

//   case "manager":
//     console.log("Это менеджер, и он любит кофе");
//     break;
//     default:
//         break;
// }

/*const t = 35;
if (t <= -30) {
  console.log("Оставайтесь дома");
} else if (t > -30 && t <= -10) {
  console.log("Сегодня холодно");
} else if (t > -10 && t <= 5) {
  console.log("не холодно");
} else if (t > 5 && t <= 15) {
  console.log("тепло");
} else if (t > 15 && t <= 25) {
  console.log("очень тепло");
} else if (t > 25 && t <= 35) {
  console.log("жарко");
} else {
  console.log("Пекло");
}*/

/*let i = 0;
while (i < 100) {
  console.log(i);
  i = i + 1;
}*/
// i = i + 1 тоже самое, что и i +=10;
//   i++; только единицу +1 всегда прибавляет

//Циклы
/*let i=0
while (true) {
    if (i<30) {
        i+=1;
    }else{
        break;  //принудительная остановка цикла
    }
    console.log(i);
}*/

/*for (let i = 0; i <= 5; i += 1) {
  if (i === 1 || i === 3) continue;
  console.log(i);
}*/

/*const arr = [1, 3, 5, 6, 9, 12, 14, 16, 17, 18, 21, 25, 65, 37];
const result = [];

for (let i = 0; i < arr.length; i += 1) {
  if (arr[i] % 2 === 0) { //остаток от деления, нецелые числа
    result.push(arr[i]);
  }
}
console.log(result);*/

/*let a = 1; 
 
while (true) {
     if (a<10) {
       a+=1;
    }else{
     break;  
     }
     console.log("Hellow"+a);
    }*/

/*let i = 1;
while (i <= 5) {
  console.log("hi");
  i += 1;
}*/

/*const text = "hi";
const count = 5;
for (let i = 0; i < count; i+=1) {
  console.log(text);
}*/

/*const text = "hi";
const count = 5;
let i = 0;
while (i < count) {
  console.log(text);
  i+=1;
}*/
