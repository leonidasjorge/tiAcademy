import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const InserirServico = () => {

    const [servico, setServico] = useState({
        nome: '',
        descricao: ''
    });

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const valorInput = e => setServico({
        ...servico, [e.target.name]: e.target.value
    });

    const insServico = async e => {
        e.preventDefault();
        //console.log(servico);

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.post(api + "/inserir-servico", servico, { headers })
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
                console.log("Erro: sem conexão com a API.")
            })
    };

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto">
                        <h1>Cadastrar Serviço</h1>
                    </div>

                    <div className="mt">
                        <Link to="/listar-servicos" className="btn btn-outline-success btn-sm">
                            Serviços
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

                <Form className="p-2" onSubmit={insServico}>
                    <FormGroup>
                        <Label>Nome</Label>
                        <Input type="text" name="nome" placeholder="Nome do Serviço" onChange={valorInput} required />
                    </FormGroup>
                    <FormGroup>
                        <Label>Descrição</Label>
                        <Input type="text" name="descricao" placeholder="Descrição do Serviço" onChange={valorInput} required />
                    </FormGroup>

                    <div className="d-flex">
                        <div className="p-2">
                            <Button type="submit" outline color="primary" size="sm">Cadastrar</Button>
                        </div>
                        
                        <div className="p-2">
                            <Button type="reset" outline color="secondary" size="sm">Limpar</Button>
                        </div>
                    </div>
                </Form>
            </Container>
        </div>
    );
};