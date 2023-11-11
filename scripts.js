/**
 * Завдання 1. Рекурсивне зведення в ступінь
 */
const pow = (num, degree) => (degree === 0 ? 1 : num * pow(num, degree - 1));
console.log(pow(5, 3));
