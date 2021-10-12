console.log("running...");
// let name = 55;
// name = String(name);
// console.log(name.length);

// let arr = String([1,2,3,4,"rishabh"]);
// console.log(arr, typeof arr);


// let obj = {
//     name: "rishabh",
//     "roll number": 38
// }

// console.log(obj["roll number"])

// console.log(window);
// console.log(location);
// console.log(history.go(-1));
// console.log(document.links);
// for(let i=0; i<document.links.length; i++){
//     console.log(String(document.links[i].href).includes("geeks"));
// }

// let elementsObj = document.getElementsByTagName("ul");
// for (let i=0; i<elementsObj.length; i++){
// console.log(elementsObj[0].firstElementChild.nextElementSibling);
// }

// console.log(ele[0].style.color);
// let anchorsObj = document.getElementsByTagName("a");
// for (let i=0;i<anchorsObj.length; i++){
//     console.log(anchorsObj[i]);
//     anchorsObj[i].style.color = "red";
// }

// let newElement = document.createElement("li");
// newElement.className = "newFeature";
// newElement.id = "third";
// newElement.innerHTML = "<em>New Feature</em>"

// let ul = document.querySelector("ul");
// console.log(newElement);
// ul.append(newElement);

// ul.addEventListener("mouseover",function(){
//     let message = document.createElement("h1");
//     let myText = document.createTextNode("don't click !!");
//     // message.innerHTML = "hey there !!";
//     message.append(myText);
//     console.log(message);
//     ul.append(message);
// }); 
let noteNumber;
if (localStorage === null) {
    noteNumber = 0;
}
else {
    for (let i = 0; i < localStorage.length; i++) {
        showNote(localStorage.key(i), localStorage.getItem(localStorage.key(i)));
    }
    noteNumber = localStorage.length;
}
let btn = document.getElementById("addNote");
btn.addEventListener('click', function () {
    let textarea = document.querySelector("textarea");
    if (textarea.value != "") {
        createNote(textarea.value);
        console.log("noteNumber is : ", noteNumber);
        store(textarea.value);
        textarea.value = "";
    }
});
function store(note) {
    // console.log(noteNumber,note);
    localStorage.setItem(`Note-${noteNumber}`, note);
}
function createNote(note) {
    let newNote = document.createElement("div");
    newNote.className = "noteCard my-2 mx-2 card";
    newNote.setAttribute("style", "width: 18rem");
    noteNumber++;
    let html = `
    <div class="card-body">
        <h5 class="card-title">Note-${noteNumber}</h5>
        <p class="card-text">${note}</p>
        <button id="Note-${noteNumber}" onclick="delNote(this.id)" class="delBtn btn btn-primary">Delete</button>
    </div>
    `;
    newNote.innerHTML = html;
    let allNotes = document.getElementById("allNotes");
    allNotes.append(newNote);
}
function showNote(title, note) {
    let newNote = document.createElement("div");
    newNote.className = "noteCard my-2 mx-2 card";
    newNote.setAttribute("style", "width: 18rem");
    let html = `
    <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${note}</p>
        <button id="${title}" onclick="delNote(this.id)" class="delBtn btn btn-primary">Delete</button>
    </div>
    `;
    newNote.innerHTML = html;
    let allNotes = document.getElementById("allNotes");
    allNotes.append(newNote);
}
console.log("hello");

function delNote(id) {
    localStorage.removeItem(id);
    let delNote = document.getElementById(id);
    delNote.parentElement.parentElement.style.display = "none";
}

let searchInp = document.getElementById("searchBox");

searchInp.addEventListener("input",function(){
    let search = searchInp.value;
    for (let i=0;i<localStorage.length;i++){
        let topic = localStorage.key(i);
        let note = localStorage.getItem(topic);
        console.log(topic,note,"\n",note.includes(search));
        if (note.includes(search)==false){
            let notes = document.getElementById(topic);
            notes.parentElement.parentElement.style.display = "none";
        }
        else{
            let notes = document.getElementById(topic);
            notes.parentElement.parentElement.style.display = "block";
        }
    }
})

let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click",function(e){
    e.preventDefault();
});