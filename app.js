const loadCatagories = () => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res => res.json())
        .then(data => setMenu(data.data.news_category))
        .catch(err => console.log(err));
}

const setMenu = menus => {
    const menuContainer = document.getElementById('menu-container');
    menus.forEach(menu => {
        console.log(menu)
        const div = document.createElement('div');
        div.innerHTML = `
        <li onclick="getId('${menu.category_id}')" class='bg-violet-300 p-2 rounded-lg cursor-pointer'>${menu.category_name}</li>
        `
        menuContainer.appendChild(div)
    });
}


const getId = Id => {
    toggle(true);
    const url = `https://openapi.programming-hero.com/api/news/category/${Id}`;
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => disPlayNews(data.data))

}


const disPlayNews = allNews => {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerText = '';


    allNews.forEach(news => {
        console.log(news);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card card-side bg-base-100 shadow-xl mb-5">
            <div class='w-1/3'>
            <figure><img class='w-full' src="${news.thumbnail_url}" alt="Movie"></figure></div>
            <div class="card-body w-2/3">
                <h2 class="card-title">${news.title}</h2>
                <p>${news.details.slice(0,200)}</p>
                <div class="card-actions flex justify-around">
                    <div class="flex gap-5">
                        <img class="w-8 rounded-md" src="${news.author.img}" alt="">
                        <div>
                            <p>${news.author.name}</p>
                            <p>${news.author.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <div><i class="fa-solid fa-eye"></i></div>
                        <p>${news.total_view}</p>
                    </div>
                    <button class="btn btn-primary"><i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
        `;
        newsContainer.appendChild(div);
    });
    toggle(false)
}


const toggle = isTrue => {
    const spinner = document.getElementById('spinner');
    if (isTrue === true) {
        spinner.classList.remove('hidded');
    }
    else {
        spinner.classList.add('hidden')
    }
}
loadCatagories()
// setMenu();

