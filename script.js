console.log("Explore API");

const person = {
    name: "Shafin",
    fruit: "Watermelon",
    dish: "Naga Drums",
    friends: ["Ahmed", "Dhruv"],
    isRich: false,
    money: 34000
}
console.log(person, typeof person);

const personJSON = JSON.stringify(person);
console.log(personJSON, typeof personJSON);

// JSON.stringify ==> JSON
// JSON.parse ==> object

const parseJSON = JSON.parse(personJSON);
console.log(parseJSON);