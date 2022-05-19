import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const EditarItemPedido = (props) => {

    const [id, setId] = useState(props.match.params.id);
    const [quantidade, setQuantidade] = useState('');
    const [ServicoId, setServicoId] = useState(props.match.params.ServicoId);
    const [valor, setValor] = useState('');

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const editItemPedido = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.put(api + "/itempedido/" + id + "/" + ServicoId,
            { id, quantidade, ServicoId, valor }, { headers })
            .then((response) => {
                setStatus({
                    type: 'success',
                    message: 'Atualização do ItemPedido feita com sucesso!'
                })
                console.log(response.data.type);
                console.log(response.data.message);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Não foi possível conectar-se a API.'
                });
            });
    };

    useEffect(() => {
        const getItemPedido = async () => {
            await axios(api + "/itempedido/" + id + "/" + ServicoId)
                .then((response) => {
                    setId(response.data.itemp.id);
                    setQuantidade(response.data.itemp.quantidade);
                    setServicoId(response.data.itemp.ServicoId);
                    setValor(response.data.itemp.valor);
                })
                .catch(() => {
                    console.log("Erro: Não foi possível conectar-se a API.")
                })
        }
        getItemPedido();
    }, [id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Editar Item Pedido</h1>
                    </div>
                    <div className="mt">
                        <Link to="/listar-clientes" className="m-auto btn btn-outline-primary btn-sm">
                            Clientes
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

                <Form className="p-2" onSubmit={editItemPedido}>
                    <FormGroup>
                        <Label>ID Pedido</Label>
                        <Input type="number" name="id" placeholder="ID do Pedido" defaultValue={id} disabled required />
                    </FormGroup>

                    <FormGroup>
                        <Label>ID Servico</Label>
                        <Input type="number" name="ServicoId" placeholder="ID do Servico" defaultValue={ServicoId} disabled required />
                    </FormGroup>

                    <FormGroup>
                        <Label>Quantidade</Label>
                        <Input type="number" name="quantidade" placeholder="Quantidade" value={quantidade} onChange={e => setQuantidade(e.target.value)} required />
                    </FormGroup>

                    <FormGroup>
                        <Label>Valor</Label>
                        <Input type="number" name="valor" placeholder="Valor" value={valor} onChange={e => setValor(e.target.value)} required />
                    </FormGroup>

                    <div className="d-flex">
                        <div className="p-2">
                            <Button type="submit" outline color="warning" size="sm" title="Salvar Atualização do Item Pedido">Salvar</Button>
                        </div>
                    </div>
                </Form>
            </Container>
        </div>
    );
};