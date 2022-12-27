const createBtn = document.querySelector('[data-create]');

const destroyeBtn = document.querySelector('[data-destroy]');

const boxes = document.querySelector('#boxes');


function onCreateBtnClick (event) {
let inputValue = +document.querySelector("#controls input").value;
createBoxes(inputValue)
}
createBtn.addEventListener('click', onCreateBtnClick )


function onDestroyBtnClick () {
  boxes.innerHTML = '';
}
destroyeBtn.addEventListener('click', onDestroyBtnClick )


function createBoxes(amount) {
  const array = [];

  let resizePx = 10;
  const defaultBoxSize = 30;

  let childrenLength = boxes.children.length;
  for (let i = 0; i < amount; i += 1 ) {   
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();

    const boxSize = `${defaultBoxSize + (childrenLength + i)*resizePx}px`;
    div.style.width = boxSize;
    div.style.height = boxSize;

    array.push(div);   
    
  }
   boxes.append(...array);
   console.log(childrenLength);

}


 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}