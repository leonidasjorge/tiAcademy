import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const EditarItemCompra = (props) => {

    const [id, setId] = useState(props.match.params.id);
    const [quantidade, setQuantidade] = useState('');
    const [ProdutoId, setProdutoId] = useState(props.match.params.ProdutoId);
    const [valor, setValor] = useState('');

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const editItemCompra = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.put(api + "/itemcompra/" + id + "/" + ProdutoId,
            { id, quantidade, ProdutoId, valor }, { headers })
            .then((response) => {
                setStatus({
                    type: 'success',
                    message: 'Atualização do ItemCompra feita com sucesso!'
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
        const getItemCompra = async () => {
            await axios(api + "/itemcompra/" + id + "/" + ProdutoId)
                .then((response) => {
                    setId(response.data.itemc.id);
                    setQuantidade(response.data.itemc.quantidade);
                    setProdutoId(response.data.itemc.ProdutoId);
                    setValor(response.data.itemc.valor);
                })
                .catch(() => {
                    console.log("Erro: Não foi possível conectar-se a API.")
                })
        }
        getItemCompra();
    }, [id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Editar Item Compra</h1>
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

                <Form className="p-2" onSubmit={editItemCompra}>
                    <FormGroup>
                        <Label>ID Compra</Label>
                        <Input type="number" name="id" placeholder="ID da Compra" defaultValue={id} disabled required />
                    </FormGroup>

                    <FormGroup>
                        <Label>ID Produto</Label>
                        <Input type="number" name="ProdutoId" placeholder="ID do Produto" defaultValue={ProdutoId} disabled required />
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
                            <Button type="submit" outline color="warning" size="sm" title="Salvar Atualização do Item Compra">Salvar</Button>
                        </div>
                    </div>
                </Form>
            </Container>
        </div>
    );
};