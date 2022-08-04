import { getProducts, serchInput, deleteSerch, externalSerch} from "./API.js";

(function() {
    // load all products
    const seeMore = document.querySelectorAll('.serivices__link');
    
    seeMore.forEach(more => {
        more.addEventListener('click',() => {
            window.location.href = 'Allproducts.html'
            
        });
    });

    // display the products on the screen
    document.addEventListener('DOMContentLoaded', showProduct);
        
    // show from the json-server
    async function showProduct(){
        const products = await getProducts();
        
        products.forEach(product => {
            const {image, categorie, name, price,} = product;
            const categories = document.getElementById(categorie);
            
            const div = document.createElement('div');
            div.classList.add('services__product');
            div.innerHTML = `
                <img class="services__product-img w-176" src=${image} alt="product">
                <p class="services__product-descritpion">${name}</p>
                <span class="services__product-price"> ${price}</span>
                <a class="services__product-SeeProduct" href="#">See Product</a>
            `;
            
            categories.appendChild(div);
        });
    }

//====================SEARCH BAR===========================
const form = document.querySelector('#form__serch');

// restart the search
document.addEventListener('DOMContentLoaded', async () => {
    const externalWord = await externalSerch();
    
    deleteSerch(externalWord[0].id);
});

// Run the search
    window.onload = () => {
    form.addEventListener('submit', validateSerch);
}

function validateSerch(e){
    e.preventDefault();

    const termSerch = document.querySelector('#serch__term').value;

    if(termSerch === ''){
        return;
    }

    const serchs = {
        term: termSerch,
    };
        
    serchInput(serchs);
}

// =======RESPONSIVE FUNCTION=====

//functions of the search bar according to the size of the screen
document.addEventListener('DOMContentLoaded', displaysBar );

function displaysBar(){
    let widthWindow = window.innerWidth;
    let serch = document.querySelector('#serch__term');
    // modify the placeholder
    if(widthWindow >= 625 && widthWindow <= 768) {        
        serch.placeholder = "      Search";
    }
    // leads to the search page
    if(widthWindow <= 625){
        serch.classList.add('hidden');
        
        const btnSearch = document.querySelector('#input__serch');
        btnSearch.onclick = () => {
            window.location.href = 'Allproducts.html';
            
        }
    }
}

})();

