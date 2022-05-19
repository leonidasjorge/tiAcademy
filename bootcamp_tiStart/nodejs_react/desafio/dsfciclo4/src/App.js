import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './views/Home';
import { Menu } from './components/Menu';

// Atualizar
import { EditarCliente } from './views/Cliente/Atualizar';
  import { EditarCompra } from './views/Cliente/CompraEditar';
    import { EditarItemCompra } from './views/Cliente/ItemCompraEditar';
  import { EditarPedido } from './views/Cliente/PedidoEditar';
    import { EditarItemPedido } from './views/Cliente/ItemPedidoEditar';
import { EditarProduto } from './views/Produto/Atualizar';
import { EditarServico } from './views/Servico/Atualizar';

// Inserir
import { InserirCliente } from './views/Cliente/Inserir';
  import { InserirCompra } from './views/Compra/Inserir';
  import { InserirItemCompra } from './views/ItemCompra/Inserir';
  import { InserirPedido } from './views/Pedido/Inserir';
  import { InserirItemPedido } from './views/ItemPedido/Inserir';
import { InserirProduto } from './views/Produto/Inserir';
import { InserirServico } from './views/Servico/Inserir';

// Listar
import { ListarClientes } from './views/Cliente/Listar/';
  import { ComprasCliente } from './views/Cliente/Compras';
    import { ItensCompraCliente } from './views/Cliente/ItemCompra/';
  import { PedidosCliente } from './views/Cliente/Pedidos';
    import { ItensPedidoCliente } from './views/Cliente/ItemPedido/';
import { ListarCompras } from './views/Compra/Listar/';
import { ListarPedidos } from './views/Pedido/Listar/';
import { ListarProdutos } from './views/Produto/Listar/';
import { ListarServicos } from './views/Servico/Listar/';

function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />

          {/* ==================================================================== */}
          {/* Atualizar */}

          {/* Atualizar Cliente */}
          <Route path="/editar-cliente/:id" component={EditarCliente} />

          {/* Atualizar Compra */}
          <Route path="/editar-compra/:id" component={EditarCompra} />

          {/* Atualizar Item Compra */}
          <Route path="/editar-itemcompra/:id/:ProdutoId" component={EditarItemCompra} />

          {/* Atualizar Pedido */}
          <Route path="/editar-pedido/:id" component={EditarPedido} />

          {/* Atualizar Item Pedido */}
          <Route path="/editar-itempedido/:id/:ServicoId" component={EditarItemPedido} />

          {/* Atualizar Produto */}
          <Route path="/editar-produto/:id" component={EditarProduto} />

          {/* Atualizar Serviço */}
          <Route path="/editar-servico/:id" component={EditarServico} />

          {/* ==================================================================== */}
          {/* Inserir */}

          {/* Inserir Cliente */}
          <Route path="/inserir-cliente" component={InserirCliente} />

          {/* Inserir Compra */}
          <Route path="/inserir-compra/:id" component={InserirCompra} />

          {/* Inserir ItemCompra */}
          <Route path="/inserir-itemcompra/:id" component={InserirItemCompra} />

          {/* Inserir Pedido */}
          <Route path="/inserir-pedido/:id" component={InserirPedido} />

          {/* Inserir ItemPedido */}
          <Route path="/inserir-itempedido/:id" component={InserirItemPedido} />

          {/* Inserir Produto */}
          <Route path="/inserir-produto" component={InserirProduto} />

          {/* Inserir Serviço */}
          <Route path="/inserir-servico" component={InserirServico} />

          {/* ==================================================================== */}
          {/* Listar */}

          {/* Listar Clientes */}
          <Route path="/listar-clientes" component={ListarClientes} />

          {/* Listar Compras de um Cliente Específico */}
          <Route path="/compras-cliente/:id" component={ComprasCliente} />

          {/* Listar Compras */}
          <Route path="/listar-compras" component={ListarCompras} />

          {/* Listar todos os itemcompra de uma compra específica */}
          <Route path="/listar-itenscompra/:id" component={ItensCompraCliente} />

          {/* Listar Pedidos de um Cliente Específico */}
          <Route path="/pedidos-cliente/:id" component={PedidosCliente} />

          {/* Listar Pedidos */}
          <Route path="/listar-pedidos" component={ListarPedidos} />

          {/* Listar todos os itempedido de um pedido específico */}
          <Route path="/listar-itenspedido/:id" component={ItensPedidoCliente} />

          {/* Listar Produtos */}
          <Route path="/listar-produtos" component={ListarProdutos} />

          {/* Listar Serviços */}
          <Route path="/listar-servicos" component={ListarServicos} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;