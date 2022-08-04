
// Show alert
export function showAlert(message) {
    const alert = document.querySelector('.error');

    if(!alert) {
        const paragraph = document.createElement('p');
        paragraph.classList.add('error');
        paragraph.textContent = message;

        const form = document.querySelector('#login__form');
        form.appendChild(paragraph);
                
        // Remove the alert
        setTimeout(() => {
            paragraph.remove();
        }, 3000);
    }
    
}
// validate the fields of the object
export function validate(obj) {
   return !Object.values(obj).every(input => input != '')
}

// Change the placeholder
export function displaysBar(){
    let widthWindow = window.innerWidth;
    let serch = document.querySelector('#serch__term');
    // modify the placeholder
    if( widthWindow <= 768) {        
        serch.placeholder = "      Search";
    }
} 

// Change bar of manager
export function barManager(){
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
        btnSearch.addEventListener('click', () => { 
            window.location.href = 'products.html'
        });
    }
    
}