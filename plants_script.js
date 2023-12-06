let products = {
    data : [
        {
            name: "Hamedorea",
            product_type: "houseplant",
            plant_type:"ornamental_leaf_plant",
            price: "9",
            image: "img/flowers/large_Без_имени-1.jpg",
            manufacturer_country: "India"
        },
        {
            name: "Dracaena",
            product_type: "houseplant",
            plant_type: "ornamental_leaf_plant",
            price: "14",
            image: "img/flowers/large_Без_имени-2.jpg",
            manufacturer_country: "India"
        },
        {
            name: "Epipremnum",
            product_type: "houseplant",
            plant_type: "ornamental_leaf_plant",
            price: "7",
            image: "img/flowers/large_Без_имени-3.jpg",
            manufacturer_country: "India"
        },
        {
            name: "Zamioculcas",
            product_type: "houseplant",
            plant_type: "perennial_plant",
            price: "16",
            image: "img/flowers/large_Без_имени-4.jpg",
            manufacturer_country: "Netherlands"
        },
        {
            name: "Nolina",
            product_type: "houseplant",
            plant_type: "perennial_plant",
            price: "9",
            image: "img/flowers/large_Без_имени-5.jpg",
            manufacturer_country: "Netherlands"
        },
        {
            name: "Spatifillum",
            product_type: "houseplant",
            plant_type: "flowering_plant",
            price: "15",
            image: "img/flowers/large_Без_имени-6.jpg",
            manufacturer_country: "China"
        },
        {
            name: "Yucca palm",
            product_type: "houseplant",
            plant_type: "ornamental_leaf_plant",
            price: "10",
            image: "img/flowers/large_Без_имени-7.jpg",
            manufacturer_country: "China"
        },
        {
            name: "Ficus Ali",
            product_type: "houseplant",
            plant_type: "ornamental_leaf_plant",
            price: "8",
            image: "img/flowers/large_Без_имени-8.jpg",
            manufacturer_country: "China"
        }
    ]
};

window.onload = () => { 
    for (const item of products.data) {
        createProductHTML(item);
    }
};

function filterChange() {
    let plant_type = document.getElementById("plant_type");
    let manufacturer_country = document.getElementById("manufacturer_country");

    document.getElementById("products").innerHTML= "";

    for (const item of products.data) {
        if((plant_type.value === item.plant_type || plant_type.value === "all") &&
           (manufacturer_country.value === item.manufacturer_country || manufacturer_country.value === "all")) {
            createProductHTML(item);
        }
    }
}

function search() {
    let search_content = document.getElementById("search_bar");
    document.getElementById("products").innerHTML= "";

    for (const item of products.data) {
        if(search_content.value === "") {
            createProductHTML(item);
            continue;
        }

        if(item.name.toLowerCase().includes(search_content.value.toLowerCase())) {
            createProductHTML(item);
        }
    }
}

