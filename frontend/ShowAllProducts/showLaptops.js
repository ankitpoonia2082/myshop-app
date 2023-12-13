// To Show all Laptops on btn click

const getlaptop = ()=>{
    const laptopContainer = document.getElementById('laptops')
    const phones = document.getElementById('mobile')
    const tabs = document.getElementById('tabs')
    const headphones = document.getElementById('headphones')

    laptopContainer.style.display = 'flex'
    tabs.style.display = 'none'
    phones.style.display = 'none'
    headphones.style.display = 'none'

    const heading = document.getElementById('heading')    
    heading.style.display = 'block'
    heading.textContent = "LAPTOPS"

    laptopContainer.replaceChildren();

    fetch(`http://localhost:3000/getlaptop`)
    .then((data)=> data.json())
    .then((data)=>{
        console.log(data)
        if(data.length === 0){ 
            const noProduct = document.createElement('h2');
            noProduct.textContent = "No laptops avalable currently"
            noProduct.classList.add("text-white")
            laptopContainer.appendChild(noProduct)
        }
        else{
            data.map( data =>{

                const laptopDiv = document.createElement('div')
                const image = document.createElement('img')
                const brand = document.createElement('h2')
                const model = document.createElement('h4')
                const price = document.createElement('p')
    
                image.src = data?.img
                brand.textContent = `Brand : ${data?.brand}`
                model.textContent = `Model : ${data?.model}`
                price.textContent = `Price : ${data?.price}`
    
                laptopDiv.classList.add('laptop-div')
                image.classList.add('img-fluid')
    
                laptopDiv.appendChild(image)
                laptopDiv.appendChild(brand)
                laptopDiv.appendChild(model)
                laptopDiv.appendChild(price)
    
                laptopContainer.appendChild(laptopDiv)
    
            })
        }
        
    }).catch(err => console.log(err))
}