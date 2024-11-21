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

function addTicker(event){
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
                    <div class="card-ticker" onmouseenter="showCardOptions(event)" onmouseleave="hideCardOptions(event)">
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
                        <div class="card-options">
                            <button>Editar</button>
                            <button>Excluir</button>
                        </div>
                    </div>
                `
    closeModal()
    event.target.reset()
}

function showCardOptions(event){
    const cardOptions = event.target.querySelector('.card-options')
    cardOptions.style.display = 'flex'
}

function hideCardOptions(event){
    const cardOptions = event.target.querySelector('.card-options')
    cardOptions.style.display = 'none'
}
