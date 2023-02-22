var bottle = 'water';
var bottleColor = 'yellow';
var sunglassPrice = 120;
var penColor = 'blue';
var isExpensive = true;



var itemsOnTable = ['money bag', 'Mouse', 'Ban', 'pen', 'Glass', 'Earphone'];
console.log(itemsOnTable);

var banPosition = itemsOnTable.indexOf('Ban');
console.log(banPosition);

var thirdIndex = itemsOnTable[2];
console.log(thirdIndex);
itemsOnTable[4] = 'Mobile';
console.log(itemsOnTable);

if (itemsOnTable.length > 6) {
    console.log('taile ar kichu lekhmuna ');
}
else {
    console.log('taile aro lekhmu');
}