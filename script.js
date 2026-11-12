// let price = [15000, 250, 650, 4500, 8480, 1200, 5500, 13000, 70000, 4550];

// let total = 0;

// for (let i = 0; i< price.length; i++) {
//   let discount = 0;

//   if (price[i] > 5000) {
//     discount = (price[i]*20) / 100;
//   } else if (price[i] >= 2000) {
//     discount = (price[i]*10) / 100;
//   } else {
//     discount = 0
//   }

//   let finalPrice = price[i] - discount;

//   console.log("Price : ", price[i]);
//   console.log("Discounted Price : ", finalPrice);

//   total = total + finalPrice
// }

// console.log("Total Final Bill :", total);

// document.getElementById("form").addEventListener("submit", function (event) {
//   event.preventDefault();

//   let num = Number(document.getElementById("number").value);

//   let result = document.getElementById("result");
   

//     result.innerHTML =("")

//   for (let i=1; i<=num; i++) {
//     if (i%2 == 0) {
//          result.innerHTML +=`<p style="color: green">${i}</p>`
//     }else{
//         result.innerHTML +=`<p style="color: red">${i}</p>`
//     }
//   }
// });


document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let num = Number(document.getElementById("number").value);

  let result = document.getElementById("result");
   

    result.innerHTML =("")

  for (let i=1; i<=num; i++) {
    if (i%3 == 0 && i%5 ==0) {
         result.innerHTML +=`<p style="background-color:blue",>${"fizzbuzz"}</p>`
    }else if(i%5 == 0){
        result.innerHTML +=`<p style="background-color: red">${"buzz"}</p>`
    }else if(i%3 == 0){
         result.innerHTML +=`<p style="background-color: green">${"fizz"}</p>`
    }
     else{
        result.innerHTML +=i
    }
  }
});
