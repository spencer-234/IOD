const container = document.querySelector(".row");
const categories = document.querySelectorAll('.sort');

                
const populateAll = async (item) => {
    container.textContent = "";
    let search =  item ? `http://localhost:8000/items/find/${item}` : `http://localhost:8000/items/`
    await fetch(search)
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

populateAll('');

categories.forEach(category => {
    category.addEventListener("click", () => {
        container.textContent = "";
        let search = category.textContent.toLowerCase();
        populateAll(search);
    })
})