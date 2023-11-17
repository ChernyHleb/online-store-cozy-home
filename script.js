let products = {
    data : [
        {
            product_name: "Hamedorea",
            category: "houseplant",
            price: "9",
            image: "img/flowers/large_Без_имени-1.jpg"
        },
        {
            product_name: "Dracaena",
            category: "houseplant",
            price: "14",
            image: "img/flowers/large_Без_имени-2.jpg"
        },
        {
            product_name: "Epipremnum",
            category: "houseplant",
            price: "7",
            image: "img/flowers/large_Без_имени-3.jpg"
        },
        {
            product_name: "Zamioculcas",
            category: "houseplant",
            price: "16",
            image: "img/flowers/large_Без_имени-4.jpg"
        },
        {
            product_name: "Nolina",
            category: "houseplant",
            price: "9",
            image: "img/flowers/large_Без_имени-5.jpg"
        },
        {
            product_name: "Spatifillum",
            category: "houseplant",
            price: "15",
            image: "img/flowers/large_Без_имени-6.jpg"
        },
        {
            product_name: "Yucca palm",
            category: "houseplant",
            price: "10",
            image: "img/flowers/large_Без_имени-7.jpg"
        },
        {
            product_name: "Ficus Ali",
            category: "houseplant",
            price: "8",
            image: "img/flowers/large_Без_имени-8.jpg"
        }
    ]
};

for (const item of products.data) {
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