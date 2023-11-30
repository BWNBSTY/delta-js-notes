// function hello() {
//     console.log('inside hello func');
//     console.log('Hello');
// }

// function demo() {
//     console.log('calling hello func');
//     hello();
// }

// console.log('calling demo func');
// demo();

// console.log('done bye!');


// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }

// three();


// Callback Hell
// let h1 = document.querySelector('h1');

// function changeColor(color,delay,nextColorChange) {
//     setTimeout(function() {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     },delay)
// }

// changeColor("red",1000,() => {
//     changeColor("blue",1000,() => {
//         changeColor("green",1000,() => {
//             changeColor("orange",1000);
//         })
//     })
// });               



// without promises

// function saveData (data,success,failure) {
//     let netSpeed = Math.floor(Math.random() * 10) + 1;
//     if(netSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// saveData('apple',() => {
//     console.log('Sucess data saved');
//     saveData('ball',() => {
//         console.log('data2 saved');
//         saveData('cat',() => {
//             console.log('data3 saved');
//         },() => {
//             console.log('data3 not saved weak connection');
//         })
//     },() => {
//         console.log('data2 not saved weak connection');
//     })
// },() => {
//     console.log('failure weak connection data is not saved');
// })


// using promise(callback)
// promise ---> object
// resolve ---> success
// reject ---> failure

// function saveData (data) {
//     let netSpeed = Math.floor(Math.random() * 10) + 1;
//     return new Promise((resolve,reject) => {
//         if(netSpeed > 4) {
//             resolve("sucess: data was saved");
//         } else {
//             reject("failure: data was not saved weak connection");
//         }
//     })
// }

// saveData('hello world');


// promise methods 
// agar promise fulfilled hua toh--- then(callback)
// promise rejected --- catch(callback)

// function saveData (data) {
//     let netSpeed = Math.floor(Math.random() * 10) + 1;
//     return new Promise((resolve,reject) => {
//         if(netSpeed > 4) {
//             resolve("sucess: data was saved");
//         } else {
//             reject("failure: data was not saved weak connection");
//         }
//     })
// }

// saveData("hello")
// .then(() => {
//     console.log('promise was resolved');
// })
// .catch(() => {
//     console.log('promise was rejected');
// })




//                                             promise chaining
// inproved promise version
// function saveData(data) {
//     return new Promise((resolve,reject) => {
//         let netSpeed =  Math.floor(Math.random() * 10) + 1;
//         if(netSpeed > 4) {
//             resolve("Success: data was saved");
//         } else {
//             reject("Error: network speed is too slow");
//         }
//     }) 
// }

// saveData("hello world")
// .then(() => {
//     console.log('data1 saved : promise was resolved');
//     saveData("apple")
//     .then(() => {
//         console.log('data2 saved');
//     })
// })
// .catch(() => {
//     console.log('promise was rejected');
// })


// more inproved
// saveData("hello world")
// .then(() => {
//     console.log('data1 saved : promise was resolved');
//     return saveData("apple");
// })
// .then(() => {
//     console.log('data2 saved');
//     return saveData("flower");
// })
// .then(() => {
//     console.log('data3 saved');
// })
// .catch(() => {
//     console.log('promise was rejected');
// })


// we can saved resole and reject value as argument in then and catch
// saveData("hello world")
// .then((resolve) => {
//     console.log('data1 saved : promise was resolved');
//     console.log('result of promise: ',resolve);
//     return saveData("apple");
// })
// .then((resolve) => {
//     console.log('data2 saved');
//     console.log('result of promise: ',resolve);
//     return saveData("flower");
// })
// .then((resolve) => {
//     console.log('data3 saved');
//     console.log('result of promise: ',resolve);
// })
// .catch((reject) => {
//     console.log('promise was rejected');
//     console.log('error of promise: ',reject);
// })


//  Refactoring old code
// let h1 = document.querySelector('h1');

// function changeColor(color,delay) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() =>{
//             h1.style.color = color;
//             resolve("colour changed!");
//         },delay)
//     })
// } 

