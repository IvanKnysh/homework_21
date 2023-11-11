/**
 * Завдання 1. Рекурсивне зведення в ступінь
 */
const pow = (num, degree) => (degree === 0 ? 1 : num * pow(num, degree - 1));
console.log(pow(5, 3));

/**
 * Завдання 2. Реалізуйте функцію removeElement
 */
const removeElement = (arr, item) => arr.splice(arr.indexOf(item), 1);

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);
