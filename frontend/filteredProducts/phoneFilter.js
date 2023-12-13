const searchPhone = (findPhone) => {
    console.log(findPhone)

    // const heading = document.getElementById('heading')
    // const mobileFeild = document.getElementById('mobileFeild')
    const container = document.getElementById('mobile')

    // heading.innerHTML = "Search Result"
    // heading.style.display = 'block'
    // mobileFeild.style.display = 'block'
    // container.style.display = 'flex'

    container.replaceChildren();

    fetch(`http://localhost:3000/searchphone?model=${findPhone}`)
        .then((data) => data.json())
        .then((data) => {

            if (data.length === 0) {
                const noProduct = document.createElement('h2');
                noProduct.textContent = `No phones found related to ${findPhone} `
                container.appendChild(noProduct)
            }
            else {
                data.map(data => {
                    const mobileDiv = document.createElement('div');
                    mobileDiv.classList.add('mobile-div');

                    // image --------->
                    const image = document.createElement('img');
                    image.classList.add('img-fluid')
                    image.src = data?.img;
                    mobileDiv.appendChild(image);

                    // Brand & Model ------>
                    const brandParagraph = document.createElement('h3');
                    brandParagraph.classList.add('text-white')
                    brandParagraph.textContent = `Brand: ${data?.brand} Model: ${data?.model}`;
                    mobileDiv.appendChild(brandParagraph);

                    //  price ---->
                    const price = document.createElement('p');
                    price.textContent = `Price : ${data?.price}`;
                    price.classList.add('text-white')
                    mobileDiv.appendChild(price);

                    // adding all data div to index.html div named container 
                    container.appendChild(mobileDiv)
                })
            }

        }).catch(err => console.log(err))
}