// const nemo = ['nemo'];

// function findNemo(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'nemo') {
//       console.log('Found NEMO!');
//       break; // stops the loop as soon nemo is found
//     }
//   } 
// }

// findNemo(nemo); // O(n) or Linear Time because the number increase then the number operation increase as well

function reverse(str) {
  //check input 
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'hmm there is no string';
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i])
  }

  console.log(backwards);

return backwards.join('');
}

reverse('Hi my name is Luigi');