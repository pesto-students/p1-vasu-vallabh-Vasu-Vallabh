class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.items.length == 0) return "Underflow";
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length == 0;
    }
  
    printStack() {
      var str = "Stack -> [ ";
      for (var i = 0; i < this.items.length; i++) str += this.items[i] + " ";
      str += "]";
      console.log(str);
      return str;
    }
}
let mStack =  new Stack();

function isBalanced() {
  let x = '{([()])}'
let arr = x.split('');

if(arr.length%2 === 0) {
  function isOpeningBracket(value){
    return value == '{' || value == '[' ||value == '('
  }
  
  function isMatching(openingBracket,closingBracket){
    return openingBracket == '{' && closingBracket == '}' ||
    openingBracket == '[' && closingBracket == ']' ||
    openingBracket == '(' && closingBracket == ')'
  }
  
  for (let i = 0; i< arr.length; i++) {
    if(!isOpeningBracket(arr[i])) {
      mStack.push(arr[i])
    }
  }
  
  for(let i = 0; i < arr.length; i++) {
    if(isOpeningBracket(arr[i])){
      if(isMatching(arr[i],mStack.peek())){
        mStack.pop()
      }
    }
  }
  
  if(mStack.isEmpty()) {
    return true;
  }
}
return false;

}

console.log(isBalanced());