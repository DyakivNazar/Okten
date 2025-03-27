"use strict";
fetch('https://dummyjson.com/carts?limit=50')
    .then(value => value.json())
    .then((res) => {
    let { carts } = res;
    console.log(carts);
    let wrapp_carts = document.getElementById('wrapp_carts');
    for (const cart of carts) {
        let div_cart = document.createElement('div');
        let h3 = document.createElement('h3');
        h3.innerHTML = 'Корзина ' + cart.id;
        let div_product = document.createElement('div');
        div_product.className = 'div_product';
        for (let product of cart.products) {
            let div_product_wrapp = document.createElement('div');
            let h4_title = document.createElement('h4');
            h4_title.innerHTML = 'title: ' + product.title;
            let p_price = document.createElement('p');
            p_price.innerHTML = 'price ' + product.price;
            let p_quantity = document.createElement('p');
            p_quantity.innerHTML = 'quantity: ' + product.quantity;
            let p_total = document.createElement('p');
            p_total.innerHTML = 'total: ' + product.total;
            let p_discountPercentage = document.createElement('p');
            p_discountPercentage.innerHTML = 'discountPercentage: ' + product.discountPercentage;
            let p_discountedTotal = document.createElement('p');
            p_discountedTotal.innerHTML = 'discountedTotal: ' + product.discountedTotal;
            let img = document.createElement('img');
            img.src = product.thumbnail;
            img.alt = 'img product ' + product.title;
            div_product_wrapp.append(h4_title, p_price, p_quantity, p_total, p_discountPercentage, p_discountedTotal, img);
            div_product.appendChild(div_product_wrapp);
        }
        let p_total = document.createElement('p');
        p_total.innerHTML = 'total: ' + cart.total;
        let p_discountedTotal = document.createElement('p');
        p_discountedTotal.innerHTML = 'discountedTotal: ' + cart.discountedTotal;
        let p_user_id = document.createElement('p');
        p_user_id.innerHTML = 'user_id: ' + cart.userId;
        let p_totalProducts = document.createElement('p');
        p_totalProducts.innerHTML = 'totalProducts: ' + cart.totalProducts;
        let p_totalQuantity = document.createElement('p');
        p_totalQuantity.innerHTML = 'totalQuantity: ' + cart.totalQuantity;
        div_cart.append(h3, div_product, p_total, p_discountedTotal, p_user_id, p_totalProducts, p_totalQuantity);
        wrapp_carts.appendChild(div_cart);
    }
});
