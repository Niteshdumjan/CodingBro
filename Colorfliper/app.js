const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];

const btn = document.getElementById('btn')
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    // get random number between 0-3 colors[1]
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    color.innerText = colors[randomNumber]
    color.style.color = colors[randomNumber]
})

// funtion to generate random colors

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}