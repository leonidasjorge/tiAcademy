import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Form, FormGroup, Input, InputGroup, InputGroupText, Table } from "reactstrap";
import { api } from "../../../config";
import { } from "../../../App.css";

export const ListarCompras = () => {

    // Iniciando um array que irá receber os dados
    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    // Função que irá passar o 'get' da API
    // Este 'get' irá trazer uma resposta que será mostrada no "console.log"
    const getCompras = async () => {
        await axios.get(api + "/lista-compras")
            .then((response) => {
                // console.log(response.data.compras);

                setData(response.data.compras);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: sem conexão com a API.'
                });

                // console.log("Erro: sem conexão com a API.")
            });
    };

    const apagarCompra = async (idCompra) => {
        // console.log(idCompra);

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.get(api + "/excluircompra/" + idCompra, { headers })
            .then((response) => {
                // console.log(response.data.error);

                getCompras();
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: não foi possível se conectar a API.'
                });
            });
    };

    // Aqui chama-se a função acima
    useEffect(() => {
        getCompras();
    }, []);

    return (
        <div>
            <Container>
                <div className="p-2">
                    {status.type === 'error' ? <Alert color="danger"> {status.message} </Alert> : ""}
                </div>

                <div>
                    <div className="text-center">
                        <h1>Compras</h1>
                    </div>

                    <div>
                        <Form className="float-start w-25">
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupText>
                                        🔍
                                    </InputGroupText>

                                    <Input type="search" className="form-control form-control-dark" placeholder="Pesquisar pelo Nome" aria-label="Pesquisar pelo Nome" />
                                </InputGroup>
                            </FormGroup>
                        </Form>

                        <div className="float-end">
                            <Link to="/inserir-cliente" className="btn btn-outline-success btn-sm" title="Cadastrar um novo cliente">
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
                                <th>Data</th>
                                <th>ID Cliente</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(compras => (
                                <tr key={compras.id}>
                                    <th scope="row">{compras.id}</th>
                                    <td>{compras.data}</td>
                                    <td>{compras.ClienteId}</td>
                                    <td className="d-flex justify-content-center">
                                        <div className="pl">
                                            <Link to={"/listar-itenscompra/" + compras.id} className="btn btn-outline-primary btn-sm" title="Itens desta compra">
                                                Itens
                                            </Link>
                                        </div>
                                        <div className="pl">
                                            <Link to={"/editar-pedido/" + compras.id}
                                                className="btn btn-outline-warning btn-sm" title="Atualizar dados deste pedido">
                                                Editar
                                            </Link>
                                        </div>
                                        <div className="pl">
                                            <span className="btn btn-outline-danger btn-sm" title="Excluir este pedido com todos os seus dados" onClick={() => apagarCompra(compras.id)}>
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