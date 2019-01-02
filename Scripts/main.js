function RemoveClasses(){
$("#fff").remove();
$("#ffy").remove();
}
function Create_Button(){
var button = "<button>Click here to view my profile</button>";
$("#header").append(button);
$("#header button").addClass("button");
$(".topnav").css('visibility','visible');
}
window.onload = function(){
setTimeout(RemoveClasses,10000);
setTimeout(Create_Button,12000);
}