//The possible solution here to shift the items array to the class scope
// declaring it as a variable
function createStack() {
    const items = []; // creating local variable, will stop access it from outside
    return {
        push(item) {
            items.push(item);
        },
        pop() {
            return items.pop();
        }
    };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
stack.items; // => undefined
