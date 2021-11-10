import axios from "axios";
import { useState } from "react/cjs/react.development";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const InserirCliente = () => {

    const [cliente, setCliente] = useState({
        nome: '',
        nascimento: ''
    });

    const valorInput = e => setCliente({ ...cliente, [e.target.name]: e.target.value });

    const cadCliente = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.post(api + "/inserircliente", cliente, { headers })
            .then((response) => {
                console.log(response.data.message);
            })
            .catch(() => {
                console.log("Erro: sem conexão com a API.");
            });
    };

    return (
        <div>
            <Container>
                <div>
                    <h1>Cadastrar Cliente</h1>
                </div>

                <Form className="p-2" onSubmit={cadCliente}>
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome" placeholder="Nome do Cliente" onChange={valorInput} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Data de Nascimento</Label>
                        <Input type="text" name="nascimento" placeholder="Data de Nascimento" onChange={valorInput} />
                    </FormGroup>

                    <div className="d-flex">
                        <div className="p-2">
                            <Button type="submit" outline color="success">Cadastrar</Button>
                        </div>

                        <div className="p-2">
                            <Button type="reset" outline color="success">Limpar</Button>
                        </div>
                    </div>
                </Form>
            </Container>
        </div>
    );
};