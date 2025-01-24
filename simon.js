let gameseq= [];
let userseq= [];

let btns =["yellow", "green", "purple", "red"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress" ,function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelup();
    }
});

    function btnflash(btn){
        btn.classList.add("flash");
        setTimeout(function () {
            btn.classList.remove("flash");

        },250);

    }
    function userflash(btn){
        btn.classList.add("userflash");
        setTimeout(function () {
            btn.classList.remove("userflash");

        },250);

    }


    function levelup(){
        userseq =[];
        level++;
        h2.innerText= `Level ${level}`;

        let randidx = Math.floor(Math.random() * 3);
        let randColor = btns[randidx];
        let randbtn = document.querySelector(`.${randColor}`);
        gameseq.push(randColor);
       console.log(gameseq);
        btnflash(randbtn);
    }

    function checkAns(idx){
      if(userseq[idx] == gameseq[idx]){
       if(userseq.length == gameseq.length){
        setTimeout(levelup, 1000);
        levelup();
       }
      }else{
        h2.innerHTML =`Game Over! Your score was <b> ${level}</br><br> Press any key to start`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function() {
            document.querySelector('body').style.backgroundColor="white";
             
        },150);
        reset();
      }
    }

    function btnPress(){
        let btn = this;
        userflash(btn)

        userColor = btn.getAttribute("id");
        userseq.push(userColor);
        checkAns(userseq.length-1);
    }

    let allbtns = document.querySelectorAll(".btn");
    for(btn of allbtns){
        btn.addEventListener("click", btnPress)
    }

    function reset(){
        gameseq =[];
        userseq = [];
        level= 0;
        started = false;
    }
