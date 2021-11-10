import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const EditarPedido = (props) => {

    const [id, setId] = useState(props.match.params.id);
    const [dataPedido, setDataPedido] = useState('');
    const [ClienteId, setClienteId] = useState('');

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const editPedido = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.put(api + "/pedido/" + id,
            { id, dataPedido, ClienteId }, { headers })
            .then((response) => {
                setStatus({
                    type: 'success',
                    message: 'Atualização do Pedido feita com sucesso!'
                })
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Não foi possível conectar-se a API.'
                });
            });
    };

    useEffect(() => {
        const getPedido = async () => {
            await axios(api + "/pedido/" + id)
                .then((response) => {
                    setId(response.data.ped.id);
                    setDataPedido(response.data.ped.dataPedido);
                    setClienteId(response.data.ped.ClienteId);
                })
                .catch(() => {
                    console.log("Erro: Não foi possível conectar-se a API.")
                })
        }
        getPedido();
    }, [id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Editar Pedido</h1>
                    </div>
                    <div className="mt">
                        <Link to="/listar-clientes" className="m-auto btn btn-outline-primary btn-sm">
                            Clientes
                        </Link>
                    </div>
                    <div className="mt pl">
                        <Link to={"/pedidos-cliente/" + ClienteId}
                            className="btn btn-outline-primary btn-sm" title="Todos os Pedidos deste Cliente">
                            Pedidos
                        </Link>
                    </div>
                </div>

                <hr className="m-1"></hr>

                <div className="d-flex justify-content-center">
                    {status.type === 'error' ? <Alert color="danger">
                        {status.message}</Alert> : " "}
                    {status.type === 'success' ? <Alert color="success">
                        {status.message}</Alert> : " "}
                </div>

                <Form className="p-2" onSubmit={editPedido}>
                    <FormGroup>
                        <Label>ID Cliente</Label>
                        <Input type="number" name="ClienteId" placeholder="ID do Cliente" defaultValue={ClienteId} disabled required />
                    </FormGroup>

                    <FormGroup>
                        <Label>ID Pedido</Label>
                        <Input type="number" name="id" placeholder="ID do Pedido" defaultValue={id} disabled required />
                    </FormGroup>

                    <FormGroup>
                        <Label>Data Pedido</Label>
                        <Input type="date" name="dataPedido" placeholder="Data do Pedido" value={dataPedido} onChange={e => setDataPedido(e.target.value)} required />
                    </FormGroup>

                    <div className="d-flex">
                        <div className="p-2">
                            <Button type="submit" outline color="warning" size="sm" title="Salvar Atualização do Pedido">Salvar</Button>
                        </div>
                    </div>
                </Form>
            </Container>
        </div>
    );
};