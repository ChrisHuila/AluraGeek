import { getProduct, editProduct } from "./API.js";
import { validate, showAlert, barManager } from "./function.js";
(function(){
    //functions of the search bar according to the size of the screen
    document.addEventListener('DOMContentLoaded', barManager);

    // form fields
    const imageInput = document.querySelector('#login__image');
    const categorieInput = document.querySelector('#login__Categorie');
    const nameInput = document.querySelector('#login__name');
    const priceInput = document.querySelector('#login__price');
    const descriptionInput = document.querySelector('#login__description');
    const idInput = document.querySelector('#id');
    
    //  Edit the product 
    document.addEventListener('DOMContentLoaded', async () => {
        const parametersURL = new URLSearchParams(window.location.search);

        const idProduct = parseInt(parametersURL.get('id') );

        // fetch product from server
        const product = await getProduct(idProduct);
        showProduct(product);

        // submit to the form
        const form = document.querySelector('#login__form');
        form.addEventListener('submit', validateProduct);        
    });

    function showProduct(product){
        const {image, categorie, name, price, description, id} = product;
        
        idInput.value = id;
        imageInput.value = image;
        categorieInput.value = categorie;
        nameInput.value = name;
        priceInput.value = price;
        descriptionInput.value = description;
        
    }

    //Upload the edited product
    function validateProduct(e){
        e.preventDefault();

        const product = {
            image: imageInput.value,
            categorie: categorieInput.value,
            name: nameInput.value,
            price: priceInput.value,
            description: descriptionInput.value,
            id: parseInt(idInput.value),            
        }

        if(validate(product)){
            // Show alert
            showAlert('All fields are required');
            return;
        }
        // rewrite the product
        editProduct(product);
    }




})();
    