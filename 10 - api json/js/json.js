const jsonString = `{"name":"John", "age":30, "car":null}`;

console.log(jsonString, typeof jsonString);
console.log(jsonString.name); //Funkar ej

const obj = JSON.parse(jsonString);

console.log(obj, typeof obj);
console.log(obj.age);

