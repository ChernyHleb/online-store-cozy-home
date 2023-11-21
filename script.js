let products = {
    data : [
        {
            product_name: "Hamedorea",
            category: "houseplant",
            type:"ornamental_leaf_plant",
            price: "9",
            image: "img/flowers/large_Без_имени-1.jpg",
            manufacturer_country: "India"
        },
        {
            product_name: "Dracaena",
            category: "houseplant",
            type: "ornamental_leaf_plant",
            price: "14",
            image: "img/flowers/large_Без_имени-2.jpg",
            manufacturer_country: "India"
        },
        {
            product_name: "Epipremnum",
            category: "houseplant",
            type: "ornamental_leaf_plant",
            price: "7",
            image: "img/flowers/large_Без_имени-3.jpg",
            manufacturer_country: "India"
        },
        {
            product_name: "Zamioculcas",
            category: "houseplant",
            type: "perennial_plant",
            price: "16",
            image: "img/flowers/large_Без_имени-4.jpg",
            manufacturer_country: "Netherlands"
        },
        {
            product_name: "Nolina",
            category: "houseplant",
            type: "perennial_plant",
            price: "9",
            image: "img/flowers/large_Без_имени-5.jpg",
            manufacturer_country: "Netherlands"
        },
        {
            product_name: "Spatifillum",
            category: "houseplant",
            type: "flowering_plant",
            price: "15",
            image: "img/flowers/large_Без_имени-6.jpg",
            manufacturer_country: "China"
        },
        {
            product_name: "Yucca palm",
            category: "houseplant",
            type: "ornamental_leaf_plant",
            price: "10",
            image: "img/flowers/large_Без_имени-7.jpg",
            manufacturer_country: "China"
        },
        {
            product_name: "Ficus Ali",
            category: "houseplant",
            type: "ornamental_leaf_plant",
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
        if((plant_type.value === item.type || plant_type.value === "all") &&
           (manufacturer_country.value === item.manufacturer_country || manufacturer_country.value === "all")) {
            createProductHTML(item);
        }
    }
}

function createProductHTML(item){
    let product = document.createElement("div");
        product.classList.add("product", item.category);

        let image = document.createElement("img");
        image.classList.add("product_image")
        image.setAttribute("src", item.image);
        product.appendChild(image);

        let description = document.createElement("div");
        description.classList.add("product_description");

        let span = document.createElement("span");
        span.innerHTML = item.product_name;
        description.appendChild(span);

        let h = document.createElement("h3");
        h.innerHTML = "$" + item.price;
        description.appendChild(h);

        product.appendChild(description);

        document.getElementById("products").appendChild(product);
}