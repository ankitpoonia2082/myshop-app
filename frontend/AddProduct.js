
let phone_display = document.getElementById('add-phone')
let laptop_display = document.getElementById('add-laptop')
let tablet_display = document.getElementById('add-tablet')
let headphone_display = document.getElementById('add-headphone')


const SelecteCategory = () => {
    let selected = document.getElementById('catagory').value;

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

        let tablet_brand = document.getElementById('tabletImage').value;
        let tablet_size = document.getElementById('tabletSize').value;
        let tablet_model = document.getElementById('tabletModel').value;
        let tablet_ram = document.getElementById('tabletRam').value;
        let tablet_storage = document.getElementById('tabletStorage').value;
        let tablet_processer = document.getElementById('tabletProcesser').value;
        let tablet_image = document.getElementById('tabletImage').value;
        let tablet_price = document.getElementById('tabletPrice').value;
    }
    else if (selected === '3') {
        laptop_display.style = 'display : block'
        phone_display.style = 'display : none'
        tablet_display.style = 'display : none'
        headphone_display.style = 'display : none'

        let laptop_brand = document.getElementById('laptopImage').value;
        let laptop_size = document.getElementById('laptopSize').value;
        let laptop_model = document.getElementById('laptopModel').value;
        let laptop_ram = document.getElementById('laptopRam').value;
        let laptop_storage = document.getElementById('laptopStorage').value;
        let laptop_processer = document.getElementById('laptopProcesser').value;
        let laptop_image = document.getElementById('laptopImage').value;
        let laptop_price = document.getElementById('laptopPrice').value;
    }
    else if (selected === '4') {
        headphone_display.style = 'display : block'
        phone_display.style = 'display : none'
        laptop_display.style = 'display : none'
        tablet_display.style = 'display : none'

        let headphone_brand = document.getElementById('headphoneBrand').value;
        let headphone_driver = document.getElementById('headphoneDriver').value;
        let headphone_model = document.getElementById('headphoneModel').value;
        let headphone_type = document.getElementById('headphoneType').value;
        let headphone_battery = document.getElementById('headphoneBattery').value;
        let headphone_image = document.getElementById('headphonePrice').value;
        let headphone_price = document.getElementById('headphonePrice').value;
    }

}
document.getElementById("phoneForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission
    uploadPhone(); // Call your function here
});
const uploadPhone = () => {
    console.log("called")
    let phone_brand = document.getElementById('phoneBrand').value;
    let phone_color = document.getElementById('phoneColor').value;
    let phone_model = document.getElementById('phoneModel').value;
    let phone_ram = document.getElementById('phoneRam').value;
    let phone_storage = document.getElementById('phoneStorage').value;
    // let phone_image = document.getElementById('phoneImage').value;
    let phone_price = document.getElementById('phonePrice').value;
    
    fetch('http://localhost:3000/insertdata/phones',{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
            brand : phone_brand,
            color : phone_color,
            model : phone_model,
            ram : phone_ram,
            storage : phone_storage,
            price : phone_price
        })
    }).then((result)=> result.json())
    .then(result => alert(result.msg))
    .catch(err=> alert(err))
    

}