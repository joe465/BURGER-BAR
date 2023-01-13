// Cart
let cartButton = document.querySelector("#cart-button")
let cart = document.querySelector(".cart")
let closeCart = document.querySelector("#close-cart")

cartButton.onclick = () => {
    cart.classList.add("active");
}

cartButton.onhover

closeCart.onclick = () => {
    cart.classList.remove("active");
}