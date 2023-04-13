let cartBtn = document.getElementById('add-to-cart-btn');
let cartBtnContainer = document.querySelector('.btn-container')
let updateCart = document.querySelector('.update-cart')
let quantity = document.querySelector('.item-unit')
let product = document.getElementById('product').src
console.log(product);
let description = document.getElementById('description').innerText
let price = Number(document.getElementById('price').innerText)

let allProducts = []
let allPrices = []
let productInfo = {
  Product: product,
  Description: description,
  Price: price,
  Unit: ''
}
cartBtn.addEventListener('click', ()=> {
  allProducts.push(productInfo)
  localStorage.setItem('localproduct', JSON.stringify(allProducts))
  cartBtn.style.display = 'none'
  updateCart.classList.remove('d-none')
  let unit = quantity.innerText++ 
  let userOrder = JSON.parse(localStorage.getItem('localproduct'))
  console.log(userOrder);
  userOrder.map((each)=> {
    each.Unit = unit+1
    let updateInfo = {
      Product: product,
      Description: description,
      Price: price,
      Unit: each.Unit
    }
    allProducts.splice(0, 1, updateInfo)
    localStorage.setItem('localproduct', JSON.stringify(allProducts))
  })
})

addItem.addEventListener('click', ()=> {
  if(quantity.innerText < 3) {
    quantity.innerText++
    let newUnit = quantity.innerText
    console.log(newUnit);
    let userProduct = Number(price * newUnit)
    console.log(userProduct);
    let goods = JSON.parse(localStorage.getItem('localproduct'))
    goods.map((each)=> {
      let newInfo = {
        customerProduct: each.Product,
        proDescription: each.Description,
        productPrice: userProduct,
        Unit: newUnit
      }
      allProducts.splice(0, 1, newInfo)
      localStorage.setItem('localproduct', JSON.stringify(allProducts))
    })
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

console.log('Test');
