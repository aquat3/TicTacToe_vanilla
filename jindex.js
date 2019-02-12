const buttons = document.querySelectorAll('#board');// board buttons
var turn=2;
var choice = prompt("Please enter a symbol X/O"); // uncomment
var picked=[[0,0,0],[0,0,0],[0,0,0]];
// p1=1, p2=2, unpicked=0
 count1=0;
count2=0;
buttons.forEach((button) => {

  
  button.addEventListener('click', (e) => {
    
    if(turn%2==0){
   //if(choice=='X' || choice=='x'){
    e.target.innerHTML= choice;
   if(e.target.id=='b1'){
     picked[0][0]=1;
  } else if(e.target.id=='b2'){
     picked[0][1]=1;
  }else if(e.target.id=='b3'){
     picked[0][2]=1;
  }else if(e.target.id=='b4'){
     picked[1][0]=1;
  }else if(e.target.id=='b5'){
     picked[1][1]=1;
  }else if(e.target.id=='b6'){
     picked[1][2]=1;
  }else if(e.target.id=='b7'){
     picked[2][0]=1;
  }else if(e.target.id=='b8'){
     picked[2][1]=1;
  }else if(e.target.id=='b9'){
     picked[2][2]=1;
  }
     winner();//  
    } else{
     if(choice=='X'||choice=='x')
     e.target.innerHTML= 'O'
     else 
       e.target.innerHTML= 'X'
    
    if(e.target.id=='b1'){
     picked[0][0]=2;
  } else if(e.target.id=='b2'){
     picked[0][1]=2;
  }else if(e.target.id=='b3'){
     picked[0][2]=2;
  }else if(e.target.id=='b4'){
     picked[1][0]=2;
  }else if(e.target.id=='b5'){
     picked[1][1]=2;
  }else if(e.target.id=='b6'){
     picked[1][2]=2;
  }else if(e.target.id=='b7'){
     picked[2][0]=2;
  }else if(e.target.id=='b8'){
     picked[2][1]=2;
  }else if(e.target.id=='b9'){
     picked[2][2]=2;
  }
    winner();//
    }
    turn++;
  });
});

const resetGame=document.querySelector('#resetG');
resetGame.addEventListener('click', (e) => {
   
    clear();
     choice = prompt("Please enter a symbol X/O"); 
  turn=2;
  picked=[[0,0,0],[0,0,0],[0,0,0]];
document.getElementById('output').innerHTML="";  
});
 function clear(){
   for(var i=1;i<=9;i++){ document.getElementById('b'+i).innerHTML="";
                        }                         
 }
 

const resetScore=document.querySelector('#resetS');
resetScore.addEventListener('click', (e) => {
   count1=0;
  count2=0;
   clear();
   turn=2;
  document.getElementById('p1').innerHTML="Player 1: "+count1;
   document.getElementById('p2').innerHTML="Player 2: "+count2;  
  picked=[[0,0,0],[0,0,0],[0,0,0]];
document.getElementById('output').innerHTML="";
choice = prompt("Please enter a symbol X/O"); 
});
function winner(){
if(p1check()==true ){
  
  document.getElementById('output').innerHTML='Player 1 Wins!';
  count1++;
document.getElementById('p1').innerHTML="Player 1: "+count1;
 
}  
 else 
  if(p2check()==true){
          document.getElementById('output').innerHTML='Player 2 Wins!';
  count2++;
document.getElementById('p2').innerHTML="Player 2: "+count2;
         
         }
  /**/
  else
  if(p2check()==false && p1check()==false&& isEmpty()==true)
  {
           
            document.getElementById('output').innerHTML='Its a tie';
         }


}// winner function

function p1check(){
  if((picked[0][0]==1&&picked[0][1]==1&&
  picked[0][2]==1) || (picked[1][0]==1&&picked[1][1]==1&&
  picked[1][2]==1) ||(picked[2][0]==1&&picked[2][1]==1&&
  picked[2][2]==1)//horizontal
   
   || (picked[0][0]==1 &&picked[1][0]==1&&
  picked[2][0]==1) || (picked[0][1]==1&&picked[1][1]==1&&
  picked[2][1]==1) ||(picked[0][2]==1&&picked[1][2]==1&&
  picked[2][2]==1)// vertical
  ||
  (picked[0][0]==1&&picked[1][1]==1&&
  picked[2][2]==1) || (picked[0][2]==1&&picked[1][1]==1&&
  picked[2][0]==1)// diagonal
  ){
    
    return true;
  }else{
    return false;
  }
}
function p2check(){
  if((picked[0][0]==2&&picked[0][1]==2&&
  picked[0][2]==2) || (picked[1][0]==2&&picked[1][1]==2&&
  picked[1][2]==2) ||(picked[2][0]==2&&picked[2][1]==2&&
  picked[2][2]==2)//horizontal
   
   || (picked[0][0]==2 &&picked[1][0]==2&&
  picked[2][0]==2) || (picked[0][1]==2&&picked[1][1]==2&&
  picked[2][1]==2) ||(picked[0][2]==2&&picked[1][2]==2&&
  picked[2][2]==2)// vertical
  ||
  (picked[0][0]==2&&picked[1][1]==2&&
  picked[2][2]==2) || (picked[0][2]==2&&picked[1][1]==2&&
  picked[2][0]==2)// diagonal
        ){
    return true;
  }else{
    return false;
  }
  
}//

function isEmpty(){
  for(var i=0;i<3;i++){
    
    for(var j=0;j<3;j++){
    if(picked[i][j]==0)
    return false;
    }
    
  } 
   return true; 
  }
  
