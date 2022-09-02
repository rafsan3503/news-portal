const loadCatagories = () => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res => res.json())
        .then(data => setMenu(data.data.news_category))
        .catch(err => console.log(err));
}


const setMenu = menus => {
    const menuContainer = document.getElementById('menu-container');
    console.log(menus)
    menus.forEach(menu => {
        const li = document.getElementById('li');
        li.setAttribute('onclick', 'getId(menu.category_id)');
        li.innerText = menu.category_name;
    });
}
loadCatagories()
setMenu();

