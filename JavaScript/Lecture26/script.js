//Array has built in iterator methods
//which tells us how to iterate over the array
//it also tells the for of loop how to iterate over the array

//Iterators

function makeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next() {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    },
  };
  return rangeIterator;
}

const myIteretor = makeIterator(1, 10, 1);

let result = myIteretor.next();
while (!result.done) {
  console.log(result.value);
  result = myIteretor.next();
}
// Output: 1 2 3 4 5 6 7 8 9

//Generators - while custom iterators are useful tool, thier creation requires careful programming
//             due to the need to explicitly maintain thier internal state. Generator functions provide
//             a powerful alternative. they allow you to define an iterative algorithms by writing a single function
//             whose execution is not continuous. Generator functions are writting using the functions* syntax.

function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let iterationCount = 0;
  for (let i = start; i < end; i += step) {
    iterationCount++;
    yield i;
  }
  return iterationCount;
}

const one = makeRangeIterator(1, 10, 1);
for (const val of one) {
  console.log(val);
}
