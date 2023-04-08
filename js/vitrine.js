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