const botoes = document.querySelectorAll(".botao");

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    desselecionarBotao();
    desselecioarPersonagem();

    botao.classList.add("selecionado");

    personagens[indice].classList.add("selecionado");
  });
});

function desselecioarPersonagem() {
  const personageSelecionado = document.querySelector(".personagem.selecionado");
  personageSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  botaoSelecionado.classList.remove("selecionado");
}
