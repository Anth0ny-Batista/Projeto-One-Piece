//PASSO 1 - pegar os botões no JS para poder verificar quando o usuário clicar em cima de um deles
const botoes = document.querySelectorAll('.botao')

//PASSO 1 - pegar os personagens no JS para poder mostrar ou esconder ele 
const personagens = document.querySelectorAll(".personagem")

// PASSO 2 - adicionar a classe "selecionado" no botão que o usuário clicou
botoes.forEach((botao, indice) => { // vai percorer a lista de botoes e para cada botão ele irá fazer o que esta dentro da função

    botao.addEventListener("click", () => { // vai observar as ações do usuário e informar ao sistema se executar uma ação.
        // PASSO 3 - verifficar se já existe um botão selecionado, se sim devemos remover a seleção dele
        desselecionarbotao()
        // PASSO 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        botao.classList.add("selecionado")
        // PASSO 3 - verifficar se já existe um botão selecionado, se sim devemos remover a seleção dele
        desselecionarpersonagem()
        // PASSO 2 -adicionar a classe "selecionado" no personagem que o usuário selecionou
        personagens[indice].classList.add("selecionado")
    })
})

function desselecionarpersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado")
    personagemSelecionado.classList.remove("selecionado")
}

function desselecionarbotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado") // pegou o botão "selecionado"
    botaoSelecionado.classList.remove("selecionado")
}

