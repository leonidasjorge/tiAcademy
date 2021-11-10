import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Form, FormGroup, Input, InputGroup, InputGroupText, Table } from "reactstrap";
import { api } from "../../../config";
import { } from "../../../App.css";

export const PedidosCliente = (props) => {

    //console.log(props.match.params.id)

    const [data, setData] = useState([]);
    const [id] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getPedidos = async () => {
        await axios.get(api + "/cliente/" + id + "/listar-pedidos")
            .then((response) => {
                console.log(response.data.peds);
                setData(response.data.peds);
            })
            .catch(() => {
                console.log("Erro: sem conexão com a API.")
            });
    };

    const apagarPedido = async (idPedido) => {
        console.log(idPedido);

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.delete(api + "/excluir-pedido/" + idPedido, { headers })
            .then((response) => {
                setStatus({
                    type: 'success',
                    message: response.data.message
                });

                getPedidos();
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: não foi possível se conectar a API.'
                });
            });
    };

    useEffect(() => {
        getPedidos();
    }, [id]);

    return (
        <div>
            <Container>
                <div>
                    <div className="text-center">
                        <h1>Pedidos do Cliente</h1>
                    </div>

                    <hr className="m-1"></hr>

                    <div className="d-flex justify-content-center">
                        {status.type === 'error' ? <Alert color="danger">
                            {status.message}</Alert> : " "}
                        {status.type === 'success' ? <Alert color="success">
                            {status.message}</Alert> : " "}
                    </div>

                    <div>
                        <Form className="float-start w-25">
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupText>
                                        🔍
                                    </InputGroupText>

                                    <Input type="search" className="form-control form-control-dark" placeholder="Pesquisar pela Data" aria-label="Pesquisar pela Data" />
                                </InputGroup>
                            </FormGroup>
                        </Form>

                        <div className="float-end">
                            <Link to={"/inserir-pedido/" + id} className="btn btn-outline-success btn-sm" title="Cadastrar um novo Pedido para este Cliente">
                                Cadastrar
                            </Link>
                        </div>
                    </div>
                </div>

                <div>
                    <Table hover className="text-center">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>ID Cliente</th>
                                <th>Data do Pedido</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(peds => (
                                <tr key={peds.id}>
                                    <td>{peds.id}</td>
                                    <td>{peds.ClienteId}</td>
                                    <td>{peds.dataPedido}</td>
                                    <td className="d-flex justify-content-center">
                                        <div className="pl">
                                            <Link to="/listar-clientes" className="btn btn-outline-primary btn-sm" title="Listar todos os Clientes ordenados pelo Nome">
                                                Clientes
                                            </Link>
                                        </div>
                                        <div className="pl">
                                            <Link to={"/listar-itenspedido/" + peds.id} className="btn btn-outline-primary btn-sm" title="Itens deste Pedido">
                                                Itens
                                            </Link>
                                        </div>
                                        <div className="pl">
                                            <Link to={"/editar-pedido/" + peds.id}
                                                className="btn btn-outline-warning btn-sm" title="Atualizar dados deste Pedido">
                                                Editar
                                            </Link>
                                        </div>
                                        <div className="pl">
                                            <span className="btn btn-outline-danger btn-sm" title="Excluir este Pedido com todos os seus dados" onClick={() => apagarPedido(peds.id)}>
                                                Excluir
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    );
};