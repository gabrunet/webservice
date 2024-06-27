// Função para obter todos os pedidos
async function getPedidos() {
    try {
        const response = await fetch('http://localhost:3000/getPedidos');
        const data = await response.json();
        console.log('Pedidos obtidos:', data.pedidos);
    } catch (error) {
        console.error('Erro ao obter pedidos:', error);
    }
}

// Função para obter um pedido específico pelo ID do produto
async function getProduto(produtoId) {
    try {
        const response = await fetch(http://localhost:3000/getProduto/${produtoId});
        const data = await response.json();
        console.log('Pedido obtido:', data.pedido);
    } catch (error) {
        console.error('Erro ao obter pedido:', error);
    }
}

// Função para obter pedidos por entregador
async function getEntregador(entregadorId) {
    try {
        const response = await fetch(http://localhost:3000/getEntregador/${entregadorId});
        const data = await response.json();
        console.log('Pedidos obtidos para o entregador:', data.pedidos);
    } catch (error) {
        console.error('Erro ao obter pedidos por entregador:', error);
    }
}

// Função para adicionar um novo pedido
async function addPedido(novoPedido) {
    try {
        const response = await fetch('http://localhost:3000/addPedido', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoPedido)
        });
        const data = await response.json();
        console.log(data.message);
    } catch (error) {
        console.error('Erro ao adicionar pedido:', error);
    }
}

// Chamadas de exemplo
getPedidos();
getProduto(1);
getEntregador(11);

const novoPedido = {
    produto_id: 5,
    produto_nome: "Relógio Casio",
    latitude: -23.6000,
    longitude: -46.7000,
    cliente_nome: "Cliente: Ana",
    entregador: {
        id: 14,
        nome: "Carlos Almeida"
    }
};

addPedido(novoPedido);