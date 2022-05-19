import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";

export const ped = (props) => {

    // console.log(props.match.params.id);

    // Iniciando um array que irá receber os dados
    // data = trás os dados do banco de dados
    // setdata = permite-me alterar estes dados
    const [data, setData] = useState([]);

    const [id, setId] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    // Função que irá passar o 'get' da API
    // Este 'get' irá trazer uma resposta que será mostrada no "console.log"
    const getPedidos = async () => {
        await axios.get(api + "/listapedidos")
            .then((response) => {
                console.log(response.data.ped);
                setData(response.data.ped);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: sem conexão com a API.'
                });

                // console.log("Erro: sem conexão com a API.")
            });
    };

    // Aqui chama-se a função acima
    useEffect(() => {
        getPedidos();
    }, [id]);

    return (
        <div>
            <Container>
                <div>
                    <h1>Pedidos</h1>
                </div>

                {status.type == 'error' ? <Alert color="danger"> {status.message}</Alert> : ""}

                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Data</th>
                            <th>ClienteId</th>
                            <th>Visualizar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.ClienteId}>
                                <td>{item.dataPedido}</td>
                                <td>{item.id}</td>
                                <td className="text-center">
                                    <Link to={"/listar-pedidos/"}
                                        className="btn btn-outline-primary btn-sm">
                                        Consultar
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};