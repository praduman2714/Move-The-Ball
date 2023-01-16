var ball = document.getElementsByClassName("ball");
var ballBlock = document.getElementsByClassName("innerDiv");



var blockY = ballBlock[0].offsetTop;
var blockX = ballBlock[0].offsetLeft;

var wid = ballBlock[0].offsetWidth ;
var hei = ballBlock[0].offsetHeight;

var bottom = hei - 40 ;
var right = wid +80;

console.log(bottom, right);

var t = blockY;
var l = blockX;

ball[0].style.top = blockY+"px";
ball[0].style.left = blockX +"px";

var modifier = 5;
document.addEventListener('keypress', function(event){
    var key = event.key;
    
    // up
    if(key == 'w' || key == 'W'){
        console.log("up");
        if(t<= blockY ){
            return;
        }
        t-=10;
        ball[0].style.top = t +"px" ;

    }
    // right
    else if(key == 'd' || key == 'D'){
        console.log("right");
        if(l +50>= right) return;
        
        l+=10;
        console.log(l + " int the right fucntion")
        ball[0].style.left = l +"px";
    }
    //left
    else if(key == 'a' || key == 'A'){
        console.log("left");
        if(l <= blockX) return;

        l-=10;
        ball[0].style.left = l +"px";
    }
    // down
    else if(key == 's' || key == 'S'){
        if((t-10) >= bottom) return;
        console.log("down");
        t+=10;
       
        ball[0].style.top = t +"px" ;
    }

})