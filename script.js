let count = 16;
let i,j;
const restart = document.getElementById('restart');
    restart.addEventListener('click', (e) => {
        reboot();
    });
const size = document.getElementById('size');
    size.addEventListener('click', (e) => {
        count = prompt("What number do you want?");
        reboot();
    });
function gridCreator(){
    i=0;
    j=0;
    while(i<count){
        for(j=0;j<count;j++){
                  document.getElementById('grid').innerHTML += "<div class='box' onmouseover='changeColor(this)'> </div>";};
        i++;
    }
    let gridSize = "1fr ".repeat(count);
    document.getElementById('grid').setAttribute("style", `grid-template-columns: ${gridSize}; grid-template-rows: ${gridSize};`);
}
function changeColor(target){
    target.style.backgroundColor = 'black';
}

function reboot(){
    document.getElementById('grid').innerHTML = "";
    gridCreator();
}
reboot();