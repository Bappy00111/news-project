const feathCatagores = () =>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => catagoresDisplay(data.data.news_category))
}

const catagoresDisplay = (datas) =>{
    const categoreContainer = document.getElementById('catagore-container');
    datas.forEach(data => {
        console.log(data);
        // const div = document.createElement('div')
        // div.innerHTML = `
        // <a class="text-decoration-none" href="#">${data.category_name}</a>
        // `
        
        // categoreContainer.appendChild(div)

        categoreContainer.innerHTML += `<a class="text-decoration-none text-body-secondary" href="#">${data.category_name}</a>`
    });
    

}

// feathCatagores()