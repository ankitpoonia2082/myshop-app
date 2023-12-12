
// function for getting all phone data on click of mobile buttion
const getMobiles = () => {
    let phones;
    const container = document.querySelector('.mobile');
    fetch(`http://localhost:3000/getphone`)
        .then((data) => data.json())
        .then(data => {
            data.map(data => {
                // Creating a div ------>
                const mobileDiv = document.createElement('div');
                // adding class to div ---->
                mobileDiv.classList.add('mobile-div');
                // creating Element image------>
                const image = document.createElement('img');
                // adding styling to img element ---->
                image.style.width = '290px'
                image.classList.add('img-fluid')
                // giving Sorce to image to display
                image.src = data?.img;
                // appending image to mobileDiv------>
                mobileDiv.appendChild(image);
                // creating a h3 to display brand Name--->
                const brandParagraph = document.createElement('h3');
                // giving brand H3 a class and making text white --->
                brandParagraph.classList.add('text-white')
                // giving brand h3 data brandName and modelName ---->
                brandParagraph.textContent = `Brand: ${data?.brand} Model: ${data?.model}`;
                // appending Brand h3 to mobileDiv------>
                mobileDiv.appendChild(brandParagraph);
                // creating a p element for price ---->
                const price = document.createElement('p');
                price.textContent = `Price : ${data?.price}`;
                price.classList.add('text-white')
                // appending price p to mobileDiv------>
                mobileDiv.appendChild(price);

                // adding all data div to index.html div named container 
                container.appendChild(mobileDiv)
            })
        })
        .catch(err => console.log(err))
}