let ProductData = []
let productType;



const showProducts = (products , type) => {
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
        })
    }
}
// to filter headphones
const SearchProduct = (data) => {
    const find = data
    fetch(`http://localhost:3000/search${productType}?value=${find}`)
        .then((data) => data.json())
        .then((data) => {
            showProducts(data, productType)

        }).catch(err => console.log(err))
}

// To show All headphones on btn click
const getProduct = (type) => {
    productType = type
   
    fetch(`http://localhost:3000/get${type}`)
        .then((data) => data.json())
        .then((data) => {
            ProductData = data;
            showProducts(data , type);
            
        }).catch(err => console.log(err))

}

//data sorting
const sortData = () => {
    if (ProductData) {
       
        ProductData.sort((a, b) => a.price - b.price)
        showProducts(ProductData , productType)
        
    }
}

const searchBtn = document.getElementById('searchQueryBtn');
searchBtn.addEventListener('click', (event) => {
    const searchQuery = document.getElementById('searchQuery').value;
    SearchProduct(searchQuery)
})
// sorting Data Btn ------------------------------------  >>>
const SortData = document.getElementById('SortData');
SortData.addEventListener('click', (event) => {
    sortData()
})