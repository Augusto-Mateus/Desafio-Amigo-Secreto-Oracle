//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
console.log("JS iniciado");

//variáveis do projeto
let amigos = [];

//variáveis com elementos HTML
const input = document.getElementById("amigo");
const ul = document.getElementById("listaAmigos");

//Função que adicionará os amigos do usuário a array amigos
function adicionarAmigo() {
  // Adiciona valor do input a var amigo
  let amigo = input.value;
  console.log(amigo);

  // controle de fluxo para avaliar se o input foi preenchido corretamente
  amigo ? amigos.push(amigo) : alert("Por favor, insira um nome.");

  // limpeza do valor do input
  input.value = "";
  console.log(amigos);

  atualizarListaNoHtml();
}

// Função que irá iterar na lista de amigos adicionando-os a <ul>
function atualizarListaNoHtml() {
  // Limpa a <ul>
  ul.innerHTML = "";

  // adiciona <li> à tag <ul> no HTML
  for (let amigo of amigos) {
    // cria elemento li para a lista
    const li = document.createElement("li");

    // adiciona o valor do atual item sendo iterado a tag li
    li.textContent = amigo;

    // adiciona a tag criada anteriormenta a ul (Lembrete não usar innerHTML ele substitui todo o conteudo pelo atual)
    ul.appendChild(li);
  }
}


// Função de sorteio do amigo secreto.
function sortearAmigo() {
  console.log("função sortear ativada")
  if (amigos.length < 1) {
    alert("Por favor, insira um nome na lista de amigos.")
    return
  }

  document.getElementById("resultado").innerHTML = amigos[Math.floor(Math.random() * amigos.length)]
}