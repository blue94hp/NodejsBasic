/**
 * Created by anhtuan on 15/04/2018
 */
var q1 = function *() {
    yield 2;
    yield 3;
    yield 4;
};

var q2 = function *() {
    yield 1;
    yield* q1();
    yield 5;
};

var iterator = q2();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// var callback = function () {
//     var item = iterator.next();
//     if (!item.done){
//         console.log(item.value);
//         setTimeout(callback(),1000);
//     }
// };
// callback();