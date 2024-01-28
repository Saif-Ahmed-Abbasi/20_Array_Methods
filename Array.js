// 1. pop
let favoriteFruits = ['apple', 'banana', 'orange', 'grape'];
favoriteFruits.pop();
console.log('1. pop:', favoriteFruits);

// 2. push
let numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log('2. push:', numbers);

// 3. shift
let colors = ['red', 'blue', 'green', 'yellow'];
colors.shift();
console.log('3. shift:', colors);

// 4. unshift
let programmingLanguages = ['JavaScript', 'Python', 'Java', 'C++'];
programmingLanguages.unshift('Ruby');
console.log('4. unshift:', programmingLanguages);

// 5. slice
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let weekdays = daysOfWeek.slice(1, 6);
console.log('5. slice:', weekdays);

// 6. reverse
let wordCharacters = ['H', 'e', 'l', 'l', 'o'];
wordCharacters.reverse();
console.log('6. reverse:', wordCharacters.join(''));

// 7. concat
let fruits = ['apple', 'banana', 'orange'];
let vegetables = ['carrot', 'broccoli', 'spinach'];
let mergedArray = fruits.concat(vegetables);
console.log('7. concat:', mergedArray);

// 8. join
let sentenceArray = ['This', 'is', 'a', 'sentence.'];
let sentence = sentenceArray.join(' ');
console.log('8. join:', sentence);

// 9. splice
let numbersToRemove = [1, 2, 3, 4, 5];
numbersToRemove.splice(1, 3);
console.log('9. splice:', numbersToRemove);

// 10. map
let numbersToDouble = [1, 2, 3, 4, 5];
let doubledNumbers = numbersToDouble.map(num => num * 2);
console.log('10. map:', doubledNumbers);

// 11. filter
let ages = [18, 25, 30, 22, 40];
let adults = ages.filter(age => age > 21);
console.log('11. filter:', adults);

// 12. find
let books = [
  { title: 'Book1', pageCount: 200 },
  { title: 'Book2', pageCount: 350 },
  { title: 'Book3', pageCount: 400 }
];
let bookWithMoreThan300Pages = books.find(book => book.pageCount > 300);
console.log('12. find:', bookWithMoreThan300Pages);

// 13. every
let examScores = [70, 85, 92, 78, 88];
let allPassed = examScores.every(score => score > 60);
console.log('13. every:', allPassed);

// 14. some
let temperatures = [25, 28, 32, 29, 30];
let above30Degrees = temperatures.some(temp => temp > 30);
console.log('14. some:', above30Degrees);

// 15. forEach
let names = ['Alice', 'Bob', 'Charlie'];
names.forEach(name => console.log('15. forEach: Hello, ' + name + '!'));

// 16. includes
let cities = ['New York', 'London', 'Paris', 'Tokyo'];
let includesCity = cities.includes('London');
console.log('16. includes:', includesCity);

// 17. reduce
let numbersToSum = [1, 2, 3, 4, 5];
let sum = numbersToSum.reduce((acc, num) => acc + num, 0);
console.log('17. reduce:', sum);

// 18. indexOf
let colorsToSearch = ['red', 'blue', 'green', 'yellow'];
let indexOfColor = colorsToSearch.indexOf('green');
console.log('18. indexOf:', indexOfColor);

// 19. lastIndexOf
let repeatedValues = [1, 2, 3, 2, 4, 2, 5];
let lastIndexOfValue = repeatedValues.lastIndexOf(2);
console.log('19. lastIndexOf:', lastIndexOfValue);

// 20. toString
let mixedArray = [1, 'hello', true, 3.14];
let arrayToString = mixedArray.toString();
console.log('20. toString:', arrayToString);
