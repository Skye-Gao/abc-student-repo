I tried to add "Enter to Input" as:
`document.getElementById("number")
.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("myButton").click();
    }
});` , but I kept getting the error `script.js:20 Uncaught TypeError: Cannot read property 'addEventListener' of null"`

Wonder what is problem over there...
