const mathOperations = require('./operation');

test('sum', ()=>{
    expect(mathOperations.add(2,2)).toEqual(4);
    expect(mathOperations.add(-2,2)).toEqual(0);
    expect(mathOperations.add(-2,-2)).toEqual(-4);
})

test('sub', ()=>{
    expect(mathOperations.sub(3,2)).toEqual(1);
    expect(mathOperations.sub(1,2)).toEqual(-1);
    expect(mathOperations.sub(1,1)).toEqual(0);
})

test('mul', ()=>{
    expect(mathOperations.add(2,2)).toEqual(4);
    expect(mathOperations.add(-2,-2)).toEqual(4);
    expect(mathOperations.add(-3,2)).toEqual(-6);
})
