let x= Math.floor((Math.random() * 6)+1);

let img1=document.querySelector('.img1');
img1.setAttribute("src", "images/dice" + x +".png");

let y= Math.floor((Math.random() * 6)+1);

let img2=document.querySelector('.img2');
img2.setAttribute("src", "images/dice" + y +".png");

let h1=document.querySelector('h1');
if(x>y){
    h1.innerHTML="Player1 Wins!";
}else if(x<y){
    h1.innerHTML="Player2 Wins!";
}else{
    h1.innerHTML="Match Draw!";
}