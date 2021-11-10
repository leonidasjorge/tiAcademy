import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";
import { api } from "../../../config";

export const ListarCliente = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getClientes = async () => {
        await axios.get(api + "/listaclientes")
            .then((Response) => {
                // console.log(Response.data.clientes);
                setData(Response.data.clientes);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: "Erro: sem conexão com a API."
                });

                // console.log("Erro: sem conexão com a API.")
            });
    };

    const apagarCliente = async(idCliente) => {
        console.log(idCliente);

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.get(api + "/excluircliente/" + idCliente, {headers})
        .then((response) => {
            console.log(response.data.error);
            getClientes();
        })
        .catch(() => {
            setStatus({
                type: 'error',
                message: 'Erro: não foi possível se conectar a API.'
            });
        });
    };

    useEffect(() => {
        getClientes();
    }, []);

    return (
        <div>
            <Container>
                <div className="p-2">
                    {status.type === 'error' ? <Alert color="danger"> {status.message} </Alert> : ""}
                </div>

                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Visualizar Clientes</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/inserir-cliente" className="btn btn-outline-success btn-sm">
                            Cadastrar
                        </Link>
                    </div>
                </div>
                
                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Data de Nascimento</th>
                            <th>Cliente Desde</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(clientes => (
                            <tr key={clientes.id}>
                                <th scope="row">{clientes.id}</th>
                                <td>{clientes.nome}</td>
                                <td>{clientes.nascimento}</td>
                                <td>{clientes.createdAt}</td>
                                <td className="text-center">
                                    <Link to={"/pedidos-cliente/" + clientes.id}
                                        className="btn btn-outline-primary btn-sm">
                                        Consultar
                                    </Link>
                                    <Link to={"/editar-cliente/" + clientes.id}
                                        className="btn btn-outline-warning btn-sm">
                                        Editar
                                    </Link>
                                    <span className="btn btn-outline-danger btn-sm" onClick={() => apagarCliente(clientes.id)}>
                                        Excluir
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container >
        </div >
    )
}