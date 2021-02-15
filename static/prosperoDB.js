/**
 * This file holds all the functions related to contacting the backend database. 
 * addProduct({}) POSTs a product to add to the database
 * getProductsBySearch(String) GETs an array of products matching given parameter
 * getProductByID(Number) GETs a product matching given id
 * getLandingProducts() GETs all products, and returns an array of three (3) random products
 */
import axios from 'axios'

const getUrl = 'http://localhost:8080/part3/get-product.php'
const addUrl = 'http://localhost:8080/part3/add-product.php'

/**
 * Sends a POST request to backend with an object of product data to add to database.
 * Returns a boolean: true for success and false otherwise
 * @param {Object} product An object of product data. Expects an image file within data 
 */
export async function addProduct(product = {}) {
    return await axios.post(addUrl, product)
                    .then(res => res.data)
}
/**
 * Sends a GET request to backend to search for all objects using given parameter.
 * Searches by title and description
 * Returns an array of results
 * @param {String} param A string containing the parameter to search.
 */
export async function getProductsBySearch(param = '') {
    return await axios.get(getUrl + `?search=${param}`)
                    .then(res => res.data)
}
/**
 * Sends a GET request to backend to find the product that matches given id.
 * Returns a single object
 * @param {Number} id A numeric id >= 1 to be searched for
 */
export async function getProductByID(id = 1) {
    return await axios.get(getUrl + `?id=${id}`)
                    .then(res => res.data[0])
}
/**
 * Sends a GET request to backend for all products from database. Then calls
 * setObjs() with the array of results and returns that result, as an array
 * of three (3) product objects
 */
export async function getLandingProducts() {
    return setObjs(await axios.get(getUrl)
                            .then(res => res.data))
}

/* Functions to determine three random products from product list */
const randIndex = (len) => Math.floor(Math.random() * len)
/**
 * Takes an array of product objects and selects three (3) random objects
 * to return
 * @param {Array} n An array of product objects
 */
const setObjs = (n = []) => {
    let arr = []
    for (let i = 0; i < 3; i++) {
        /* 
         * Get a random index between bounds of n, add to result array
         * and then remove from n 
         */
        let objIndex = randIndex(n.length)
        arr.push(n[objIndex])
        n.splice(objIndex, 1)
    }
    
    return arr
}