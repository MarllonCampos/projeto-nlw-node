document.querySelector("#start_chat").addEventListener("click", (event) => {
    
    const email = document.getElementById('email').value
    const text = document.getElementById('txt_help').value

    if (email == "" || text == '') {
        return console.log('erro')
    }

    const chat_help = document.getElementById('chat_help');
    chat_help.style.display = 'none'
    
    
    const chat_in_support = document.getElementById('chat_in_support');
    chat_in_support.style.display = 'block'
    
    const socket = io()

    socket.on('connect', () => {
        params = {
            email,
            text
        }
        socket.emit('client_first_access', params, (call,err) => {

            if (err) return console.log(err)

            return call

        })
    }) 



    console.log(event.target)

});
