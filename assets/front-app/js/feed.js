"use strict";
/* MAIN */

/* ---------------- Modal Feed ---------------- */
const SettingsFeed = document.querySelectorAll('.edit i.fa-ellipsis'),
    li = document.querySelectorAll('.edit .modal-settings-feed')

SettingsFeed.forEach((elemento) => {
  elemento.addEventListener('click', (event) => {
    // Oculta todos os elementos
    li.forEach((e) => {
      e.style.display = 'none';
    });

    // Exibe somente o elemento clicado
    const elementoClicado = event.currentTarget;
    elementoClicado.classList.add('active'); // ou 'flex', dependendo do elemento

    if(elementoClicado.classList.contains('active')) {
        li.forEach((el) => {
            el.style.display = 'block'
        });
    }else {

    }
  });
});





/* ==========  SEARCH MESSAGE ============= */
function searchMessages() {
    document.querySelector('.search-messages input[type="search"]').addEventListener('keyup', (e) => {
        let textImput = e.target.value
    console.log(
        textImput =  textImput.toLowerCase())
    
        let messageItem = document.querySelectorAll('.message .message-body h4'),
        messageBox = document.querySelectorAll('.message')
    
        for (let i = 0; i < messageItem.length; i++) {
            if(!messageItem[i].innerHTML.toLowerCase().includes(textImput)) {
                messageBox[i].style.display="none"
            }else {
                messageBox[i].style.display="flex"
            }              
        }
    
    })
}

searchMessages()


/* ======== FAST MESSAGE ========= */
const FastMessage = document.querySelector('.fastMessage input[type="text"]')
const message = document.querySelectorAll('.message')
const spaceVaco = document.querySelector('.selectFastMassage')

message.forEach(msg => {
    msg.addEventListener('click', ()=> {


    spaceVaco.insertAdjacentHTML('beforeend', elementMesssage)

    })
})
