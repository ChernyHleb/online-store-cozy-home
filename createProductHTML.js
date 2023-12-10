function createProductHTML(item){
    let product = document.createElement("div");
    product.classList.add("product", item.product_type);

    let image = document.createElement("img");
    image.classList.add("product_image")
    image.setAttribute("src", item.image);
    product.appendChild(image);

    let description = document.createElement("div");
    description.classList.add("product_description");

    let span = document.createElement("span");
    span.innerHTML = item.name;
    description.appendChild(span);

    let h = document.createElement("h3");
    h.innerHTML = "$" + item.price;
    description.appendChild(h);

    product.appendChild(description);

    product.setAttribute("name", item.name);
    image.setAttribute("name", item.name);
    span.setAttribute("name", item.name);
    h.setAttribute("name", item.name);
    description.setAttribute("name", item.name);

    product.onclick = (event) => {
        toggle_single_product_popup(event.target);
    };

    document.getElementById("products").appendChild(product);
}