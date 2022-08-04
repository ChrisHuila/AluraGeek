
import { getProducts, externalSerch } from "./API.js";
import { displaysBar } from "./function.js";
(function(){ 
const form = document.querySelector('#form__serch');

//functions of the search bar according to the size of the screen
document.addEventListener('DOMContentLoaded', displaysBar );

// display all the products
document.addEventListener('DOMContentLoaded', Allproduct);

//load searches from other pages 
document.addEventListener('DOMContentLoaded',async () => {
    
    const externalWord = await externalSerch();

    if(externalWord.length >= 1 ){
        //Add the word to the search bar
        const input = document.querySelector('#serch__term');
        const word = externalWord[0].term;
        input.value = word;

        cleanHTML();

        // Run the search
        serchProduct(word);
    }    
});

// Validate search
window.onload = () => {
    form.addEventListener('submit', validateSerch);
}

function validateSerch(e){
    
    e.preventDefault();

    const termSerch = document.querySelector('#serch__term').value;

    if(termSerch === ''){
        return;
    }
    cleanHTML();

    // Run the search
    serchProduct(termSerch);
}

// feth the prduct and show on the screen
async function serchProduct(term){
    const serchTitle = document.querySelector('#title__allproduct');
    const result = document.querySelector('#serch__result');

    const products = await getProducts();

    // Validate the Search
    const serchFilter = products.filter( product => product.categorie === term);
    
    if(serchFilter.length >= 1){       
        serchTitle.textContent = term;
                        
    }
   
    // Display the products on the screen
    serchFilter.forEach(serch => {
        const {categorie, description, image, name, price, id} = serch;
        
        const serchDiv = document.createElement('div');
        serchDiv.classList.add('services__product');
        serchDiv.innerHTML = `
            <img class="services__product-img w-176" src="${image}" alt="product">
            <p class="services__product-descritpion">${description}</p>
            <span class="services__product-price">${price}</span>
            <a class="services__product-SeeProduct" href="#">See Product</a>
        `;
        result.appendChild(serchDiv);
        
    });
    
    if(term === 'starwars'){
        for(let i = 1;  i <= 6; i++ ) {
            serchTitle.textContent = term;

            const serchDiv = document.createElement('div');
            serchDiv.classList.add('services__product');
            serchDiv.innerHTML = `
                <img class="services__product-img" src="img/starwar${[i]}.png" alt="product">
                <p class="services__product-descritpion">Product xyz</p>
                <span class="services__product-price"> $60,000</span>
                <a class="services__product-SeeProduct" href="#">See Product</a>
            `;
            result.appendChild(serchDiv);
        }
         
    }

    if(term === 'console'){
        for(let i = 1;  i <= 6; i++ ) {
            serchTitle.textContent = term;

            const serchDiv = document.createElement('div');
            serchDiv.classList.add('services__product');
            serchDiv.innerHTML = `
                <img class="services__product-img" src="img/consola${[i]}.png" alt="product">
                <p class="services__product-descritpion">Product xyz</p>
                <span class="services__product-price"> $60,000</span>
                <a class="services__product-SeeProduct" href="#">See Product</a>
            `;
            result.appendChild(serchDiv);
        }
         
    }

    if(term === 'various'){
        for(let i = 1;  i <= 6; i++ ) {
            serchTitle.textContent = term;

            const serchDiv = document.createElement('div');
            serchDiv.classList.add('services__product');
            serchDiv.innerHTML = `
                <img class="services__product-img" src="img/varios${[i]}.png" alt="product">
                <p class="services__product-descritpion">Product xyz</p>
                <span class="services__product-price"> $60,000</span>
                <a class="services__product-SeeProduct" href="#">See Product</a>
            `;
            result.appendChild(serchDiv);
        }
         
    }
    // The Product was not found
    if(serchFilter.length === 0 && term != 'various' && term != 'console' && term != 'starwars' ) {
        serchTitle.textContent = 'The Product was not found';
        return;
    }
}

// Display all the products
async function Allproduct() {
    const result = document.querySelector('#serch__result');
    const products = await getProducts();

    products.forEach(product => {
        const {image, name, price, id} = product;
                    
        const div = document.createElement('div');
        div.classList.add('services__product');
        div.innerHTML = `
            <img class="services__product-img w-176" src=${image} alt="product">
            <p class="services__product-descritpion">${name}
            </p>
            <span class="services__product-price"> ${price}</span>
            <a class="services__product-SeeProduct" href="#">See Product</a>
        `;
                
        result.appendChild(div);
    });
}
// Clean the HTML
function cleanHTML(){
    const result = document.querySelector('#serch__result');
    while(result.firstChild){
        result.removeChild(result.firstChild);
    }
}

})();