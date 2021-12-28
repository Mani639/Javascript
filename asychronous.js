//Asychronous javascript

/*Promises -> Pending
             *resolve
             *reject      */

/* fetch("https://jsonplaceholder.typicode.com/users/")         //promise to get the value  
    .then((result) => result.json())                   //response data
    .then((data) => console.log(data))                 //user data
    .then((error) => console.log(error));   */         //if fails that data then it will come error


//Async Await

//async function getData(){};     this is used for normal function

const getData = async () => {
    try {
    const result = await fetch("https://jsonplaceholder.typicode.com/users/") 
    const data  = await result.json();
    console.log(data);
    } catch (error) {
        console.log(error);
    }
};
getData();