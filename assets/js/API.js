// =================USERS ==========================
const urlUser = 'http://localhost:4000/user';

// get all users

export const getUsers = async () => {
    try {
        const result = await fetch(urlUser);
        const users = await result.json();        
        return users
    } catch (error) {
        console.log(error)
    }
} 


// ==============PRODUCTS======================
const urlProducts = 'http://localhost:4000/products';
// when a new product is created
export const newProduct = async product => {
    try {
        await fetch(urlProducts, {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'products.html';       
    } catch (error) {
        console.log(error);
    }
}

// get all products

export const getProducts = async () => {
    try {
       const result = await fetch(urlProducts);
       const products = await result.json();
       return products
    } catch (error) {
        console.log(error)
    }
}

// Delete the product
export const deleteProduct = async id => {
    try {
        
        await fetch( `${urlProducts}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
}

// Get product by id

export const getProduct = async id => {
    try {
       const result = await fetch(`${urlProducts}/${id}`);
       const product = await result.json();
       return product
    } catch (error) {
        console.log(error)
    }
}

// update a record
export const editProduct = async product => {
    try {
      await fetch(`${urlProducts}/${product.id}`, {
        method: 'PUT',
        body: JSON.stringify(product),
        headers:{
            'Content-Type': 'application/json'
        }
      });
      window.location.href = 'products.html'  
    } catch (error) {
        console.log(error)
    }
}
// ===========SERCH================

// When a product is serch
const urlSerch = 'http://localhost:4000/serchs';
export const serchInput = async serch => {
    try {
        await fetch(urlSerch, {
            method: 'POST',
            body: JSON.stringify(serch),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'Allproducts.html';
    } catch (error) {
        console.log(error)
    }
}

// Get the external serch
export const externalSerch = async () => {
    try {
        const result = await fetch(urlSerch);
        const product = await result.json();
        return product
    } catch (error) {
        console.log(error);
    }
}

// Delete the serh by id

export const deleteSerch = async (id) => {
    try {
        
        await fetch(`${urlSerch}/${id}`, {
        method: 'DELETE'
    })
      
    } catch (error) {
        console.log(error);
    }
}


