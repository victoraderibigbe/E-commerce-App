// Variable Declarations
const cartBtn = document.getElementById('add-to-cart-btn');
const cartBtnContainer = document.querySelector('.btn-container')
const updateCart = document.querySelector('.update-cart')
const quantity = document.querySelector('.item-unit')
const product = document.getElementById('product').src
const description = document.getElementById('description').innerText
const price = Number(document.getElementById('price').innerText)
const notification = document.querySelector('.badge')
let allNotifications = []
let notificationUnit = ''
let detail = ''
let badgeUnit = ''

if(localStorage.localproduct) {
  detail = JSON.parse(localStorage.getItem('localproduct'))
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

if (localStorage.badge) {
  notification.classList.remove('d-none')
  badgeUnit = JSON.parse(localStorage.getItem('badge'))
  notification.innerText = badgeUnit
} else {
  notification.classList.add('d-none')
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
  notification.innerText = 1
  notificationUnit = notification.innerText
  allNotifications.push(notificationUnit)
  localStorage.setItem('badge', JSON.stringify(allNotifications))
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

// This function is triggered at the click of addItem button
const addToCart = () => {

  // Notification badge unit increases and set to localStorage
  let previousNotificationUnit = JSON.parse(localStorage.getItem('badge'))
  let addNotificationUnit =  previousNotificationUnit
  addNotificationUnit++
  allNotifications.splice(0, 1, addNotificationUnit)
  localStorage.setItem('badge', JSON.stringify(allNotifications))
  notification.innerText = addNotificationUnit
  
  // Item quantity increases
  quantity.innerText++
  let newUnit = quantity.innerText
  console.log(newUnit);
  
  // Computes total price
  let userProduct = Number(price * newUnit)
  console.log(userProduct);  
  
  // Gets previous product information for localStorage and loops through the array
  detail = JSON.parse(localStorage.getItem('localproduct'))
  detail.map((each)=> {
    let productPic = each.Product
    let productDescription = each.Description
    let newInfo = {
      customerProduct: productPic,
      proDescription: productDescription,
      productPrice: userProduct,
      Unit: newUnit
    }
    allProducts.splice(0, 1, newInfo)
    localStorage.setItem('localproduct', JSON.stringify(allProducts))
  })
}

// Triggers addToCart function
addItem.addEventListener('click', ()=> {
  if (quantity.innerText <= 2) {
    addToCart()
  }
})

removeItem.addEventListener('click', ()=> {
  if(quantity.innerText > 0) {
    let goodUnit = quantity.innerText--
    let previousUnit = JSON.parse(localStorage.getItem('badge'))
    let removeNotificationUnit = previousUnit
    removeNotificationUnit--
    allNotifications.splice(0, 1, removeNotificationUnit)
    localStorage.setItem('badge', JSON.stringify(allNotifications))
    notification.innerText = removeNotificationUnit
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