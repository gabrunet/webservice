const express = require('express');
const app = express();
const port = 3000;

const pedidos = [
    {
        produto_id: 1,
        produto_nome: "Tenis Nike",
        latitude: -23.5505,
        longitude: -46.6333,
        cliente_nome: "Cliente: Gabriel",
        entregador: {
            id: 11,
            nome: "João Silva"
        }
    },
    {
        produto_id: 2,
        produto_nome: "Camiseta Vans",
        latitude: -23.5678,
        longitude: -46.6543,
        cliente_nome: "Cliente: Victor",
        entregador: {
            id: 12,
            nome: "Maria Souza"
        }
    },
    {
        produto_id: 3,
        produto_nome: "Casaco Adidas",
        latitude: -23.5852,
        longitude: -46.6778,
        cliente_nome: "Cliente: Pedro",
        entregador: {
            id: 13,
            nome: "Roberto Brasil"
        }
    },
    {
        produto_id: 4,
        produto_nome: "Calça Levs",
        latitude: -23.5987,
        longitude: -46.6987,
        cliente_nome: "Cliente: Felipe",
        entregador: {
            id: 11,
            nome: "João Silva"
        }
    }
];

// Endpoint para obter todos os pedidos
app.get('/getPedidos', (req, res) => {
    res.json({ pedidos: pedidos });
});

// Endpoint para obter um pedido específico pelo ID do produto
app.get('/getProduto/:produtoId', (req, res) => {
    const produtoId = parseInt(req.params.produtoId, 10);
    const pedido = pedidos.find(pedido => pedido.produto_id === produtoId);
    
    if (pedido) {
        res.json({ pedido: pedido });
    } else {
        res.status(404).json({ error: 'Produto não encontrado' });
    }
});

// Busca dos pedidos por entregador
app.get('/getEntregador/:entregadorId', (req, res) => {
  const entregadorId = parseInt(req.params.entregadorId, 10);
  const pedidosFiltrados = pedidos.filter(pedido => pedido.entregador.id === entregadorId);
  
  if (pedidosFiltrados.length > 0) {
      res.json({ pedidos: pedidosFiltrados });
  } else {
      res.status(404).json({ error: 'Entregador não encontrado ou sem pedidos' });
  }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
