let cartBtn = document.getElementById('add-to-cart-btn');
let cartBtnContainer = document.querySelector('.btn-container')
let updateCart = document.querySelector('.update-cart')
let quantity = document.querySelector('.item-unit')
cartBtn.addEventListener('click', ()=> {
  cartBtn.style.display = 'none'
  updateCart.classList.remove('d-none')
  quantity.innerText++
})

addItem.addEventListener('click', ()=> {
  if(quantity.innerText < 3) {
    quantity.innerText++
  }
})

removeItem.addEventListener('click', ()=> {
  if(quantity.innerText > 0) {
    quantity.innerText--
  } if(quantity.innerText == 0) {
    cartBtn.style.display = 'block'
    updateCart.classList.add('d-none')
  }
})

