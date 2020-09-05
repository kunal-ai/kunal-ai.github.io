
let generatorButton = document.getElementById('button');
let nextButton = document.getElementById('next');



generatorButton.addEventListener('click',function()
{
  let randomNumber = Math.floor(Math.random() * 9);
  document.getElementById("countdown").textContent = randomNumber;
}
)

nextButton.addEventListener('click',function(){
  window.location.href='index.html',true
}
)
