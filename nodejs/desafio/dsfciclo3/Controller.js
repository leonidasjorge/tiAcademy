const {Sequelize} = require('./models');
const cors        = require('cors');
const express     = require('express');
const models      = require('./models');

const app         = express();

app.use(cors());
app.use(express.json());

let cliente       = models.Cliente;
let compra        = models.Compra;
let itemcompra    = models.ItemCompra;
let itempedido    = models.ItemPedido;
let pedido        = models.Pedido;
let produto       = models.Produto;
let servico       = models.Servico;

app.get('/', function(req, res) {
    res.send('Olá, mundo!');
});

/* ================================================================================ */
// INSERIR

// Inserir Cliente
app.post('/cliente/inserir', async(req, res) => {
    await cliente.create(
        req.body
    ).then(cli => {
        return res.json({
            error: false,
            message: "Cliente inserido com sucesso!",
            cli
        });
    }).catch(erro => {
        return res.status(400).json({
            error: true,
            message: "Erro: Não foi possível inserir o cliente."
        });
    });
});

// Inserir Compra
app.post('/cliente/:id/compra', async(req, res) => {
    const comp = {
        data: req.body.data,
        ClienteId: req.params.id
    };

    // Verifica se o cliente não existe
    if (!await cliente.findByPk(req.params.id)) {
        return res.status(400).json({
            error: true,
            message: "Erro: Cliente não existe."
        });
    };

    // Se o cliente existir, cria-se a compra
    await compra.create(comp)
    .then(order => {
        return res.json({
            error: false,
            messsage: "Compra inserida com sucesso!",
            order
        });

    // Caso tenha algum erro, retorna a mensagem abaixo
    }).catch(erro => {
        return res.status(400).json({
            error: true,
            message: "Erro: Não foi possível inserir a compra."
        });
    });
});

// Inserir ItemCompra
app.post('/inseriritemcompra', async(req, res) => {
    await itemcompra.create(
        req.body
    ).then(itemcomp => {
        return res.json({
            error: false,
            message: "ItemCompra inserido com sucesso!",
            itemcomp
        });
    }).catch(erro => {
        return res.status(400).json({
            error: true,
            message: "Erro: Não foi possível inserir o itemcompra."
        });
    });
});

// Inserir ItemPedido
app.post('/inseriritempedido', async(req, res) => {
    await itempedido.create(
        req.body
    ).then(itemped => {
        return res.json({
            error: false,
            message: "ItemPedido inserido com sucesso!",
            itemped
        });
    }).catch(erro => {
        return res.status(400).json({
            error: true,
            message: "Erro: Não foi possível inserir o itempedido."
        });
    });
});

// Inserir Pedido
app.post('/cliente/:id/pedido', async(req, res) => {
    const ped = {
        dataPedido: req.body.data,
        ClienteId: req.params.id
    };

    // Verifica se o cliente não existe
    if (!await cliente.findByPk(req.params.id)) {
        return res.status(400).json({
            error: true,
            message: "Erro: Cliente não existe."
        });
    };

    // Se o cliente existir, cria-se o pedido
    await pedido.create(ped)
    .then(order => {
        return res.json({
            error: false,
            messsage: "Pedido inserido com sucesso!",
            order
        });

    // Caso tenha algum erro, retorna a mensagem abaixo
    }).catch(erro => {
        return res.status(400).json({
            error: true,
            message: "Erro: Não foi possível inserir o pedido."
        });
    });
});

// Inserir Produto
app.post('/inserirproduto', async(req, res) => {
    await produto.create(
        req.body
    ).then(prod => {
        return res.json({
            error: false,
            message: "Produto inserido com sucesso!",
            prod
        });
    }).catch(erro => {
        return res.status(400).json({
            error: true,
            message: "Erro: Não foi possível inserir o Produto."
        });
    });
});

// Inserir Servico
app.post('/inserirservico', async(req, res) => {
    await servico.create(
        req.body
    ).then(serv => {
        return res.json({
            error: false,
            message: "Serviço inserido com sucesso!",
            serv
        });
    }).catch(erro => {
        return res.status(400).json({
            error: true,
            message: "Erro: Não foi possível inserir o serviço."
        });
    });
});

/* ================================================================================ */
// ATUALIZAR

