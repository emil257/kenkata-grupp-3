import actiontypes from '../actiontypes'

let initState = {
  products: [],
  currentProduct: {},
  cart: [],
  cartTotal: 0,
  cartTotalProducts: 0
}

export default (state = initState, action) => {
  switch (action.type) {
    case actiontypes().products.getProducts:
      return state = {
        products: action.payload,
        currentProduct: state.currentProduct,
        cart: state.cart,
        cartTotal: state.cartTotal,
        cartTotalProducts: state.cartTotalProducts
      }

    case actiontypes().products.getProductById:
      return state = {
        products: state.products,
        currentProduct: action.payload,
        cart: state.cart,
        cartTotal: state.cartTotal,
        cartTotalProducts: state.cartTotalProducts
      }

    case actiontypes().products.addToCart:
      let exists = false
      let a_cart = [...state.cart]

      a_cart.forEach(item => {
        if (item._id === action.payload.product._id) {
          exists = true
          item.quantity += action.payload.qnt
        }
      })

      if (!exists) {
        a_cart.push({
          _id: action.payload.product._id,
          product: {
            name: action.payload.product.name,
            price: action.payload.product.price,
            image: action.payload.product.image
          },
          quantity: action.payload.qnt
        })
      }

      return state = {
        products: state.products,
        currentProduct: state.currentProduct,
        cart: a_cart,
        cartTotal: state.cartTotal,
        cartTotalProducts: state.cartTotalProducts
      }
    case actiontypes().products.removeFromCart:
      let r_cart = [...state.cart]

      r_cart.forEach((item, i = 0) => {
        if (item._id === action.payload) {
          r_cart.splice(i, 1)
        }
        i++
      })

      return state = {
        products: state.products,
        currentProduct: state.currentProduct,
        cart: r_cart,
        cartTotal: state.cartTotal,
        cartTotalProducts: state.cartTotalProducts
      }
    case actiontypes().products.changeQnt:
      let q_cart = [...state.cart]
      q_cart.forEach((item, i = 0) => {
        if (item._id === action.payload.id) {
          if (action.payload.incdec) {
            item.quantity += 1
          } else {
            item.quantity -= 1
            if (item.quantity === 0) {
              q_cart.splice(i, 1)
            }
          }
        }
        i++
      })
      return state = {
        products: state.products,
        currentProduct: state.currentProduct,
        cart: q_cart,
        cartTotal: state.cartTotal,
        cartTotalProducts: state.cartTotalProducts
      }
    case actiontypes().products.cartTotal:
      let total = 0

      state.cart.forEach(item => {
        total += (item.product.price * item.quantity)
      })

      return state = {
        products: state.products,
        currentProduct: state.currentProduct,
        cart: state.cart,
        cartTotal: total,
        cartTotalProducts: state.cartTotalProducts
      }
    case actiontypes().products.cartTotalItems:
      let totalItems = 0

      state.cart.forEach(item => {
        totalItems += item.quantity
      })

      return state = {
        products: state.products,
        currentProduct: state.currentProduct,
        cart: state.cart,
        cartTotal: state.cartTotal,
        cartTotalProducts: totalItems
      }
    case actiontypes().products.emptyCart:
      return state = {
        products: state.products,
        currentProduct: state.currentProduct,
        cart: [],
        cartTotal: 0,
        cartTotalProducts: 0
      }
    default:
      return state
  }
}