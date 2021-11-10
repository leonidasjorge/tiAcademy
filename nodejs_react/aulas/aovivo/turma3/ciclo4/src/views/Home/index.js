import { Container } from "reactstrap";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Home</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/listar-cliente" className="m-auto btn btn-outline-success btn-sm">
                            Clientes
                        </Link>
                    </div>
                    <div className="p-2">
                        <Link to="/listar-pedido" className="m-auto btn btn-outline-success btn-sm">
                            Pedidos
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}