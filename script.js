function funcao1() {
    let button = document.getElementsByTagName("button");
    let ul = document.getElementById("nome_pokemons");
    var input = document.getElementById("item");

    let valor_input = input.value;
    input.value = '';

    var ul2 = document.createElement('li');
    var span = document.createElement('span');
    span.innerHTML = valor_input;
    var button2 = document.createElement('button');
    button2.innerHTML = "Excluir";
    button2.addEventListener("click", funcao2);

    ul2.appendChild(span);
    ul2.appendChild(button2);
    ul.appendChild(ul2);

    input.focus();
}

function funcao2() {
    var input = document.getElementById("item");
    this.closest('li').remove();
    input.focus();
}