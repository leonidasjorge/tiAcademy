import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Menu } from './components/Menu';
import { EditarCliente } from './views/Cliente/Editar';
import { InserirCliente } from './views/Cliente/Inserir';
import { ListarCliente } from './views/Cliente/Listar';
import { Pedidos } from './views/Cliente/Pedidos';
import { Home } from './views/Home';
import { ListarPedido } from './views/Pedido/ListarPedido';

function App() {
  return (
    <div>
      <Menu />
      <Router>
        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route path = "/listar-cliente" component = {ListarCliente} />
          <Route path = "/pedidos-cliente/:id" component = {Pedidos} />
          <Route path = "/listar-pedido" component = {ListarPedido} />
          <Route path = "/inserir-cliente" component = {InserirCliente} />
          <Route path = "/editar-cliente/:id" component = {EditarCliente}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
