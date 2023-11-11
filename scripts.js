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

/**
 * Завдання 3. Реалізуйте функцію generateKey
 */
const generateKey = (length, characters) => {
	let result = "";

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		result += characters.charAt(randomIndex);
	}

	return result;
};

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
console.log(generateKey(16, characters));
