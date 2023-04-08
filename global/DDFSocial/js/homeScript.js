/* Sidebar variable */
const menuItems = document.querySelectorAll('.menu-item')

/* messeges variable */
const messegesNotificaton = document.querySelector('#messages-notification'),
    messeges = document.querySelector('.messages'),
    message = messeges.querySelectorAll('.message'), //para a pesquisa de messagens
    messageSearch = document.querySelector('#message-search') //para a pesquisa de mensagens

/* Theme variable */
const theme = document.querySelector('#theme'),
    themeModal = document.querySelector('.customize-theme'),
    fontSize = document.querySelectorAll('.choose-size span'),
    colorPalette = document.querySelectorAll('.choose-color span'),
    Bg1 = document.querySelector('.bg-1'),
    Bg2 = document.querySelector('.bg-2'),
    Bg3 = document.querySelector('.bg-3');
var root = document.querySelector(':root')





/* ==================== sidebar code ======================== */

/* remover a class active  */
const changeActiveItem = ()=> {
    menuItems.forEach(item => {
         item.classList.remove('active')
    })
}
menuItems.forEach(item => {
    item.addEventListener('click', ()=> {
        changeActiveItem() //chamada da função que irá remover a class 'active' da sidebar  
        item.classList.add('active')
        if(item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        } else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none'; //irá remover o contador de notificações
        }
    })

    item.addEventListener('toutch', ()=> {
        changeActiveItem() //chamada da função que irá remover a class 'active' da sidebar  
        item.classList.add('active')
        if(item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        } else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none'; //irá remover o contador de notificações
        }
    })
})

/* ==================== messeges code ======================== */

/* search messages */
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase()
    console.log(val)
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLocaleLowerCase()
        if(name.indexOf(val) != -1) {
            chat.style.display = 'flex'
        }else {
            chat.style.display = 'none'
        }
    })
}

messageSearch.addEventListener('keyup', searchMessage)

/* click in messages */
messegesNotificaton.addEventListener('click', ()=> {
    messeges.style.boxShadow = '0 0 1rem var(--color-primary)'
    messegesNotificaton.querySelector('.notification-count').style.display = 'none' //irá remover o contador de notificações das mensagens
    window.location.replace('mensagens.html')
    setTimeout(() => {//Sinal de alerta quando há click em mensagens (na sidebar), em forma de box-shadow
        messeges.style.boxShadow = 'none'
    }, 2000);
})

/* ==================== Theme code ======================== */
//activar o modal
const openThemeModal = ()=> {
    themeModal.style.display = 'grid'    
}

//close modal

const closeThemeModal = (e)=> {
    if(e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none'
    }
}

themeModal.addEventListener('click', closeThemeModal)

theme.addEventListener('click', openThemeModal)


//remove a classe 'active'
const changeActiveColorClass = ()=> {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active')
    })
}

//define primary color
colorPalette.forEach(color => {
    color.addEventListener('click', ()=> {
        let primary;
        changeActiveColorClass()

        if(color.classList.contains('color-1')){
            primaryHue = 46
        } else if(color.classList.contains('color-2')){
            primaryHue = 223
        } else if(color.classList.contains('color-3')){
            primaryHue = 352
        } else if(color.classList.contains('color-4')){
            primaryHue = 145
        } else if(color.classList.contains('color-5')){
            primaryHue = 202
        } 

        color.classList.add('active')

        root.style.setProperty('--color-primary-hue', primaryHue)
    })
})



/* theme background */

let darkColorLightness,
    lightColorLightness,
    whiteColorLightness;

function changeBG() {
    root.style.setProperty('--dark-color-lightness', darkColorLightness)
    root.style.setProperty('--light-color-lightness', lightColorLightness)
    root.style.setProperty('--white-color-lightness', whiteColorLightness)
}

Bg1.addEventListener('click', ()=> {
    primaryHue = 252
    darkColorLightness = '17%'
    whiteColorLightness = '100%'
    lightColorLightness = '95%'

    //add active class
    Bg1.classList.add('active');
    //remove active class from the others
    Bg2.classList.remove('active')
    Bg3.classList.remove('active')

    changeBG()
})


Bg2.addEventListener('click', ()=> {
    darkColorLightness = '95%'
    whiteColorLightness = '20%'
    lightColorLightness = '15%'

    //add active class
    Bg2.classList.add('active');
    //remove active class from the others
    Bg1.classList.remove('active')
    Bg3.classList.remove('active')

    
    changeBG()

})

Bg3.addEventListener('click', ()=> {
    darkColorLightness = '95%'
    whiteColorLightness = '4%'
    lightColorLightness = '0%'

    //add active class
    Bg3.classList.add('active');
    //remove active class from the others
    Bg1.classList.remove('active')
    Bg2.classList.remove('active')

    changeBG()
})

//end


/* links siddebar */





/* =============  MODE fixed ========= */
/*const changeThemeBtn = document.querySelector('#change-theme')

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark")
}

// Load light  ou dark mode
function loadTheme() {
    const darkmode = localStorage.getItem('dark')

    if(darkmode) {
        toggleDarkMode()
    }
}

loadTheme()

changeThemeBtn.addEventListener('change', function() {
    toggleDarkMode()

    //save ou remove dark mode

    localStorage.removeItem('dark')
    if(document.body.classList.contains('dark')) {
        localStorage.setItem('dark', 1)
    }
}); */