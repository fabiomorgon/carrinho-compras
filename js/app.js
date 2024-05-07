let valorTotal = 0; // armazena o valor total a ser apresentado no carrinho
let listaDeQtdes = [0, 0, 0]; // tabela contendo a quantidade selecionada de cada item
let listaDeValores = [0, 0, 0]; // tabela contendo a somatória dos valores selecionados para cada item

// função adicionar - acessada quando é clicado o botão "adicionar" da página
function adicionar() {

    const listaDePrecos = [100, 1400, 5000];  // tabela de preços dos itens
    const listaDeItens = ['Fone de Ouvido', 'Celular', 'Oculus VR']; // tabela de itens

    let produtoSelecionado = document.getElementsByName('produto');
    let qtdeSelecionada = document.getElementsByClassName('quantidade-input');

    // se não for informada uma quantidade do produto selecionado, é exibido um alert
    if (qtdeSelecionada[0].value == 0) {
        alert("Informe a quantidade desejada!");
        return;
    }

    let indiceLista = produtoSelecionado[0].selectedIndex;
    let valorProduto = listaDePrecos[indiceLista] * qtdeSelecionada[0].value;
    listaDeQtdes[indiceLista] = parseInt(listaDeQtdes[indiceLista]) + parseInt(qtdeSelecionada[0].value); // incrementa a quantidade de um determinado item
    listaDeValores[indiceLista] =  listaDeValores[indiceLista] + valorProduto; // incrementa os valores de um determinado item

    var linhaItem = document.createElement('li'); // cria uma tag HTML do tipo li
    linhaItem.innerHTML = `<span class="texto-azul">${listaDeQtdes[indiceLista]}x</span> ${listaDeItens[indiceLista]} <span class="texto-azul">R$${listaDeValores[indiceLista]}</span>`;
    linhaItem.id = listaDeItens[indiceLista];

    // se a quantidade selecionada corresponde ao total acumulado do item, indica que não havia sido adicionada nenhuma quantidade para aquele item anteriormente
    // neste caso, é adicionado um item à lista do carrinho, caso contrário é atualizada a informação da quantidade/valor do item na lista do carrinho
    if (listaDeQtdes[indiceLista] == qtdeSelecionada[0].value) {
        document.getElementById('itens-lista').appendChild(linhaItem);
    } else {
        console.log(linhaItem.innerHTML);
        document.getElementById(listaDeItens[indiceLista]).innerHTML = linhaItem.innerHTML;
    }

    valorTotal = valorTotal + valorProduto; // incrementa o valor total
    let textoValorTotal = `<span class="texto-azul" id="valor-total">R$${valorTotal}</span>`;
    document.getElementById('valor-total').innerHTML = textoValorTotal;
    document.getElementsByClassName('quantidade-input')[0].value = '';
}

// função limpar - acessada quando é clicado o botão "limpar" da página
// limpa as variáveis que acumulam os valores e quantidades de cada item, bem como a lista de itens do carrinho
function limpar() {
    valorTotal = 0;
    listaDeQtdes = [0, 0, 0];
    listaDeValores = [0, 0, 0];
    listaDoCarrinho = document.getElementById('itens-lista');
    let qtdeSelecionada = document.getElementsByClassName('quantidade-input');
    qtdeSelecionada.value = 0;

    while (listaDoCarrinho.firstChild) {
        listaDoCarrinho.removeChild(listaDoCarrinho.firstChild);
    }

    document.getElementById('valor-total').innerHTML = '<span class="texto-azul" id="valor-total">R$0</span>';
}