function solve() {
  const furnitureList = document.querySelectorAll('textarea');
  const buttons = document.querySelectorAll('button');
  const body = document.querySelector('tbody');
 
 // document.querySelector('input').disabled = false;
 
  buttons[0].addEventListener('click', onClick);
  buttons[1].addEventListener('click', onTap);
 
  function onClick(ev) {
    let text = JSON.parse(furnitureList[0].value);
    for (let el of text) {
      let row = document.createElement('tr');
 
      const cellImage = document.createElement('td');
      const image = document.createElement('img');
      image.setAttribute('src', el.img);
      cellImage.appendChild(image);
      row.appendChild(cellImage);
 
 
      const cellName = document.createElement('td');
      const paragraphName = document.createElement('p');
      paragraphName.textContent = el.name;
      cellName.appendChild(paragraphName);
      row.appendChild(cellName);
 
      const cellPrice = document.createElement('td');
      const paragraphPrice = document.createElement('p');
      paragraphPrice.textContent = Number(el.price);
      cellPrice.appendChild(paragraphPrice);
      row.appendChild(cellPrice);
 
      const cellFactor = document.createElement('td');
      const paragraphFactor = document.createElement('p');
      paragraphFactor.textContent = Number(el.decFactor);
      cellFactor.appendChild(paragraphFactor);
      row.appendChild(cellFactor);
 
      const cellBox = document.createElement('td');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      cellBox.appendChild(checkbox);
      row.appendChild(cellBox);
 
      body.appendChild(row);
    }
  }
 
  //let checksAndBalances = body.querySelectorAll('input');
 
 
  function onTap(ev) {
    const furniture = Array.from(body.querySelectorAll('input[type=checkbox]:checked'))
      .map(input => input.parentNode.parentNode);
 
    const result = {
      bought: [],
      price: 0,
      factorSum: 0
    };
 
    for (const row of furniture) {
      const cells = row.children;
      const name = cells[1].children[0].textContent;
      result.bought.push(name);
 
      const price = Number(cells[2].children[0].textContent);
      result.price += price;
 
      const factor = Number(cells[3].children[0].textContent);
      result.factorSum += factor;
    }
 
    furnitureList[1].value = `Bought furniture: ${result.bought.join(', ')}\nTotal price: ${result.price.toFixed(2)}\nAverage decoration factor: ${(result.factorSum/furniture.length)}`
  }
}