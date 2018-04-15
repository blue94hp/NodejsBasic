/**
 * Created by anhtuan on 15/04/2018
 */
var range = function* (start, end, step) {
    while (start < end) {
        yield start;
        start += step;
    }
};

for (let value of range(0, 10, 2)) {
    console.log(value);
}