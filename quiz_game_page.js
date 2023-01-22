function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actualAnswer=parseInt(number1)*parseInt(number2)
    question_number="<h4>"+ number1+" X "+number2+"</h4>"
    input_box="<br>Answer : <input type='text' id='input_check_box'>"
    check_button="<br><br><button class='button-info onclick='check'>Check</button>" 
    row = question_number+input_box+check_button
    document.getElementById("output").innerHTML=row
    document.getElementById("number1").value="";
    document.getElementById("number2").value=""; 
}
player1_score="0"
player2_score="0"
question_turn="player1"
answer_turn="player2"
function check(){
    get_answer=document.getElementById("input_check_box").value;
    if(get_answer==actualAnswer) 
    {
        if(answer_turn=="player1")
        {
            update_player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=update_player1_score
        }
        else
        {
            update_player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=update_player2_score
        }
    } 
    if(question_turn=="player1")
    {
        question_turn="player2"
        document.getElementById("player_question").innerHTML="Question turn -"+player2_name
    }   
    else
    {
        question_turn="player1"
        document.getElementById("player_question").innerHTML="Question turn -"+player1_name  
    }
}