function updateCartButton() {
  const button = document.getElementById('add-to-cart-btn');
  button.innerHTML = 'Add/Remove from Cart';
  
  const quantity = document.createElement('span');
  quantity.innerHTML = '0';
  quantity.classList.add('cart-quantity');
  
  const plusButton = document.createElement('button');
  plusButton.innerHTML = '+';
  plusButton.classList.add('plus-button');
  plusButton.addEventListener('click', () => {
    quantity.innerHTML = parseInt(quantity.innerHTML) + 1;
  });
  
  const minusButton = document.createElement('button');
  minusButton.innerHTML = '-';
  minusButton.classList.add('minus-button');
  minusButton.addEventListener('click', () => {
    quantity.innerHTML = parseInt(quantity.innerHTML) - 1;
  });
  
  button.appendChild(quantity);
  button.appendChild(plusButton);
  button.appendChild(minusButton);
}

const addToCartButton = document.getElementById('add-to-cart-btn');
addToCartButton.addEventListener('click', updateCartButton);

