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
        newButton.classList.add('btn','btn-ghost','normal-case','text-lg','2xl:px-7','block','mx-auto','md:inline')
        categoryContainer.appendChild(newButton);

        newButton.addEventListener('click', function(){
            toggleSpinner(true);
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
const notifySection = document.getElementById('notification');
const notify = document.getElementById('notify-message');
const displayNews = (data, categoryName) =>{
    newsSection.innerHTML='';
    notify.innerHTML=`
    <span id="items-count">4</span> News items found for category : <span id="choosed-category">Entertainment</span>
    `;
    const newsCount = document.getElementById('items-count');
    const choosedCategory = document.getElementById('choosed-category');
    newsCount.innerText = `${data.length}`;
    choosedCategory.innerText = `${categoryName}`;
    notifySection.classList.remove('pb-96');
    if(data.length > 0){
        // sorting the data on the basis of views
        const sortedData = data.sort((a, b) => {
            return b.total_view - a.total_view;
        });

        sortedData.forEach(news => {
            const newCard = document.createElement('div');
            newCard.innerHTML = `
            <div class="card lg:card-side bg-base-100 shadow-xl my-2">
                    <figure><img class='lg:w-96 lg:h-64 p-4' src="${news.image_url}" alt="Album"></figure>
                    <div class="card-body">
                      <h2 class="card-title">${news.title ? news.title : 'No Title Found'}</h2>
                      <p>${news.details ? news.details.slice(0,400) : 'No Details Found'}...</p>
                      <div class="card-actions justify-around items-center">
                        <div class='flex items-center'>
                            <div>
                                <img class='w-10 rounded-full pr-2' src='${news.author.img ? news.author.img : 'No Image'}'>
                            </div>
                            <div>
                                <p>${news.author.name ? news.author.name : 'No Author Name'}</p>
                                <p class='pr-4 sm:pr-0'>${news.author.published_date ? news.author.published_date : 'No Date Record'}</p>
                            </div>
                        </div>
                        <div class='flex items-center'>
                                <p><i class="fa-regular fa-eye pr-2"></i></p>
                                <p>${news.total_view ? news.total_view : 'Not Viewed'}</p>
                        </div>
                        <div>
                            <label onclick='loadFullNews("${news._id}")' for="my-modal-3" class="btn modal-button btn-ghost font-bold">Details ►</label>
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
    toggleSpinner(false);
}

const loadFullNews = async(newsId) =>{
    try{
        const url = `https://openapi.programming-hero.com/api/news/${newsId}`;
    const res = await fetch(url)
    const data = await res.json()
    displayFullNews(data);
    }
    catch (error) {
        console.log(error)
    }
}

const displayFullNews = (data) =>{
    toggleSpinner(true);
    const news = data.data[0];
    const modalDiv = document.getElementById('modal');
    modalDiv.innerHTML=`
    <div class="lg:max-w-screen-md xl:max-w-screen-xl max-h-full modal-box relative">
        <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <div class='mt-5'>
            <div class="card bg-base-100">
            <figure><img class='w-full' src="${news.image_url}" alt="news image" /></figure>
            <div class="card-body">
            <h2 class="card-title lg:text-3xl">${news.title ? news.title : 'No Title Found'}</h2>
            <p>${news.details ? news.details : 'No Details Found'}</p>
                    <div class="card-actions justify-around items-center pt-5">
                    <div class='flex items-center'>
                        <div>
                            <img class='w-20 rounded-full pr-2' src='${news.author.img ? news.author.img : 'No Image'}'>
                        </div>
                        <div class='pl-3'>
                            <p class='md:text-2xl'>Author: ${news.author.name ? news.author.name : 'No Author Name'}</p>
                            <p>Published on : ${news.author.published_date ? news.author.published_date : 'No Date Record'}</p>
                        </div>
                    </div>
                    <div class='flex items-center'>
                            <p><i class="fa-regular fa-eye pr-2"></i></p>
                            <p>Views : ${news.total_view ? news.total_view : 'Not Viewed'}</p>
                    </div>
                    </div>
            </div>
            </div>
        </div>
    </div>
    `;
    toggleSpinner(false);
}

const toggleSpinner = status => {
    const loaderSection = document.getElementById('spinner');
    if(status){
        loaderSection.classList.remove('hidden')
    }
    else{
        loaderSection.classList.add('hidden');
    }
}

function refresh(elementId){
    const button = document.getElementById(elementId);
    button.addEventListener('click', function(){
        window.location.reload();
    })   
}
refresh('site-name');
refresh('home');

loadCategories();