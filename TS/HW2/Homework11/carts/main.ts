type productsT =  {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}
interface Icarts  {
  id: number;
  products: productsT[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}
interface IObf{
    carts: Icarts[];
    limit: number;
    skip: number;
    total: number;

}

fetch('https://dummyjson.com/carts?limit=50')
    .then(value => value.json())
    .then((res:IObf):void => {
        let {carts} = res;
        console.log(carts);

        let wrapp_carts:HTMLElement = document.getElementById('wrapp_carts')!;

        for (const cart of carts) {
            let div_cart:HTMLDivElement = document.createElement('div');

            let h3:HTMLHeadingElement = document.createElement('h3');
            h3.innerHTML = 'Корзина ' + cart.id;

            let div_product:HTMLDivElement = document.createElement('div');
            div_product.className = 'div_product';

            for (let product of cart.products) {

                let div_product_wrapp:HTMLDivElement = document.createElement('div');

                let h4_title:HTMLHeadingElement = document.createElement('h4');
                h4_title.innerHTML = 'title: ' + product.title;

                let p_price:HTMLParagraphElement = document.createElement('p');
                p_price.innerHTML = 'price ' + product.price;

                let p_quantity:HTMLParagraphElement = document.createElement('p');
                p_quantity.innerHTML = 'quantity: ' + product.quantity;

                let p_total:HTMLParagraphElement= document.createElement('p');
                p_total.innerHTML = 'total: ' + product.total;

                let p_discountPercentage:HTMLParagraphElement = document.createElement('p');
                p_discountPercentage.innerHTML = 'discountPercentage: ' + product.discountPercentage;

                let p_discountedTotal:HTMLParagraphElement = document.createElement('p');
                p_discountedTotal.innerHTML = 'discountedTotal: ' + product.discountedTotal;

                let img:HTMLImageElement = document.createElement('img');
                img.src = product.thumbnail;
                img.alt = 'img product ' + product.title;

                div_product_wrapp.append(h4_title, p_price, p_quantity, p_total, p_discountPercentage, p_discountedTotal, img);
                div_product.appendChild(div_product_wrapp);
            }

            let p_total:HTMLParagraphElement = document.createElement('p');
            p_total.innerHTML = 'total: ' + cart.total;

            let p_discountedTotal:HTMLParagraphElement = document.createElement('p');
            p_discountedTotal.innerHTML = 'discountedTotal: ' + cart.discountedTotal;

            let p_user_id:HTMLParagraphElement = document.createElement('p');
            p_user_id.innerHTML = 'user_id: ' + cart.userId;

            let p_totalProducts:HTMLParagraphElement = document.createElement('p');
            p_totalProducts.innerHTML = 'totalProducts: ' + cart.totalProducts;

            let p_totalQuantity:HTMLParagraphElement = document.createElement('p');
            p_totalQuantity.innerHTML = 'totalQuantity: ' + cart.totalQuantity;

            div_cart.append(h3, div_product, p_total, p_discountedTotal, p_user_id, p_totalProducts, p_totalQuantity);
            wrapp_carts.appendChild(div_cart);
        }
    });

