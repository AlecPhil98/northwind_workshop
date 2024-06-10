"use strict"

window.onload = () => {

    console.log("hello from inside the console")

    const urlParams = new URLSearchParams(location.search)

    console.log(urlParams.get("productid"))

    if (urlParams.has("productid")) {
        displayProductDetails(urlParams.get("productid"))
    } else {
        alert("GO AWAY");
        window.location.href = "./index.html";
    } 
}

async function displayProductDetails(productId) {

    let productDetails = await getProductDetails(productId);

    let productDetailDiv = document.querySelector("#productsDetails")

    productDetailDiv.innerHTML = `
    <div>ProductId: ${productDetails.productId}</div>
    <div>Product Name: ${productDetails.productName}</div>
    <div>unit Price: ${productDetails.productId}</div>
    <div>Units In Stock: ${productDetails.unitsInStock}</div>
    <div>Category Id: ${productDetails.categoryId}</div>
    <div>Supplier: ${productDetails.supplier}</div>
    <div>Discontinued: ${productDetails.discontinued}</div>
    
    `
}

async function getProductDetails(productId) {

    try {

        let response = await fetch("http://localhost:8081/api/products/" + productId);

        let newData = await response.json();

        return newData;

    } catch (error) {
        console.log(error)
    }
}