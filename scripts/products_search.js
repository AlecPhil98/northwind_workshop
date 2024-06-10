"use strict"


window.onload = () => {

    console.log("hello inside the console")

    let showSearchAll = document.querySelector("#dropDown")
    showSearchAll.addEventListener("change", populateSearchPage)

    hideElement("#secondCategory")

    

}

function hideShowCategoryDrop(event) {

    if (event.target.value === "secondCategory") { 
        showElement("#secondCategory")
    }else{
        hideElement("#secondCategory")
    }


}

function hideElement(SomeId) {
        let el = document.querySelector(SomeId)
        el.syle.display = "none";
}

function showElement(SomeId){

    let el = document.querySelector(SomeId);
    el.style.display = "block";
}

async function populateSearchPage() {

    let products = await getProductDetails();

    products.forEach(product => {
        let tbody = document.querySelector("#searchBody")

        buildRow(tbody, product)

    });

}
// builds the table row with hyperlinks to the details of said product
function buildRow(productTableBody, productData) {

    let row = productTableBody.insertRow();

    let productIdCell = row.insertCell();
    productIdCell.innerHTML = productData.productId

    let prodcutNameCell = row.insertCell();
    prodcutNameCell.innerHTML = productData.productName

    let unitPriceCell = row.insertCell();
    unitPriceCell.innerHTML = productData.unitPrice

    // let unitsInStockCell = row.insertCell();
    // unitsInStockCell.innerHTML = productData.unitsInStock

    // let categoryIdCell = row.insertCell();
    // categoryIdCell.innerHTML = productData.categoryId

    // let supplierCell = row.insertCell();
    // supplierCell.innerHTML = productData.supplier

    // let discontinuedCell = row.insertCell();
    // discontinuedCell.innerHTML = productData.discontinued

    let prodcutDetailsCell = row.insertCell();
    prodcutDetailsCell.innerHTML = `
    <a href="./product_details.html?productid=${productData.productId}"> Show Details </a>
    `

}
// grabs all the data of the products
async function getProductDetails() {

    try {

        let response = await fetch("http://localhost:8081/api/products");

        let data = await response.json();

        return data;
    } catch (error) {
        console.log(error)
    }


}