import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Form, FormGroup, Input, InputGroup, InputGroupText, Table } from "reactstrap";
import { api } from "../../../config";
import { } from "../../../App.css";

export const ItensPedidoCliente = (props) => {

    //console.log(props.match.params.id)

    const [data, setData] = useState([]);
    const [id] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getItemPedidos = async () => {
        await axios.get(api + "/pedido/" + id + "/lista-itenspedido")
            .then((response) => {
                console.log(response.data.itemp);
                setData(response.data.itemp);
            })
            .catch(() => {
                console.log("Erro: sem conexão com a API.")
            });
    };

    const apagarItemPedido = async (PedidoId, ServicoId) => {
        // console.log(PedidoId, ServicoId);

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.delete(api + "/excluir-itempedido/" + PedidoId + "/" + ServicoId, { headers })
            .then((response) => {
                setStatus({
                    type: 'success',
                    message: response.data.message
                });

                getItemPedidos();
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: não foi possível se conectar a API.'
                });
            });
    };

    useEffect(() => {
        getItemPedidos();
    }, []);

    return (
        <div>
            <Container>
                <div>
                    <div className="text-center">
                        <h1>Itens do Pedido</h1>
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
                            <Link to={"/inserir-itempedido/" + id} className="btn btn-outline-success btn-sm" title="Cadastrar um novo Item para este Pedido">
                                Cadastrar
                            </Link>
                        </div>
                    </div>
                </div>

                <div>
                    <Table hover className="text-center">
                        <thead>
                            <tr>
                                <th>ID Pedido</th>
                                <th>ID Serviço</th>
                                <th>Quantidade</th>
                                <th>Valor</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(itemp => (
                                <tr key={itemp.PedidoId}>
                                    <th scope="row">{itemp.PedidoId}</th>
                                    <td>{itemp.ServicoId}</td>
                                    <td>{itemp.quantidade}</td>
                                    <td>{itemp.valor}</td>
                                    <td className="d-flex justify-content-center">
                                        <div className="pl">
                                            <Link to="/listar-clientes" className="btn btn-outline-primary btn-sm" title="Listar todos os Clientes ordenados pelo Nome">
                                                Clientes
                                            </Link>
                                        </div>
                                        <div className="pl">
                                            <Link to={"/editar-itempedido/" + itemp.PedidoId + "/" + itemp.ServicoId}
                                                className="btn btn-outline-warning btn-sm" title="Atualizar dados deste Item do Pedido">
                                                Editar
                                            </Link>
                                        </div>
                                        <div className="pl">
                                            <span className="btn btn-outline-danger btn-sm" title="Excluir este Item do Pedido" onClick={() => apagarItemPedido(itemp.PedidoId, itemp.ServicoId)}>
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