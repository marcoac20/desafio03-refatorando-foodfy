const cards = document.querySelectorAll('.card')

for (let card of cards){
    card.addEventListener("click", function(){
        const recipeIndex = card.getAttribute("id");
    window.location.href = `/recipe/${recipeIndex}`;
    })
}

const buttons = document.getElementsByClassName('button')

for(let button of buttons){
    const buttonSpan = button.querySelector('span')

    buttonSpan.addEventListener('click', function(){
        if(buttonSpan.innerHTML == "ESCONDER"){
            button.querySelector('.button-content').classList.add('hidden')
            buttonSpan.innerHTML = "MOSTRAR"
        }else {
            button.querySelector('.button-content').classList.remove('hidden');
            buttonSpan.innerHTML = "ESCONDER"
        }
    })
}
