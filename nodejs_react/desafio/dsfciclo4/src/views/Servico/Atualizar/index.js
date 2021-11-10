import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const EditarServico = (props) => {

    const [id, setId] = useState(props.match.params.id);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const editServico = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.put(api + "/servico/" + id,
            { id, nome, descricao }, { headers })
            .then((response) => {
                setStatus({
                    type: 'success',
                    message: 'Atualização do Serviço feita com sucesso!'
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
        const getServico = async () => {
            await axios(api + "/servico/" + id)
                .then((response) => {
                    setId(response.data.serv.id);
                    setNome(response.data.serv.nome);
                    setDescricao(response.data.serv.descricao);
                })
                .catch(() => {
                    console.log("Erro: Não foi possível conectar-se a API.")
                })
        }
        getServico();
    }, [id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Editar Servico</h1>
                    </div>
                    <div className="mt">
                        <Link to="/listar-servicos" className="m-auto btn btn-outline-primary btn-sm">
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

                <Form className="p-2" onSubmit={editServico}>
                    <FormGroup>
                        <Label>ID Servico</Label>
                        <Input type="number" name="ServicoId" placeholder="ID do Servico" defaultValue={id} disabled required />
                    </FormGroup>

                    <FormGroup>
                        <Label>Nome</Label>
                        <Input type="text" name="nome" placeholder="Nome do Serviço" value={nome} onChange={e => setNome(e.target.value)} required />
                    </FormGroup>

                    <FormGroup>
                        <Label>Descrição</Label>
                        <Input type="text" name="descricao" placeholder="Descrição do Serviço" value={descricao} onChange={e => setDescricao(e.target.value)} required />
                    </FormGroup>

                    <div className="d-flex">
                        <div className="p-2">
                            <Button type="submit" outline color="warning" size="sm" title="Salvar Atualização do Serviço">Salvar</Button>
                        </div>
                    </div>
                </Form>
            </Container>
        </div>
    );
};