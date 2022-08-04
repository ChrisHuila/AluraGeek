import { getProducts, deleteProduct } from "./API.js";
import { displaysBar } from "./function.js";

(function(){
    //functions of the search bar according to the size of the screen
    document.addEventListener('DOMContentLoaded', displaysBar );

    const service = document.querySelector('#service');

    // Deltete the product
    service.addEventListener('click', confirmDelete)

    // display the products on the screen
    document.addEventListener('DOMContentLoaded', showProduct);


    //fetch the products from the jason server and create the html
    async function showProduct(){
        const products = await getProducts();
        
        products.forEach(product => {
            const {image, name, price, id} = product;
                        
            const div = document.createElement('div');
            div.classList.add('services__product');
            div.innerHTML = `
                <img class="services__product-img w-176" src=${image} alt="product">
                <p class="services__product-descritpion">${name}
                    <a href="edit-products.html?id=${id}"" class="text-decoration"> 
                        <svg class="icon__manager icon__edit" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2a7ae4" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                            <line x1="16" y1="5" x2="19" y2="8" />
                        </svg>
                    </a>
                    <a href="#" class="text-decoration"> 
                        <svg data-product="${id}"  class="icon__manager icon__delete" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-x" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#df1111" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="12" cy="12" r="9" />
                            <path d="M10 10l4 4m0 -4l-4 4" />
                        </svg>
                    </a>    
                </p>
                <span class="services__product-price"> ${price}</span>
                <a class="services__product-SeeProduct" href="#">See Product</a>
            `;
            
            service.insertBefore(div, document.querySelector('.services__product'));
        });
    }

  

    // Delete the product
    function confirmDelete(e){
        if(e.target.classList.contains('icon__delete')){
            const productId = parseInt(e.target.dataset.product);
            
            const confirmD = confirm('You want to delete this product?');

            if(confirmD){
                deleteProduct(productId);
            }
        }
    }
    

})();