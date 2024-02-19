let btn = document.getElementById("create-btn");
let container = document.getElementById("note-container");
let box = document.querySelectorAll(".input-box")

btn.addEventListener("click",() => {

    let newNote = document.createElement("p");
    newNote.className = "input-box";
    newNote.setAttribute("contenteditable","true");


    container.appendChild(newNote);

});