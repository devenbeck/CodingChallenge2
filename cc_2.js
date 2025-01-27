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

//Task 4: Array of Objects
let customers = [
    {name: "Jason Aldean", email: "jaldean123@gmail.com", purchaseAmount: 175},
    {name: "Rhett Akins", email: "rhettakins87@aol.com", purchaseAmount: 40},
    {name: "Randy Houser", email: "randyhouser2001@yahoo.com", purchaseAmount: 75}
]; // Array of objects of customers

console.log(JSON.stringify(customers, null, 2)); //display the array of objects of customers
customers.push({name: "Hank Files", email: "hankfiles101@gmail.com", purchaseAmount: 235}); //add a new customer to the array
console.log(JSON.stringify(customers,null, 2)); //display the objects of customers
