// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined < 0);
// console.log(undefined > 0);

/*Try avoiding comparisons with different data types as it causes confusion and also avoid these null and undefined ones because here == operation works a bit differently. */

// === strict comparison

console.log(2 == "2");//results true because of conversion
console.log(2 === "2");//results false because no conversion
