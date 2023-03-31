const faceSmile = document.getElementById('face-smile')
const EmojiItem = document.querySelectorAll('.fa-menu')

faceSmile.addEventListener('click', ()=> {
    let Emojimodal = document.querySelector('.modal-emoji')
    if(Emojimodal.classList.contains('active')) {
        Emojimodal.style.display = 'none'
        Emojimodal.classList.remove('active')
    }else {
        Emojimodal.style.display = 'block'
        Emojimodal.classList.add('active')
    }
})









/* Sidebar variable */
const menuItems = document.querySelectorAll('.menu-item'),
    menuThree = document.querySelector('.right .icon-svg')
    


menuThree.addEventListener('click', ()=> {
    let sidebarMsg = document.querySelector('.right .sidebar')
    if(sidebarMsg.classList.contains('active')) {
        sidebarMsg.style.display = 'none'
        sidebarMsg.classList.remove('active')
    }else {
        sidebarMsg.style.display = 'block'
        sidebarMsg.classList.add('active')
    }
})


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
    })
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


/* Real time div.right*/

const divRight = document.querySelector('.right')

window.addEventListener('load', ()=> {
    setInterval( ()=> {

    },700)
            
})





