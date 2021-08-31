const Modal = {
    open(){
        // abrir modal
        // Adicionar a classe active ao modal
        document.querySelector('modal-overlay')
        .classList
        .add('active')

    },
    close(){
        //fechar modal
        //Remover a classe active do modal
        document.querySelector('modal-overlay')
        .classList
        .remove('active')
    }
}

const transactions=[    
    {
    id: 1,
    description: 'Luz',
    amount: -50000,
    Date: '23/01/2021',
    }

    {
    id: 2,
    description: 'Website',
    amount: -500000,
    Date: '23/01/2021',
    }

    {
    id: 3,
    description: 'Internet',
    amount: -20000,
    Date: '23/01/2021',
    }

]

const Transaction = {

    incomes(){
        //somar as entradas
    },

    expenses(){
        //somar saidas
    }

    total(){
        //Entradas menos saidas
    }

}

const DOM = {
    Element
    innerHTMLTransaction() {

        const html = "" 
                    <tr>
                        <td class="description">Luz</td>
                        <td class="expense">- R$ 500,00</td>
                        <td class="date">23/01/2021</td>
                        <td><img src="./images/minus.svg" alt="Remover transação"></td>
                    </tr>
    }
}