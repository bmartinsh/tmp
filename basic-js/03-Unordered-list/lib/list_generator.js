// This is correct

listItem = (content) => {
  return `<li class="list-group-item">${content}</li>`
};
  // Instructions : return the proper <li> HTML tag with its content (as a string)
  // => '<li class="list-group-item">milk</li>'


unorderedList = (items) => {
console.log(`<ul class="list-group">`);
array.forEach(items => console.log(`\t <li class="list-group-item">${items}</li>`));
console.log(`</ul>`);
}

  // TODO: return the proper <ul> markup (as a string)


// Works on MDN :
//const array = [ 'milk', 'butter', 'bread' ];
//console.log(`<ul class="list-group">`);
//console.group();
//array.forEach(element => console.log(`\t <li class="list-group-item">${element}</li>`));
//console.groupEnd();
//console.log(`</ul">`);

// this works too : \
//let unorderedList = [ 'milk', 'butter', 'bread' ];
//console.log(`<ul class="list-group">`);
//array.forEach(items => console.log(`\t <li class="list-group-item">${items}</li>`));
//console.log(`</ul>`);

// This is result of the unordered list :
// <ul class="list-group">
//   <li class="list-group-item">milk</li>
//   <li class="list-group-item">butter</li>
//   <li class="list-group-item">bread</li>
// </ul>
