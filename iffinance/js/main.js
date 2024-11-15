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

function AddTicker(event){
    //previne o comportamento padrão de recarregar a página ou enviar para algum endereço (action)
    // ▼
    event.preventDefault()

    const cardList = document.querySelector('#card-list')

    // event.target (form)
    const urlLogo = event.target.urlLogo.value
    const nameCompany = event.target.nameCompany.value
    const ticker = event.target.ticker.value
    const quantity = event.target.quantity.value
    const closedValue = event.target.closedValue.value

    cardList.innerHTML += `
                    <div class="card-ticker">
                        <header>
                            <img src="${urlLogo}" alt="Logo">
                            <h4>${nameCompany}</h4>
                            <span>${ticker}</span>
                        </header>
                        <main>
                            <p>Valor: <span style="color: #1ebd1e">${closedValue} <span>▲</span></span></p>
                        </main>
                        <footer>
                            <p>Quantidade: <span>${quantity}</span></p>
                            <p>Posição: <span>R$ ${+quantity * +closedValue}</span></p>
                        </footer>
                    </div>
                `
    closeModal()
    event.target.reset()
}

