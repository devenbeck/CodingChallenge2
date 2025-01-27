// Working with Arrays//
let products = ["Nike sneaker","Adidas shoe", "Reebok shoe", "Hoka Running shoe", "Asics sneaker"] //Array of 5 different products
products.push("Brooks trainers"); //add a new product to the end of the array
console.log(products); //display the array of products

products.pop(); //removes the last product from the array
console.log("Updated Product List:", products); //display the final updated list

//Task 2: Accessing and Modifying Arrays
let scores = [13, 15, 28, 54, 9] //Array of at least 5 scores
scores[1] = 27;  //update second element of array
let total = scores.reduce((a,b)=> a + b, 0); //add up total of scores
let average = total / scores.length; //find average 

console.log("Updated Scores:", scores); //display updated array of scores
console.log(total); //display sum of scores
console.log("Average score:", average); //display average of the scores

//Task 3: Working with Objects
let employee = {
    name: "Riley Green",
    age: 36,
    department: "country music",
    isActive: true
}; //object of employee
console.log(employee); //display the object of employee originally just to see comparison

employee.department = "singer"; //update the department of the employee
employee.position = "top artist"; // add a new property to the employee
console.log(employee); //display the updated object of employee