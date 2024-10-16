const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
let newArray = []
len = teachers.length;
for(let i = len -1; i >= 0; i--){
newArray.push(teachers[i])
}

// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = newArray;
console.log(reversedTeachers)

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
maggiori5 = []
for(let i = 0; i < teachers.length; i++){
if(teachers[i].length >= 5){
  maggiori5.push(teachers[i])
} 
}
const longNames = maggiori5;
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
let nameDelete = 'Ed';
for(let i = 0; i < teachers.length; i++){
  if (teachers[i] === nameDelete){
    teachers.splice(i, 1)
  }
}
console.log(teachers)   

