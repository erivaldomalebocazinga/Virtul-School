"use strict";
/* ==========  SEARCH MESSAGE ============= */
function searchMessages() {
    document.querySelector('.search-messages input#search-conversa-chat').addEventListener('keyup', (e) => {
        let textImput = e.target.value
    console.log(
        textImput =  textImput.toLowerCase())
    
        let messageItem = document.querySelectorAll('.message-grup h4'),
        messageBox = document.querySelectorAll('.message-grup')
        console.log(messageBox)
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