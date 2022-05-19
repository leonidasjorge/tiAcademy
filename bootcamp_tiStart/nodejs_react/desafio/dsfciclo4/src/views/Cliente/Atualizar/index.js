import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const EditarCliente = (props) => {

    const [id, setId] = useState(props.match.params.id);
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [clienteDesde, setClienteDesde] = useState('');

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const editCliente = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.put(api + "/cliente/" + id,
            { id, nome, endereco, cidade, uf, nascimento, clienteDesde }, { headers })
            .then((response) => {
                setStatus({
                    type: 'success',
                    message: 'Atualização do Cliente feita com sucesso!'
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
        const getCliente = async () => {
            await axios(api + "/cliente/" + id)
                .then((response) => {
                    setId(response.data.cli.id);
                    setNome(response.data.cli.nome);
                    setEndereco(response.data.cli.endereco);
                    setCidade(response.data.cli.cidade);
                    setUf(response.data.cli.uf);
                    setNascimento(response.data.cli.nascimento);
                    setClienteDesde(response.data.cli.clienteDesde);
                })
                .catch(() => {
                    console.log("Erro: Não foi possível conectar-se a API.")
                })
        }
        getCliente();
    }, [id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Editar Cliente</h1>
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

                <Form className="p-2" onSubmit={editCliente}>
                    <FormGroup>
                        <Label>ID Cliente</Label>
                        <Input type="number" name="ClienteId" placeholder="ID do Cliente" defaultValue={id} disabled required />
                    </FormGroup>

                    <FormGroup>
                        <Label>Nome</Label>
                        <Input type="text" name="nome" placeholder="Nome do Cliente" value={nome} onChange={e => setNome(e.target.value)} required />
                    </FormGroup>

                    <FormGroup>
                        <Label>Endereço</Label>
                        <Input type="text" name="endereco" placeholder="Endereço do Cliente" value={endereco} onChange={e => setEndereco(e.target.value)} required />
                    </FormGroup>

                    <FormGroup>
                        <Label>Cidade</Label>
                        <Input type="text" name="cidade" placeholder="Cidade do Cliente" value={cidade} onChange={e => setCidade(e.target.value)} required />
                    </FormGroup>

                    <FormGroup>
                        <Label>UF (Estado)</Label>
                        <Input type="text" name="estado" placeholder="Estado da Cidade" value={uf} onChange={e => setUf(e.target.value)} required />
                    </FormGroup>

                    <FormGroup>
                        <Label>Data de Nascimento</Label>
                        <Input type="date" name="nascimento" placeholder="Data de Nascimento" value={nascimento} onChange={e => setNascimento(e.target.value)} required />
                    </FormGroup>

                    <FormGroup>
                        <Label>Cliente Desde</Label>
                        <Input type="date" name="clienteDesde" placeholder="Cliente Desde" value={clienteDesde} onChange={e => setClienteDesde(e.target.value)} required />
                    </FormGroup>

                    <div className="d-flex">
                        <div className="p-2">
                            <Button type="submit" outline color="warning" size="sm" title="Salvar Atualização do Cliente">Salvar</Button>
                        </div>
                    </div>
                </Form>
            </Container>
        </div>
    );
};