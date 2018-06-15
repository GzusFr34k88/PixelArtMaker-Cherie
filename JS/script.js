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

function colorBox(e) {
    const background = color.val();
    const thisBox = $(e.target);
    if (e.target.className.includes(background)) {
        e.target.className = "box";
        console.log("No longer includes background");
    }
    else {
        e.target.className = ("box " + background);
        console.log("Now includes background");
    }
    if (e.target.className.includes(background)) {
        thisBox.css("background", background);
        console.log('The color of this box is now ' + background);
    }
    else {
        thisBox.css("background", "transparent");
        console.log('The color of this box is now transparent');
    }
    console.log(e.target.className);
}

let drag = false;
//create paint on canvas

//When mouse is held down calls the colorCell() function and pass the event to the function
table.on('mousedown', '.box', function (e) {
    colorBox(e);
    drag = true; //changes drag to true
})
//When mouse is lifted changes drag to false
.on('mouseup mouseleave', function () {
    drag = false;
})

//While drag is true, drag the mouse over a cell to call the colorCell function and pass the event to the function
.on('mouseover', '.box', function (e) {
    if (drag) {
        colorBox(e);
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
