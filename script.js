// Hands On Project 1

// function addNumbers (num1, num2 = 10) {
//     return num1 + num2;
// }
// console.log(addNumbers(10));

// function addNumbers (num3, num4 = 10) {
//     return num3 * num4;
// }
// console.log(addNumbers(10));

// function addNumbers (num3, num4 = 10) {
//     return (num3 + num4) / 2;
// }
// console.log(addNumbers(10));

// Hands On Project 2

// const addNumbers = (num1, num2) => {
//     return num1 + num2;
// }
//  console.log(addNumbers(10, 10));



// const multiplyNumbers  = (num3, num4) => {
//     return num3 * num4;
// }
// console.log(multiplyNumbers(10, 10));

// const meanNumbers  = (num3, num4) => {
//     return (num3 + num4) / 2;
// }
// console.log(meanNumbers(10, 15));

// Hands On Project 3

let newProduct = {
    brand: "Nike",
    shoes: "Air Jordans",
    price: "$150",
    getProduct: function () {
        console.log(this.brand + "\n" + this.shoes + "\n" + this.price );
    }
};
newProduct.getProduct();

let careerPotential = {
    career: "Software Development",
    position: "Senior Developer",
    salary: "80K",
    getCareer: function () {
        console.log(this.career + "\n" + this.position + "\n" + this.salary);
    }
};
careerPotential.getCareer();