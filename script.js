var numbers = [];
for (var i = 0; i < 30; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}

var table = document.createElement("table");

for (var i = 0; i < 5; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < 6; j++) {
        var cell = document.createElement("td");
        var cellText = document.createTextNode(numbers[i*6 + j]);
        cell.appendChild(cellText);
        if (numbers[i*6 + j] >= 50) {
            cell.classList.add("orange");
        }
        row.appendChild(cell);
    }
    table.appendChild(row);
}

document.body.appendChild(table);

function foo() {
    var number = Math.floor(Math.random() * 100);
    numbers.push(number);
    var row = document.createElement("tr");
    var cell = document.createElement("td");
    var cellText = document.createTextNode(number);
    cell.appendChild(cellText);
    if (number >= 50) {
        cell.classList.add("orange");
    }
    row.appendChild(cell);
    if (numbers.length % 6 == 1) {
        table.appendChild(row);
    } else {
        var lastRow = table.lastChild;
        lastRow.appendChild(cell);
    }
}