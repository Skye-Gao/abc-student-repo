Link to my website:(https://skye-gao.github.io/abc-student-repo/projects/coding-foundation/index.html)


Reference-style:
![alt text][demo]

[demo]: https://raw.githubusercontent.com/Skye-Gao/abc-student-repo/master/projects/project_A/images/demo.gif "Logo Title Text 2"

Added a little fun. Plz Enjoy :)

Some difficulties I had:

1) I tried to add "Enter to Input" as:
`document.getElementById("number")
.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("myButton").click();
    }
});`

 but I kept getting the error `script.js:20 Uncaught TypeError: Cannot read property 'addEventListener' of null"`

2) I failed to refresh the canvas every time when inputting a new number...

Wonder what are problems over there...
