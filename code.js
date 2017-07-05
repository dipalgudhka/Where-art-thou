/*
I have been learning how to code on freecodecamp. I had to store this solution
as I wanted to keep it as a record of what I had done. I must say that this is
not the best solution, although I have written it all by myself.
*/

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var index = [];
  var key = Object.keys(source);
  
  for (var i = 0; i < collection.length; i++) {
    // assign counter to count whether both the keys are in one collection
    var counter = 0;
    
    for (var k = 0; k < key.length; k++) {
      
      if (collection[i][key[k]] == source[key[k]]) {
        counter++;
      }
    }
    // only if counter is equal to the number of keys shall we store it in the index
    if (counter === key.length) {
      index.push(i);
    }
  }
  // use the index to print all the valuesbased on array position
  for (var j = 0; j < index.length; j++) {
    arr.push(collection[index[j]]);
  }
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });

/*
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) should return [{ "a": 1, "b": 2, "c": 2 }].
*/
