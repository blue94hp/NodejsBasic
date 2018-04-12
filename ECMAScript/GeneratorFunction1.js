/**
 * Created by anhtuan on 12/04/2018
 */
var countdown = function *(start) {
    while (start){
        yield start;
        start --;
    }
};

var counter = countdown(5);
function callback() {
    var item = counter.next();
    if(!item.done){
        console.log(item.value);
        setTimeout(callback,1000);
    }
};

callback();