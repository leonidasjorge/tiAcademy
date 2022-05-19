import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Form, FormGroup, Input, InputGroup, InputGroupText, Table } from "reactstrap";
import { api } from "../../../config";
import { } from "../../../App.css";

export const ItensCompraCliente = (props) => {

    //console.log(props.match.params.id)

    const [data, setData] = useState([]);
    const [id] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getItemCompras = async () => {
        await axios.get(api + "/compra/" + id + "/lista-itenscompra")
            .then((response) => {
                console.log(response.data.itemc);
                setData(response.data.itemc);
            })
            .catch(() => {
                console.log("Erro: sem conexão com a API.")
            });
    };

    const apagarItemCompra = async (CompraId, ProdutoId) => {
        // console.log(CompraId, ProdutoId);

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.delete(api + "/excluir-itemcompra/" + CompraId + "/" + ProdutoId, { headers })
            .then((response) => {
                setStatus({
                    type: 'success',
                    message: response.data.message
                });

                getItemCompras();
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: não foi possível se conectar a API.'
                });
            });
    };

    useEffect(() => {
        getItemCompras();
    }, []);

    return (
        <div>
            <Container>
                <div>
                    <div className="text-center">
                        <h1>Itens da Compra</h1>
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
                            <Link to={"/inserir-itemcompra/" + id} className="btn btn-outline-success btn-sm" title="Cadastrar um novo Item para esta Compra">
                                Cadastrar
                            </Link>
                        </div>
                    </div>
                </div>

                <div>
                    <Table hover className="text-center">
                        <thead>
                            <tr>
                                <th>ID Compra</th>
                                <th>ID Produto</th>
                                <th>Quantidade</th>
                                <th>Valor</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(itemc => (
                                <tr key={itemc.CompraId}>
                                    <th scope="row">{itemc.CompraId}</th>
                                    <td>{itemc.ProdutoId}</td>
                                    <td>{itemc.quantidade}</td>
                                    <td>{itemc.valor}</td>
                                    <td className="d-flex justify-content-center">
                                        <div className="pl">
                                            <Link to="/listar-clientes" className="btn btn-outline-primary btn-sm" title="Listar todos os Clientes ordenados pelo Nome">
                                                Clientes
                                            </Link>
                                        </div>
                                        <div className="pl">
                                            <Link to={"/editar-itemcompra/" + itemc.CompraId + "/" + itemc.ProdutoId}
                                                className="btn btn-outline-warning btn-sm" title="Atualizar dados deste Item da Compra">
                                                Editar
                                            </Link>
                                        </div>
                                        <div className="pl">
                                            <span className="btn btn-outline-danger btn-sm" title="Excluir este Item da Compra" onClick={() => apagarItemCompra(itemc.CompraId, itemc.ProdutoId)}>
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