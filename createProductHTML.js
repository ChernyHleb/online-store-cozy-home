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