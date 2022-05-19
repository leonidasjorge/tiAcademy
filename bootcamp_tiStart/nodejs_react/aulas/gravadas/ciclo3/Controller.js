const express     = require('express');
const cors        = require('cors');

const {Sequelize} = require('./models');

const models      = require('./models');

const app         = express();
app.use(cors());
app.use(express.json());

let cliente    = models.Cliente;
let itempedido = models.ItemPedido;
let pedido     = models.Pedido;
let servico    = models.Servico;

app.get('/', function(req, res){
    res.send('Olá, mundo!');
});

// app.get('/clientes', function(req, res){
//     res.send('Seja bem-vindo(a) a ServicesTI.');
// });

// app.get('/pedidos', function(req, res){
//     res.send('Qual é o seu pedido?');
// });

// app.get('/servicos', function(req, res){
//     res.send('O serviço referente ao seu pedido já está sendo realizado.');
// });

/* ============================================================================= */
// INSERIR

// Inserir Clientes
app.post('/clientes', async (req, res) => {
    await cliente.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Cliente criado com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Cliente | Foi impossível se conectar."
        });
    });
});

// Inserir ItemPedidos
app.post('/itempedidos', async (req, res) => {
    await itempedido.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "ItemPedido criado com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "ItemPedido | Foi impossível se conectar."
        });
    });
});

// Inserir Pedidos
app.post('/pedidos', async (req, res) => {
    await pedido.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Pedido criado com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Pedido | Foi impossível se conectar."
        })
    })
});

// Inserir Serviços
app.post('/inserirservico', async (req, res) => {
    await servico.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Serviço criado com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Serviço | Foi impossível se conectar."
        });
    });
});

/* ============================================================================= */
// LISTAR

// Listar todos os clientes cadastrados, ordenados pelo id na forma crescente
app.get('/listaclientes', async(req, res) => {
    await cliente.findAll({
        raw: true,
        order: [['id', 'ASC']]
    }).then(function(clientes) {
        res.json({clientes});
    });
});

// Listar todas as compras que possuem o produto específico
app.get('/produto/:id/compras', async(req, res) => {
    await itemcompra.findAll({
        where: {ProdutoId: req.params.id}
    })
    .then(itensc => {
        return res.json({
            error: false,
            itensc
        });
    }).catch(function(error) {
        return res.status(400).json({
            error: true,
            message: "Erro: não foi possível conectar."
        });
    });
});

// CONSULTAR TODOS OS PEDIDOS CADASTRADOS COM TODAS AS SUAS INFORMAÇÕES, EM ORDEM DO MAIOR VALOR PARA O MENOR VALOR
app.get('/itempedidos', async(req, res) => {
    await itempedido.findAll({
        // raw: true
        order: [['valor', 'DESC']]
    }).then(function(itempedidos) {
        res.json({itempedidos});
    });
});

// Listar todos os pedidos cadastrados, ordenados pelo id na forma crescente
app.get('/listapedidos', async(req, res) => {
    await pedido.findAll({
        raw: true,
        order: [['id', 'ASC']]
    }).then(function(pedidos) {
        res.json({pedidos});
    });
});

// CONSULTAR pedidos
app.get('/pedidos/:id', async (req, res) => {
    await pedido.findByPk(req.params.id, {include: [{all: true}]})
    .then(ped => {
        return res.json({ped});
    })
})

// Listar todos os pedidos que possuem o serviço específico
app.get('/servico/:id/pedidos', async(req, res) => {
    await itempedido.findAll({
        where: {ServicoId: req.params.id}
    })
    .then(itens => {
        return res.json({
            error: false,
            itens
        });
    }).catch(function(error) {
        return res.status(400).json({
            error: true,
            message: "Erro: não foi possível conectar."
        });
    });
});

// Listar todos os serviços cadastrados, ordenados pelo nome na forma crescente
app.get('/listaservicos', async(req, res) => {
    await servico.findAll({
        //raw: true,
        order: [['nome', 'ASC']]
    }).then(function(servicos) {
        res.json({servicos});
    });
});

// CONSULTAR A QUANTIDADE TOTAL DE CLIENTES CADASTRADOS
app.get('/qtdclientes', async(req, res) => {
    await cliente.count('id').then(function(clientes) {
        res.json({clientes});
    });
});

// CONSULTAR A QUANTIDADE TOTAL DE PEDIDOS SOLICITADOS
app.get('/qtdpedidos', async(req, res) => {
    await pedido.count('id').then(function(pedidos) {
        res.json({pedidos});
    });
});

// Listar a quantidade total de serviços cadastrados
app.get('/ofertaservicos', async(req, res) => {
    await servico.count('id').then(function(servicos) {
        res.json({servicos});
    });
});

// Listar todas as informações de um serviço específico, informado pelo ID cadastrado no banco de dados
app.get('/servico/:id', async(req, res) => {
    await servico.findByPk(req.params.id)
    .then(serv => {
        return res.json({
            error: false,
            serv
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro: não foi possível conectar."
        });
    });
});

// app.get('/servicos/:id', async (req, res) => {
//     await cliente.findByPk(req.params.id, {include: [{all: true}]})
//     .then(cliente => {
//         return res.json({cliente});
//     })
// })

/* ============================================================================= */
// ATUALIZAR

app.put('/atualizaservico', async (req, res) => {
    await servico.update(req.body, {
        where : {id: req.body.id}
    }).then(function() {
        return res.json({
            error: false,
            message: "Serviço alterado com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro na alteração do serviço."
        });
    });
});

// Atualizar Pedidos
app.put('/pedidos/:id/editaritem', async (req, res) => {
    const item = {
        quantidade: req.body.quantidade,
        valor: req.body.valor
    };

    if (!await pedido.findByPk(req.params.id)) {
        return res.status(400).json({
            error: true,
            message: "O pedido não foi encontrado."
        });
    };

    if (!await servico.findByPk(req.body.ServicoId)) {
        return res.status(400).json({
            error: true,
            message: "O serviço não foi encontrado."
        });
    };

    await itempedido.update(item, {
        where: Sequelize.and({ServicoId: req.body.ServicoId},
            {PedidoId: req.params.id})
    }).then(function(itens) {
        return res.json({
            error: false,
            message: "Pedido alterado com sucesso!",
            itens
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro: Não foi possível alterar."
        });
    });
});

/* ============================================================================= */
// EXCLUIR

// Excluir cliente pela ID
app.get('/excluircliente/:id', async (req, res) => {
    await cliente.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cliente excluído com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir o cliente."
        });
    });
});

let port = process.env.PORT || 3001;

app.listen(port, (req, res) => {
    console.log('Servidor ativo: http://localhost:3001');
});