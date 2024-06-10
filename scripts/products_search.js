"use strict"


window.onload = () => {

    console.log("hello inside the console")

    let showSearchAll = document.querySelector("#dropDown")
    showSearchAll.addEventListener("change", populateSearchPage)
    

    
}

async function populateSearchPage() {

    let products = await getProductDetails();

    products.forEach(product => {
        let tbody = document.querySelector("#searchBody")

        buildRow(tbody, product)

    });

}

function buildRow(productTableBody, productData) {

    let row = productTableBody.insertRow();

    let productIdCell = row.insertCell();
    productIdCell.innerHTML = productData.productId

    let prodcutNameCell = row.insertCell();
    prodcutNameCell.innerHTML = productData.productName

    let unitPriceCell = row.insertCell();
    unitPriceCell.innerHTML = productData.unitPrice

    let unitsInStockCell = row.insertCell();
    unitsInStockCell.innerHTML = productData.unitsInStock

    let categoryIdCell = row.insertCell();
    categoryIdCell.innerHTML = productData.categoryId

    let supplierCell = row.insertCell();
    supplierCell.innerHTML = productData.supplier

    let discontinuedCell = row.insertCell();
    discontinuedCell.innerHTML = productData.discontinued

    // let prodcutDetailsCell = row.innerHTML();
    // prodcutDetailsCell.innerHTML`
    // <a href="./product_detail.html?productid=${productData.id}> Show Details </a>
    // `

}

async function getProductDetails() {

    try {

        let response = await fetch("http://localhost:8081/api/products");

        let data = await response.json();

        return data;
    } catch (error) {
        console.log(error)
    }


}