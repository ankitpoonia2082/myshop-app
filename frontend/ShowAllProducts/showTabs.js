const getTabs = ()=>{
    const tabContainer = document.getElementById('tabs')
    const container = document.getElementById('mobile')
    const laptops = document.getElementById('laptops')
    const headphones = document.getElementById('headphones')

    tabContainer.style.display = 'flex'
    container.style.display = 'none'
    laptops.style.display = 'none'
    headphones.style.display = 'none'

    const heading = document.getElementById('heading')    
    heading.style.display = 'block'
    heading.textContent = "TABLETS"
    
    tabContainer.replaceChildren();

    fetch(`http://localhost:3000/gettab`)
    .then((data)=> data.json())
    .then((data)=>{
        if(data.length === 0){ 
            const noProduct = document.createElement('h2');
            noProduct.textContent = "No laptops avalable currently"
            noProduct.classList.add("text-white")
            laptopContainer.appendChild(noProduct)
        }
        else{
            data.map(data =>{
                const tabDiv = document.createElement('div');
                const image = document.createElement('img');
                const brand = document.createElement('h2');
                const model = document.createElement('h4');
                const price = document.createElement('p');
    
                image.src = data?.img;
                brand.textContent = `Brand : ${data?.brand}`;
                model.textContent = `Model : ${data?.model}`;
                price.textContent = `Price : ${data?.price}`;
    
                image.classList.add('img-fluid')
                tabDiv.classList.add('tab-div');
    
                tabDiv.appendChild(image)
                tabDiv.appendChild(brand)
                tabDiv.appendChild(model)
                tabDiv.appendChild(price)
                tabContainer.appendChild(tabDiv)
            })
        }
        
    }).catch(err => console.log(err))
}