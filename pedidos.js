import { lerLocalStorage, desenharProdutoNoCarrinhoSimples } from "./src/utilidades";

function criarPedidoHistorico(pedidoComData){
    const dataFormatada = new Date(pedidoComData.dataPedido).toLocaleDateString('pt-BR', {hour: '2-digit', minute: '2-digit'});
    const elementoPedido = `
    <p class='text-xl text-bold my-4'>${dataFormatada}</p>
    <section id='container-pedidos-${pedidoComData.dataPedido}' class='bg-indigo-200 p-3 rounded-md'></section>
    `;
    const main = document.getElementsByTagName('main')[0];
    main.innerHTML += elementoPedido;

    for(const idProduto in pedidoComData.pedido){
        desenharProdutoNoCarrinhoSimples(idProduto, `container-pedidos-${pedidoComData.dataPedido}`, pedidoComData.pedido[idProduto]);
    }
}

function renderizarHistoricoPedidos(){
    const historico = lerLocalStorage('historico');
    for(const pedidoComData of historico){
        criarPedidoHistorico(pedidoComData);
    }
}

renderizarHistoricoPedidos();