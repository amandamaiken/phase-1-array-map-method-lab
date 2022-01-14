const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() { 
  // const arr = tutorials.map(function (arrayItemToBeSplit) {
  //   return arrayItemToBeSplit.split(" ")
  // })

  const arr = tutorials.map((arrayItemToBeSplit) => arrayItemToBeSplit.split(" "))
  
  const arr2 = arr.map(newParameter => newParameter.map(str => {
    return str.charAt(0).toUpperCase() + str.slice(1) 
  }).join(' '))
//
  // .toUpperCase() + newParameter.slice(1)

    // takes in a parameter of an array (each element of arr)
    // To each element in arr, do what?

    // return each element to be assigned to arr2 after being modified
    console.log(arr2)
    return arr2
}

titleCased(tutorials); // function call - tells the program, do this
// whatever is passed into the function call is the argument

