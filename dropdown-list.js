function changeColor(){
    if(document.getElementById('select-topic').value == 'red')
    document.getElementById('body').style.backgroundColor="red";
else if(document.getElementById('select-topic').value == 'blue')
document.getElementById('body').style.backgroundColor="blue";
else if (document.getElementById('select-topic').value == 'green')
document.getElementById('body').style.backgroundColor="green"; 
else   document.getElementById('body').style.backgroundColor="yellow"; 
}
