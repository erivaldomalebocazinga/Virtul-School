/* ==================== sidebar code ======================== */
const SidebarItems = document.querySelectorAll('.sidebar-items')

/* remover a class active  */
const changeActiveItem = ()=> {
    SidebarItems.forEach(item => {
         item.classList.remove('active')
    })
}
SidebarItems.forEach(item => {
    item.addEventListener('click', ()=> {
        changeActiveItem() //chamada da função que irá remover a class 'active' da sidebar  
        item.classList.add('active')
        if(item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        } else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('.notification-count').style.display = 'none'; //irá remover o contador de notificações
        }
    })
})



const fileInput = document.getElementById("mideaPost"),
span = document.querySelector('.modal-create-post form span'),
i = document.querySelector('.modal-create-post form i.fa-circle-check')

i.style.transition = '700ms'
i.style.display = 'none'
i.style.color = '#51fb51'
i.style.fontSize = '0.8rem'

fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
      //console.log("Um arquivo foi selecionado:", fileInput.files[0].name);
        
        i.style.display = 'block'
        span.innerHTML = ''

        
        setInterval(() => {
            i.classList.add('fa-bounce')
        }, 700);
    } else {
      //console.log("Nenhum arquivo foi selecionado.");
        i.style.display = 'none'
        span.innerHTML = 'Imagens/Vídeos'
    }
});



const btnOpenPost = document.querySelector('.create-post'),
btnClosePost = document.querySelector('#btn-close-post'),
ModalPost = document.querySelector('.modal-create-post');

btnOpenPost.addEventListener('click', function() {
    ModalPost.style.display = 'flex'
});

btnClosePost.addEventListener('click', function() {
    ModalPost.style.display = 'none'
});
