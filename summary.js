var num = 0;
while (num < 10) {
    num++;
    console.log(num);
}

for (var i = 10; i > 0; i--) {
    console.log(i);

    if (i == 5) {
        break;
    }
}