let boxes= document.querySelectorAll("#but");
let resets =document.querySelector("#reset");
let mess = document.querySelector("#mess");
let newgm = document.querySelector("#new");
let cont = document.querySelector("#win");
let buton = document.querySelector("#slider");
let turnO=true;

const res =() =>{
    turnO=true;
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
        cont.classList.add("hide");
    }}
   

const disabl=() =>{
    for(box of boxes)
    box.disabled=true;
}

boxes.forEach((but) =>{
    but.addEventListener("click", ()=> {
            if(turnO)
            {
                
                but.innerText = "X";
                turnO=false;
            }
            else{
            
                but.innerText = "O";
                turnO=true;
            }
            but.disabled =true;
            checkwin();

        });
    });
    
    const win=[
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8]
    ]

    const checkwin = () =>{
        for(let pattern of win)
        { 
            let val1= boxes[pattern[0]].innerText;
            let val2= boxes[pattern[1]].innerText;
            let val3= boxes[pattern[2]].innerText;
            if(val1!="" && val2!="" && val3!="")
            {
                if(val1 ===  val2 && val2 === val3){
                   alert("Game Over");
                    winners(val1);
                   
                }
                but.disabled=true;
            }
        }
        
    }
    const winners=(winn) =>{
mess.innerText=`Winner is ${winn}`;
cont.classList.remove("hide");
disabl();
    }
  
resets.addEventListener("click", res);
newgm.addEventListener("click", res);


let crmod = "light"; // Current mode is set to light by default

// Grab the checkbox switch element (input)
const themeSwitch = document.querySelector('.switch input');

// Add an event listener to the checkbox input
themeSwitch.addEventListener("change", () => {
    if (crmod === "light") {
        crmod = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("h1").style.color = "white";
    } else {
        crmod = "light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("h1").style.color = "blue";
    }

    console.log(crmod); // Log current mode
});

// Optional: Set initial mode based on user preference or system setting
window.onload = () => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (prefersDarkScheme) {
        crmod = "dark";
        themeSwitch.checked = true; // Set checkbox to checked if dark mode
        document.querySelector("body").style.backgroundColor = "blue";
        document.querySelector("h1").style.color = "white";
    } else {
        crmod = "light";
        themeSwitch.checked = false; // Set checkbox to unchecked if light mode
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("h1").style.color = "blue";
    }
};


// let crmod = "light";
// buton.addEventListener("click",() => {
// if(crmod == "light")
// {
//     crmod= "dark";
//     document.querySelector("body").style.backgroundColor="black";
//     document.querySelector("h1").style.color="white";

// }
// else{
//     crmod="light";
//     document.querySelector("body").style.backgroundColor="white";
//     document.querySelector("h1").style.color="black";


// }
// console.log(crmod)
// })