// Atualizar cliente
app.put('/cliente/:id/atualizarcliente', async(req, res) => {

    // Verifica se o cliente não existe
    if (!await cliente.findByPk(req.params.id)) {
        return res.status(400).json({
            error: true,
            message: "Erro: Cliente não existe."
        });
    };

    const client = {
        nome: req.body.nome,
        endereco: req.body.endereco,
        cidade: req.body.cidade,
        uf: req.body.uf,
        nascimento: req.body.nascimento,
        clienteDesde: req.body.clienteDesde
    };

    // Se o cliente existir, faz a alteração do cliente
    await cliente.update(client, {
        where: {id: req.params.id}
    }).then(function() {
        return res.json({
            error: false,
            message: "Cliente atualizado com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro: Não foi possível atualizar o cliente."
        });
    });
});

// Atualizar compra de determinado cliente
app.put('/cliente/:id/compra/atualizar', async(req, res) => {
    const comp = {
        data: req.body.data,
        ClienteId: req.params.id
    }

    // Verifica se o cliente não existe
    if (!await cliente.findByPk(req.params.id)) {
        return res.status(400).json({
            error: true,
            message: "Erro: Cliente não existe."
        });
    };

    // Se o cliente existir, faz a alteração da compra
    await compra.update(comp, {
        where: Sequelize.and({ClienteId: req.params.id},
            {id: req.body.id})
    }).then(compras => {
        return res.json({
            error: false,
            message: "Compra atualizada com sucesso!",
            compras
        });
    }).catch(erro => {
        return res.status(400).json({
            error: true,
            message: "Erro: Não foi possível atualizar a compra."
        });
    });
});

// Atualizar itemcompra de determinada compra
app.put('/compra/:id/atualizaritemcompra', async(req, res) => {
    // Verifica se a compra não existe
    if (!await compra.findByPk(req.params.id)) {
        return res.status(400).json({
            error: true,
            message: "Erro: Compra não existe."
        });
    };

    // Verifica se produto não existe
    if (!await produto.findByPk(req.body.ProdutoId)) {
        return res.status(400).json({
            error: true,
            message: "Erro: Produto não existe."
        });
    };

    const itemc = {
        quantidade: req.body.quantidade,
        valor: req.body.valor
    };

    // Se a compra e produto existirem, faz a alteração do itemcompra
    await itemcompra.update(itemc, {
        where: Sequelize.and({ProdutoId: req.body.ProdutoId},
            {CompraId: req.params.id})
    }).then(itemcomp => {
        return res.json({
            error: false,
            message: "ItemCompra atualizado com sucesso!",
            itemcomp
        });
    }).catch(erro => {
        return res.status(400).json({
            error: true,
            message: "Erro: Não foi possível atualizar o itemcompra."
        });
    });
});

// Atualizar itempedido de determinado pedido
app.put('/pedido/:id/atualizaritempedido', async(req, res) => {
    
    // Verifica se pedido não existe
    if (!await pedido.findByPk(req.params.id)) {
        return res.status(400).json({
            error: true,
            message: "Erro: Pedido não existe."
        });
    };

    // Verifica se servico não existe
    if (!await servico.findByPk(req.body.ServicoId)) {
        return res.status(400).json({
            error: true,
            message: "Erro: Serviço não existe."
        });
    };

    const itemp = {
        quantidade: req.body.quantidade,
        valor: req.body.valor
    };

    // Se o pedido e o servico existirem, faz a alteração do itempedido
    await itempedido.update(itemp, {
        where: Sequelize.and({ServicoId: req.body.ServicoId},
            {PedidoId: req.params.id})
    }).then(itemped => {
        return res.json({
            error: false,
            message: "ItemPedido atualizado com sucesso!",
            itemped
        });
    }).catch(erro => {
        return res.status(400).json({
            error: true,
            message: "Erro: Não foi possível atualizar o itempedido."
        });
    });
});

// Atualizar pedido de determinado cliente
app.put('/cliente/:id/pedido/atualizar', async(req, res) => {
    const ped = {
        dataPedido: req.body.data,
        ClienteId: req.params.id
    }

    // Verifica se o cliente não existe
    if (!await cliente.findByPk(req.params.id)) {
        return res.status(400).json({
            error: true,
            message: "Erro: Cliente não existe."
        });
    };

    // Se o cliente existir, faz a alteração do pedido
    await pedido.update(ped, {
        where: Sequelize.and({ClienteId: req.params.id},
            {id: req.body.id})
    }).then(pedidos => {
        return res.json({
            error: false,
            message: "Pedido atualizado com sucesso!",
            pedidos
        });
    }).catch(erro => {
        return res.status(400).json({
            error: true,
            message: "Erro: Não foi possível atualizar o pedido."
        });
    });
});

