const square = document.querySelector('.square-body');
const blocks = document.querySelectorAll('.block');
const reset = document.querySelector('.btn-reset');

let blockList = [];

const createList = () => {
  for (let i = 0; i < 25; i++) {
    blockList.push(i);
  }
};

const swapItems = (a, b) => {
  [blockList[a], blockList[b]] = [blockList[b], blockList[a]];
};

const render = () => {
  square.textContent = '';

  for (let i of blockList) {
    square.append(blocks[i]);
  }
};

square.addEventListener('click', (e) => {
  let targetBlock = e.target.closest('.block');
  let arrow = e.target.closest('.arrow');

  if (targetBlock && arrow) {
    let targetBlockNumber =
      +targetBlock.querySelector('.block-number').textContent - 1;
    let targetBlockPosition = blockList.indexOf(targetBlockNumber);

    switch (true) {
      case arrow.classList.contains('right') && targetBlockPosition < 24:
        swapItems(targetBlockPosition, targetBlockPosition + 1);
        break;
      case arrow.classList.contains('left') && targetBlockPosition > 0:
        swapItems(targetBlockPosition, targetBlockPosition - 1);
        break;
      case arrow.classList.contains('bottom') && targetBlockPosition < 20:
        swapItems(targetBlockPosition, targetBlockPosition + 5);
        break;
      case arrow.classList.contains('top') && targetBlockPosition > 4:
        swapItems(targetBlockPosition, targetBlockPosition - 5);
        break;
    }

    render();
  }
});

reset.addEventListener('click', () => {
  blockList = [];

  createList();
  render();
});

createList();
