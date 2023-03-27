const barXmark = document.querySelector('.container .create i'),
      sidebar = document.getElementById('container-sidebar');

barXmark.addEventListener('click', ()=> {
    if(barXmark.classList.contains("fa-bars")) {
        barXmark.classList.remove('fa-bars')
        barXmark.classList.add('fa-xmark')
        sidebar.classList.remove('close')
        sidebar.classList.add('open')
        

    }else {
        barXmark.classList.remove('fa-xmark')
        barXmark.classList.add('fa-bars')
        sidebar.classList.remove('open')
        sidebar.classList.add('close')
    }
})
