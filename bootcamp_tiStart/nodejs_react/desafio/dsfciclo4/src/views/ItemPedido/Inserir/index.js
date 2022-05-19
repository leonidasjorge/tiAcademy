import axios from "axios";
import { api } from "../../../config";
import { useState } from 'react';
import { Link } from "react-router-dom"
import { Button, Container, Form, FormGroup, Label, Input, Alert} from "reactstrap"

export const InserirItemPedido = (props) => {

    const [id] = useState(props.match.params.id);

    const [itempedido, setItempedido] = useState({
        PedidoId: '',
        quantidade: '',
        ServicoId: '',
        valor: ''
    });

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const valorInput = e => setItempedido({
        ...itempedido, [e.target.name]: e.target.value
    });

    const limparFormulario = () => setItempedido({
        PedidoId: '',
        quantidade: '',
        ServicoId: '',
        valor: ''
    });

    const insItemPedido = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.post(api + "/inserir-itempedido", itempedido, { headers })
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
                        <h1>Cadastrar Item Pedido</h1>
                    </div>

                    <div className="mt">
                        <Link to="/listar-clientes" className="btn btn-outline-primary btn-sm" title="Listar todos os Clientes ordenados pelo Nome">
                            Clientes
                        </Link>
                    </div>

                    <div className="mt pl">
                        <Link to={"/listar-itenspedido/" + id} className="btn btn-outline-primary btn-sm" title="Itens deste Pedido">
                            Itens
                        </Link>
                    </div>

                    <div className="mt pl">
                        <Link to="/listar-servicos" className="btn btn-outline-primary btn-sm" title="Listar todos os Serviços ordenados pelo Nome">
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

                <Form className="p-2" onSubmit={insItemPedido}>
                    <FormGroup>
                        <Label>Pedido ID</Label>
                        <Input type="text" name="PedidoId" placeholder="ID do Pedido" value={itempedido.PedidoId} onChange={valorInput} required />
                    </FormGroup>

                    <FormGroup>
                        <Label>Serviço ID</Label>
                        <Input type="text" name="ServicoId" placeholder="ID do Serviço" value={itempedido.ServicoId} onChange={valorInput} />
                    </FormGroup>

                    <FormGroup>
                        <Label>Quantidade</Label>
                        <Input type="text" name="quantidade" placeholder="Quantidade" value={itempedido.quantidade} onChange={valorInput} />
                    </FormGroup>

                    <FormGroup>
                        <Label>Valor</Label>
                        <Input type="text" name="valor" placeholder="Valor" value={itempedido.valor} onChange={valorInput} />
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