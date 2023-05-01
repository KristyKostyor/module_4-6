const allStudents = [
    "Иванов",
    "Петров",
    "Сидоров",
    "Кузнецов",
    "Смирнов",
    "Попов",
    "Соколов",
];

const failedStudents = ["Сидоров", "Смирнов", "Попов"];

const filterArr = (allStudents, failedStudents) => {
    return allStudents.filter(student=>!failedStudents.includes(student));
};
const passedStudents = filterArr(allStudents, failedStudents);
console.log(passedStudents);