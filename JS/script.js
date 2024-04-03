const arr = ['Maria','Joao','Beatriz'];
console.log(arr[0]);
console.log(arr[2].length)
const numbers = [5,3,4]
const otherNumbers = [1,2,3]

const allNumbers = numbers.concat(otherNumbers)
console.log(allNumbers)

const users = ['Matheus', 'Joao','Lucas','Miguel'];

for (let i = 0 ; i< users.length;i++){
    console.log(`Listando o usuário: ${users[i]}`);
}
const myJson = '{"nome": "Matheus", "age": 31, "skills": ["PHP","JavaScript", "Python"]}';
console.log(typeof myJson)
// Transformar JSON para Objeto:
const myObject = JSON.parse(myJson);
console.log(myObject)
console.log(typeof myObject)