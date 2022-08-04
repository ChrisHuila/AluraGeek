import { getUsers } from "./API.js";
import { showAlert, displaysBar } from "./function.js";
(function(){    
    //functions of the search bar according to the size of the screen
    document.addEventListener('DOMContentLoaded', displaysBar );

    const form = document.querySelector('#login__form');
    
    // Validate the form
    form.addEventListener('submit', validateUser);

    // Show users in console
    document.addEventListener('DOMContentLoaded', async () => console.log(await getUsers()) );

    alert('See the username and password in the console');

    async function validateUser(e) {
        e.preventDefault();
        const users = await getUsers();
         
        const emailInput = document.querySelector('#login__email').value;
        const passwordInput = document.querySelector('#login__password').value;
        
        //valid if exists 
        const exists = users.some( user => {
            const {email, password } = user;
            return emailInput === email && passwordInput === password ; 
        }); 
        // leads to product page
        if(exists) {
            window.location.href = 'products.html'
        } else {
            // Show alert
            showAlert('Incorrect user or password ');     
        }

    }





   
})();