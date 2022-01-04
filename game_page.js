player_1 = localStorage.getItem("player_1");
player_2 = localStorage.getItem("player_2");
player1_score = 0;
player2_score = 0;
document.getElementById("player_1").innerHTML = player_1 + " : ";
document.getElementById("player_2").innerHTML = player_2 + " : ";
document.getElementById("player1score").innerHTML = player1_score;
document.getElementById("player2score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question Turn -" + player_1;
document.getElementById("player_answer").innerHTML = "Answer Turn -" + player_2;
function send() {
get_word = document.getElementById("word").value;
word = get_word.toLowerCase();
console.log("word in lowerCase = " + word);
charAt1 = word.charAt(1);
console.log(charAt1);
charAt2 = word.charAt(Math.floor(word.length/2));
charAt3 = word.charAt(word.length-1);
remove_charAt1 = word.replace(charAt1, "_");
remove_charAt2 = remove_charAt1.replace(charAt2, "_");
remove_charAt3 = remove_charAt2.replace(charAt3, "_");
console.log(remove_charAt3);
}