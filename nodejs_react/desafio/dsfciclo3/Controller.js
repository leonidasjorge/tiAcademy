const { Sequelize } = require('./models');
const cors = require('cors');
const express = require('express');
const models = require('./models');

const app = express();
app.use(cors());
app.use(express.json());

let cliente = models.Cliente;
let compra = models.Compra;
let itemcompra = models.ItemCompra;
let itempedido = models.ItemPedido;
let pedido = models.Pedido;
let produto = models.Produto;
let servico = models.Servico;

app.get('/', function (req, res) {
    res.send('Olá, mundo!');
});

/* ================================================================================ */
// INSERIR

// Inserir Cliente
app.post('/inserir-cliente', async (req, res) => {
    await cliente.create(
        req.body
    ).then(cli => {
        return res.json({
            error: false,
            message: "Cliente cadastrado com sucesso!",
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
app.post('/inserir-compra', async(req, res) => {
    await compra.create(
        req.body
    ).then(function() {
        return res.json({
            error: false,
            message: "Compra cadastrada com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro: Não foi possível cadastrar a compra."
        })
    });
});


// Inserir ItemCompra
app.post('/inserir-itemcompra', async (req, res) => {


    await itemcompra.create(
        req.body
    ).then(itemcomp => {
        return res.json({
            error: false,
            message: "ItemCompra cadastrado com sucesso!",
            itemcomp
        });
    }).catch(erro => {
        return res.status(400).json({
            error: true,
            message: "Erro: Não foi possível cadastrar o itemcompra."
        });
    });
});

// Inserir ItemPedido
app.post('/inserir-itempedido', async (req, res) => {
    await itempedido.create(
        req.body
    ).then(itemped => {
        return res.json({
            error: false,
            message: "ItemPedido cadastrado com sucesso!",
            itemped
        });
    }).catch(erro => {
        return res.status(400).json({
            error: true,
            message: "Erro: Não foi possível cadastrar o itempedido."
        });
    });
});

// Inserir Pedido
app.post('/inserir-pedido', async(req, res) => {
    await pedido.create(
        req.body
    ).then(function() {
        return res.json({
            error: false,
            message: "Pedido cadastrado com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro: Não foi possível cadastrar o pedido."
        })
    });
});

// Inserir Produto
app.post('/inserir-produto', async (req, res) => {
    await produto.create(
        req.body
    ).then(prod => {
        return res.json({
            error: false,
            message: "Produto cadastrado com sucesso!",
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
app.post('/inserir-servico', async (req, res) => {
    await servico.create(
        req.body
    ).then(serv => {
        return res.json({
            error: false,
            message: "Serviço cadastrado com sucesso!",
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

// Atualizar Cliente específico
app.put('/cliente/:id', async (req, res) => {
    const cli = {
        id: req.params.id,
        nome: req.body.nome,
        endereco: req.body.endereco,
        cidade: req.body.cidade,
        uf: req.body.uf,
        nascimento: req.body.nascimento,
        clienteDesde: req.body.clienteDesde
    }

    // Verifica se o cliente não existe
    if (!await cliente.findByPk(req.params.id)) {
        return res.status(400).json({
            error: true,
            message: "Erro: Cliente não existe."
        });
    };

    // Se o cliente existir, faz a atualização do cliente
    await cliente.update(cli, {
        where: { id: req.params.id }
    }).then(clientes => {
        return res.json({
            error: false,
            message: "Cliente atualizado com sucesso!",
            clientes
        });
    }).catch(erro => {
        return res.status(400).json({
            error: true,
            message: "Erro: Não foi possível atualizar o cliente."
        });
    });
});

// Atualizar Compra específica
app.put('/compra/:id', async (req, res) => {
    const comp = {
        id: req.params.id,
        ClienteId: req.body.ClienteId,
        data: req.body.data
    }

    // Verifica se o cliente não existe
    if (!await cliente.findByPk(req.body.ClienteId)) {
        return res.status(400).json({
            error: true,
            message: "Erro: Cliente não existe."
        });
    };

    // Se o cliente existir, faz a atualização da compra
    await compra.update(comp, {
        where: Sequelize.and({ ClienteId: req.body.ClienteId },
            { id: req.params.id })
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

// Atualizar itemcompra específico
app.put('/itemcompra/:id/:ProdutoId', async (req, res) => {
    const itemc = {
        id: req.params.id,
        quantidade: req.body.quantidade,
        ProdutoId: req.body.ServicoId,
        valor: req.body.valor
    }

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

    // Se o Pedido e o Produto existirem, faz a atualização do ItemCompra
    await itemcompra.update(itemc, {
        where: Sequelize.and({ ProdutoId: req.body.ProdutoId },
            { CompraId: req.params.id })
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

// Atualizar itempedido específico
app.put('/itempedido/:id/:ServicoId', async (req, res) => {
    const itemp = {
        id: req.params.id,
        quantidade: req.body.quantidade,
        ServicoId: req.body.ServicoId,
        valor: req.body.valor
    }

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

    // Se o Pedido e o Servico existirem, faz a atualização do ItemPedido
    await itempedido.update(itemp, {
        where: Sequelize.and({ ServicoId: req.body.ServicoId },
            { PedidoId: req.params.id })
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

// Atualizar Pedido específico
app.put('/pedido/:id', async (req, res) => {
    const ped = {
        id: req.params.id,
        ClienteId: req.body.ClienteId,
        dataPedido: req.body.dataPedido
    }

    // Verifica se o cliente não existe
    if (!await cliente.findByPk(req.body.ClienteId)) {
        return res.status(400).json({
            error: true,
            message: "Erro: Cliente não existe."
        });
    };

    // Se o cliente existir, faz a atualização do pedido
    await pedido.update(ped, {
        where: Sequelize.and({ ClienteId: req.body.ClienteId },
            { id: req.params.id })
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

// Atualizar pedido de determinado cliente
app.put('/cliente/:id/pedido/atualizar', async (req, res) => {
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
        where: Sequelize.and({ ClienteId: req.params.id },
            { id: req.body.id })
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

// Atualizar Produto específico
app.put('/produto/:id', async (req, res) => {
    const prod = {
        id: req.params.id,
        nome: req.body.nome,
        descricao: req.body.descricao
    }

    // Verifica se o produto não existe
    if (!await produto.findByPk(req.params.id)) {
        return res.status(400).json({
            error: true,
            message: "Erro: Produto não existe."
        });
    };

    // Se o produto existir, faz a atualização do produto
    await produto.update(prod, {
        where: { id: req.params.id }
    }).then(produtos => {
        return res.json({
            error: false,
            message: "Produto atualizado com sucesso!"
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Erro: Não foi possível atualizar o produto."
        });
    });
});

// Atualizar Serviço específico
app.put('/servico/:id', async (req, res) => {
    const serv = {
        id: req.params.id,
        nome: req.body.nome,
        descricao: req.body.descricao
    }

    // Verifica se o servico não existe
    if (!await servico.findByPk(req.params.id)) {
        return res.status(400).json({
            error: true,
            message: "Erro: Serviço não existe."
        });
    };

    // Se o servico existir, faz a atualização do serviço    
    await servico.update(serv, {
        where: { id: req.params.id }
    }).then(servicos => {
        return res.json({
            error: false,
            message: "Serviço atualizado com sucesso!"
        });
    }).catch(erro => {
        return res.status(400).json({
            error: true,
            message: "Erro: Não foi possível atualizar o serviço."
        });
    });
});

/* ================================================================================ */
// LISTAR

// Listar a quantidade total de clientes cadastrados
app.get('/quantidadeclientes', async (req, res) => {
    await cliente.count('id').then(function (clientes) {
        res.json({ clientes });
    });
});

// Listar cliente específico
app.get('/cliente/:id', async (req, res) => {
    await cliente.findByPk(req.params.id)
        .then(cli => {
            return res.json({
                error: false,
                cli
            });
        }).catch(function (error) {
            return res.status(400).json({
                error: true,
                message: "Erro: Código não encontrado."
            });
        });
});

// Listar todos os clientes em ordem alfabética
app.get('/lista-clientes', async (req, res) => {
    await cliente.findAll({
        order: [['nome', 'ASC']]
    }).then(function (clientes) {
        res.json({ clientes });
    });
});

// Listar todos os clientes com seus dados, em ordem alfabética
app.get('/clientestudo/', async (req, res) => {
    await cliente.findAll({
        include: [{ all: true }],
        order: [['nome', 'ASC']]
    }).then(cli => {
        return res.json({
            error: false,
            cli
        });
    });
});

// Listar todas as compras em ordem (data) crescente
app.get('/lista-compras', async (req, res) => {
    await compra.findAll({
        order: [['data', 'ASC']]
    }).then(function (compras) {
        res.json({ compras });
    });
});

// Listar todas as compras de um cliente específico
app.get('/cliente/:id/listar-compras', async (req, res) => {
    if (!await cliente.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Cliente não encontrado."
        });
    };

    await compra.findAll({
        where: { ClienteId: req.params.id }
    }).then(function (comps) {
        return res.json({
            error: false,
            comps
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Não foi possível retornar compras."
        });
    });
});

// Listar todos os pedidos de um cliente específico
app.get('/cliente/:id/listar-pedidos', async (req, res) => {
    if (!await cliente.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Cliente não encontrado."
        });
    };

    await pedido.findAll({
        where: { ClienteId: req.params.id }
    }).then(function (peds) {
        return res.json({
            error: false,
            peds
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Não foi possível retornar pedidos."
        });
    });
});

// Listar a quantidade total de compras
app.get('/quantidadecompras', async (req, res) => {
    await compra.count('id').then(function (compras) {
        res.json({ compras });
    });
});

// Listar compra específica
app.get('/compra/:id', async (req, res) => {
    await compra.findByPk(req.params.id)
        .then(comp => {
            return res.json({
                error: false,
                comp
            });
        }).catch(function (error) {
            return res.status(400).json({
                error: true,
                message: "Erro: Código não encontrado."
            });
        });
});

// Listar a compra e seus itemcompras
app.get('/compra/:id/listar', async (req, res) => {
    await compra.findByPk(req.params.id, { include: [{ all: true }] })
        .then(comp => {
            return res.json({
                error: false,
                comp
            });
        });
});

// Listar todos as compras em ordem (id) crescente
app.get('/compras', async (req, res) => {
    await compra.findAll({
        order: [['id', 'ASC']]
    }).then(function (comp) {
        res.json({ comp });
    });
});

// Listar todas as compras com seus dados
app.get('/comprastudo/', async (req, res) => {
    await compra.findAll({
        include: [{ all: true }]
    }).then(comp => {
        return res.json({
            error: false,
            comp
        });
    });
});

// Listar a quantidade total de itemcompras
app.get('/quantidadeitemcompras', async (req, res) => {
    await itemcompra.count('CompraId').then(function (itemc) {
        res.json({ itemc });
    });
});

// Listar todos os itemcompra de uma compra específica
app.get('/compra/:id/lista-itenscompra', async (req, res) => {

    // Verifica se a compra não existe
    if (!await compra.findByPk(req.params.id)) {
        return res.status(400).json({
            error: true,
            message: "Erro: Compra não existe."
        });
    };

    await itemcompra.findAll({
        where: { CompraId: req.params.id }
    }).then(function (itemc) {
        return res.json({
            error: false,
            itemc
        });
    }).catch(function (error) {
        return res.status(400).json({
            error: true,
            message: "Erro: Código não encontrado."
        });
    });
});

// Listar ItemCompra específico
app.get('/itemcompra/:id/:ProdutoId', async (req, res) => {

    // Verifica se a compra não existe
    if (!await compra.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Erro: Compra não existe."
        });
    };

    // Verifica se o produto não existe
    if (!await produto.findByPk(req.params.ProdutoId)) {
        return res.status(400).json({
            erro: true,
            message: "Erro: Produto não existe."
        });
    };

    // Se a compra e o produto existirem, lista o itemcompra específico
    await itemcompra.findOne({
        where: Sequelize.and({ CompraId: req.params.id },
            { ProdutoId: req.params.ProdutoId })
    })
        .then(itemc => {
            return res.json({
                error: false,
                itemc
            });
        }).catch(function (erro) {
            return res.status(400).json({
                error: true,
                message: "Erro: Não foi possível listar o itemcompra."
            });
        });
});

// Listar todos os itemcompras na ordem do maior valor para o menor valor
app.get('/itemcompras', async (req, res) => {
    await itemcompra.findAll({
        order: [['valor', 'DESC']]
    }).then(function (itemc) {
        res.json({ itemc });
    });
});

// Listar a quantidade total de itempedidos
app.get('/quantidadeitempedidos', async (req, res) => {
    await itempedido.count('PedidoId').then(function (itemp) {
        res.json({ itemp });
    });
});

// Listar ItemPedido específico
app.get('/itempedido/:id/:ServicoId', async (req, res) => {

    // Verifica se o pedido não existe
    if (!await pedido.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Erro: Pedido não existe."
        });
    };

    // Verifica se o serviço não existe
    if (!await servico.findByPk(req.params.ServicoId)) {
        return res.status(400).json({
            erro: true,
            message: "Erro: Serviço não existe."
        });
    };

    // Se o pedido e o serviço existirem, lista o itempedido específico
    await itempedido.findOne({
        where: Sequelize.and({ PedidoId: req.params.id },
            { ServicoId: req.params.ServicoId })
    })
        .then(itemp => {
            return res.json({
                error: false,
                itemp
            });
        }).catch(function (erro) {
            return res.status(400).json({
                error: true,
                message: "Erro: Não foi possível listar o itempedido."
            });
        });
});

// Listar todos os itempedido de um pedido específico
app.get('/pedido/:id/lista-itenspedido', async (req, res) => {

    // Verifica se o pedido não existe
    if (!await pedido.findByPk(req.params.id)) {
        return res.status(400).json({
            error: true,
            message: "Erro: Pedido não existe."
        });
    };

    await itempedido.findAll({
        where: { PedidoId: req.params.id }
    }).then(function (itemp) {
        return res.json({
            error: false,
            itemp
        });
    }).catch(function (error) {
        return res.status(400).json({
            error: true,
            message: "Erro: Código não encontrado."
        });
    });
});

// Listar todos os itempedidos na ordem do maior valor para o menor valor
app.get('/lista-itempedidos', async (req, res) => {
    await itempedido.findAll({
        order: [['valor', 'DESC']]
    }).then(function (itempedidos) {
        res.json({ itempedidos });
    });
});

// Listar a quantidade total de pedidos
app.get('/quantidadepedidos', async (req, res) => {
    await pedido.count('id').then(function (pedidos) {
        res.json({ pedidos });
    });
});

// Listar pedido específico
app.get('/pedido/:id', async (req, res) => {
    await pedido.findByPk(req.params.id)
        .then(ped => {
            return res.json({
                error: false,
                ped
            });
        }).catch(function (error) {
            return res.status(400).json({
                error: true,
                message: "Erro: Código não encontrado."
            });
        });
});

// Listar todos os pedidos em ordem (data) crescente
app.get('/lista-pedidos', async (req, res) => {
    await pedido.findAll({
        order: [['dataPedido', 'ASC']]
    }).then(function (pedidos) {
        res.json({ pedidos });
    });
});

// Listar o pedido e seus itempedidos
app.get('/pedido/:id/listar', async (req, res) => {
    await pedido.findByPk(req.params.id, { include: [{ all: true }] })
        .then(ped => {
            return res.json({
                error: false,
                ped
            });
        });
});

// Listar todos os pedidos com seus dados
app.get('/pedidostudo/', async (req, res) => {
    await pedido.findAll({
        include: [{ all: true }]
    }).then(ped => {
        return res.json({
            error: false,
            ped
        });
    });
});

// Listar a quantidade total de produtos cadastrados
app.get('/quantidadeprodutos', async (req, res) => {
    await produto.count('id').then(function (produtos) {
        res.json({ produtos });
    });
});

// Listar produto específico
app.get('/produto/:id', async (req, res) => {
    await produto.findByPk(req.params.id)
        .then(prod => {
            return res.json({
                error: false,
                prod
            });
        }).catch(function (error) {
            return res.status(400).json({
                error: true,
                message: "Erro: Código não encontrado."
            });
        });
});

// Listar todas as compras que possuem o produto específico
app.get('/produto/:id/compras', async (req, res) => {
    await itemcompra.findAll({
        where: { ProdutoId: req.params.id }
    })
        .then(itensc => {
            return res.json({
                error: false,
                itensc
            });
        }).catch(function (error) {
            return res.status(400).json({
                error: true,
                message: "Erro: não foi possível conectar."
            });
        });
});

// Listar todos os produtos em ordem alfabética
app.get('/listaprodutos', async (req, res) => {
    await produto.findAll({
        order: [['nome', 'ASC']]
    }).then(function (produtos) {
        res.json({ produtos });
    });
});

// Listar a quantidade total de servicos cadastrados
app.get('/quantidadeservicos', async (req, res) => {
    await produto.count('id').then(function (servicos) {
        res.json({ servicos });
    });
});

// Listar servico específico
app.get('/servico/:id', async (req, res) => {
    await servico.findByPk(req.params.id)
        .then(serv => {
            return res.json({
                error: false,
                serv
            });
        }).catch(function (error) {
            return res.status(400).json({
                error: true,
                message: "Erro: Código não encontrado."
            });
        });
});

// Listar todos os pedidos que possuem o serviço específico
app.get('/servico/:id/pedidos', async (req, res) => {
    await itempedido.findAll({
        where: { ServicoId: req.params.id }
    })
        .then(itens => {
            return res.json({
                error: false,
                itens
            });
        }).catch(function (error) {
            return res.status(400).json({
                error: true,
                message: "Erro: não foi possível conectar."
            });
        });
});

// Listar todos os serviços em ordem alfabética
app.get('/listaservicos', async (req, res) => {
    await servico.findAll({
        order: [['nome', 'ASC']]
    }).then(function (servicos) {
        res.json({ servicos });
    });
});

/* ================================================================================ */
// EXCLUIR

// Excluir cliente
app.delete('/excluir-cliente/:id', async (req, res) => {

    // Verifica se o cliente não existe
    if (!await cliente.findByPk(req.params.id)) {
        return res.status(400).json({
            error: true,
            message: "Erro: Cliente não existe."
        });
    };

    // Se o cliente existir, faz a exclusão do cliente
    await cliente.destroy({
        where: { id: req.params.id }
    }).then(function () {
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
app.delete('/excluir-compra/:id', async (req, res) => {
    if (!await compra.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Erro: Compra não existe."
        });
    };

    // Se a compra existir, faz a exclusão da compra
    await compra.destroy({
        where: { id: req.params.id }
    }).then(function () {
        return res.json({
            error: false,
            message: "Compra excluída com sucesso!"
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir a compra."
        });
    });
});

// Excluir ItemCompra
app.delete('/excluir-itemcompra/:CompraId/:ProdutoId', async (req, res) => {

    // Verifica se compra não existe
    if (!await compra.findByPk(req.params.CompraId)) {
        return res.status(400).json({
            error: true,
            message: "Erro: Compra não existe."
        });
    };

    // Verifica se produto não existe
    if (!await produto.findByPk(req.params.ProdutoId)) {
        return res.status(400).json({
            error: true,
            message: "Erro: Produto não existe."
        });
    };

    // Se a compra e o produto existirem, faz a exclusão do itemcompra
    await itemcompra.destroy({
        where: Sequelize.and({ ProdutoId: req.params.ProdutoId },
            { CompraId: req.params.CompraId })
    }).then(function () {
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
app.delete('/excluir-itempedido/:PedidoId/:ServicoId', async (req, res) => {

    // Verifica se pedido não existe
    if (!await pedido.findByPk(req.params.PedidoId)) {
        return res.status(400).json({
            error: true,
            message: "Erro: Pedido não existe."
        });
    };

    // Verifica se serviço não existe
    if (!await servico.findByPk(req.params.ServicoId)) {
        return res.status(400).json({
            error: true,
            message: "Erro: Serviço não existe."
        });
    };

    // Se o pedido e o servico existirem, faz a exclusão do itempedido
    await itempedido.destroy({
        where: Sequelize.and({ ServicoId: req.params.ServicoId },
            { PedidoId: req.params.PedidoId })
    }).then(function () {
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
app.delete('/excluir-pedido/:id', async (req, res) => {
    if (!await pedido.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Erro: Pedido não existe."
        });
    };

    // Se o pedido existir, faz a exclusão do pedido
    await pedido.destroy({
        where: { id: req.params.id }
    }).then(function () {
        return res.json({
            error: false,
            message: "Pedido excluído com sucesso!"
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir o pedido."
        });
    });
});

// Excluir produto
app.delete('/excluir-produto/:id', async (req, res) => {

    // Verifica se o produto não existe
    if (!await produto.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Erro: Produto não existe."
        });
    };

    // Se o produto existir, faz a exclusão do produto
    await produto.destroy({
        where: { id: req.params.id }
    }).then(function () {
        return res.json({
            error: false,
            message: "Produto excluído com sucesso!"
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Erro: Impossível excluir produto."
        });
    });
});

// Excluir servico
app.delete('/excluir-servico/:id', async (req, res) => {

    // Verifica se o servico não existe
    if (!await servico.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Erro: Serviço não existe."
        });
    };

    // Se o serviço existir, faz a exclusão do serviço
    await servico.destroy({
        where: { id: req.params.id }
    }).then(function () {
        return res.json({
            error: false,
            message: "Serviço excluído com sucesso!"
        });
    }).catch(function (erro) {
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