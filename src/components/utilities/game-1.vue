<template>
    <div class="main-body">
        <h1> Still in Development</h1>
        <div class="board">
            <div id="game-1-player">
            </div>
            <div id="enemy"></div>
        </div>
          <div class="buttons">
            <div class="row-1">
                <div class="up" v-on:click="moveUp"> U</div>
            </div>
            <div class="row-2">
                <div class="left" v-on:click="moveLeft">L</div>
                <div class="right" v-on:click="moveRight">R</div>
            </div>
            <div class="row-1">
                <div class="down" v-on:click="moveDown"> D</div>
            </div>

            <div class="start-button" v-on:click="enemyMove"> START </div>
            <div class="reset-button" v-on:click="reset"> RESET </div>
    </div>
    </div>
  
</template>

<script>
// ====================== game script ======================

var x = 0;
var y = 0;
var x2 = 0;
var y2 = 0;
var flag = true
function moveDown(){

        var player = document.getElementById("game-1-player")
        y+= 25;
        player.style.transform = "translate("+x+"px,"+y+"px)"
}

function moveUp(){

        var player = document.getElementById("game-1-player")
        y-= 25;
       
        player.style.transform = "translate("+x+"px,"+y+"px)"
}

function moveLeft(){

        var player = document.getElementById("game-1-player")
        x-= 25;

        player.style.transform = "translate("+x+"px,"+y+"px)"
}

function moveRight(){

        var player = document.getElementById("game-1-player")
        x+= 25;

        player.style.transform = "translate("+x+"px,"+y+"px)"
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function enemyMove(){
    var enemy = document.getElementById("enemy")
    flag = true
    var player = document.getElementById("game-1-player")
    player.style.backgroundColor = "blue"

    while(flag){
        var choice = Math.random()
        // console.log(choice)
        if(choice >= 0.5 && choice < 0.75){
            x2+=25
            enemy.style.transform = "translate("+x2+"px,"+y2+"px)"
        }else if(choice >= 0.75){
            x2-=25
            enemy.style.transform = "translate("+x2+"px,"+y2+"px)"
        }else if(choice >= 0.25 && choice < 0.5){
            y2+=25
            enemy.style.transform = "translate("+x2+"px,"+y2+"px)"
        }else{
            y2-=25
            enemy.style.transform = "translate("+x2+"px,"+y2+"px)"
        }
        await sleep(1000)
        // console.log("Already sleep")
    }
}

function reset(){
    flag = false
    var enemy = document.getElementById("enemy")
    enemy.style.transform = "translate(0px,0px)"

    var player = document.getElementById("game-1-player")
    player.style.transform = "translate(0px,0px)"
    player.style.backgroundColor = "white"

    x = 0
    y = 0
    x2 = 0
    y2 = 0


    // console.clear()
}




// ==============================================================


export default {
    data(){
        return{
            x:0,
            y:0,
            x2:0,
            y2:0,
            player: document.getElementById("game-1-player"),
            enemy: document.getElementById("enemy"),
            flag:true
        }
    },
    methods:{
        moveDown: moveDown,
        moveUp: moveUp,
        moveLeft: moveLeft,
        moveRight: moveRight,
        enemyMove: enemyMove,
        sleep: sleep,
        reset: reset
    }
}



</script>

<style>
*{
      font-family: "Overpass Mono", monospace;

}
h1{
    text-align: center;
    color:#fff;

}
.main-body{
    width:100vw;
    height: 100vh;
    /* background-color: black; */
    display: flex;
    justify-content: center;
    align-content: center;
}

.board{
    display: flex;
    align-self: center;
    width: 500px;
    height: 500px;
    /* background: #000; */
    justify-content: center;

}

#game-1-player{
    
    width: 25px;
    height:25px;
    background: #fafafa;
}

#enemy{
    width:25px;
    height:25px;
    background:red;
    align-self: flex-end;
}

.buttons{
    /* background: #aaa; */
    width: 200px;
    height:200px;
    align-self: center;
    margin-left: 30px;
    display: block;
}
.up,.left,.right,.down{
    background: rgb(24, 208, 113);
    width:70px;
    height:70px;
    border: 3px solid #fff;
    text-align: center;
    text-justify: center;
    font-size: 2.8em;
    color:#fff;

    
}

.up:hover,.left:hover,.right:hover,.down:hover{
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
    background: rgb(43, 94, 225);
}

.row-1{
    display: flex;
    justify-content: center;
}
.row-2{
    display: flex;
    justify-content: center;
}

.start-button,.reset-button{
    width:100px;
    height:25px;
    background:#fff;
    text-align: center;
}
</style>