// Atualizar produto
app.put('/produto/:id/atualizar', async (req, res) => {

    // Verifica se o produto não existe
    if (!await produto.findByPk(req.params.id)) {
        return res.status(400).json({
            error: true,
            message: "Erro: Produto não existe."
        });
    };

    // Se o produto existir, faz a alteração do produto
    await produto.update(req.body, {
        where : {id: req.params.id}
    }).then(function() {
        return res.json({
            error: false,
            message: "Produto atualizado com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro na atualização do produto."
        });
    });
});

// Atualizar servico
app.put('/servico/:id/atualizar', async (req, res) => {

    // Verifica se o servico não existe
    if (!await servico.findByPk(req.params.id)) {
        return res.status(400).json({
            error: true,
            message: "Erro: Serviço não existe."
        });
    };

    // Se o servico existir, faz a alteração do servico    
    await servico.update(req.body, {
        where : {id: req.params.id}
    }).then(function() {
        return res.json({
            error: false,
            message: "Serviço atualizado com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro na atualização do serviço."
        });
    });
});

/* ================================================================================ */
// LISTAR

// Listar a quantidade total de clientes cadastrados
app.get('/quantidadeclientes', async(req, res) => {
    await cliente.count('id').then(function(clientes) {
        res.json({clientes});
    });
});

// Listar cliente específico
app.get('/cliente/:id', async(req, res) => {
    await cliente.findByPk(req.params.id)
    .then(cli => {
        return res.json({
            error: false,
            cli
        });
    }).catch(function(error) {
        return res.status(400).json({
            error: true,
            message: "Erro: Código não encontrado."
        });
    });
});

// Listar todos os clientes em ordem alfabética
app.get('/clientes', async(req, res) => {
    await cliente.findAll({
        order: [['nome', 'ASC']]
    }).then(function(clientes) {
        res.json({clientes});
    });
});

// Listar todos os clientes com seus dados, em ordem alfabética
app.get('/clientestudo/', async(req, res) => {
    await cliente.findAll({
        include:[{all:true}],
        order: [['nome', 'ASC']]
    }).then(cli => {
        return res.json({
            error: false,
            cli
        });
    });
});

app.get('/clientes/:id/pedidos', async(req, res) => {
    if(!await cliente.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Cliente não encontrado."
        });
    };

    await pedido.findAll({
        where: {ClienteId: req.params.id} 
    }).then(function(peds) {
        return res.json({
            error: false,            
            peds
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao encontrar pedidos."
        });
    });
});

// Listar a quantidade total de compras
app.get('/quantidadecompras', async(req, res) => {
    await compra.count('id').then(function(compras) {
        res.json({compras});
    });
});

// Listar compra específica
app.get('/compra/:id', async(req, res) => {
    await compra.findByPk(req.params.id)
    .then(comp => {
        return res.json({
            error: false,
            comp
        });
    }).catch(function(error) {
        return res.status(400).json({
            error: true,
            message: "Erro: Código não encontrado."
        });
    });
});

// Listar a compra e seus itemcompras
app.get('/compra/:id/listar', async(req, res) => {
    await compra.findByPk(req.params.id, {include:[{all:true}]})
    .then(comp => {
        return res.json({
            error: false,
            comp
        });
    });
});

// Listar todos as compras em ordem (id) crescente
app.get('/compras', async(req, res) => {
    await compra.findAll({
        order: [['id', 'ASC']]
    }).then(function(comp) {
        res.json({comp});
    });
});

// Listar todas as compras com seus dados
app.get('/comprastudo/', async(req, res) => {
    await compra.findAll({
        include:[{all:true}]
    }).then(comp => {
        return res.json({
            error: false,
            comp
        });
    });
});

// Listar a quantidade total de itemcompras
app.get('/quantidadeitemcompras', async(req, res) => {
    await itemcompra.count('CompraId').then(function(itemc) {
        res.json({itemc});
    });
});

