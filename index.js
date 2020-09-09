
let generatorButton = document.getElementById('button');


generatorButton.addEventListener('click',function()
{
  let randomNumber = Math.floor(Math.random() * 9);
  document.getElementById("countdown").textContent = randomNumber;
}
)
