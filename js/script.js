const loadCategories = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url)
    const data = await res.json()
    displayCategories(data.data);
}

const categoryContainer = document.getElementById('categories');
const displayCategories = (data) =>{
    const newsArray = data.news_category;
    newsArray.forEach(category => {
        const categoryName = category.category_name;
        const categoryId = category.category_id;
        const newButton = document.createElement('button');
        newButton.innerHTML=`
        <p>${categoryName}</p>
        <p class='hidden'>${categoryId}</p>
        `;
        newButton.classList.add('btn','btn-ghost','normal-case','text-lg','px-3','xl:px-7','block','mx-auto','md:inline')
        categoryContainer.appendChild(newButton)

        newButton.addEventListener('click', function(){
            loadNews(categoryId, categoryName);
        })
    });
}

const loadNews = async(categoryId, categoryName) =>{
    try{
        const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`;
    const res = await fetch(url)
    const data = await res.json()
    displayNews(data.data, categoryName);
    }
    catch (error) {
        console.log(error)
    }
}


const newsSection = document.getElementById('news');
const newsCount = document.getElementById('items-count');
const choosedCategory = document.getElementById('choosed-category');
const displayNews = (data, categoryName) =>{
    console.log(data);
    newsSection.innerHTML='';
    if(data.length > 0){
        newsCount.innerText = `${data.length}`;
        choosedCategory.innerText = `${categoryName}`;
        data.forEach(news => {
            const newCard = document.createElement('div');
            console.log(news)
            newCard.innerHTML = `
            <div class="card lg:card-side bg-base-100 shadow-xl my-2">
                    <figure><img class='w-96 h-72 p-4' src="${news.image_url}" alt="Album"></figure>
                    <div class="card-body">
                      <h2 class="card-title">${news.title}</h2>
                      <p>${news.details.slice(0,500)}...</p>
                      <div class="card-actions justify-around items-center">
                        <div class='flex items-center'>
                            <div>
                                <img class='w-10 rounded-full pr-2' src='${news.author.img ? news.author.img : 'No Image'}'>
                            </div>
                            <div>
                                <p>${news.author.name ? news.author.name : 'No Author'}</p>
                                <p>${news.author.published_date}</p></div>
                        </div>
                        <div class='flex items-center'>
                                <p><i class="fa-regular fa-eye pr-2"></i></p>
                                <p>${news.total_view ? news.total_view : 'Not Viewed'}</p></div>
                            <div>
                                <button id='btn-details' class="btn btn-ghost font-bold">Details</button>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
            `;
    
            newsSection.appendChild(newCard);
        });
    }
    else{
        newsCount.innerText='No';   
    }
}


// const detailsButton = document.getElementById('btn-details');
// detailsButton.addEventListener('click', function(){
//     console.log(this)
// })

loadCategories();