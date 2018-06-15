// Selecting color input
const color = $("#colorPicker");
const table = $("#pixelCanvas");
// Selecting size input
const height = $("#inputHeight");
const width = $("#inputWidth");

// When size is submitted by the user, calling makeGrid()

$("#buttonPaint").on("click", function makeGrid(event) {
    event.preventDefault();
    table.children().remove(); //clears grid
    console.log("button works!");
    let row = height.val();
    let cols = width.val();
    console.log(row, cols);

    //appending rows horizontally
    for (let x = 0; x < row; x++) {
        table.append("<tr></tr>");
    }

    //appending rows vertically
    for (let y = 0; y < cols; y++) {
        $("table tr").append('<td class = "box"></td>');
    }

    //clear
    $("#buttonClear").on("click", function makeGrid(event) {
        event.preventDefault();
        table.children().remove(); //clears grid
    });
});

//create paint on canvas
table.on("click", ".box", function (e) {
    const background = color.val();
    const thisBox = e.target;
    if (thisBox.className.includes(background)) {
        thisBox.className = "box";
    }
    else {
        thisBox.className = ("box " + background);
    }
    console.log(thisBox.className);
    if (thisBox.className.includes(background)) {
        $(this).css("background-color", background);
    }
    else {
        $(this).css("background-color", "transparent");
    }
});

$("table").on("mousemove mouseenter mouseleave mouseover", "td", function (e) {
    if (e.which === 1) {
        let background = color.val();
        $(this).css("background-color", background);
    }
});

function hideFunction() {
    var x = document.getElementById("sizePicker");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

$("#buttonClear").on("click", function () {
    $("#sizePicker").show();
});

var ideas = [
    "Rock",
    "Fish",
    "Paper",
    "Cow",
    "Octopus",
    "Dog",
    "Pig",
    "Backpack",
    "Money",
    "iPad",
    "Computer",
    "Feet",
    "T-shirt",
    "Pants",
    "Math problem",
    "Smiley face"
];

function pickRandomWord() {
    // e.preventDefault();
    var ideaToMake = Math.floor(Math.random() * ideas.length);
    document.getElementById("idea").innerHTML = ideas[ideaToMake];
}
