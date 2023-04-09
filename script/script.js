const loadData = (searchInputValue) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputValue}`)
    .then(res => res.json())
    .then(data => displayData(data.meals))
}

let j = 6;
const showMore = () => {
    j = j + 6
    loadData('chicken')
}

const displayData = data => {
    const foodItems = document.getElementById('food-items')
    foodItems.innerHTML = ''
    for(let i = 1; i <= j; i++){
        const foodItemDiv = document.createElement('div')
        foodItemDiv.innerHTML = `
            <div class="items flex justify-center items-center border border-slate-200 rounded-t-lg">
                    <img class="w-60 h-96 object-cover rounded-t-lg" src="${data[i].strMealThumb}" alt="">
                    <div class="item-text pr-4 pl-4 h-full flex flex-col justify-center gap-4">
                        <h3 class="font-bold text-2xl">${data[i].strMeal}</h3>
                        <p class="text-justify">${data[i].strInstructions.slice(0, 100)}..........</p>
                        <a class="underline underline-offset-2 text-yellow-400" href="#">View Details</a>
                    </div>
                </div>
            `
            foodItems.appendChild(foodItemDiv)
    }
}

const searchMeal = () => {
    const searchInputValue = document.getElementById('search-input').value
    loadData(searchInputValue)
} 

loadData('chicken')