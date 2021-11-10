import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Form, FormGroup, Input, InputGroup, InputGroupText, Table } from "reactstrap";
import { api } from "../../../config";
import { } from "../../../App.css";

export const ListarClientes = () => {

    // Iniciando um array que irá receber os dados
    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    // Função que irá passar o 'get' da API
    // Este 'get' irá trazer uma resposta que será mostrada no "console.log"
    const getClientes = async () => {
        await axios.get(api + "/lista-clientes")
            .then((response) => {
                // console.log(response.data.clientes);
                
                setData(response.data.clientes);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: sem conexão com a API.'
                });

                // console.log("Erro: sem conexão com a API.")
            });
    };

    const apagarCliente = async (idCliente) => {
        console.log(idCliente);

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.delete(api + "/excluir-cliente/" + idCliente, { headers })
            .then((response) => {
                setStatus({
                    type: 'success',
                    message: response.data.message
                });
                
                getClientes();
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
        getClientes();
    }, []);

    return (
        <div>
            <Container>
                <div>
                    <div className="text-center">
                        <h1>Clientes</h1>
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

                                    <Input type="search" className="form-control form-control-dark" placeholder="Pesquisar pelo Nome" aria-label="Pesquisar pelo Nome" />
                                </InputGroup>
                            </FormGroup>
                        </Form>

                        <div className="float-end">
                            <Link to="/inserir-cliente" className="btn btn-outline-success btn-sm" title="Cadastrar um novo Cliente">
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
                                <th>Nome</th>
                                <th>Endereço</th>
                                <th>Cidade</th>
                                <th>Estado</th>
                                <th>Data Nascimento</th>
                                <th>Cliente Desde</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(clientes => (
                                <tr key={clientes.id}>
                                    <th scope="row">{clientes.id}</th>
                                    <td>{clientes.nome}</td>
                                    <td>{clientes.endereco}</td>
                                    <td>{clientes.cidade}</td>
                                    <td>{clientes.uf}</td>
                                    <td>{clientes.nascimento}</td>
                                    <td>{clientes.clienteDesde}</td>
                                    <td className="d-flex justify-content-center">
                                        <div className="pl">
                                            <Link to={"/compras-cliente/" + clientes.id}
                                                className="btn btn-outline-primary btn-sm" title="Todas as Compras deste Cliente">
                                                Compras
                                            </Link>
                                        </div>
                                        <div className="pl">
                                            <Link to={"/pedidos-cliente/" + clientes.id}
                                                className="btn btn-outline-primary btn-sm" title="Todos os Pedidos deste Cliente">
                                                Pedidos
                                            </Link>
                                        </div>
                                        <div className="pl">
                                            <Link to={"/editar-cliente/" + clientes.id}
                                                className="btn btn-outline-warning btn-sm" title="Atualizar dados deste Cliente">
                                                Editar
                                            </Link>
                                        </div>
                                        <div className="pl">
                                            <span className="btn btn-outline-danger btn-sm" title="Excluir este Cliente com todos os seus dados" onClick={() => apagarCliente(clientes.id)}>
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