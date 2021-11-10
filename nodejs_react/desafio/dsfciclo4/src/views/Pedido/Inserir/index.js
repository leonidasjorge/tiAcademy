import axios from "axios";
import { api } from "../../../config";
import { useState } from 'react';
import { Link } from "react-router-dom"
import { Button, Container, Form, FormGroup, Label, Input, Alert } from "reactstrap"

export const InserirPedido = (props) => {

    const [id] = useState(props.match.params.id);

    const [pedido, setPedido] = useState({
        dataPedido: '',
        ClienteId: ''
    });

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const valorInput = e => setPedido({
        ...pedido, [e.target.name]: e.target.value
    });

    const limparFormulario = () => setPedido({
        dataPedido: '',
        ClienteId: ''
    });

    const insPedido = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.post(api + "/inserir-pedido", pedido, { headers })
            .then((response) => {
                setStatus({
                    type: 'success',
                    message: response.data.message
                });
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: "Erro: Sem conexão com a API."
                });
            });
    };

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto">
                        <h1>Cadastrar Pedido</h1>
                    </div>

                    <div className="mt">
                        <Link to="/listar-clientes" className="btn btn-outline-primary btn-sm" title="Listar todos os Clientes ordenados pelo Nome">
                            Clientes
                        </Link>
                    </div>
                    
                    <div className="mt pl">
                        <Link to={"/pedidos-cliente/" + id} className="btn btn-outline-primary btn-sm" title={"Todos os Pedidos do Cliente (" + id + ")"}>
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

                <Form className="p-2" onSubmit={insPedido}>
                    <FormGroup>
                        <Label>ID Cliente</Label>
                        <Input type="text" name="ClienteId" placeholder="ID do Cliente" value={pedido.ClienteId} onChange={valorInput} required />
                    </FormGroup>

                    <FormGroup>
                        <Label>Data do Pedido</Label>
                        <Input type="date" name="dataPedido" placeholder="Data do Pedido" value={pedido.dataPedido} onChange={valorInput} required />
                    </FormGroup>

                    <div className="d-flex">
                        <div className="p-2">
                            <Button type="submit" outline color="success" size="sm">Cadastrar</Button>
                        </div>

                        <div className="p-2">
                            <Button type="reset" outline color="secondary" size="sm" onClick={limparFormulario}>Limpar</Button>
                        </div>
                    </div>
                </Form>
            </Container>
        </div>
    )
}