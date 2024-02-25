const container = document.querySelector(".row");
const categories = document.querySelectorAll('.sort');

                
const populateAll = (items) => {
    container.textContent = "";
    fetch(`https://fakestoreapi.com/products${items}`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            json.forEach(item => {
                const template = document.querySelector("#itemTemplate").content.cloneNode(true); 
                template.querySelector('.card-title').textContent = item.title;
                template.querySelector('.card-text').textContent = item.description;
                template.querySelector('.price').textContent = `$${item.price}`;
                template.querySelector('img').src = item.image;
                container.appendChild(template);
            })
        })
}

populateAll("/");

categories.forEach(category => {
    category.addEventListener("click", () => {
        let search = `/category/${category.textContent.toLowerCase()}`;
        container.textContent = "";
        populateAll(search);
    })
})