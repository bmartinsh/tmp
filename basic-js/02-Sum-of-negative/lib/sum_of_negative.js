const array =[-4, 5, -2, 9];
const sumOfNegative = array.reduce(((r,x) => x < 0 ? x + r: r),0);
