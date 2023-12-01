// Question ## 1. Return the Sum of Two Numbers
function addition(m, n) {
    return m + n;
}
// console.log(addition(-3, -6));

// Question ## 2. Convert Minutes into Seconds
function convert(minutes) {
    return minutes*60;
}
// console.log(convert(5));

// Question ## 3. Return the Next Number from the Integer Passed
const incrementNumber = function(n) {
    return n+1;
}
// console.log(incrementNumber(-5));

// Question ## 4. Area of a Triangle
const triArea = function(base, height) {
    return 1/2 * base * height;
}
// console.log(triArea(7, 4));

// Question ## 5. Return the First Element in an Array
const getFirstValue = function(arr) {
    return arr[0];
}
// console.log(getFirstValue([80, 5, 100]));

// Question ## 6. Convert Age to Days
const calcAge = function(age) {
    return age * 365;
}
// console.log(calcAge(65));

// Question ## 7. Power Calculator
const circuitPower = function(voltage, current) {
    return voltage * current;
}
// console.log(circuitPower(110, 3));

// Question ## 8. Maximum Edge of a Triangle
const nextEdge = function(side1, side2) {
    a = Math.abs(side1);
    b = Math.abs(side2);
    return (a + b) - 1;
}
// console.log(nextEdge(-9, 2));


// Question ## 9. Return the Remainder from Two Numbers
const remainder = function(n1, m1) {
    return n1 % m1;
}
// console.log(remainder(-9, 45));

// Question ## 10. Return Something to Me!
const giveMeSomething = function(message) {
    return "something" + " " + message;
}
// console.log(giveMeSomething("Bob Jane"));

// Question ## 11. Correct the Mistakes
const square = function(x) {
    return Math.pow(x, 2);
}
// console.log(square(100));


// Question ## 12. Is the Number Less than or Equal to Zero?
const lessThanOrEqualToZero = function(m) {
    if(m<=0) {
        return true
    }
    return false;
}
// console.log(lessThanOrEqualToZero(-11));


// Question ## 13. Sum of Polygon Angles
const sumPolygon = function(n) {
    if(n>2) {
        return ((n-2)*180);
    }
    return false;
}
// console.log(sumPolygon(3));


// Question ## 14. Basic Variable Assignment
const nameString = function(name) {
    return name + "Coder";
}
// console.log(nameString("javascript"));


// Question ## 14. Basic Variable Assignment

const lessThen100 = function(x1, x2) {
    if(x1+x2 < 100) {
        return true;
    }
    return false;
}
console.log(lessThen100(40, 25));

