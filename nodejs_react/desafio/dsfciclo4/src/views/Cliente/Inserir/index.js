import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";
import { } from "../../../App.css";

export const InserirCliente = () => {

    const [cliente, setCliente] = useState({
        nome: '',
        endereco: '',
        cidade: '',
        uf: '',
        nascimento: '',
        clienteDesde: ''
    });

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const valorInput = e => setCliente({
        ...cliente, [e.target.name]: e.target.value
    });

    const insCliente = async e => {
        e.preventDefault();
        //console.log(cliente);

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.post(api + "/inserir-cliente", cliente, { headers })
            .then((response) => {
                // console.log(response.data.message);

                if (response.data.error) {
                    setStatus({
                        type: 'error',
                        message: response.data.message
                    });
                } else {
                    setStatus({
                        type: 'success',
                        message: response.data.message
                    });
                };
            })
            .catch(() => {
                console.log("Erro: sem conexão com a API.");
            });
    };

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto">
                        <h1>Cadastrar Cliente</h1>
                    </div>

                    <div className="mt">
                        <Link to="/listar-clientes" className="btn btn-outline-primary btn-sm" title="Listar todos os Clientes ordenados pelo Nome">
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

                <Form className="p-2" onSubmit={insCliente}>
                    <FormGroup>
                        <Label>Nome</Label>
                        <Input type="text" name="nome" placeholder="Nome do Cliente" onChange={valorInput} required />
                    </FormGroup>

                    <FormGroup>
                        <Label>Endereço</Label>
                        <Input type="text" name="endereco" placeholder="Endereço do Cliente" onChange={valorInput} required />
                    </FormGroup>

                    <FormGroup>
                        <Label>Cidade</Label>
                        <Input type="text" name="cidade" placeholder="Cidade do Cliente" onChange={valorInput} required />
                    </FormGroup>

                    <FormGroup>
                        <Label>Estado</Label>
                        <Input type="text" name="uf" placeholder="Estado da Cidade" onChange={valorInput} required />
                    </FormGroup>

                    <FormGroup>
                        <Label>Data de Nascimento</Label>
                        <Input type="date" name="nascimento" placeholder="Data de Nascimento" onChange={valorInput} required />
                    </FormGroup>

                    <FormGroup>
                        <Label>Cliente Desde</Label>
                        <Input type="date" name="clienteDesde" placeholder="Cliente Desde" onChange={valorInput} required />
                    </FormGroup>

                    <div className="d-flex">
                        <div className="p-2">
                            <Button type="submit" outline color="success" size="sm" title="Cadastrar Cliente">Cadastrar</Button>
                        </div>

                        <div className="p-2">
                            <Button type="reset" outline color="secondary" size="sm" title="Limpar Formulário">Limpar</Button>
                        </div>
                    </div>
                </Form>
            </Container>
        </div>
    );
};