// Start of JavaScript

// The class list in alphabetical order by last name

const names = [
  'Student 1',
  'Student 2',
  'Student 3',
  'Student 4',
  'Student 5',
  'Student 6',
  'Student 7',
  'Student 8',
  'Student 9',
  'Student 10',
  'Student 11',
  'Student 12',
  'Student 13',
  'Student 14',
  'Student 15',
  'Student 16',
  'Student 17',
  'Student 18',
  'Student 19',
  'Student 20',
  'Student 21',
  'Student 22'
]

// Terms in order presented in the assignment page on Canvas
// Note that some are repeated to accommedate for the class list

const terms = [
  'Hover',
  'Click',
  'Drag',
  'Scroll',
  'Cursor',
  'Type',
  'Duration (Time)',
  'Show/Hide',
  'Random',
  'Hover',
  'Click',
  'Drag',
  'Scroll',
  'Cursor',
  'Type',
  'Duration (Time)',
  'Show/Hide',
  'Random',
  'Hover',
  'Click',
  'Drag',
  'Scroll'
]

// A function that takes the values of a array and shuffles the order randomly

const shuffleTerms = arr => arr
  .map(a => [Math.random(), a])
  .sort((a, b) => a[0] - b[0])
  .map(a => a[1])

// A variable that will contain the shuffled list

const shuffledTerms = shuffleTerms(terms)

// Output HTML that iterates over the class list with the randomized terms list

names.forEach(function (name, i) {
  // Select the .class-grid div
  // Add the following HTML that represents each combined name and term
  document.querySelector('.class-grid').innerHTML += `<div class="grid-item"><div class="name">${name}</div> <div class="term">${shuffledTerms[i]}</div></div>`
})
