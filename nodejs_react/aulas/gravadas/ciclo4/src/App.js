import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { Home } from './views/Home';
import { Menu } from './components/Menu';

// Atualizar
import { AtualizarClientes } from './views/Cliente/Atualizar/';
import { AtualizarItemPedidos } from './views/ItemPedido/Atualizar/';
import { AtualizarPedidos } from './views/Pedido/Atualizar/';
import { AtualizarServicos } from './views/Servico/Atualizar/';

// Excluir
import { ExcluirClientes } from './views/Cliente/Excluir/';
import { ExcluirItemPedidos } from './views/ItemPedido/Excluir/';
import { ExcluirPedidos } from './views/Pedido/Excluir/';
import { ExcluirServicos } from './views/Servico/Excluir/';

// Inserir
import { InserirClientes } from './views/Cliente/Inserir/';
import { InserirItemPedidos } from './views/ItemPedido/Inserir/';
import { InserirPedidos } from './views/Pedido/Inserir/';
import { InserirServico } from './views/Servico/Inserir/';

// Listar
import { Item } from './views/Servico/Item';
import { ListarClientes } from './views/Cliente/Listar/';
import { ListarItemPedidos } from './views/ItemPedido/Listar/';
import { ListarPedidos } from './views/Pedido/Listar/';
import { ListarServicos } from './views/Servico/Listar/';

function App() {
  return (
    <div>
      <Router>
        <Menu/>
        <Switch>
          <Route exact path="/" component={Home}/>

          {/* Atualizar */}
          <Route path="/atualizar-clientes" component={AtualizarClientes}/>
          <Route path="/atualizar-itempedidos" component={AtualizarItemPedidos}/>
          <Route path="/atualizar-pedidos" component={AtualizarPedidos}/>
          <Route path="/atualizar-servicos" component={AtualizarServicos}/>

          {/* Excluir */}
          <Route path="/excluir-clientes" component={ExcluirClientes}/>
          <Route path="/excluir-itempedidos" component={ExcluirItemPedidos}/>
          <Route path="/excluir-pedidos" component={ExcluirPedidos}/>
          <Route path="/excluir-servicos" component={ExcluirServicos}/>

          {/* Inserir */}
          <Route path="/inserir-clientes" component={InserirClientes}/>
          <Route path="/inserir-itempedidos" component={InserirItemPedidos}/>
          <Route path="/inserir-pedidos" component={InserirPedidos}/>
          <Route path="/inserir-servico" component={InserirServico}/>

          {/* Listar */}
          <Route path="/listar-clientes" component={ListarClientes}/>
          <Route path="/listar-itempedidos" component={ListarItemPedidos}/>
          {/* <Route path="/listar-pedidos" component={ListarPedidos}/> */}
          <Route path="/listar-pedidos/:id" component={Item}/>
          <Route path="/listar-servicos" component={ListarServicos}/>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
