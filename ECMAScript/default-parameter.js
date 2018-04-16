/**
 * Created by anhtuan on 16/04/2018
 */
var add_1 = function (a, b) {
    return a + b;
};

var add_2 = function (a, b = 1) {
    return a + b;
}

var add_3 = function (a = 1, b, c = 1) {
    return a + b + c;
}
var add_4 = function (a, b = 1, c = 1) {
    return a + b + c;
}
console.log(add_1(2, 2));   //4
console.log(add_2(2));      //3
console.log(add_2(2, 3));   //5
console.log(add_3(2));      //NAN
console.log(add_4(2));      //4

var values = [1, 2, 3, 4, 5];
var [a,b,...rest] = values;
console.log('a =',a);
console.log('b =', b);
console.log('rest =', rest);