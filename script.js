let selectcolor = document.getElementById("color");
let createNote = document.querySelector(".createbtn");
let listNote = document.querySelector(".list");

function newNote(){
let newNote = document.createElement("div");
    newNote.classList.add("note");
    newNote.innerHTML = `
        <p class="closebtn">x</p>
        <textarea class="text" placeholder="Write something..."></textarea>
    `;

    newNote.style.borderColor = selectcolor.value;
    listNote.appendChild(newNote);

    
    newNote.addEventListener("click",event =>{
        if(event.target.classList.contains('closebtn')){
            event.target.parentNode.remove();
        }
    })

}

let cursor = {
    x:null,
    y:null
};

let objectplace = {
    where:null,
    x:null,
    y:null
}
document.addEventListener("tochstart",(event) => startOn(event));
document.addEventListener("mousedown",(event) => startOn(event));

function startOn(event){

    if(event.target.classList.contains('note')){
        cursor={
            x:event.clientX,
            y:event.clientY
        }
        objectplace={
            where:event.target,
            x:event.target.getBoundingClientRect().left,
            y:event.target.getBoundingClientRect().top
        }
        objectplace.where.style.cursor = 'grab';  

    }
}
document.addEventListener("touchmove",(event) =>letmove(event));
document.addEventListener("mousemove",(event) =>letmove(event));

function letmove(event){
    let currentcursor = {
        x:event.clientX,
        y:event.clientY
    }
    let distance ={
        x: currentcursor.x - cursor.x,
        y:currentcursor.y - cursor.y
    }

    objectplace.where.style.left = (objectplace.x + distance.x) +'px';
    objectplace.where.style.top = (objectplace.y + distance.y)+ 'px';
}


document.addEventListener("touchend",(event) =>EndUp(event));
document.addEventListener("mouseup",(event) =>EndUp(event));

function EndUp(event){
    objectplace.where.style.cursor = 'default';
    objectplace.where= null;

