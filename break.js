// Break in loop

for (var i = 1; i <= 20; i++) {
    if (i > 10) {
        break;
    }
    console.log(i);
}

var numbers = [23, 43, 25, 74, 54, 52, 75, 230, 33, 534];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 100) {
        break;
    }
    console.log(number);
}
