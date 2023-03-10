const addToCartBtns = document.querySelectorAll(".btn");

addToCartBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let productId = btn.dataset.productId;
        let productPrice = btn.dataset.productPrice;
        let productName = btn.dataset.productName;

        let cartItems = localStorage.getItem("cartItems");

        if (cartItems) {
            cartItems = JSON.parse(cartItems);
        } else {
            cartItems = [];
        }
        const existingCartItem = cartItems.find((item) => item.id === productId);

        if (existingCartItem) {
            existingCartItem.quantity++;
        } else {
            cartItems.push({
                id: productId,
                price: productPrice,
                name: productName,
                quantity: 1,
            });
        }
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    });
});

const cartSummaryBtn = document.getElementById("cart-summary-btn");

cartSummaryBtn.addEventListener("click", () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    console.log(cartItems);
});
