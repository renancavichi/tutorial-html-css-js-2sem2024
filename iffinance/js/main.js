function openModal(id){
    const modal = document.querySelector(id)
    modal.style.display = 'flex'
}

function closeModal(event, id){
    const modal = document.querySelector(id)

    if(event === null)
        return modal.style.display = 'none'

    if(event.target.className === 'modal')
        return modal.style.display = 'none'
}

function addTicker(event){
    //previne o comportamento padrão de recarregar a página ou enviar para algum endereço (action)
    // ▼
    event.preventDefault()

    // event.target (form)
    const urlLogo = event.target.urlLogo.value
    const nameCompany = event.target.nameCompany.value
    const ticker = event.target.ticker.value
    const quantity = event.target.quantity.value
    const closedValue = event.target.closedValue.value

    const tickerData = {
        urlLogo,
        nameCompany,
        ticker,
        quantity,
        closedValue
    }

    addOrUpdateTicker(tickerData)
    
    closeModal(null, '#modal-add-ticker')
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

function removeCard(event){
    // closest(...) busca nos acendentes um elemento
    const cardTicker = event.target.closest('.card-ticker')
    // .remove() deleta o elemento do html
    cardTicker.remove()
}

function editTicker(event){
    const cardTicker = event.target.closest('.card-ticker')

    const imgLogo = cardTicker.querySelector('header img')
    const urlLogo = imgLogo.getAttribute('src')
    document.querySelector('#eUrlLogo').value = urlLogo

    const nameCompany = cardTicker.querySelector('header h4').innerText
    document.querySelector('#eNameCompany').value = nameCompany

    const ticker = cardTicker.querySelector('header span').innerText
    document.querySelector('#eTicker').value = ticker

    const closedValue = cardTicker.querySelector('main p span').innerText
    document.querySelector('#eClosedValue').value = closedValue.split(' ')[0]

    const quantity = cardTicker.querySelector('footer p span').innerText
    document.querySelector('#eQuantity').value = quantity

    openModal('#modal-edit-ticker')
}

function updateTicker(event){
    event.preventDefault()

    // event.target (form)
    const urlLogo = event.target.eUrlLogo.value
    const nameCompany = event.target.eNameCompany.value
    const ticker = event.target.eTicker.value
    const quantity = event.target.eQuantity.value
    const closedValue = event.target.eClosedValue.value

    const tickerData = {
        urlLogo,
        nameCompany,
        ticker,
        quantity,
        closedValue
    }

    addOrUpdateTicker(tickerData)
    
    closeModal(null, "#modal-edit-ticker")
}


function addOrUpdateTicker(tickerData){
    console.log('addOrUpdateTicker')
    const ticker = document.querySelector(`#${tickerData.ticker}`)
    console.log(ticker)
    if(ticker){
        //update
        console.log('Atualizar!')
        ticker.querySelector('header img').setAttribute('src', tickerData.urlLogo)
        ticker.querySelector('header h4').innerHTML = tickerData.nameCompany
        ticker.querySelector('main p span').innerHTML = tickerData.closedValue + ' '
        ticker.querySelector('footer p span').innerHTML = tickerData.quantity
        ticker.querySelector('footer p:last-child span').innerHTML = 'R$ ' + (+tickerData.quantity * +tickerData.closedValue)
    } else{
        // add
        console.log('Adicioar!')
        const cardList = document.querySelector('#card-list')
        cardList.innerHTML += `
                    <div class="card-ticker" id="${tickerData.ticker}" onmouseenter="showCardOptions(event)" onmouseleave="hideCardOptions(event)">
                        <header>
                            <img src="${tickerData.urlLogo}" alt="Logo">
                            <h4>${tickerData.nameCompany}</h4>
                            <span>${tickerData.ticker}</span>
                        </header>
                        <main>
                            <p>Valor: <span style="color: #1ebd1e">${tickerData.closedValue} <span>▲</span></span></p>
                        </main>
                        <footer>
                            <p>Quantidade: <span>${tickerData.quantity}</span></p>
                            <p>Posição: <span>R$ ${+tickerData.quantity * +tickerData.closedValue}</span></p>
                        </footer>
                        <div class="card-options">
                            <button onclick="editTicker(event)">Editar</button>
                            <button onclick="removeCard(event)">Excluir</button>
                        </div>
                    </div>
                `
    }

}