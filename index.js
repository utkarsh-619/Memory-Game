const color = ['red','blue','green','yellow'];
const compData = [];
let level = 1;
let index = 0;
let started = 0;

function showCompData(){
  let ran = Math.ceil(Math.random() * 4);
  compData.push(ran);

  setTimeout(()=>{
    showColor(ran);
  },1000)
}

document.addEventListener("keypress", () => {
  if(!started){
    started = 1;
    document.querySelector(".h1").innerHTML = `Level ${level}`;
    showCompData();

    for (let i = 0; i < 4; i++) {
      document.querySelectorAll("button")[i].addEventListener("click", () => {
        showColor(i+1);
        checkInput(i+1);
      });

    }
}});

function checkInput(clickedIndex){

  if (clickedIndex === compData[index]) {
    index++;
    if(index === compData.length){
      index = 0;
      level++;
      document.querySelector(".h1").innerHTML = `Level ${level}`;
      showCompData();
    }
  } 
  
  else {
    document.querySelector("body").style.backgroundColor = "red";
    let audio = new Audio(`./sounds/wrong.mp3`);
    audio.play();
    index = 0;
    started = 0;
    level = 1;
    document.querySelector("h1").innerHTML ="Game Over , Press any key to start it again";
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "rgb(37, 37, 37)";
    }, 200);
  }
  

}


function showColor(x) {
  if(started){
    let audio = new Audio(`./sounds/${color[x-1]}.mp3`);
    audio.play();
    document.querySelectorAll("button")[x-1].style.backgroundColor = "black";
    setTimeout(function () {
      document.querySelectorAll("button")[x-1].style.backgroundColor = `${color[x-1]}`;
    }, 100);
  }
} 