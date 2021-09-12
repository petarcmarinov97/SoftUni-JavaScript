function solve() {
   const arrOfAddButtons = Array.from(document.getElementsByClassName('add-product'));
   arrOfAddButtons.forEach(ev => { ev.addEventListener('click', onClick) });
   document.getElementsByClassName('checkout')[0].addEventListener('click', onCheckout);
   const textAreaPole = document.getElementsByTagName('textarea')[0];
   let totalPrice = 0
   let products = [];
   
   function onClick(el) {
      let productName = el.target.parentNode.parentNode.getElementsByClassName('product-title')[0].textContent;
      let priceOfElement = Number(el.target.parentNode.parentNode.getElementsByClassName('product-line-price')[0].textContent);
      let addedProducts = `Added ${productName} for ${priceOfElement.toFixed(2)} to the cart.\n`;
      totalPrice += priceOfElement;
      textAreaPole.value += addedProducts;
      if (!products.includes(productName)) {
         products.push(productName);
      }
   }

   function onCheckout() {
      textAreaPole.value += `You bought ${products.join(', ')} for ${totalPrice.toFixed(2)}.`;
      arrOfAddButtons.map(btn => {
         btn.disabled = true;
      })
      document.getElementsByClassName('checkout')[0].disabled = true;
   }
}