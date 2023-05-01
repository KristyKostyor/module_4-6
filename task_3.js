const names = [
  "Noah",
  "Liam",
  "Mason",
  "Jacob",
  "Robot",
  "William",
  "Ethan",
  "Michael",
  "Alexander",
];
const prefix = 'Mr';

const addPrefix = (names,prefix) => {
    return names.map(item => `${prefix} ${item},` );
};

const namePrefix = addPrefix (names,prefix);
console.log(namePrefix);