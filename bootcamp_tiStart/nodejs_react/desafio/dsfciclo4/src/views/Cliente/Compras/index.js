import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Form, FormGroup, Input, InputGroup, InputGroupText, Table } from "reactstrap";
import { api } from "../../../config";
import { } from "../../../App.css";

export const ComprasCliente = (props) => {

    //console.log(props.match.params.id)

    const [data, setData] = useState([]);
    const [id] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getCompras = async () => {
        await axios.get(api + "/cliente/" + id + "/listar-compras")
            .then((response) => {
                console.log(response.data.comps);
                setData(response.data.comps);
            })
            .catch(() => {
                console.log("Erro: sem conexão com a API.")
            });
    };

    const apagarCompra = async (idCompra) => {
        console.log(idCompra);

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.delete(api + "/excluir-compra/" + idCompra, { headers })
            .then((response) => {
                setStatus({
                    type: 'success',
                    message: response.data.message
                });

                getCompras();
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: não foi possível se conectar a API.'
                });
            });
    };

    useEffect(() => {
        getCompras();
    }, [id]);

    return (
        <div>
            <Container>
                <div>
                    <div className="text-center">
                        <h1>Compras do Cliente</h1>
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
                            <Link to={"/inserir-compra/" + id} className="btn btn-outline-success btn-sm" title="Cadastrar uma nova Compra para este Cliente">
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
                                <th>Data da Compra</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(comps => (
                                <tr key={comps.id}>
                                    <td>{comps.id}</td>
                                    <td>{comps.ClienteId}</td>
                                    <td>{comps.data}</td>
                                    <td className="d-flex justify-content-center">
                                        <div className="pl">
                                            <Link to="/listar-clientes" className="btn btn-outline-primary btn-sm" title="Listar todos os Clientes ordenados pelo Nome">
                                                Clientes
                                            </Link>
                                        </div>
                                        <div className="pl">
                                            <Link to={"/listar-itenscompra/" + comps.id} className="btn btn-outline-primary btn-sm" title="Itens desta Compra">
                                                Itens
                                            </Link>
                                        </div>
                                        <div className="pl">
                                            <Link to={"/editar-compra/" + comps.id}
                                                className="btn btn-outline-warning btn-sm" title="Atualizar dados desta Compra">
                                                Editar
                                            </Link>
                                        </div>
                                        <div className="pl">
                                            <span className="btn btn-outline-danger btn-sm" title="Excluir esta Compra com todos os seus dados" onClick={() => apagarCompra(comps.id)}>
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