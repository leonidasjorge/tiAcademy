const cors        = require('cors');
const express     = require('express');
const models      = require('./models');
const {Sequelize} = require('./models');

const app         = express();
app.use(cors());
app.use(express.json());

let cliente       = models.Cliente;
let itempedido    = models.ItemPedido;
let pedido        = models.Pedido;
let servico       = models.Servico;

app.get('/', function(req, res) {
    res.send('Olá, mundo!');
});

// Inserir Cliente.
app.post('/inserircliente', async(req, res) => {
    await cliente.create(
        req.body
    ).then(cli => {
        return res.json({
            error: false,
            message: "Cliente inserido com sucesso.",
            cli
        })
    }).catch(erro => {
        return res.status(400).json({
            error: true,
            message: "Não foi possível inserir o cliente."
        });
    });
});

// Inserir pedido de acordo com o id do cliente informado.
app.post('/cliente/:id/pedido', async(req, res) => {
    const ped = {
        data: req.body.data,
        ClienteId: req.params.id
    };

    // Verifica se o cliente não existe.
    if (!await cliente.findByPk(req.params.id)) {
        return res.status(400).json({
            error: true,
            message: "Cliente não existe."
        });
    };

    await pedido.create(ped)
    .then(order => {
        return res.json({
            error: false,
            messsage: "Pedido inserido com sucesso!",
            order
        });
    }).catch(erro => {
        return res.status(400).json({
            error: true,
            message: "Não foi possível inserir o pedido."
        });
    });
});

// Listar todos os pedidos de um cliente específico
app.get("/cliente/:id/pedidos", async(req, res) => {
    if(!await cliente.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Cliente não encontrado."
        });
    };

    await pedido.findAll({
        where: {ClienteId: req.params.id}
    })
    .then(peds => {
        return res.json({
            error: false,
            peds
        });
    })
    .catch(erro => {
        return res.status(400).json({
            error: true,
            message: "Não foi possível retornar pedidos."
        });
    });
});

// Listar todos os clientes em ordem alfabética
app.get('/listaclientes', async(req, res) => {
    await cliente.findAll({
        order: [['nome', 'ASC']]
    }).then(function(clientes) {
        res.json({clientes});
    });
});

// Lista todos os clientes e seus pedidos.
app.get('/listaclientestudo/', async(req, res) => {
    await cliente.findAll({
        include:[{all:true}]
    }).then(cli => {
        return res.json({
            error: false,
            cli
        })
    })
})

// Editar pedido do cliente.
app.put('/cliente/:id/pedido', async(req, res) => {
    const ped = {
        data: req.body.data,
        ClienteId: req.params.id
    }

    // Verifica se o cliente não existe.
    if (!await cliente.findByPk(req.params.id)) {
        return res.status(400).json({
            error: true,
            message: "Cliente não existe."
        });
    };

    // Se o cliente existir, faz a alteração do pedido;
    await pedido.update(ped, {
        where: Sequelize.and({ClienteId: req.params.id},
            {id: req.body.id})
    }).then(pedidos => {
        return res.json({
            error: false,
            message: "Pedido alterado com sucesso!",
            pedidos
        }).catch(erro => {
            return res.status(400).json({
                error: true,
                message: "Erro: Não foi possível alterar o pedido."
            });
        });
    });
});

// Excluir cliente.
app.delete('/excluircliente/:id', async(req, res) => {
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
            message: "Impossível excluir cliente."
        })
    })
})

let port = process.env.PORT || 3001;

app.listen(port, (req, res) => {
    console.log('Servidor está ativo: http://localhost:3001');
});
