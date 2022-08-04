import { showAlert, validate, barManager } from "./function.js";
import { newProduct } from "./API.js";
(function(){
    //functions of the search bar according to the size of the screen
    document.addEventListener('DOMContentLoaded', barManager);

    const form = document.querySelector('#login__form');
    
    // form's select
    const categorieValue = document.querySelector('#login__Categorie');
    let categorie;

    categorieValue.addEventListener('change', e => {        
        categorie = e.target.value;
        
    });
    
    // Add product
    form.addEventListener('submit', validateProduct);

    // valid to be added
    function validateProduct(e) {
        e.preventDefault();        
        const image = document.querySelector('#login__image').value;
        const name = document.querySelector('#login__name').value;
        const price = document.querySelector('#login__price').value;
        const description = document.querySelector('#login__description').value;

        const product = {
            image,
            categorie,
            name,
            price,
            description,
        }

        
        if(validate(product)){
            // Show alert
            showAlert('All fields are required');
            return;
        }
        // add product
        newProduct(product);
    }
    

})();