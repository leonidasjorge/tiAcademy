import { Link } from "react-router-dom";
import { Container } from "reactstrap";

export const Home = () => {
    return (
        <div>
            <Container>
                <div>
                    <div className="text-center">
                        <h1>Home</h1>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="p-2">
                            <Link to="/listar-clientes"
                                className="m-auto btn btn-outline-success btn-sm"
                                btn-sm title="Listar todos os Clientes ordenados pelo Nome"> Clientes
                            </Link>
                        </div>
                        <div className="p-2">
                            <Link to="/listar-compras"
                                className="m-auto btn btn-outline-success btn-sm"
                                btn-sm title="Listar todas as Compras ordenadas pela Data"> Compras
                            </Link>
                        </div>
                        <div className="p-2">
                            <Link to="/listar-pedidos"
                                className="m-auto btn btn-outline-success btn-sm"
                                btn-sm title="Listar todos os Pedidos ordenados pela Data"> Pedidos
                            </Link>
                        </div>
                        <div className="p-2">
                            <Link to="/listar-produtos"
                                className="btn btn-outline-success btn-sm"
                                btn-sm title="Listar todos os Produtos ordenados pelo Nome"> Produtos
                            </Link>
                        </div>
                        <div className="p-2">
                            <Link to="/listar-servicos"
                                className="btn btn-outline-success btn-sm"
                                btn-sm title="Listar todos os Serviços ordenados pelo Nome"> Serviços
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};