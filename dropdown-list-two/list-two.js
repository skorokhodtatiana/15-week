function changeTopic(){
    switch(document.getElementById('select-topic').value){
        case 'red' : document.getElementById('body').style.backgroundColor = 'red'; break;
        case 'blue' : document.getElementById('body').style.backgroundColor = 'blue'; break;
        case 'green' : document.getElementById('body').style.backgroundColor = 'green'; break;
        case 'yellow' : document.getElementById('yellow').style.backgroundColor = 'yellow'; break;
    }
}