import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Table } from "reactstrap";
import { api } from "../../../config";

export const Pedidos = (props) => {

    //console.log(props.match.params.id)

    const [data, setData] = useState([]);
    const [id] = useState(props.match.params.id);

    useEffect(() => {
        const getPedidos = async() => {
            await axios.get(api + "/cliente/" + id + "/pedidos")
                .then((response) => {
                    console.log(response.data.peds);
                    setData(response.data.peds);
                })
                .catch(() => {
                    console.log("Erro: sem conexão com a API.")
                });
        };
        getPedidos();
    }, [id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Pedidos do Cliente</h1>
                    </div>

                    <div className="p-2">
                        <Link to="/listar-cliente" className="btn btn-outline-success btn-sm">
                            Clientes
                        </Link>
                    </div>
                    <div className="p-2">
                        <Link to="/listar-pedido" className="btn btn-outline-success btn-sm">
                            Pedidos
                        </Link>
                    </div>
                </div>

                <Table borderless>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>ID Cliente</th>
                            <th>Data do Pedido</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(peds => (
                            <tr key={peds.id}>
                                <td>{peds.id}</td>
                                <td>{peds.ClienteId}</td>
                                <td>{peds.data}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};