/* ======= SIDEBAR ====== */
const sidebarItem = document.querySelectorAll('.sidebar .sidebar-item')

const changeActiveItemSide = ()=> {
    sidebarItem.forEach(item => {
            item.classList.remove('active')
    })
}

sidebarItem.forEach(item => {
    item.addEventListener('click', ()=> {
        changeActiveItemSide() //chamada da função que irá remover a class 'active' da sidebar  
        item.classList.add('active')
        if(item.id != 'plus') {
            document.querySelector('#plus').style.color = '#fff';
        } else{
            document.querySelector('#plus').style.display = '#fff';
        }

        if(item.id == 'userProfile') {
            window.location.replace('perfil.html')
        } else{
           
        }
    })
})


/* ============== MessageItem ============= */
const messageItem = document.querySelectorAll('main .chat-group')

const changeActiveItemMessage = ()=> {
    messageItem.forEach(itemMessa => {
        itemMessa.classList.remove('active')
    })
}

messageItem.forEach(itemMessa => {
    itemMessa.addEventListener('click', ()=> {
        changeActiveItemMessage()
        itemMessa.classList.add('active')
        
        /* if(itemMessa.class != 'active') {
            document.querySelector('.message-count.active').style.display = 'none';
        } else{
            document.querySelector('.message-count.active').style.display = 'flex';
        } */

        window.location.replace('chat.html')
        
    })
})