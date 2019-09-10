var f = 0,g=0,h=0,i=0,l=0,j,a1=0,a2=0,flag=1,p1="",p2="",n1,n2;
l++;
function page(){
    n1=document.getElementById("name1").value;
    p1=document.getElementById("ply1").value;
    n2=document.getElementById("name2").value;
    p2=document.getElementById("ply2").value;
    //nn.innerHTML=n1;
    //nn.innerHTML=p1.length;
}
function submit001() {
    if(flag==1){
    var b = number001.value;
    var c = number002.value;
    var d = number003.value;
    var e = number004.value;
    attempts001.innerHTML = l++;
    if (b == p1[0]) {f = 1;}
    else {f = 0;}
    if (c == p1[1]) {g = 1;}
    else {g = 0;}
    if (d == p1[2]) {h = 1;}
    else {h = 0;}
    if (e == p1[3]) {i = 1;}
    else {i = 0;}
    j = f + g + h + i;
    if (j == 0) {answer001.innerHTML = "None of the numbers is correct.";}    
    if (j == 1) {answer001.innerHTML = "You have 1 number correct.";}
    if (j == 2) {answer001.innerHTML = "You have 2 numbers correct.";}
    if (j == 3) {answer001.innerHTML = "You have 3 numbers correct.";}
    if (j == 4) {
        answer001.innerHTML = "Congratulations! You have found all the correct numbers, after " + (l - 1) + " attempts." + "<br /><br />" + "Thanks for playing this game.";
        //retake001.innerHTML = "<button class=blue001 onclick=repeat001()>Repeat</button>";
        document.getElementById("answer001").innerHTML=n2 + " completed task....now "+ n1 +" turn ";
        console.log("congo");
        j=0;
        a1=l-1;
        l=0;
        flag=0;
        number001.value="";
        number002.value="";
        number003.value="";
        number004.value="";
    
        attempts001.innerHTML = l;
    }
    l=1;
    }
    else{
            var b = number001.value;
            var c = number002.value;
            var d = number003.value;
            var e = number004.value;
            attempts001.innerHTML = l++;
            if (b == p2[0]) {f = 1;}
            else {f = 0;}
            if (c == p2[1]) {g = 1;}
            else {g = 0;}
            if (d == p2[2]) {h = 1;}
            else {h = 0;}
            if (e == p2[3]) {i = 1;}
            else {i = 0;}
            j = f + g + h + i;
            if (j == 0) {
                answer001.innerHTML = "None of the numbers is correct.";
            }
        
            if (j == 1) {
                answer001.innerHTML = "You have 1 number correct.";
            }
        
            if (j == 2) {
                answer001.innerHTML = "You have 2 numbers correct.";
            }
        
            if (j == 3) {
                answer001.innerHTML = "You have 3 numbers correct.";
            }
        
            if (j == 4) {
                a2=l-1;
                //answer001.innerHTML = "Congratulations! You have found all the correct numbers, after " + (l - 1) + " attempts." + "<br /><br />" + "Thanks for playing this game.";
                if(a1<a2){
                    var a11=a1+1;
                    answer001.innerHTML=n2+" WON THE GAME";
                }
                if(a2<a1){
                    var a22=a2+1;
                    answer001.innerHTML=n1+"WON THE GAME ";
                }
                retake001.innerHTML = "<button class=blue001 onclick=repeat001()>Repeat</button>";
            }
    }

}

function repeat001() {
    window.location.href="index1.html";
}