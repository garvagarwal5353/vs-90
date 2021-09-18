player1name=localStorage.getItem("Player1name")
document.getElementById("player1name").innerHTML=player1name
player2name=localStorage.getItem("Player2name")
document.getElementById("player2name").innerHTML=player2name
player1score=0
player2score=0
document.getElementById("player1_score").innerHTML=player1score
document.getElementById("player2_score").innerHTML=player2score
document.getElementById("player_que").innerHTML="Question turn: "+player1name
document.getElementById("playe_ans").innerHTML="Answer turn: "+player2name

function send(){
    getno=document.getElementById("no").value
    no=getno.toLowerCase()
    console.log(no)

}