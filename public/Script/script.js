let cartBtn = document.getElementById('add-to-cart-btn');
let cartBtnContainer = document.querySelector('.btn-container')
let updateCart = document.querySelector('.update-cart')
let quantity = document.querySelector('.item-unit')
let product = document.getElementById('product').src
let description = document.getElementById('description').innerText
let price = Number(document.getElementById('price').innerText)
let notification = document.querySelector('.badge')
let allNotifications = []
let notificationUnit = 0

if(localStorage.localproduct) {
  let detail = JSON.parse(localStorage.getItem('localproduct'))
  detail.forEach((each)=> {
    console.log(each.Unit);
    quantity.innerText = each.Unit
    cartBtn.style.display = 'none'
    updateCart.classList.remove('d-none')
  })
} else {
  cartBtn.style.display = 'block'
  updateCart.classList.add('d-none')
}

let allProducts = []
let allPrices = []
let productInfo = {
  Product: product,
  Description: description,
  Price: price,
  Unit: ''
}
cartBtn.addEventListener('click', ()=> {
  if(localStorage.localproduct) {
    let customerPurchase = JSON.parse(localStorage.getItem('localproduct'))
    customerPurchase.map((each)=> {
      productInfo = {
        Product: customerPurchase.Product,
        Description: customerPurchase.Description,
        Price: customerPurchase.Price,
        Unit: customerPurchase.Unit
      }
      allProducts.push(customerPurchase)
      localStorage.setItem('localproduct', JSON.stringify(allProducts))
    })
  } else {
    allProducts.push(productInfo)
    localStorage.setItem('localproduct', JSON.stringify(allProducts))
  }
  cartBtn.style.display = 'none'
  updateCart.classList.remove('d-none')
  let unit = quantity.innerText++ 
  notification.classList.remove('d-none')
  notificationUnit = notification.innerText++
  allNotifications.push(notificationUnit)
  localStorage.setItem('badge', allNotifications)
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
  if(quantity.innerText <= 2) {
    quantity.innerText++
    localStorage.getItem('badge')
    let addNotificationUnit =  notification.innerText++
    allNotifications.splice(0, 1, addNotificationUnit)
    localStorage.setItem('badge', allNotifications)
    let newUnit = quantity.innerText
    console.log(newUnit);   
    let userProduct = Number(price * newUnit)
    console.log(userProduct);
    detail = JSON.parse(localStorage.getItem('localproduct'))
    detail.map((each)=> {
      let newInfo = {
        customerProduct: each.Product,
        proDescription: each.Description,
        productPrice: userProduct,
        Unit: newUnit
      }
      allProducts.splice(0, 1, newInfo)
      localStorage.setItem('localproduct', JSON.stringify(allProducts))
    })
    // if(localStorage.localproduct) {
    //   let goods = JSON.parse(localStorage.getItem('localproduct'))
    // }
  }
})

removeItem.addEventListener('click', ()=> {
  if(quantity.innerText > 0) {
    let goodUnit = quantity.innerText--
    localStorage.getItem('badge')
    let removeNotificationUnit = notification.innerText--
    allNotifications.splice(0, 1, removeNotificationUnit)
    localStorage.setItem('badge', allNotifications)
    console.log(goodUnit); 
    let userGoods = Number(price * goodUnit)
    console.log(userGoods);
    if(localStorage.localproduct) {
      let getGoods = JSON.parse(localStorage.getItem('localproduct'))
      getGoods.map((each)=> {
        let goodsInfo = {
          customerProduct: each.Product,
          proDescription: each.Description,
          productPrice: userGoods,
          Unit: goodUnit
        }
        allProducts.splice(0, 1, goodsInfo)
        localStorage.setItem('localproduct', JSON.stringify(allProducts))
      })
    }
  } if(quantity.innerText == 0) {
    cartBtn.style.display = 'block'
    updateCart.classList.add('d-none')
  }
})