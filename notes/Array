// Array 

// Strings
const strings = ['a', 'b', 'c', 'd', 'e'];

//push 
strings.push('f'); // 0(1)

//pop
strings.pop(); // 0(1)

//unshift 
strings.unshift('x'); // 0(n) because I had to iterate over the array and then added something in the front and shifted things over

//splice 
strings.splice(2,0, 'alien'); // 0(n/2) we had to go through half the array 


console.log(strings);

//Static array - C++
int a[20];
int b[5] {1,2,3,4,5} // you would have to copy the whole array then move it different memory to make space for it if you wanted to added something to the array 

// Create an array class from scratch 
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index]
  }

  push(item) {
  this.data[this.length] = item;
  this.length++;
  return this.length;
  }
}

const newArray = new MyArray();
newArray.push('hi')
newArray.push('world')
console.log(newArray);