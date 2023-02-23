// Practice Problem Number One 


var myMarks = 85;
var tomMarks = 66;
var janeMarks = 95;
var peterMarks = 56;
var jhonMarks = 40;

if (myMarks >= 90) {
    console.log('my grade A+');
}

else {
    if (myMarks >= 80) {
        console.log('My Grade Is A');
    }
}
if (tomMarks >= 80) {
    console.log("Tom Grade Is A");
}
else {
    if (tomMarks >= 60) {
        console.log("Tom Grade Is B");
    }
}

if (janeMarks >= 80) {
    console.log("Jane Grade Is A ");
}
else {
    if (janeMarks >= 60) {
        console.log("Jane Grade Is B");
    }
}

if (peterMarks >= 80) {
    console.log("Peter Grade Is A");
}
else {
    if (peterMarks >= 60) {
        console.log("Peter Grade Is B");
    }
    else {
        if (peterMarks >= 50) {
            console.log("Peter Grade Is C");
        }
    }
}

if (jhonMarks > 80) {
    console.log('Jhon Grade Is A');
}
else {
    if (jhonMarks >= 60) {
        console.log('Jhon Grade Is B');
    }
    else {
        if (jhonMarks >= 50) {
            console.log('Jhon Grade Is C');
        }
        else {
            if (jhonMarks >= 40) {
                console.log('Jhon Grade Is D');
            }
        }
    }
}


// Practice problem Number two

/* var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2) {
    console.log("check Number three, ");
    if (num1 > num3) {
        console.log("Number One Largest Number ");
    }
}

else {
    if (num2 > num1) {
        console.log("check number 3");
        if (num2 > num3) {
            console.log("Number Two Largest Number ");
        }
    }
    if (num3 > num1) {
        console.log("then check Number two ");
        if (num3 > num2) {
            console.log("Number Three Is Largest Number ");
        }
    }
} */


var num1 = 66;
var num2 = 79;
var num3 = 45;


if (num1 > num2) {
    if (num1 > num3) {
        console.log(num1);
    }
    else {
        console.log(num3);
    }
}

else {
    if (num2 > num3) {
        console.log(num2);
    }
    else {
        console.log(num3);
    }
}


// practice problem Number three 

var side1 = 9;
var side2 = 8;
var side3 = 9;
if (side1 == side2 || side1 == side3 || side2 == side3) {
    console.log('Isoscoles');
}
else {
    console.log("Not Isoscoles");
}