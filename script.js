
window.addEventListener('DOMContentLoaded', () => {
    const h2 = document.querySelector("h2");
    const update = document.querySelector("button");
    chuck();
    update.addEventListener("click", chuck);

    function chuck (){
        fetch("https://api.chucknorris.io/jokes/random")
        .then(res => res.json())
        .then(data => h2.textContent = data.value);
    }
})