// Listar itemcompra específico
app.get('/itemcompra/:id', async(req, res) => {
    await itemcompra.findByPk(req.params.id)
    .then(itemc => {
        return res.json({
            error: false,
            itemc
        });
    }).catch(function(error) {
        return res.status(400).json({
            error: true,
            message: "Erro: Código não encontrado."
        });
    });
});

// Listar todos os itemcompras na ordem do maior valor para o menor valor
app.get('/itemcompras', async(req, res) => {
    await itemcompra.findAll({
        order: [['valor', 'DESC']]
    }).then(function(itemc) {
        res.json({itemc});
    });
});

// Listar a quantidade total de itempedidos
app.get('/quantidadeitempedidos', async(req, res) => {
    await itempedido.count('PedidoId').then(function(itemp) {
        res.json({itemp});
    });
});

// Listar itempedido específico
app.get('/itempedido/:id', async(req, res) => {
    await itempedido.findByPk(req.params.id)
    .then(itemp => {
        return res.json({
            error: false,
            itemp
        });
    }).catch(function(error) {
        return res.status(400).json({
            error: true,
            message: "Erro: Código não encontrado."
        });
    });
});

// Listar todos os itempedidos na ordem do maior valor para o menor valor
app.get('/itempedidos', async(req, res) => {
    await itempedido.findAll({
        order: [['valor', 'DESC']]
    }).then(function(itempedidos) {
        res.json({itempedidos});
    });
});

// Listar a quantidade total de pedidos
app.get('/quantidadepedidos', async(req, res) => {
    await pedido.count('id').then(function(pedidos) {
        res.json({pedidos});
    });
});

// Listar pedido específico
app.get('/pedido/:id', async(req, res) => {
    await pedido.findByPk(req.params.id)
    .then(ped => {
        return res.json({
            error: false,
            ped
        });
    }).catch(function(error) {
        return res.status(400).json({
            error: true,
            message: "Erro: Código não encontrado."
        });
    });
});

// Listar todos os pedidos em ordem (id) crescente
app.get('/pedidos', async(req, res) => {
    await pedido.findAll({
        order: [['id', 'ASC']]
    }).then(function(ped) {
        res.json({ped});
    });
});

// Listar o pedido e seus itempedidos
app.get('/pedido/:id/listar', async(req, res) => {
    await pedido.findByPk(req.params.id, {include:[{all:true}]})
    .then(ped => {
        return res.json({
            error: false,
            ped
        });
    });
});

// Listar todos os pedidos com seus dados
app.get('/pedidostudo/', async(req, res) => {
    await pedido.findAll({
        include:[{all:true}]
    }).then(ped => {
        return res.json({
            error: false,
            ped
        });
    });
});

// Listar a quantidade total de produtos cadastrados
app.get('/quantidadeprodutos', async(req, res) => {
    await produto.count('id').then(function(produtos) {
        res.json({produtos});
    });
});

// Listar produto específico
app.get('/produto/:id', async(req, res) => {
    await produto.findByPk(req.params.id)
    .then(prod => {
        return res.json({
            error: false,
            prod
        });
    }).catch(function(error) {
        return res.status(400).json({
            error: true,
            message: "Erro: Código não encontrado."
        });
    });
});

// Listar todos os produtos em ordem alfabética
app.get('/produtos', async(req, res) => {
    await produto.findAll({
        order: [['nome', 'ASC']]
    }).then(function(produtos) {
        res.json({produtos});
    });
});

// Listar a quantidade total de servicos cadastrados
app.get('/quantidadeservicos', async(req, res) => {
    await produto.count('id').then(function(servicos) {
        res.json({servicos});
    });
});

// Listar servico específico
app.get('/servico/:id', async(req, res) => {
    await servico.findByPk(req.params.id)
    .then(serv => {
        return res.json({
            error: false,
            serv
        });
    }).catch(function(error) {
        return res.status(400).json({
            error: true,
            message: "Erro: Código não encontrado."
        });
    });
});

// Listar todos os serviços em ordem alfabética
app.get('/servicos', async(req, res) => {
    await servico.findAll({
        order: [['nome', 'ASC']]
    }).then(function(servicos) {
        res.json({servicos});
    });
});

/* ================================================================================ */
// EXCLUIR

