const test = (a,b,c) => a * b * c;
test(1,2,3);

const test3 = (a) => (b) => (c) => a * b * c;

console.log('test3(1)(2)(3)',test3(1)(2)(3))
