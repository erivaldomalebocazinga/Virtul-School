const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});


function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});




//----
 /* validação fixa */
 let form = document.getElementById('form-login')
 let msgAlert = document.getElementById('msg')

 form.addEventListener('submit', (e)=> {
     e.preventDefault()

     logar()
 })

 function logar() {
     
     let senhaPadrao;
     let inputUser = document.getElementById('user').value,
     inputSenha = document.getElementById('senha').value;

     
     if(inputUser == 'admin') {
         senhaPadrao = '1234'
         function PgDeshboard() {
             window.location.replace('assets/dashboard/dashboard-alunos.html')
         }
         
         if(inputSenha == senhaPadrao) {
             msgAlert.classList.add('true')
             msgAlert.innerHTML = 'Login do Admin Bem sucedido'
             PgDeshboard()
         } else if(inputSenha != senhaPadrao){
             msgAlert.classList.remove('true')
             msgAlert.classList.add('error')
             msgAlert.innerHTML = 'Senha de admin incorreta'
         }
         
     }else if(inputUser == 'aluno') {
         senhaPadrao = '4321'
         function PgFeedAluno() {
             window.location.replace('assets/front-app/feed.html')
         }
         
         if(inputSenha == senhaPadrao) {
             msgAlert.classList.add('true')
             msgAlert.innerHTML = 'Login do aluno Bem sucedido'
             PgFeedAluno()
         } else if(inputSenha != senhaPadrao){
             msgAlert.classList.remove('true')
             msgAlert.classList.add('error')
             msgAlert.innerHTML = 'Senha incorreta'
         } 
     } else if(inputUser == 'prof') {
         senhaPadrao = '1324'
         function PgFeedProf() {
             window.location.replace('feed.html')
         }
         
         if(inputSenha == senhaPadrao) {
             msgAlert.classList.add('true')
             msgAlert.innerHTML = 'Login do prof Bem sucedido'
             PgFeedProf()
         } else if(inputSenha != senhaPadrao){
             msgAlert.classList.remove('true')
             msgAlert.classList.add('error')
             msgAlert.innerHTML = 'Senha incorreta'
         } 
     } else {
             msgAlert.classList.remove('true')
             msgAlert.classList.add('error')
             msgAlert.innerHTML = 'Credenciais de aluno invalidas'
         }

 }