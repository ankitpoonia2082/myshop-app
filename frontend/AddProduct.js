// Getting display properties of all add product form
let phone_display = document.getElementById('add-phone')
let laptop_display = document.getElementById('add-laptop')
let tablet_display = document.getElementById('add-tablet')
let headphone_display = document.getElementById('add-headphone')

// Function for selecting which product we want to add
const SelecteCategory = () => {
    let selected = document.getElementById('catagory').value;
    console.log("🚀 ~ file: AddProduct.js:13 ~ SelecteCategory ~ selected:", selected)

    if (selected === '1') {
        phone_display.style = 'display : block'
        laptop_display.style = 'display : none'
        tablet_display.style = 'display : none'
        headphone_display.style = 'display : none'
    }
    else if (selected === '2') {
        tablet_display.style = 'display : block'
        phone_display.style = 'display : none'
        laptop_display.style = 'display : none'
        headphone_display.style = 'display : none'
    }
    else if (selected === '3') {
        laptop_display.style = 'display : block'
        phone_display.style = 'display : none'
        tablet_display.style = 'display : none'
        headphone_display.style = 'display : none'
    }
    else if (selected === '4') {
        headphone_display.style = 'display : block'
        phone_display.style = 'display : none'
        laptop_display.style = 'display : none'
        tablet_display.style = 'display : none'
    }
}
// Adding event on  Phone form---->
document.getElementById("phoneForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default form submission
    uploadPhone(); // Called function here
});
// Adding event on  tablets form------>
document.getElementById('tabForm').addEventListener('submit', function (event) {
    event.preventDefault();
    uploadTab();
})
// Adding event on  laptop form------>
document.getElementById('laptopForm').addEventListener('submit', function (event) {
    event.preventDefault();
    uploadLaptop();
})
// Adding event on  headphone form------>
document.getElementById('headphoneForm').addEventListener('submit', function (event) {
    event.preventDefault();
    uploadHeadphone();
})
// Sending Phone form data to api
const uploadPhone = () => {
    let phone_brand = document.getElementById('phoneBrand').value;
    let phone_color = document.getElementById('phoneColor').value;
    let phone_model = document.getElementById('phoneModel').value;
    let phone_ram = document.getElementById('phoneRam').value;
    let phone_storage = document.getElementById('phoneStorage').value;
    let phone_price = document.getElementById('phonePrice').value;
    let phone_image = document.getElementById('phoneImage').files[0];

    if (phone_image) {
        var reader = new FileReader()
        reader.onload = function (e) {
            var base64Image = e.target.result;
            const data = {
                brand: phone_brand,
                color: phone_color,
                model: phone_model,
                ram: phone_ram,
                storage: phone_storage,
                price: phone_price,
                img: base64Image,
            };
            fetch('http://localhost:3000/insertdata/phone', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }).then((result) => result.json())
                .then(result => alert(result.msg))
                .catch(err => alert(err));
        };
        reader.readAsDataURL(phone_image);
    }
}
// Sending Tablet form data to api
const uploadTab = () => {
    let tab_brand = document.getElementById('tabletBrand').value;
    let tab_size = document.getElementById('tabletSize').value;
    let tab_model = document.getElementById('tabletModel').value;
    let tab_ram = document.getElementById('tabletRam').value;
    let tab_storage = document.getElementById('tabletStorage').value;
    let tab_processer = document.getElementById('tabletProcesser').value;
    let tab_price = document.getElementById('tabletPrice').value;

    let tab_image = document.getElementById('tabletImage').files[0];
    if (tab_image) {
        var reader = new FileReader()
        reader.onload = function (e) {
            var base64Image = e.target.result;

            const data = {
                brand: tab_brand,
                screenSize: tab_size,
                model: tab_model,
                ram: tab_ram,
                storage: tab_storage,
                processer: tab_processer,
                price: tab_price,
                img: base64Image,
            };

            fetch(`http://localhost:3000/insertdata/tab`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }).then((result) => result.json())
                .then(result => alert(result.msg))
                .catch(err => alert(err))
        };
        reader.readAsDataURL(tab_image);
    }
}
// Sending Laptop form data to api
const uploadLaptop = () => {
    let laptop_brand = document.getElementById('laptopBrand').value;
    let laptop_size = document.getElementById('laptopSize').value;
    let laptop_model = document.getElementById('laptopModel').value;
    let laptop_ram = document.getElementById('laptopRam').value;
    let laptop_storage = document.getElementById('laptopStorage').value;
    let laptop_processer = document.getElementById('laptopProcesser').value;
    let laptop_price = document.getElementById('laptopPrice').value;
    let laptop_image = document.getElementById('laptopImage').files[0];

    if (laptop_image) {
        var reader = new FileReader()
        reader.onload = function (e) {
            var base64Image = e.target.result;

            const data = {
                brand: laptop_brand,
                screenSize: laptop_size,
                model: laptop_model,
                ram: laptop_ram,
                storage: laptop_storage,
                processer: laptop_processer,
                price: laptop_price,
                img: base64Image,
            };

            fetch(`http://localhost:3000/insertdata/laptop`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }).then((result) => result.json())
                .then(result => alert(result.msg))
                .catch(err => alert(err))
        }
        reader.readAsDataURL(laptop_image);
    }
}
// Sending headphone form data to api
const uploadHeadphone = () => {
    let headphone_brand = document.getElementById('headphoneBrand').value;
    let headphone_driver = document.getElementById('headphoneDriver').value;
    let headphone_model = document.getElementById('headphoneModel').value;
    let headphone_type = document.getElementById('headphoneType').value;
    let headphone_battery = document.getElementById('headphoneBattery').value;
    let headphone_price = document.getElementById('headphonePrice').value;
    let headphone_image = document.getElementById('headphoneImage').files[0];

    if (headphone_image) {
        var reader = new FileReader()
        reader.onload = function (e) {
            var base64Image = e.target.result;

            const data = {
                brand: headphone_brand,
                driverSize: headphone_driver,
                model: headphone_model,
                type: headphone_type,
                batteryLife: headphone_battery,
                price: headphone_price,
                img: base64Image,
            };

            fetch(`http://localhost:3000/insertdata/headphone`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then((result) => result.json())
                .then(result => alert(result.msg))
                .catch(err => alert(err))
        }
        reader.readAsDataURL(headphone_image);
    }
}