// changeColor('red',1000)
// .then(() => {
//     console.log('changed to red color');
//     return changeColor('green',1000);
// })
// .then(() => {
//     console.log('changed to green color');
//     return changeColor('orange',1000);
// })
// .then(() => {
//     console.log('changed to orange color');
//     return changeColor('blue',1000);
// })
// .then(() => {
//     console.log('changed to blue color');
// })



// async function
// more cleanner / compact / easy to understand way to write asynchronous 
// async and await keywords
// async function by default return a promise

// throw keyboard is used to display error 
// Eg: throw "some random error"


// eg of async
// async function greet() {
//     return "hello!";
// }

// greet()
// .then((value) => {
//     console.log('promise was resolved');
//     console.log('returned value: ',value);
// })
// .catch((er) => {
//     console.error('promise was rejected');
// })


// eg of async
// async function greet() {
//     throw "404 page not found";
// }

// greet()
// .then((value) => {
//     console.log('promise was resolved');
//     console.log('returned value: ',value);
// })
// .catch((er) => {
//     console.error('promise was rejected');
//     console.log('reason for rejection: ',er);
// })


// async for arrow function
// eg
// const demo = async () => 5;



//                         await keyboard
// pauses the execution of surrounding async function untill the promises is settled (resolve or reject) 
// await function ko async ke andar hi use kar sakthe hain
//  await laganeh seh jab tak woh kam nhi hota tab tak baki kam wait hoga

// eg of await 
// function randNum() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random()*10) + 1;
//             console.log(num);
//             resolve();
//         },1000)
//     })
// }

// async function demo() {
//     await randNum();
//     await randNum();
//     await randNum();
//     randNum();
// }

// demo();


// eg of await
// let h1 = document.querySelector('h1');

// function changeColor(color,delay) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() =>{
//             h1.style.color = color;
//             console.log(`color changed to ${color}`);
//             resolve("colour changed!");
//         },delay)
//     })
// } 

// async function demo() {
//     await changeColor('red',1000);
//     await changeColor('blue',1000);
//     await changeColor('green',1000);
//     await changeColor('yellow',1000);
//     changeColor('pink',1000);
// }

// demo();


//              handling rejection
// promise reject honeh seh baki ka kam execute nhi hota 
//  we handle rejection by try and catch method
// let h1 = document.querySelector('h1');

// function changeColor(color,delay) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() =>{
//             let num = Math.floor(Math.random() * 5) + 1;
//             if(num > 3) {
//                 reject('promise rejected');
//             }

//             h1.style.color = color;
//             console.log(`color changed to ${color}`);
//             resolve("colour changed!");
//         },delay)
//     })
// } 

// async function demo() {
//     try{
//         await changeColor('red',1000);
//         await changeColor('blue',1000);
//         await changeColor('green',1000);
//         await changeColor('yellow',1000);
//         await changeColor('pink',1000);
//     } catch (error) {
//         console.log('error caught');
//         console.log(error);
//     }


//     let a = 5;
//     console.log('new number = ', a+3);
// }

// demo();


//                    Api
// Application Programming interface 
// we will request api and api will send us response
// eg insta meh like karneh seh bina reloading ke heart red hona
// user/js code request from api api will sent response from server
// api act as interface b/w user and server
// api do software ka interact karneh ka jariya hain
// jo http ke sath kam karthe hain, web api hota hain
// generally api response meh html,css,js nhi deta ,wo data return kartha hain json format meh
// api is generally url/endpoint 


//              accessing some APIs
// there exists a lot of api
// eg 
// twitter api,google map api
// https://catfact.ninja/fact return random facts about cat
// json data is for computer to read not for human
// generally we request api with js code not with browser



//                                               json 
// javascript object notation
// json ke undar jineh vi key hain wo string meh  hota hain
// jese object meh undefined value de sakthe hain , json meh undefined allowed nhi hota
// read about json in www.json.org
// json validator to check wheather u have written valide json or not


//              accesing json data
// api jab json response karega toh wo string format meh aayega
// JSON.parse(data)    --- to parse a string data into js object
// JSON.stringify(json)   ---- to parse js object data into JSON

// eg
// let catJson = '{"fact":"Ailurophile is the word cat lovers are officially called.","length":57}';
// let valid = JSON.parse(catJson);
// console.log(valid);
// console.log(valid.fact);
// console.log(valid.length);

