function openModal(){
    const modal = document.querySelector('.modal')
    modal.style.display = 'flex'
}

function closeModal(event){
    const modal = document.querySelector('.modal')

    if(event === undefined)
        return modal.style.display = 'none'

    if(event.target.className === 'modal')
        return modal.style.display = 'none'
}

function handleSubmitAddTicker(event){
    //previne o comportamento padrão de recarregar a página ou enviar para algum endereço (action)
    event.preventDefault()
    console.log(event.target.urlLogo.value)
    console.log(event.target.nameCompany.value)
    console.log(event.target.ticker.value)
    console.log(event.target.quantity.value)
    console.log(event.target.closedValue.value)
}