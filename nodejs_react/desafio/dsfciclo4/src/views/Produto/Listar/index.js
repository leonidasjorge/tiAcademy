import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Form, FormGroup, Input, InputGroup, InputGroupText, Table } from "reactstrap";
import { api } from "../../../config";
import { } from "../../../App.css";

export const ListarProdutos = () => {

    // Iniciando um array que irá receber os dados
    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    // Função que irá passar o 'get' da API
    // Este 'get' irá trazer uma resposta que será mostrada no "console.log"
    const getProdutos = async () => {
        await axios.get(api + "/listaprodutos")
            .then((response) => {
                // console.log(response.data.produtos);
                setData(response.data.produtos);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: "Erro: sem conexão com a API."
                });

                // console.log("Erro: sem conexão com a API.")
            });
    };

    const apagarProduto = async (idProduto) => {
        console.log(idProduto);

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.delete(api + "/excluir-produto/" + idProduto, { headers })
            .then((response) => {
                setStatus({
                    type: 'success',
                    message: response.data.message
                });

                getProdutos();
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
        getProdutos();
    }, []);

    return (
        <div>
            <Container>
                <div>
                    <div className="text-center">
                        <h1>Produtos</h1>
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
                            <Link to="/inserir-produto" className="btn btn-outline-success btn-sm" title="Cadastrar um novo produto">
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
                                <th>Descrição</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => (
                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.nome}</td>
                                    <td>{item.descricao}</td>
                                    <td className="d-flex justify-content-center">
                                        <div>
                                            <Link to={"/listar-compras/" + item.id}
                                                className="btn btn-outline-primary btn-sm" title="Todas as Compras deste Produto">
                                                Compras
                                            </Link>
                                        </div>
                                        <div className="pl">
                                            <Link to={"/editar-produto/" + item.id}
                                                className="btn btn-outline-warning btn-sm" title="Atualizar dados deste Produto">
                                                Editar
                                            </Link>
                                        </div>
                                        <div className="pl">
                                            <span className="btn btn-outline-danger btn-sm" title="Excluir este Produto com todos os seus dados" onClick={() => apagarProduto(item.id)}>
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