let btn = document.getElementById("create-btn");
let container = document.getElementById("note-container");
let box = document.querySelectorAll(".input-box")

btn.addEventListener("click",() => {

    let newNote = document.createElement("p");
    newNote.className = "input-box";
    newNote.setAttribute("contenteditable","true");
    container.appendChild(newNote);

    let deleteIcon = document.createElement("img");
    deleteIcon.src = "delete.png";
    deleteIcon.className = "delete";
    newNote.appendChild(deleteIcon);
    
    let deleteNote = document.querySelectorAll('.delete');
    deleteNote.forEach((e) => {
    
        e.addEventListener(
            'click',(button) => {
            console.log('remove button clicked');
            console.log(button.target);
            e.parentNode.remove();
                    
            }
        );
    });
    
});