// eg
// let student = {
//     firstName: "bwn",
//     mark: 95
// }
// let stuJson = JSON.stringify(student);
// console.log(stuJson);


//                      api testing requests
// tools // hoppscoth // postman
// https://hoppscotch.io/
// we are using hoppscoth
// on get
// past url of endpoint and sent it



//                   AJAX
// Asynchronous Javascript and XML
// request and response asynchronous process hota hain
// data ka format json hain


//              http verbs
//  verbs as get,post,put,patch,delete
// get ----- jab vi hameh infomation leni hoti hain
// post ---- api ke sath kuch data post karna chatha hain
// we will deal with all this verbs when we will make our own custom api


//            status codes
// eg
// 200 - ok
// 404 - not found
// 400 - bad request
// 500 - internal server error
// staus codes mdn for more



//                adding information in urls
// query string    // key value
// eg
// https://www.google.com/search?q=harry+potter



//                 https header
// header meh additional info jata hain server ko request karne seh
// same response meh vi
// eg 
// in hoppscotch web
// verb --- GET ,url --- https://icanhazdadjoke.com/ 
// click headers option
// header list  // add new
// Accept        application/json
//            or
// Accept        text/plain
// to change to json format



//               our first api request
// fetch(url) 
// fetch return promise so we can use promise method    
// eg
// let url = 'https://catfact.ninja/fact';
// fetch(url)
// .then((res) => {
//     console.log(res);
//     return res.json();
// })
// .then((data) => {
//     console.log(data);
//     console.log('data 1: ',data.fact);
//     return fetch(url);
// })
// .then((res) => {
//     return res.json(); 
// })
// .then((data2) => {
//     console.log(`data 2: ${data2.fact}`);
// })
// .catch((err) => {
//     console.log(err);
// })



//                      using fetch with async-await
// eg
// let url = 'https://catfact.ninja/fact';
// async function getFacts() {
//     try {
//         let response = await fetch(url);
//         let data = await response.json();
//         console.log(response);
//         console.log('fact 1: ',data.fact);

//         let response2 = await fetch(url);
//         let data2 = await response2.json();
//         console.log(response2);
//         console.log('fact 2: ',data2.fact);
//     } catch(error) {
//         console.log(`error : ${error}`);
//     }
//     console.log('code doesnot stop even if error occurs');
//     console.log('bye');
// }

// getFacts();




//                            axios
// ek library hota hain jispeh hum http request ko create kartha hain
// to use add cdn
// eg
// let url = 'https://catfact.ninja/fact';
// async function getFacts() {
//     try {
//         let response = await axios.get(url);
//         console.log(response);
//         console.log('fact 1: ',response.data.fact);
//     } catch(error) {
//         console.log(`error : ${error}`);
//     }
// }
// getFacts();


//                            returning cat facts using api on page
// 
// let url = 'https://catfact.ninja/fact';
// async function getFacts() {
//     try {
//         let response = await axios.get(url);
//         return response.data.fact
//     } catch(error) {
//         return "fact not found"
//     }
// }
// getFacts();

// let btn = document.querySelector("#btn")

// btn.addEventListener("click",async () => {
//     let fact = await getFacts();
//     let output = document.querySelector('#output')
//     output.innerText = fact
// })


//                           returning dog image using api on page
// 
// let url2 = 'https://dog.ceo/api/breeds/image/random'
// async function getImage() {
//     try {
//         let response = await axios.get(url2);
//         return response.data.message
//     } catch(error) {
//         return "Image not found"
//     }
// }
// getImage();

// let btn2 = document.querySelector("#btn2")

// btn2.addEventListener("click",async () => {
//     let img = await getImage();
//     let output = document.querySelector('#dog-img')
//     output.setAttribute('src',img)
// })



//                             axios sending headers
// eg
// let url3 = 'https://icanhazdadjoke.com/';
// async function getJokes() {
//     try {
//         const config = {headers: {Accept: 'application/json'}};
//         let res = await axios.get(url3,config);
//         console.log(res.data);
//     }
//     catch (e) {
//         console.log('error: ',e)
//     }
// }
// getJokes();




// http://universities.hipolabs.com/search?name=