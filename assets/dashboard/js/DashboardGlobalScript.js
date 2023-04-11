"use strict";

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
        if(item.id != 'messages') {
            /* document.querySelector('.notifications-popup').style.display = 'none'; */
        } else{
           /*  document.querySelector('.notifications-popup').style.display = 'block'; */
            document.querySelector('.notification-count').style.display = 'none'; //irá remover o contador de notificações
        }
    })
})

/* ======== Link da photo de perfil com o perfil ======= */
const urlProfile = document.querySelector('.profile-photo.urlProfile').addEventListener('click', ()=> {
    location.replace('../perfil.html')
})


//Filtro da lista de alunos do dashboard
//Variaveis do filtro:
const filtroCurso = document.getElementById('select-filtroCurso'),
    modalFiltroCurso = document.getElementById('modal-filtro-curso'),
    filtroClasse = document.getElementById('select-filtroClasse'),
    modalFiltroClasse = document.getElementById('modal-filtro-class');
//Funções de aprecimento e desaparecimento do modal-filtro
filtroCurso.addEventListener('click', (e)=> {
    filtroCurso.classList.toggle('active')
})
