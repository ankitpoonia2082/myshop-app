// To show All headphones on btn click

const getHeadphone = () => {

    const tabs = document.getElementById('tabs')
    const mobile = document.getElementById('mobile')
    const laptops = document.getElementById('laptops')
    const headphonesContainer = document.getElementById('headphones')

    tabs.style.display = 'none'
    mobile.style.display = 'none'
    laptops.style.display = 'none'
    headphonesContainer.style.display = 'flex'

    

    const heading = document.getElementById('heading')    
    heading.style.display = 'block'
    heading.textContent = "HEADPHONES"


    headphonesContainer.replaceChildren();

    fetch(`http://localhost:3000/getheadphone`)
        .then((data) => data.json())
        .then((data) => {
            if(data.length === 0){ 
                const noProduct = document.createElement('h2');
                noProduct.textContent = "No headphones avalable currently"
                noProduct.classList.add("text-white")
                laptopContainer.appendChild(noProduct)
            }
            else{
                data.map((data) => {
                    const headphoneDiv = document.createElement('div')
                    const image = document.createElement('img')
                    const brand = document.createElement('h2')
                    const model = document.createElement('h4')
                    const price = document.createElement('p')
    
                    image.src = data?.img;
                    brand.textContent = `Brand : ${data?.brand}`;
                    model.textContent = `Model : ${data?.model}`;
                    price.textContent = `Price : ${data?.price}`;
    
                    image.classList.add('img-fluid')
                    headphoneDiv.classList.add('headphone-div');
    
                    headphoneDiv.appendChild(image)
                    headphoneDiv.appendChild(brand)
                    headphoneDiv.appendChild(model)
                    headphoneDiv.appendChild(price)
                    headphonesContainer.appendChild(headphoneDiv)
                })
            }
            

        }).catch(err => console.log(err))
}