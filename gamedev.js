var board = [[' ', ' ', ' '],
             [' ', ' ', ' '],
             [' ', ' ', ' ']];

var count = 0;
const player_1 = 'X';
const player_2 = 'O';
var curr_pl
var win_c = false;
var boxes =(document.getElementsByClassName("box"));

for (var i = 0; i < boxes.length; i += 1) {
    boxes[i].onclick = function (e) {
        check(this.id);
        console.log(Player_Won)
    };
}
var announce = document.getElementById("announce");

function wincheck(a)
{
    var won_p = false;
    for(var i = 0;i<3;i++)
    {
        if(board[i][0] == a && board [i][1] ==a && board [i][2] == a)
        {
            console.log("win")
            won_p = true;
        }
        if (board[0][i] ==a && board[1][i] ==a && board[2][i] == a) 
        {
            console.log("win")
            won_p = true;
        }
    }
    if (board[0][0] == a && board[1][1] ==a && board[2][2] == a)
    {
        console.log("win")
        won_p = true;
    }
    if (board[0][2] == a && board[1][1] ==a && board[2][0] == a) 
    {
        console.log("win")
        won_p = true;
    }
    console.log("lose");
    if (won_p)
    {
        var display;
        Player_Won = a == "X" ? 1 : 2;
        display = a == "X" ? "Player 1" : "Player 2";
        announce.innerHTML = display + " wins!";
        bruh();     
    }
    return won_p;
}
var Player_Won = NaN;
var P1_score = 0;
var P2_score = 0;
function check(a)
{
    var loc = a.split('_'); 
    loc[0] -= 1;
    loc[1] -= 1;

    if (board[loc[0]][loc[1]] == ' ' && count < 9 && !win_c)
    {
        if (count % 2 == 0) {
            document.getElementById(a).innerHTML = "X";
            board[loc[0]][loc[1]] = "X";
            win_c = wincheck("X");
            
        }
        else {
            document.getElementById(a).innerHTML = "O";
            board[loc[0]][loc[1]] = "O";
            win_c = wincheck("O");
            
        }      
        console.log(board)
        count++;
        
    }
    if(count == 9 && !win_c)
    {
        announce.innerHTML = "It's A Draw!";
        bruh();
    }

}
function bruh() {
    var x = document.getElementById("announce");
    var y = document.getElementById("restart");
    console.log(y.id);
    x.style.animationName = 'ScaleUp';
    x.style.animationDuration = '2s';
    x.style.animationIterationCount = 'infinite';
    x.style.backgroundImage = 'url(giphy2.gif)'
    

    y.style.animationName = 'Bob';
    y.style.animationDuration = '2s';
    y.style.animationIterationCount = 'infinite';
    y.style.boxShadow = '0px 0px 10px white'
    console.log(x.id);
}
function reset()
{
    var board = [[' ', ' ', ' '],
                 [' ', ' ', ' '],
                 [' ', ' ', ' ']];

    if(win_c)
    {
        win_c = false;
        if (Player_Won==1) P1_score++;
        else if (Player_Won == 2) P2_score++;

    }
    console.log(P1_score);
    console.log(P2_score);



    count = 0;
    var x = document.getElementById("announce");
    x.style.animationName = 'Bob';
    x.style.animationDuration = '3s';
    x.style.animationIterationCount = 'infinite';
    x.style.backgroundImage = 'url(Qkl9.gif)'
    
    announce.innerHTML = "Welcome To TIC-TAC-TOE";

    for(var i = 1;i<4;i++)
    {
        for(var j = 1;j<4;j++)
        {
            var a = i + '_' + j;
            console.log(a);
            document.getElementById(a).innerHTML = "";
        }
    }



    Player_Won = NaN;
}