if(document.getElementById('send')){
    document.getElementById('send').addEventListener('click', function() {
        alert('Thank you, Your Message Was Sent')
    })
}

if(document.getElementById('submit')){
    document.getElementById('submit').addEventListener('click', function() {
        alert('Your mail was sent')
    })
}

// burger code 
let navi = document.getElementById('navigation');

let burgerBar = document.getElementById('burger-button'); 

burgerBar.addEventListener('click', function(){
    navi.classList.toggle('active')
})