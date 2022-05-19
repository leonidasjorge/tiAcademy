import axios from "axios";
import { api } from "../../../config";
import { useState } from 'react';
import { Link } from "react-router-dom"
import { Button, Container, Form, FormGroup, Label, Input, Alert } from "reactstrap"

export const InserirCompra = (props) => {

    const [id] = useState(props.match.params.id);

    const [compra, setCompra] = useState({
        data: '',
        ClienteId: ''
    });

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const valorInput = e => setCompra({
        ...compra, [e.target.name]: e.target.value
    });

    const limparFormulario = () => setCompra({
        data: '',
        ClienteId: ''
    });

    const insCompra = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.post(api + "/inserir-compra", compra, { headers })
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
                        <h1>Cadastrar Compra</h1>
                    </div>

                    <div className="mt">
                        <Link to="/listar-clientes" className="btn btn-outline-primary btn-sm" title="Listar todos os Clientes ordenados pelo Nome">
                            Clientes
                        </Link>
                    </div>

                    <div className="mt pl">
                        <Link to={"/compras-cliente/" + id} className="btn btn-outline-primary btn-sm" title={"Todos as Compras do Cliente (" + id + ")"}>
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

                <Form className="p-2" onSubmit={insCompra}>
                    <FormGroup>
                        <Label>ID Cliente</Label>
                        <Input type="text" name="ClienteId" placeholder="ID do Cliente" value={compra.ClienteId} onChange={valorInput} required />
                    </FormGroup>

                    <FormGroup>
                        <Label>Data da Compra</Label>
                        <Input type="date" name="data" placeholder="Data da Compra" value={compra.data} onChange={valorInput} required />
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