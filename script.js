// Array where all numbers are stored
let numbers = [];

// INSERT NUMBER
function insertNumber() {

    let input = document.getElementById("numberInput");
    let value = Number(input.value);

    // Check if the input is empty or not positive
    if (input.value === "" || value <= 0) {
        alert("Please enter a positive number.");
        return;
    }

    // Add number to array
    numbers.push(value);

    // Display updated numbers
    displayNumbers();

    // Clear input
    input.value = "";
    input.focus();
}


// DISPLAY NUMBERS
function displayNumbers() {

    let list = document.getElementById("numberList");

    // Clear previous display
    list.innerHTML = "";

    // Loop through the array
    numbers.forEach(function(number, index) {

        let row = document.createElement("div");
        row.className = "number-row";

        let numberText = document.createElement("span");
        numberText.className = "number";
        numberText.textContent = number;

        let evenOdd = document.createElement("span");

        // Check EVEN or ODD
        if (number % 2 === 0) {
            evenOdd.textContent = "EVEN";
            evenOdd.className = "even";
        } else {
            evenOdd.textContent = "ODD";
            evenOdd.className = "odd";
        }

        // REMOVE BUTTON
        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";

        removeButton.onclick = function() {
            removeNumber(index);
        };

        // EDIT BUTTON
        let editButton = document.createElement("button");
        editButton.textContent = "Edit";

        editButton.onclick = function() {
            editNumber(index);
        };

        row.appendChild(numberText);
        row.appendChild(evenOdd);
        row.appendChild(removeButton);
        row.appendChild(editButton);

        list.appendChild(row);
    });
}


// REMOVE NUMBER
function removeNumber(index) {

    numbers.splice(index, 1);

    displayNumbers();

    document.getElementById("result").textContent = "";
}


// EDIT NUMBER
function editNumber(index) {

    let newNumber = prompt(
        "Enter the new positive number:",
        numbers[index]
    );

    let value = Number(newNumber);

    if (newNumber === null) {
        return;
    }

    if (newNumber === "" || value <= 0 || isNaN(value)) {
        alert("Please enter a valid positive number.");
        return;
    }

    numbers[index] = value;

    displayNumbers();
}


// CLEAR INPUT
function clearEntry() {

    document.getElementById("numberInput").value = "";

    document.getElementById("numberInput").focus();
}


// CLEAR ALL ITEMS
function clearItems() {

    numbers = [];

    displayNumbers();

    document.getElementById("result").textContent = "";

    document.getElementById("sortSelect").value = "";
}


// GET TOTAL
function getTotal() {

    if (numbers.length === 0) {
        document.getElementById("result").textContent =
            "There are no numbers.";
        return;
    }

    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    document.getElementById("result").textContent =
        "Total: " + total;
}


// FIND HIGHEST AND LOWEST
function findHighestLowest() {

    if (numbers.length === 0) {
        document.getElementById("result").textContent =
            "There are no numbers.";
        return;
    }

    let highest = Math.max(...numbers);
    let lowest = Math.min(...numbers);

    document.getElementById("result").textContent =
        "Highest Number: " + highest +
        " | Lowest Number: " + lowest;
}


// SORT NUMBERS
function sortNumbers() {

    let sortType = document.getElementById("sortSelect").value;

    if (sortType === "ascending") {

        numbers.sort(function(a, b) {
            return a - b;
        });

    } else if (sortType === "descending") {

        numbers.sort(function(a, b) {
            return b - a;
        });
    }

    displayNumbers();
}