import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const EditarCompra = (props) => {

    const [id, setId] = useState(props.match.params.id);
    const [data, setData] = useState('');
    const [ClienteId, setClienteId] = useState('');

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const editCompra = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.put(api + "/compra/" + id,
            { id, data, ClienteId }, { headers })
            .then((response) => {
                setStatus({
                    type: 'success',
                    message: 'Atualização da Compra feita com sucesso!'
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
        const getCompra = async () => {
            await axios(api + "/compra/" + id)
                .then((response) => {
                    setId(response.data.comp.id);
                    setData(response.data.comp.data);
                    setClienteId(response.data.comp.ClienteId);
                })
                .catch(() => {
                    console.log("Erro: Não foi possível conectar-se a API.")
                })
        }
        getCompra();
    }, [id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Editar Compra</h1>
                    </div>
                    <div className="mt">
                        <Link to="/listar-clientes" className="m-auto btn btn-outline-primary btn-sm">
                            Clientes
                        </Link>
                    </div>
                    <div className="mt pl">
                        <Link to={"/compras-cliente/" + ClienteId}
                            className="btn btn-outline-primary btn-sm" title="Todas as Compras deste Cliente">
                            Compras
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

                <Form className="p-2" onSubmit={editCompra}>
                    <FormGroup>
                        <Label>ID Cliente</Label>
                        <Input type="number" name="ClienteId" placeholder="ID do Cliente" defaultValue={ClienteId} disabled required />
                    </FormGroup>

                    <FormGroup>
                        <Label>ID Compra</Label>
                        <Input type="number" name="id" placeholder="ID da Compra" defaultValue={id} disabled required />
                    </FormGroup>

                    <FormGroup>
                        <Label>Data Compra</Label>
                        <Input type="date" name="dataCompra" placeholder="Data da Compra" value={data} onChange={e => setData(e.target.value)} required />
                    </FormGroup>

                    <div className="d-flex">
                        <div className="p-2">
                            <Button type="submit" outline color="warning" size="sm" title="Salvar Atualização da Compra">Salvar</Button>
                        </div>
                    </div>
                </Form>
            </Container>
        </div>
    );
};