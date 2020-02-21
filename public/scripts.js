const cards = document.querySelectorAll('.card')

for (let card of cards){
    card.addEventListener("click", function(){
        const recipeIndex = card.getAttribute("id");
    window.location.href = `/recipe/${recipeIndex}`;
    })
}


