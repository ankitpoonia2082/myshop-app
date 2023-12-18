let ProductData = []  // To store data getting from API
let productType;      // getting string from function
// Updating Product
const updateProduct = (data) => {
    const fullScreen = document.getElementById('offcanvasBody');
    fullScreen.replaceChildren(); // Remove privious elements 
    const productdivFull = document.createElement('div')
    const model = document.createElement('input')
    model.setAttribute('id', 'modelId')
    const price = document.createElement('input')
    price.setAttribute('id', 'priceId')
    const update = document.createElement('button')

    model.value = data?.model;
    price.value = data?.price;
    update.textContent = "update";

    productdivFull.appendChild(model)
    productdivFull.appendChild(price)
    productdivFull.appendChild(update)
    fullScreen.appendChild(productdivFull)

    update.addEventListener('click', (event) => {
        const modelValue = document.getElementById('modelId').value
        const priceValue = document.getElementById('priceId').value
        const id = data._id
        newData = { productType, id, modelValue, priceValue }
        fetch(`http://localhost:3000/update`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newData),
        }).then(result => result.json())
            .then(result => {
                console.log(result)
                alert(result)
            })
            .catch(err => {
                console.log(err.message)
                alert(err)
            });
    })
}
// for deleting product
const deleteProduct = (data) => {
    const fullScreen = document.getElementById('offcanvasBody');
    let id = data._id
    let newData = { id, productType }
    fetch('http://localhost:3000/delete', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newData)
    })
        .then((result) => result.json())
        .then((result) => {
            console.log(result)
            fullScreen.replaceChildren();
            let msg = document.createElement("h2");
            msg.textContent = "Deleted Successfully"
            fullScreen.appendChild(msg)
            getProduct(productType)
            alert(result)
        }).catch(err => console.log(err))
}
// To view all details of product ---------------------->
const productFullScreen = (deviceData) => {
    const data = deviceData;
    const fullScreen = document.getElementById('offcanvasBody');
    fullScreen.replaceChildren(); // Remove privious elements 
    const productdivFull = document.createElement('div')
    const fullImage = document.createElement('img')
    const brand = document.createElement('h3')
    const model = document.createElement('h6')
    const ram = document.createElement('p')
    const color = document.createElement('p')
    const storage = document.createElement('p')
    const screenSize = document.createElement('p')
    const processer = document.createElement('p')
    const price = document.createElement('p')
    const updateBtn = document.createElement('button')
    const deleteBtn = document.createElement('button')

    fullImage.src = data?.img;
    brand.textContent = `Brand : ${data?.brand}`;
    model.textContent = `Model : ${data?.model}`;
    price.textContent = `Price : ${data?.price}`;
    ram.textContent = `Ram : ${data?.ram}`;
    storage.textContent = `Storage : ${data?.storage}`;
    screenSize.textContent = `Screen Size : ${data?.screenSize}`;
    processer.textContent = `Processer : ${data?.processer}`;
    color.textContent = `Color : ${data?.color}`;

    updateBtn.textContent = "Update"
    deleteBtn.textContent = "delete"

    fullImage.classList.add('img-fluid');
    productdivFull.classList.add('product-div-full');

    productdivFull.appendChild(fullImage)
    productdivFull.appendChild(brand)
    productdivFull.appendChild(model)
    productdivFull.appendChild(color)
    productdivFull.appendChild(ram)
    productdivFull.appendChild(storage)
    productdivFull.appendChild(screenSize)
    productdivFull.appendChild(processer)
    productdivFull.appendChild(price)
    productdivFull.appendChild(updateBtn)
    productdivFull.appendChild(deleteBtn)
    fullScreen.appendChild(productdivFull)

    updateBtn.addEventListener('click', (event) => {
        updateProduct(data)
    })
    deleteBtn.addEventListener('click', (event) => {
        deleteProduct(data)
    })

    const toggleButton = document.getElementById('toggleButton').click()
}
// To Show products ------------------------------------>
const showProducts = (products, type) => {
    const container = document.getElementById('products')
    const mobileFeild = document.getElementById('mobileFeild')

    mobileFeild.style.display = 'block'
    container.style.display = 'flex'

    const heading = document.getElementById('heading')
    heading.style.display = 'block'
    heading.textContent = type
    container.replaceChildren();

    if (products.length === 0) {
        const noProduct = document.createElement('h2');
        noProduct.textContent = `No ${type} avalable currently`
        noProduct.classList.add("text-white")
        container.appendChild(noProduct)
    }
    else {
        products.map((data) => {
            const productdiv = document.createElement('div')
            const image = document.createElement('img')
            const brand = document.createElement('h3')
            const model = document.createElement('h6')
            const price = document.createElement('p')

            image.src = data?.img;
            brand.textContent = `Brand : ${data?.brand}`;
            model.textContent = `Model : ${data?.model}`;
            price.textContent = `Price : ${data?.price}`;

            image.classList.add('img-fluid')
            productdiv.classList.add('product-div');

            productdiv.appendChild(image)
            productdiv.appendChild(brand)
            productdiv.appendChild(model)
            productdiv.appendChild(price)
            container.appendChild(productdiv)

            productdiv.addEventListener('click', (event) => {
                // const productId = data?._id;
                const deviceData = data
                productFullScreen(deviceData);
            })
        })
    }
}
// to filter data/ Searching --------------------------->
const SearchProduct = (data, productType) => {
    const find = data
    fetch(`http://localhost:3000/search${productType}?value=${find}`)
        .then((data) => data.json())
        .then((data) => {
            showProducts(data, productType)
        }).catch(err => console.log(err))
}
// To get All products of a catagory on btn click ------>
const getProduct = (type) => {
    productType = type
    fetch(`http://localhost:3000/get${type}`)
        .then((data) => data.json())
        .then((data) => {
            ProductData = data;
            showProducts(data, type);
        }).catch(err => console.log(err))
}
//data sorting by price -------------------------------->
const sortData = () => {
    if (ProductData) {
        ProductData.sort((a, b) => a.price - b.price)
        showProducts(ProductData, productType)
    }
}
// Show data from all collections afer searching-------->
const showAllProducts = (products) => {
    let container = document.getElementById('ShowAllProducts')
    container.style.display = 'block'
    products.map((data) => {
        const productdiv = document.createElement('div')
        const image = document.createElement('img')
        const brand = document.createElement('h3')
        const model = document.createElement('h6')
        const price = document.createElement('p')

        image.src = data?.img;
        brand.textContent = `Brand : ${data?.brand}`;
        model.textContent = `Model : ${data?.model}`;
        price.textContent = `Price : ${data?.price}`;

        image.classList.add('img-fluid')
        productdiv.classList.add('product-div');

        productdiv.appendChild(image)
        productdiv.appendChild(brand)
        productdiv.appendChild(model)
        productdiv.appendChild(price)
        container.appendChild(productdiv)
    })
}
const SearchFromProduct = (data, productType) => {
    const find = data
    return fetch(`http://localhost:3000/search${productType}?value=${find}`)
        .then((data) => data.json())
        .then((data) => {
            return data
        }).catch(err => console.log(err))
}
// Find Product from all catagory ---------------------->
const findProducts = async (findAll) => {
    const find = findAll
    const data = {
        phones: await SearchFromProduct(find, "phone"),
        tabs: await SearchFromProduct(find, "tab"),
        laptops: await SearchFromProduct(find, "laptop"),
        headphone: await SearchFromProduct(find, "headphone")
    }
    AllData = [...data.phones, ...data.tabs, ...data.laptops, ...data.headphone]
    showProducts(AllData)
}

// Search Btn and input feild data --------------------->
const searchBtn = document.getElementById('searchQueryBtn');
searchBtn.addEventListener('click', (event) => {
    const searchQuery = document.getElementById('searchQuery').value;
    SearchProduct(searchQuery, productType)
})
// sorting Data Btn ------------------------------------>
const SortData = document.getElementById('SortData');
SortData.addEventListener('click', (event) => {
    sortData()
})
// // home page search bar btn -------------------->
const findProductBtn = document.getElementById('button-addon2');
findProductBtn.addEventListener('click', (event) => {
    const findAll = document.getElementById('findAll').value;
    findProducts(findAll)
})