// Excluir cliente
app.get('/cliente/:id/excluir', async(req, res) => {
    
    // Verifica se o cliente não existe
    if (!await cliente.findByPk(req.params.id)) {
        return res.status(400).json({
            error: true,
            message: "Erro: Cliente não existe."
        });
    };

    // Se o cliente existir, faz a exclusão do cliente
    await cliente.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cliente excluído com sucesso!"
        });
    }).catch(erro => {
        return res.status(400).json({
            error: true,
            message: "Erro: Impossível excluir cliente."
        });
    });
});

//Excluir compra
app.get('/compra/:id/excluir', async(req, res) => {
    if (!await compra.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Erro: Compra não existe."
        });
    };

    // Se a compra existir, faz a exclusão da compra
    await compra.destroy({
        where: {id: req.params.id}
    }).then(function() {
        return res.json({
            error: false,
            message: "Compra excluída com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir a compra."
        });
    });
});

// Excluir ItemCompra
app.get('/compra/:id/excluiritemcompra', async(req, res) => {
    
    // Verifica se compra não existe
    if (!await compra.findByPk(req.params.id)) {
        return res.status(400).json({
            error: true,
            message: "Erro: Compra não existe."
        });
    };

    // Verifica se produto não existe
    if (!await produto.findByPk(req.body.ProdutoId)) {
        return res.status(400).json({
            error: true,
            message: "Erro: Produto não existe."
        });
    };

    // Se a compra e o produto existirem, faz a exclusão do itemcompra
    await itemcompra.destroy({
        where: Sequelize.and({ProdutoId: req.body.ProdutoId},
            {CompraId: req.params.id})
    }).then(function() {
        return res.json({
            error: false,
            message: "ItemCompra excluído com sucesso!",
        });
    }).catch(erro => {
        return res.status(400).json({
            error: true,
            message: "Erro: Não foi possível excluir o itemcompra."
        });
    });
});

// Excluir ItemPedido
app.get('/pedido/:id/excluiritempedido', async(req, res) => {
    
    // Verifica se pedido não existe
    if (!await pedido.findByPk(req.params.id)) {
        return res.status(400).json({
            error: true,
            message: "Erro: Pedido não existe."
        });
    };

    // Verifica se serviço não existe
    if (!await servico.findByPk(req.body.ServicoId)) {
        return res.status(400).json({
            error: true,
            message: "Erro: Serviço não existe."
        });
    };

    // Se o pedido e o servico existirem, faz a exclusão do itempedido
    await itempedido.destroy({
        where: Sequelize.and({ServicoId: req.body.ServicoId},
            {PedidoId: req.params.id})
    }).then(function() {
        return res.json({
            error: false,
            message: "ItemPedido excluído com sucesso!",
        });
    }).catch(erro => {
        return res.status(400).json({
            error: true,
            message: "Erro: Não foi possível excluir o itempedido."
        });
    });
});

//Excluir pedido
app.get('/pedido/:id/excluir', async(req, res) => {
    if (!await pedido.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Erro: Pedido não existe."
        });
    };

    // Se o pedido existir, faz a exclusão do pedido
    await pedido.destroy({
        where: {id: req.params.id}
    }).then(function() {
        return res.json({
            error: false,
            message: "Pedido excluído com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir o pedido."
        });
    });
});

// Excluir produto
app.get('/produto/:id/excluir', async(req, res) => {

    // Verifica se o produto não existe
    if (!await produto.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Erro: Produto não existe."
        });
    };

    // Se o produto existir, faz a exclusão do produto
    await produto.destroy({
        where: {id: req.params.id}
    }).then(function() {
        return res.json({
            error: false,
            message: "Produto excluído com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro: Impossível excluir produto."
        });
    });
});

// Excluir servico
app.get('/servico/:id/excluir', async(req, res) => {

    // Verifica se o servico não existe
    if (!await servico.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Erro: Serviço não existe."
        });
    };

    // Se o serviço existir, faz a exclusão do serviço
    await servico.destroy({
        where: {id: req.params.id}
    }).then(function() {
        return res.json({
            error: false,
            message: "Serviço excluído com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro: Impossível excluir serviço."
        });
    });
});

let port = process.env.PORT || 3001;

app.listen(port, (req, res) => {
    console.log('Servidor ativo: http://localhost:3001');
});