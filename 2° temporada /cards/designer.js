
function desenharCards(container) {
    container.innerHTML = '';

    for (let i = 0; i < turma2ano.listaDeAlunos.length; i++) {
        container.innerHTML += `

                                          
                <div class='cabecalho'>
                    <div>
                    <h3 class='nome'>${turma2ano.listaDeAlunos[i].getNome()}</h3>
                    </div>
                    <img class='logo' src='img/IFAL.png'/>
                </div>

            
                <div class='conteudo'>
                    <img class='foto' src=''>
                    <div class='info'>
                        <div>
                            <p class='label'>Idade</p>
                            <p class='valor'>${turma2ano.listaDeAlunos[i].getIdade()}</p>
                        </div>
                    
                        <div>
                            <p class='label'>Matricula</p>
                            <p class='valor'>${turma2ano.listaDeAlunos[i].matricula}</p>
                        </div>
                    </div>
                </div>
            </div>`
    }

}

//<p class='turma'>${listaDeAlunos[i].turma}</p>