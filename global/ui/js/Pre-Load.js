window.addEventListener('load', function() {
    document.querySelector('.pre-load').style.display = 'none'
    this.document.querySelector('title').innerHTML = 'carregando...'

    let countLoad = document.querySelector('#count-load')
    for (let i = 0; i <= 16; i++) {
        
        if(i == 0) {countLoad.innerHTML = `0%`}
        else if(i == 1) {countLoad.innerHTML = `5%`}
        else if(i == 2) {countLoad.innerHTML = `10%`}
        else if(i == 3) {countLoad.innerHTML = `15%`}
        else if(i == 4) {countLoad.innerHTML = `20%`} 
        else if(i == 5) {countLoad.innerHTML = `25%`}
        else if(i == 6) {countLoad.innerHTML = `30%`}
        else if(i == 7) {countLoad.innerHTML = `35%`}
        else if(i == 8) {countLoad.innerHTML = `40%`}
        else if(i == 9) {countLoad.innerHTML = `55%`} 
        else if(i == 10) {countLoad.innerHTML = `60%`} 
        else if(i == 11) {countLoad.innerHTML = `75%`}
        else if(i == 12) {countLoad.innerHTML = `80%`}
        else if(i == 13) {countLoad.innerHTML = `85%`}
        else if(i == 14) {countLoad.innerHTML = `90%`}
        else if(i == 15) {countLoad.innerHTML = `95%`} 
        else if(i == 16) {
            countLoad.innerHTML = `100%`
           
        }
        
        console.log(i)    
    }
});